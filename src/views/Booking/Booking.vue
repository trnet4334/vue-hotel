<template>
  <section class="booking flex--column">
    <checkout-navbar/>
    <div class="booking__container flex--column page-content--header">
      <h1>FIND YOUR RESERVATION</h1>
      <div class="booking__content flex--column">
        <h4>With Confirmation Number</h4>
        <div class="flex--column row-1">
          <input type="text" placeholder="Confirmation Number" required v-model="confirmationDetails.confirmationNum">
          <input type="text" placeholder="Email Address" required v-model="confirmationDetails.email">
          <input type="text" placeholder="Last Name" required v-model="confirmationDetails.lastName">
        </div>
        <button>FIND RESERVATION</button>
        <div class="flex--column row-2">
          <h4>Forget your confirmation number?</h4>
          <p>Your confirmation number was included in an email sent
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
  components: {
    CheckoutNavbar,
    CheckoutFooter
  },
  data () {
    return {
      confirmationDetails: {
        confirmationNum: '',
        email: '',
        lastName: ''
      }
    }
  }
}
</script>
<style src="./Booking.scss" lang="scss" scoped/>
