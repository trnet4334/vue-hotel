<template>
  <div>
    <div class="room__content" :class="onSelectClass" v-show="info.roomSelect.packageName !== ''">
      <div class="flex--column">
        <div class="flex--row room__content--row">
          <span><u><i>{{ info.roomSelect.roomType }}</i></u></span>
          <p></p>
        </div>
        <div class="flex--row room__content--row">
          <h5>{{ startDate }} - {{ endDate }}</h5>
          <p></p>
        </div>
        <div class="flex--row room__content--row">
          <h5><i>{{ info.totalNight }} night(s)</i></h5>
          <p></p>
        </div>
        <div class="flex--row room__content--row">
          <h5>{{ info.guests.numOfAdultGuests }} Adults, {{ info.guests.numOfChildrenGuest }} Children</h5>
          <p></p>
        </div>
        <ul class="list-items">
          <li class="flex--row list-item">
            <span>{{ info.roomSelect.packageName }}</span>
            <p>${{ info.roomSelect.rate }}</p>
          </li>
          <li class="flex--row list-item">
            <span>Add-Ons</span>
            <p>${{ calculateAddOnPrice }}</p>
          </li>
        </ul>
      </div>
      <div class="flex--row room__content--row">
        <span>Taxes and Fees</span>
        <p>${{ calculateTax }}</p>
      </div>
      <div class="flex--row room__content--action">
        <span @click="editRoom">Edit</span> |
        <span @click="removeRoom">Remove</span>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'
export default {
  props: {
    reservationInfo: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState({
      tempId: state => state.reservation.tempId,
      time: state => state.reservation.reservationDetails.createTime,
      onSelectIdx: state => state.reservation.currentSelectedRoomIdx
    }),
    calculateTax () {
      return Math.round((this.info.roomSelect.rate + this.calculateAddOnPrice) * 0.08 * 100) / 100
    },
    calculateAddOnPrice () {
      return this.info.addOns.reduce((acc, item) => {
        return acc + item.addOnPrice
      }, 0)
    },
    info () {
      return this.reservationInfo
    },
    startDate () {
      return dayjs(this.info.date.start).format('ddd MM/DD/YYYY')
    },
    endDate () {
      return dayjs(this.info.date.end).format('ddd MM/DD/YYYY')
    },
    onSelectClass () {
      return this.id === this.onSelectIdx ? 'selected-class' : null
    }
  },
  methods: {
    removeRoom () {
      this.$confirm('Are you sure you want to delete this selection? Select YES to confirm selection removal.',
        'Confirmation',
        {
          confirmButtonText: 'YES',
          cancelButtonText: 'CANCEL',
          type: 'warning'
        }).then(() => {
        this.$store.dispatch('removeRoomFromSelection', this.info.createTime)
        this.$store.dispatch('calculateTotalAmount')
        this.$message({
          type: 'success',
          message: 'Remove completed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Remove canceled'
        })
      })
    },
    editRoom () {
      this.$store.dispatch('editRoomFromSelection', this.info.createTime)
      this.$router.push({
        name: 'Reservation',
        params: { tempId: this.tempId },
        query: {
          createdTime: dayjs(this.time).format('YYYY-MM-DD'),
          currentStep: 's1',
          prevStep: 's3'
        }
      })
    }
  }
}
</script>
<style src="./SidebarRoom.scss" lang="scss" scoped/>
