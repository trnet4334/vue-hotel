<template>
  <div class="card flex--column">
    <div class="card__carousel">
      <vue-flux
        :options="options"
        :images="images"
        :transitions="transitions"
      >
        <template v-slot:preloader>
          <flux-preloader />
        </template>
        <template v-slot:controls>
          <flux-controls />
        </template>
      </vue-flux>
    </div>
    <div class="card__body flex--column flex--center">
      <div class="card__body--content page-content--body">
        <h4>{{room.name}}</h4>
        <br>
        <p>{{room.description}}</p>
      </div>
      <br>
      <div class="card__body--link">
        <router-link :to="{ name: `${room.routeName}` }">
          ROOM DETAILS
        </router-link>
        <a @click="dialogVisible = true">
          RESERVE NOW
        </a>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      center
    >
      <div class="flex--column dialog-content block-1">
        <div>
          <h2>Reservation</h2>
          <p>We look forward to welcoming you.</p>
        </div>
        <el-divider/>
        <div class="info">
          <h4>A Resort & Spa</h4>
          <p>135 Bear Wallow Ln, Sedona, AZ 86336</p>
          <ul>
            <li><b>Direct:</b> <span>480-000-0101</span></li>
            <li><b>Reservations:</b> <span>480-000-0001</span></li>
          </ul>
        </div>
      </div>
      <div class="flex--column dialog-content block-2">
        <div class="flex--column">
          <label>Dates</label>
          <v-date-picker
            mode="range"
            is-required
            class="flex--row"
            :input-props="{
              class: 'date-picker-input',
              readonly: true
            }"
            v-model="date"
            :disabled-dates="[
              {
                start: new Date(new Date().setFullYear(new Date().getFullYear() - 1000)),
                end: new Date( new Date().setDate( new Date().getDate() + 1 ))
              },
              {
                start: new Date( new Date().setMonth(new Date().getMonth() + 6)),
                end: new Date(new Date().setFullYear(new Date().getFullYear() + 1000))
              }
            ]"
          />
        </div>
        <div class="flex--column">
          <label>Guests</label>
          <div>
            <div class="flex--row guest-content">
              <span>Adults: </span>
              <el-input-number size="medium" :min="1" :max="8" v-model="guests.numOfAdultGuests"/>
            </div>
            <div class="flex--row guest-content">
              <span>Children: </span>
              <el-input-number size="medium" :min="0" :max="6" v-model="guests.numOfChildrenGuest"/>
            </div>
          </div>
        </div>
        <button @click="setSearchChoice">Reserve</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  VueFlux,
  FluxControls,
  FluxPreloader
} from 'vue-flux'
import dayjs from 'dayjs'
import shortid from 'shortid'
export default {
  props: ['room'],
  components: {
    VueFlux,
    FluxControls,
    FluxPreloader
  },
  data () {
    return {
      dialogVisible: false,
      date: {
        start: '',
        end: ''
      },
      guests: {
        numOfAdultGuests: 1,
        numOfChildrenGuest: 0
      },
      options: {
        allowFullscreen: false,
        allowToSkipTransition: true,
        autohideTime: 2500,
        autoplay: false,
        bindKeys: false,
        delay: 3000,
        enableGestures: false,
        infinite: true,
        lazyLoad: true,
        lazyLoadAfter: 3
      },
      images: [
        require(`@/assets/images/room/room-card/${this.room.galleryUrl[0]}.jpg`),
        require(`@/assets/images/room/room-card/${this.room.galleryUrl[1]}.jpg`),
        require(`@/assets/images/room/room-card/${this.room.galleryUrl[2]}.jpg`),
        require(`@/assets/images/room/room-card/${this.room.galleryUrl[3]}.jpg`)
      ],
      transitions: [
        'blinds3d',
        'blocks2',
        'book',
        'cube',
        'round2',
        'swipe',
        'warp',
        'wave'
      ]
    }
  },
  methods: {
    // Submit search request for making reservation through dialog box
    async setSearchChoice () {
      const createTime = dayjs().toISOString()
      if (dayjs(this.date.start).diff(dayjs(this.date.end)) === 0 ||
        this.date.start === null ||
        this.date.end === null) {
        alert('Please select a different date.')
      } else {
        const id = shortid.generate()
        const selection = {
          date: this.date,
          guests: this.guests,
          time: createTime
        }
        await this.$store.dispatch('generateId', id)
        await this.$store.dispatch('searchRoomType', selection)
        await this.$router.push({
          name: 'Reservation',
          params: { tempId: id },
          query: {
            createdTime: dayjs(createTime).format('YYYY-MM-DD'),
            currentStep: 's1'
          }
        })
      }
    }
  }
}
</script>
<style src="./RoomCard.scss" lang="scss" scoped/>
