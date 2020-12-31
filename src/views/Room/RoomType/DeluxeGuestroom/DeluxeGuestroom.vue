<template>
  <div>
    <navbar/>
    <section class="room-details">
      <div class="room-details__container">
        <div class="room-details__body--first flex--row">
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl"/>
          </div>
          <div class="room-details__content--first">
            <h4 class="content__title">{{deluxeGuestroom.name}}</h4>
            <h1 class="page__title">{{deluxeGuestroom.title}}</h1>
            <p class="content__description">{{deluxeGuestroom.description}}</p>
            <br>
            <p class="content__description">{{deluxeGuestroom.description2}}</p>
            <button @click="dialogVisible = true" class="btn-outline-md">
              RESERVE NOW
            </button>
          </div>
        </div>
        <div class="room-details__body--second">
          <div class="room-details__content--second">
            <ul>
              <li v-for="item in deluxeGuestroom.amenities" :key="item.index">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="room-details__body--third">
          <div class="room-details__content--third">
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
        </div>
        <div class="room-details__body--fourth">
          <div class="room-details__content--fourth flex--column">
            <h2 class="page__subtitle">More rooms</h2>
            <div class="room__cards flex--row">
              <div class="room__card" v-for="room in rooms" :key="room.id">
                <room-card :room="room"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <el-dialog
      :visible.sync="dialogVisible"
      custom-class="dialog-class"
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
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
import RoomCard from '@/components/productCard/roomCard/RoomCard'
import rooms from '@/assets/data/rooms'
import roomType from '@/assets/data/checkout/roomType'
import ImageBox from '@/components/imageBox/ImageBox'
import {
  VueFlux,
  FluxControls,
  FluxPreloader
} from 'vue-flux'
import dayjs from 'dayjs'
import shortid from 'shortid'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    RoomCard,
    ImageBox,
    VueFlux,
    FluxControls,
    FluxPreloader
  },
  data () {
    return {
      dialogVisible: false,
      imageUrl: ['room/deluxe-guestroom-img.jpg', 'Deluxe Guestroom'],
      date: {
        start: '',
        end: ''
      },
      guests: {
        numOfAdultGuests: 1,
        numOfChildrenGuest: 0
      },
      rooms: rooms.slice(2),
      deluxeGuestroom: roomType[1],
      options: {
        allowFullscreen: false,
        allowToSkipTransition: true,
        autohideTime: 2500,
        autoplay: true,
        bindKeys: false,
        delay: 3000,
        enableGestures: false,
        infinite: true,
        lazyLoad: true,
        lazyLoadAfter: 3
      },
      images: [
        require('@/assets/images/room/room-card/room-carousel-2.jpg'),
        require('@/assets/images/room/room-card/room-carousel-4.jpg'),
        require('@/assets/images/room/room-card/room-carousel-1.jpg'),
        require('@/assets/images/room/room-card/room-carousel-3.jpg')
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
<style src="../RoomType.scss" lang="scss" scoped/>
