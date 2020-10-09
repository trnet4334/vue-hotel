<template>
  <li>
    <div class="flex--row activity-item">
      <div class="flex--column date">
        <div class="flex--row date-items">
          <div class="flex--row date-item-1">
            <span class="date-1">{{ dateStart.date }}</span>
            <div class="flex--column">
              <span class="date-2">{{ months[dateStart.months] }}</span>
              <span class="date-3">{{ dateStart.years }}</span>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
            <path d="M23.854,11.647l-9.5-9.5c-1.022-1.022-2.685-1.022-3.707,0c-1.022,1.022-1.022,2.685,0,3.707L14.293,9.5H2.5C1.122,9.5,0,10.622,0,12s1.122,2.5,2.5,2.5h11.793l-3.646,3.646c-1.022,1.022-1.022,2.685,0,3.707c0.511,0.511,1.182,0.767,1.854,0.767s1.342-0.255,1.854-0.767l9.5-9.5C24.049,12.158,24.049,11.842,23.854,11.647z"/>
          </svg>
          <div class="flex--row date-item-2">
            <span class="date-1">{{ dateEnd.date }}</span>
            <div class="flex--column">
              <span class="date-2">{{ months[dateEnd.months] }}</span>
              <span class="date-3">{{ dateEnd.years }}</span>
            </div>
          </div>
          <el-divider direction="vertical" class="divider-ver"/>
          <el-divider class="divider-hor"/>
        </div>
      </div>
      <div class="flex--row detail">
        <div class="type flex--column">
          <span>{{ bookingItem.type }}</span>
          <ul v-if="bookingItem.type === 'Stay'">
            <li v-for="(item, index) in rooms" :key="keyNum + index">Room {{ index + 1 }}: {{ item.roomSelect.roomType }}</li>
          </ul>
        </div>
        <div class="status">
          <span>{{ checkStatus }}</span>
        </div>
        <div class="flex--column option">
          <div class="flex--row option-item">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 24 24" xml:space="preserve">
              <path d="M19,8.5C19,8.776,19.224,9,19.5,9h4C23.776,9,24,8.776,24,8.5V4.542c0-0.276-0.224-0.5-0.5-0.5S23,4.265,23,4.542v2.952C20.336,2.59,16.549,0,12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12c0-0.276-0.224-0.5-0.5-0.5S23,11.724,23,12c0,6.065-4.935,11-11,11S1,18.065,1,12S5.935,1,12,1c5.166,0,8.33,3.658,10.141,7H19.5C19.224,8,19,8.224,19,8.5z"/>
            </svg>
            <span @click="submitBookingRequest">BOOK AGAIN</span>
          </div>
          <div class="flex--row option-item" v-if="bookingItem.status === 'Upcoming'">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 24 24" xml:space="preserve">
              <path d="M11.5,0C5.159,0,0,5.159,0,11.5S5.159,23,11.5,23S23,17.841,23,11.5S17.841,0,11.5,0z M17.5,12h-12C5.224,12,5,11.776,5,11.5S5.224,11,5.5,11h12c0.276,0,0.5,0.224,0.5,0.5S17.776,12,17.5,12z"/>
            </svg>
            <span @click="submitCancelRequest">CANCEL BOOKING</span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
