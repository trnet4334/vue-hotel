<template>
  <section class="signup-banner" :class="toggleBanner">
    <div v-if="!displaySignupCollapse && !signupSuccess" class="signup-banner__header flex--row" @click="toggleSignupForm">
      <span>
        Sign up for our latest news and promotions
      </span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 24 24" style="fill: #ffffff; width: 24px; height: 24px; margin-left: 10px;" xml:space="preserve">
          <path d="M12,0.5C5.659,0.5,0.5,5.659,0.5,12S5.659,23.5,12,23.5S23.5,18.341,23.5,12S18.341,0.5,12,0.5z M18.604,14.104l-5.543,5.543c-0.292,0.292-0.677,0.438-1.061,0.438s-0.769-0.146-1.061-0.438l-5.543-5.543c-0.429-0.428-0.664-0.998-0.664-1.604s0.235-1.175,0.664-1.604c0.857-0.856,2.35-0.856,3.207,0L9.5,11.793V6c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5v5.793l0.896-0.896c0.857-0.856,2.35-0.856,3.207,0c0.429,0.428,0.664,0.998,0.664,1.604S19.032,13.675,18.604,14.104z"/>
        </svg>
    </div>
    <div v-if="displaySignupCollapse && !signupSuccess" class="signup-banner__form flex--column flex--center">
      <form>
        <div class="row flex--row">
          <div class="column flex--column">
            <label for="fullName">Full Name*</label>
            <input type="text" id="fullName" placeholder="Full Name" required v-model="signupDetail.name">
          </div>
          <div class="column flex--column">
            <label for="email">Email Address*</label>
            <input type="text" id="email" placeholder="E-mail Address" required v-model="signupDetail.email">
          </div>
          <div class="column flex--column">
            <label for="address">Address*</label>
            <input type="text" id="address" placeholder="Address" required v-model="signupDetail.address">
          </div>
          <div class="column flex--column">
            <label for="state">State/Province/Region*</label>
            <input type="text" id="state" placeholder="State/Province/Region" required v-model="signupDetail.state">
          </div>
          <div class="column flex--column">
            <label for="country">Country*</label>
            <input type="text" id="country" placeholder="Country" required v-model="signupDetail.country">
          </div>
          <div class="column flex--column">
            <label for="zipCode">Zip Code</label>
            <input type="text" id="zipCode" placeholder="Zip Code" v-model="signupDetail.zipCode">
          </div>
        </div>
        <div class="row">
          <button type="submit" @click="saveSignupDetail">
            <span>SIGN UP</span>
          </button>
        </div>
      </form>
    </div>
    <div v-if="displaySignupCollapse && signupSuccess" class="signup-banner__sent flex--column flex--center">
      <h2>Thank you for choosing to stay connect with us!</h2>
      <br>
      <h4>We are looking forward for your coming.</h4>
    </div>
    <div v-if="displaySignupCollapse || signupSuccess" @click="closeSignupForm" class="signup-banner--close-icon">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 24 24" style="fill: #ffffff;" xml:space="preserve">
          <path d="M12.707,12l8.146-8.146c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0L12,11.293L3.854,3.146c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L11.293,12l-8.146,8.146c-0.195,0.195-0.195,0.512,0,0.707C3.244,20.951,3.372,21,3.5,21s0.256-0.049,0.354-0.146L12,12.707l8.146,8.146C20.244,20.951,20.372,21,20.5,21s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L12.707,12z"/>
        </svg>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      displaySignupCollapse: false,
      signupSuccess: false,
      signupDetail: {
        name: '',
        email: '',
        address: '',
        state: '',
        country: '',
        zipCode: ''
      }
    }
  },
  mounted () {
    if (sessionStorage.signupDetail) {
      this.signupDetail = sessionStorage.signupDetail
    }
  },
  methods: {
    toggleSignupForm () {
      this.displaySignupCollapse = !this.displaySignupCollapse
    },
    closeSignupForm () {
      this.displaySignupCollapse = !this.displaySignupCollapse
      this.signupSuccess = false
    },
    saveSignupDetail () {
      // this.displaySignupCollapse = !this.displaySignupCollapse
      this.signupSuccess = true
      console.log(sessionStorage.signupDetail)
      console.log('Successfully saved!')
    }
  },
  computed: {
    toggleBanner: function () {
      return {
        'form--opened': this.displaySignupCollapse
      }
    }
  }
}
</script>
<style src="./SignupBanner.scss" lang="scss" scoped/>
