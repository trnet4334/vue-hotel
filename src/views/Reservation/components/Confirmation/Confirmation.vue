<template>
  <form class="confirmation" @submit.prevent="submitOrder">
    <div class="confirmation__container">
      <div class="content--info">
        <h4 class="content__title">Reservation Details</h4>
        <el-divider/>
        <confirmation-card
          :info="reservationInfo"
          :key="componentKey"
        />
      </div>
      <div class="content--policies flex--column">
        <h4 class="content__title">Policies</h4>
        <el-divider/>
        <div class="flex--row">
          <div class="flex--column col">
            <span>Check-in</span>
            <p class="content__description">After 2 PM</p>
          </div>
          <div class="flex--column col">
            <span>Check-out</span>
            <p class="content__description">Before 11 AM</p>
          </div>
        </div>
        <div class="flex--column row">
          <div class="flex--column">
            <span>Guarantee Policy</span>
            <p class="content__description">One night room/tax deposit required at time of booking.</p>
          </div>
          <div class="flex--column row">
            <span>Cancellation Policy</span>
            <p class="content__description">Please contact us to cancel your reservation <u>at least 72-hour</u>
              prior to arrival date to avoid a cancellation fee of one night room and tax charge.</p>
          </div>
        </div>
      </div>
      <div class="content--consent flex--column">
        <h4 class="content__title">Acknowledgement</h4>
        <el-divider/>
        <label for="subscription" class="input__checkbox">
          <input type="checkbox" id="subscription">
            Please email me promotions and latest news.
        </label>
        <label for="consent" class="input__checkbox">
          <input type="checkbox" id="consent" @click="checked = !checked">
            By checking the box, you agree to our Privacy Policy and T&C for use of this website, along with
          the charges accompanied with the rate you have selected. Please read our Privacy Policy for information
          on our data collection and usage practices.
          <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer" class="link">View Privacy Policy</router-link>
        </label>
      </div>
    </div>
    <div>
      <button type="submit" :disabled="!checked" class="btn-solid-md">COMPLETE BOOKING</button>
    </div>
  </form>
</template>
<script>
import ConfirmationCard from '@/components/checkout/ConfirmationCard/ConfirmationCard'
import { mapState } from 'vuex'
export default {
  name: 'Confirmation',
  data () {
    return {
      checked: false
    }
  },
  components: {
    ConfirmationCard
  },
  computed: {
    ...mapState({
      reservationInfo: state => state.reservation.reservationDetails.customerInfo,
      componentKey: state => state.reservation.currentStep
    })
  },
  methods: {
    async submitOrder () {
      await this.$store.dispatch('submitReservation')
    }
  }
}
</script>
<style src="./Confirmation.scss" lang="scss" scoped/>
