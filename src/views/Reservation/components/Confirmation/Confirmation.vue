<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
  >
    <form
      class="confirmation"
      @submit.prevent="handleSubmit(submitOrder)"
    >
      <div class="confirmation__container">
        <div class="content--info page-content--header">
          <h4>Reservation Details</h4>
          <el-divider/>
          <confirmation-card
            :info="reservationInfo"
            :key="componentKey"
          />
        </div>
        <div class="content--policies flex--column page-content--header">
          <h4>Policies</h4>
          <el-divider/>
          <div class="flex--row">
            <div class="flex--column col">
              <span>Check-in</span>
              <p>After 2 PM</p>
            </div>
            <div class="flex--column col">
              <span>Check-out</span>
              <p>Before 11 AM</p>
            </div>
          </div>
          <div class="flex--column row">
            <div class="flex--column page-content--body">
              <p style="font-weight: 600;">Guarantee Policy</p>
              <p>One night room/tax deposit required at time of booking.</p>
            </div>
            <div class="flex--column row page-content--body">
              <p style="font-weight: 600;">Cancellation Policy</p>
              <p>Please contact us to cancel your reservation <u>at least 72-hour</u>
                prior to arrival date to avoid a cancellation fee of one night room and tax charge.</p>
            </div>
          </div>
        </div>
        <div class="content--consent flex--column page-content--header">
          <h4>Acknowledgement</h4>
          <el-divider/>
          <ValidationProvider style="width: 100%;">
            <label for="subscription" class="flex--row">
              <input type="checkbox" id="subscription">
              <span>
                Please email me promotions and latest news.
              </span>
            </label>
          </ValidationProvider>
          <ValidationProvider>
            <label for="consent" class="flex--row">
              <input type="checkbox" id="consent" @click="checked = !checked" required>
              <span>
                By checking the box, you agree to our Privacy Policy and T&C for use of this website, along with
              the charges accompanied with the rate you have selected. Please read our Privacy Policy for information
              on our data collection and usage practices.
              <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">View Privacy Policy</router-link>
              </span>
            </label>
          </ValidationProvider>
        </div>
      </div>
      <div class="btn-confirm">
        <button type="submit" :disabled="!checked">COMPLETE BOOKING</button>
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
import ConfirmationCard from '@/components/checkout/ConfirmationCard/ConfirmationCard'
import { mapState } from 'vuex'
// import router from '@/router'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})
export default {
  name: 'Confirmation',
  data () {
    return {
      checked: false
    }
  },
  components: {
    ConfirmationCard,
    ValidationObserver,
    ValidationProvider
  },
  computed: {
    ...mapState({
      reservationInfo: state => state.reservation.reservationDetails.customerInfo,
      componentKey: state => state.reservation.currentStep
    }),
    preCheck () {
      return this.$refs.checkReq.checked === true
    }
  },
  methods: {
    async submitOrder () {
      await this.$store.dispatch('submitReservation')
      // await router.push('/')
      // await window.sessionStorage.clear()
      // router.go(0)
    }
  }
}
</script>
<style src="./Confirmation.scss" lang="scss" scoped/>
