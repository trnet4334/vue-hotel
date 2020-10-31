<template>
  <section class="signup-banner">
    <div class="flex--column flex--center">
      <div v-if="!displaySignupCollapse && !signupSuccess" class="signup-banner__header flex--row" @click="toggleSignupForm">
        <span>
          Sign up for our latest news and promotions
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 24 24" style="fill: #ffffff; width: 24px; height: 24px; margin-left: 10px;" xml:space="preserve">
          <path d="M12,0.5C5.659,0.5,0.5,5.659,0.5,12S5.659,23.5,12,23.5S23.5,18.341,23.5,12S18.341,0.5,12,0.5z M18.604,14.104l-5.543,5.543c-0.292,0.292-0.677,0.438-1.061,0.438s-0.769-0.146-1.061-0.438l-5.543-5.543c-0.429-0.428-0.664-0.998-0.664-1.604s0.235-1.175,0.664-1.604c0.857-0.856,2.35-0.856,3.207,0L9.5,11.793V6c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5v5.793l0.896-0.896c0.857-0.856,2.35-0.856,3.207,0c0.429,0.428,0.664,0.998,0.664,1.604S19.032,13.675,18.604,14.104z"/>
        </svg>
      </div>
    </div>
    <ValidationObserver
      ref="form"
      v-if="displaySignupCollapse && !signupSuccess"
      class="signup-banner__form flex--column flex--center"
      v-slot="{ handleSubmit, invalid }"
    >
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="row flex--row">
          <ValidationProvider
            rules="required|alpha_spaces"
            v-slot="{ errors }"
            name="Your name"
            class="column flex--column"
          >
            <label for="fullName">Full Name*</label>
            <input type="text" id="fullName" placeholder="Full Name" required v-model="signupDetail.name">
            <span class="alert-message">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider
            rules="required|regexEmail"
            v-slot="{ errors }"
            name="Your email address"
            class="column flex--column"
          >
            <label for="email">Email Address*</label>
            <input type="text" id="email" placeholder="E-mail Address" required v-model="signupDetail.email">
            <span>{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider
            rules="required|regexAddress"
            class="column flex--column"
            v-slot="{ errors }"
            name="Your address"
          >
            <label for="address">Address*</label>
            <input type="text" id="address" placeholder="Address" required v-model="signupDetail.address">
            <span class="alert-message">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider
            rules="required|alpha_spaces"
            class="column flex--column"
            v-slot="{ errors }"
            name="Your state or region"
          >
            <label for="state">State/Province/Region*</label>
            <input type="text" id="state" placeholder="State/Province/Region" required v-model="signupDetail.state">
            <span class="alert-message">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider
            rules="required"
            class="column flex--column"
            v-slot="{ errors }"
            name="Your country name"
          >
            <label for="country">Country*</label>
            <input type="text" id="country" placeholder="Country" required v-model="signupDetail.country">
            <span class="alert-message">{{errors[0]}}</span>
          </ValidationProvider>
          <div class="column flex--column">
            <label for="zipCode">Zip Code</label>
            <input type="text" id="zipCode" placeholder="Zip Code" v-model="signupDetail.zipCode">
          </div>
        </div>
        <div class="row">
          <button type="submit" :disabled="invalid">
            <span>SIGN UP</span>
          </button>
        </div>
      </form>
    </ValidationObserver>
    <div v-if="displaySignupCollapse && signupSuccess" class="signup-banner__sent flex--column flex--center">
      <h2>Thank you for choosing to stay connect with us!</h2>
      <br>
      <h4>We are looking forward for your coming.</h4>
    </div>
    <div v-if="displaySignupCollapse || signupSuccess" @click="closeSignupForm" class="signup-banner--close-icon">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 24 24" style="fill: #ffffff;" xml:space="preserve">
        <path d="M12.707,12l8.146-8.146c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0L12,11.293L3.854,3.146c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L11.293,12l-8.146,8.146c-0.195,0.195-0.195,0.512,0,0.707C3.244,20.951,3.372,21,3.5,21s0.256-0.049,0.354-0.146L12,12.707l8.146,8.146C20.244,20.951,20.372,21,20.5,21s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L12.707,12z"/>
      </svg>
    </div>
  </section>
</template>
<script>
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
// eslint-disable-next-line camelcase
import { alpha_spaces } from 'vee-validate/dist/rules'
import dayjs from 'dayjs'
import firebaseApi from '@/common/firebaseApi'
extend('alpha_spaces', alpha_spaces)
extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})
extend('regexEmail', {
  validate (value) {
    // eslint-disable-next-line no-control-regex
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
    return {
      required: true,
      valid: regex.test(value)
    }
  }
})
extend('regexAddress', {
  validate (value) {
    const regex = /^\s*\S+(?:\s+\S+){2}/
    return {
      required: true,
      valid: regex.test(value)
    }
  }
})
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      displaySignupCollapse: false,
      signupSuccess: false,
      signupDetail: {
        membershipNum: '',
        createdTime: '',
        name: '',
        email: '',
        address: '',
        state: '',
        country: '',
        zipCode: ''
      }
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
    async onSubmit () {
      this.signupDetail.membershipNum = dayjs().format('DDYYYYmmssSSS')
      this.signupDetail.createdTime = dayjs().format()
      const isMemberExist = await firebaseApi.getMembersData('subscriptionList', this.signupDetail.email)
      // Alert message for inquiry confirmation
      if (isMemberExist) {
        await this.$alert('You have already been in our subscription list. Thank you very much.',
          {
            confirmButtonClass: 'OK',
            customClass: 'notification-class',
            type: 'info'
          })
      } else {
        await firebaseApi.postData('subscriptionList', this.signupDetail).then(() => {
          this.signupSuccess = true
          // Reset all data
          this.signupDetail = {
            id: '',
            membershipNum: '',
            createdTime: '',
            name: '',
            email: '',
            address: '',
            state: '',
            country: '',
            zipCode: ''
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>
<style src="./SignupBanner.scss" lang="scss" scoped/>
