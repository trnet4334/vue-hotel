<template>
  <div>
    <div>
      <div class="flex--column">
        <div class="flex--row side__content--row">
          <span><u><i>{{ info.roomSelect.roomType }}</i></u></span>
          <p></p>
        </div>
        <div class="flex--row side__content--row">
          <h5>{{ startDate }} - {{ endDate }}</h5>
          <p></p>
        </div>
        <div class="flex--row side__content--row">
          <h5><i>{{ info.totalNight }} night(s)</i></h5>
          <p></p>
        </div>
        <div class="flex--row side__content--row">
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
      <div class="flex--row side__content--row">
        <span>Taxes and Fees</span>
        <p>${{ calculateTax }}</p>
      </div>
      <div class="flex--row side__content--action">
        <span @click="editRoom">Edit</span> |
        <span @click="removeRoom">Remove</span>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'

export default {
  props: {
    reservationInfo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
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
    }
  },
  methods: {
    removeRoom () {
      this.$store.dispatch('removeRoomFromSelection', this.info.createTime)
      this.$store.dispatch('calculateTotalAmount')
    },
    editRoom () {
      this.$store.dispatch('editRoomFromSelection', this.info.createTime)
      this.$router.push('/reservation/s1')
    }
  }
}
</script>
<style src="./SidebarRoom.scss" lang="scss" scoped/>
