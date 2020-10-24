<template>
  <section class="booking flex--column">
    <checkout-navbar/>
    <div class="booking__container flex--column page-content--header">
      <h1>FIND YOUR RESERVATION</h1>
      <div class="booking__content flex--column">
        <h4>With Personal Info</h4>
        <div class="flex--column row-1">
          <input type="text" placeholder="Email Address" required v-model.trim="confirmationDetails.email">
          <input type="text" placeholder="Last Name" required v-model.trim="confirmationDetails.lastName">
        </div>
        <button @click.prevent="submitSearchInput">FIND RESERVATION</button>
        <div class="flex--column row-2">
          <h4>Forget which email address you used?</h4>
          <p>Your email address was included in an email sent
          at the time of booking.</p>
        </div>
      </div>
    </div>
    <checkout-footer/>
  </section>
</template>
<script>
import CheckoutNavbar from '@/components/header/navbar/CheckoutNavbar.vue'
import CheckoutFooter from '@/components/footer/CheckoutFooter.vue'
export default {
  name: 'Booking',
  components: {
    CheckoutNavbar,
    CheckoutFooter
  },
  data () {
    return {
      confirmationDetails: {
        email: '',
        lastName: ''
      }
    }
  },
  methods: {
    async submitSearchInput () {
      const customerData = {
        email: this.confirmationDetails.email,
        lastName: this.confirmationDetails.lastName
      }
      try {
        await this.$store.dispatch('submitCheckingRequest', customerData)
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>
<style src="./Booking.scss" lang="scss" scoped/>
