<template>
  <section class="booking util__flex--column">
    <checkout-navbar/>
    <div class="booking__container util__flex--column">
      <h1>FIND YOUR RESERVATION</h1>
      <div class="booking__content util__flex--column">
        <h4 class="util__header--title">With Confirmation Number</h4>
        <div class="util__flex--column row-1">
          <input type="text" placeholder="Confirmation Number" required v-model="confirmationDetails.confirmationNum">
          <input type="text" placeholder="Email Address" required v-model="confirmationDetails.email">
          <input type="text" placeholder="Last Name" required v-model="confirmationDetails.lastName">
        </div>
        <button>FIND RESERVATION</button>
        <div class="util__flex--column row-2">
          <span>Forget your confirmation number?</span>
          <p class="util__header--description">Your confirmation number was included in an email sent
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
<style lang="scss" scoped>
  .booking {
    width: 100%;
    position: relative;
    height: 100vh;
    justify-content: space-between;
    &__container {
      align-items: flex-start;
      padding: 5vh 5vw;
      & h1 {
        font-size: 2.5rem;
        font-weight: 700;
      }
    }
    &__content {
      padding: 20px 25px;
      border: 1px solid #3d405b;
      border-radius: 5px;
      background-color: #ffffff;
      & h4 {
        padding-bottom: 10px;
      }
      & span {
        font-size: 1.3rem;
        text-align: start;
        font-weight: 600;
      }
      & button {
        padding: 10px 10px;
        margin-top: 15px;
        font-size: 1.1rem;
        border: none;
        background-color: #283845;
        color: #ffffff;
        border-radius: 5px;
        align-self: flex-end;
        &:hover {
          cursor: pointer;
        }
      }
      .row-1 {
        & input {
          width: 100%;
          margin: 5px 0;
          font-size: 1.2rem;
          padding: 10px 15px;
        }
      }
      .row-2 {
        align-items: flex-start;
        padding: 10px 0;
      }
    }
  }
</style>
