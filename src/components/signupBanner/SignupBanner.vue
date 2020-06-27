<template>
  <section class="signup-banner" :class="toggleBanner">
    <div v-if="displaySignupCollapse" class="signup-banner__header util__flex--column" @click="toggleSignupForm">
      <span style="display: inherit;">
        Sign up for our latest news and promotions
        <div style="width: 24px; height: 24px; margin-left: 10px;">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; fill: #ffffff;" xml:space="preserve">
          <path d="M12,0.5C5.659,0.5,0.5,5.659,0.5,12S5.659,23.5,12,23.5S23.5,18.341,23.5,12S18.341,0.5,12,0.5z M18.604,14.104l-5.543,5.543c-0.292,0.292-0.677,0.438-1.061,0.438s-0.769-0.146-1.061-0.438l-5.543-5.543c-0.429-0.428-0.664-0.998-0.664-1.604s0.235-1.175,0.664-1.604c0.857-0.856,2.35-0.856,3.207,0L9.5,11.793V6c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5v5.793l0.896-0.896c0.857-0.856,2.35-0.856,3.207,0c0.429,0.428,0.664,0.998,0.664,1.604S19.032,13.675,18.604,14.104z"/>
        </svg>
        </div>
      </span>
    </div>
    <div v-else class="signup-banner__form util__flex--row">
      <form>
        <div class="row util__flex--row">
          <div class="column util__flex--column">
            <label for="fullName">Full Name*</label>
            <input type="text" id="fullName" required>
          </div>
          <div class="column util__flex--column">
            <label for="email">Email Address*</label>
            <input type="text" id="email" required>
          </div>
          <div class="column util__flex--column">
            <label for="address">Address*</label>
            <input type="text" id="address" required>
          </div>
        </div>
        <div class="row util__flex--row">
          <div class="column util__flex--column">
            <label for="state">State / Province / Region*</label>
            <input type="text" id="state" required>
          </div>
          <div class="column util__flex--column">
            <label for="country">Country*</label>
            <input type="text" id="country" required>
          </div>
          <div class="column util__flex--column">
            <label for="zipCode">Zip Code</label>
            <input type="text" id="zipCode">
          </div>
        </div>
        <div class="row">
          <button>SIGN UP</button>
        </div>
      </form>
      <div @click="closeSignupForm" class="signup-banner--close-icon">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; fill: #ffffff;" xml:space="preserve">
          <path d="M12.707,12l8.146-8.146c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0L12,11.293L3.854,3.146c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L11.293,12l-8.146,8.146c-0.195,0.195-0.195,0.512,0,0.707C3.244,20.951,3.372,21,3.5,21s0.256-0.049,0.354-0.146L12,12.707l8.146,8.146C20.244,20.951,20.372,21,20.5,21s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L12.707,12z"/>
        </svg>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      displaySignupCollapse: true
    }
  },
  methods: {
    toggleSignupForm () {
      this.displaySignupCollapse = !this.displaySignupCollapse
    },
    closeSignupForm () {
      this.displaySignupCollapse = !this.displaySignupCollapse
    }
  },
  computed: {
    toggleBanner: function () {
      return {
        'form--opened': !this.displaySignupCollapse
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .signup-banner {
    width: 100%;
    height: 20vh;
    background-color: #202c39;
    padding: 2vh 0;
    &__header {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 2.5rem;
      color: #ffffff;
    }
    &__form {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    &--close-icon {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 50px;
      height: 50px;
    }
  }
  .form--opened {
    height: 55vh;
  }
  form {
    width: 70%;
    height: 100%;
    padding: 3vh 0;
    & label {
      color: #ffffff;
      font-size: 1.5rem;
    }
    & input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #ffffff;
      line-height: 2.5rem;
    }
    .row {
      height: 32%;
      justify-content: space-between;
      & button {
        margin: 2vh auto;
        padding: 18px 90px;
        vertical-align: middle;
        font-family: inherit;
        font-weight: 600;
        font-size: 1.3rem;
        background-color: transparent;
        border: 2px solid #ffffff;
        border-radius: 5px;
        color: #ffffff;
      }
    }
    .column {
      width: 30%;
    }
  }
</style>