// import router from '@/router'
import dayjs from 'dayjs'
import shortid from 'shortid'
const toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)
export default {
  name: 'ActivityItem',
  props: {
    bookingItem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isRequestSubmitted: false,
      rooms: this.bookingItem.roomSelections,
      dateStart: this.checkBookingDateStart(this.bookingItem),
      dateEnd: this.checkBookingDateEnd(this.bookingItem),
      keyNum: shortid.generate(),
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    }
  },
  computed: {
    checkStatus () {
      const today = dayjs()
      if (this.isRequestSubmitted) {
        return 'Pending'
      } else if (this.bookingItem.status === 'Upcoming' && this.bookingItem.type === 'Stay') {
        return today.diff(this.bookingItem.roomSelections[0].date.start, 'day') > 0 ? 'Completed' : 'Upcoming'
      } else if (this.bookingItem.status === 'Upcoming' && this.bookingItem.type === 'Event/Meeting Inquiry') {
        return today.diff(this.bookingItem.scheduledDates.start, 'day') > 0 ? 'Completed' : 'Upcoming'
      } else if (this.bookingItem.status === 'Upcoming' && this.bookingItem.type === 'Wedding Inquiry') {
        return today.diff(this.bookingItem.weddingDate, 'day') > 0 ? 'Completed' : 'Upcoming'
      } else {
        return this.bookingItem.status
      }
    }
  },
  methods: {
    submitCancelRequest () {
      this.$confirm('Are you sure you want to cancel your reservation? Select YES to confirm selection removal.',
        {
          confirmButtonText: 'YES',
          cancelButtonText: 'CANCEL',
          center: true,
          type: 'warning'
        }).then(() => {
        this.$store.dispatch('cancelBooking', {
          id: this.bookingItem.id,
          type: this.bookingItem.type
        })
        setTimeout(() => {
          this.$message({
            type: 'success',
            message: 'Successfully submitted your request'
          })
        }, 3000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Remove cancellation request'
        })
      })
      this.isRequestSubmitted = true
    },
    async submitBookingRequest () {
      if (this.bookingItem.type === 'Stay') {
        const createTime = dayjs().toISOString()
        const id = shortid.generate()
        const selection = {
          date: {
            start: new Date(new Date().setDate(new Date().getDate() + 2)),
            end: new Date(new Date().setDate(new Date().getDate() + 2))
          },
          guests: {
            numOfAdultGuests: this.bookingItem.roomSelections[0].guests.numOfAdultGuests,
            numOfChildrenGuest: this.bookingItem.roomSelections[0].guests.numOfChildrenGuest
          },
          time: createTime
        }
        await this.$store.dispatch('generateId', id)
        await this.$store.dispatch('searchRoomType', selection)
        await setTimeout(() => {
          this.$router.push({
            name: 'Reservation',
            params: { tempId: id },
            query: {
              createdTime: dayjs(createTime).format('YYYY-MM-DD'),
              currentStep: 's1'
            }
          })
        }, 1500)
        await this.$store.dispatch('submitBookingRequest')
      } else if (this.bookingItem.type === 'Event/Meeting Inquiry') {
        await setTimeout(() => {
          this.$router.push('/events/inquiry')
        }, 1500)
        await this.$store.dispatch('submitBookingRequest')
      } else if (this.bookingItem.type === 'Wedding Inquiry') {
        await setTimeout(() => {
          this.$router.push('/wedding/inquiry')
        }, 1500)
        await this.$store.dispatch('submitBookingRequest')
      }
    },
    convertDateType (datetime) {
      return dayjs(new Date(datetime).toUTCString()).toObject()
    },
    checkBookingDateStart (item) {
      if (item.type === 'Stay') {
        return this.convertDateType(this.bookingItem.roomSelections[0].date.start)
      } else if (item.type === 'Wedding Inquiry') {
        return this.convertDateType(this.bookingItem.weddingDate)
      } else if (item.type === 'Event/Meeting Inquiry') {
        return this.convertDateType(this.bookingItem.scheduledDates.start)
      }
    },
    checkBookingDateEnd (item) {
      if (item.type === 'Stay') {
        return this.convertDateType(this.bookingItem.roomSelections[0].date.end)
      } else if (item.type === 'Wedding Inquiry') {
        return this.convertDateType(this.bookingItem.weddingDate)
      } else if (item.type === 'Event/Meeting Inquiry') {
        return this.convertDateType(this.bookingItem.scheduledDates.end)
      }
    }
  }
}
</script>
<style src="./ActivityItem.scss" lang="scss" scoped/>
