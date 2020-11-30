<template>
  <div>
    <navbar/>
    <section class="page-container">
      <ValidationObserver
        ref="form"
        class="page-wrapper"
        v-slot="{ handleSubmit }"
      >
        <form @submit.prevent="handleSubmit(onSubmit)" class="flex--column">
          <div class="header">
            <h4 class="content__title">Weddings</h4>
            <h1 class="page__title">Request Proposal</h1>
            <br>
            <p class="content__description">We offer a various range of possibilities for your wedding. Please take a moment
             to fill out your information in the form below in two weeks before your wedding date.
              Our team staff will contact you for more details as soon as possible.</p>
            <br>
            <p class="content__description">If you would like to contact us directly, please call 480.000.0008</p>
          </div>
          <div class="body">
            <div class="content flex--column">
              <div class="flex--column">
                <ValidationProvider
                  rules="required"
                  name="Your title"
                  class="flex--column"
                  v-slot="{ errors }"
                >
                  <label for="title">Title</label>
                  <select name="title" id="title" v-model="requestWeddingInfo.title">
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
                <div class="flex--row">
                  <ValidationProvider
                    rules="required|alpha_spaces"
                    name="Your first name"
                    v-slot="{ errors }"
                    class="flex--column"
                  >
                    <label for="firstName">First Name*</label>
                    <input type="text" id="firstName" placeholder="First name" required v-model.trim="requestWeddingInfo.firstName">
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="required|alpha_spaces"
                    name="Your last name"
                    v-slot="{ errors }"
                    class="flex--column"
                  >
                    <label for="lastName">Last Name*</label>
                    <input type="text" id="lastName" placeholder="Last name" required v-model.trim="requestWeddingInfo.lastName">
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                </div>
                <ValidationProvider
                  rules="required|regexPhoneNum"
                  name="Your phone number"
                  v-slot="{ errors }"
                  class="flex--column"
                >
                  <label for="phoneNum">Phone Number*</label>
                  <input type="text" id="phoneNum" placeholder="Start from country code(+)" required v-model.trim="requestWeddingInfo.phoneNum">
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
                <ValidationProvider
                  rules="required|regexEmail"
                  name="Your email address"
                  v-slot="{ errors }"
                  class="flex--column"
                >
                  <label for="email">Email Address*</label>
                  <input type="text" id="email" placeholder="Email Address" required v-model.trim="requestWeddingInfo.email">
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
                <div class="flex--column">
                  <label>Wedding Date</label>
                  <div class="flex--row date">
                    <v-date-picker
                      id="weddingDate"
                      required
                      v-model="requestWeddingInfo.weddingDate"
                      class="flex--row"
                      :input-props="{
                        class: 'date-picker-input',
                        readonly: true,
                        isRequired: true
                      }"
                      :disabled-dates="[
                        {
                          start: new Date(new Date().setFullYear(new Date().getFullYear() - 1000)),
                          end: new Date(new Date().setDate(new Date().getDate() + 14))
                        },
                        {
                          start: new Date( new Date().setMonth(new Date().getMonth() + 6)),
                          end: new Date(new Date().setFullYear(new Date().getFullYear() + 1000))
                        }
                      ]"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 30px; height: 30px; fill: #3d405b;" xml:space="preserve">
                        <path d="M5.5,5C5.224,5,5,4.776,5,4.5v-4C5,0.224,5.224,0,5.5,0S6,0.224,6,0.5v4C6,4.776,5.776,5,5.5,5z"/>
                      <path d="M18.5,5C18.224,5,18,4.776,18,4.5v-4C18,0.224,18.224,0,18.5,0S19,0.224,19,0.5v4C19,4.776,18.776,5,18.5,5z"/>
                      <path d="M24,8V5.5C24,3.57,22.43,2,20.5,2H20v2.5C20,5.327,19.327,6,18.5,6S17,5.327,17,4.5V2H7v2.5C7,5.327,6.327,6,5.5,6S4,5.327,4,4.5V2H3.5C1.57,2,0,3.57,0,5.5V8H24z"/>
                      <path d="M0,9v11.5C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5V9H0z M12,19c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.276,0.224-0.5,0.5-0.5S7,18.724,7,19c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H7.5C7.224,17,7,16.776,7,16.5S7.224,16,7.5,16H9c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2c0,0.276-0.224,0.5-0.5,0.5S6,14.276,6,14c0-1.654,1.346-3,3-3s3,1.346,3,3c0,1.042-0.534,1.962-1.343,2.5C11.466,17.038,12,17.958,12,19z M17,21.5c0,0.276-0.224,0.5-0.5,0.5S16,21.776,16,21.5v-8.793l-1.146,1.146c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l2-2c0.144-0.143,0.357-0.186,0.545-0.108C16.878,11.115,17,11.298,17,11.5V21.5z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex--column">
                  <label>Select all that apply</label>
                  <label for="ceremony">
                    <input type="checkbox" id="ceremony" value="Ceremony / Reception" v-model="requestWeddingInfo.serviceNeed">
                    Ceremony / Reception
                  </label>
                  <label for="shower">
                    <input type="checkbox" id="shower" value="Wedding Shower" v-model="requestWeddingInfo.serviceNeed">
                    Wedding Shower
                  </label>
                  <label for="dinner">
                    <input type="checkbox" id="dinner" value="Rehearsal Dinner" v-model="requestWeddingInfo.serviceNeed">
                    Rehearsal Dinner
                  </label>
                  <label for="guestrooms">
                    <input type="checkbox" id="guestrooms" value="Guestrooms Only" v-model="requestWeddingInfo.serviceNeed">
                    Guestrooms Only
                  </label>
                  <label for="reception">
                    <input type="checkbox" id="reception" value="Reception Only" v-model="requestWeddingInfo.serviceNeed">
                    Reception Only
                  </label>
                  <label for="brunch">
                    <input type="checkbox" id="brunch" value="Arrival / Departure Brunch" v-model="requestWeddingInfo.serviceNeed">
                    Arrival / Departure Brunch
                  </label>
                </div>
                <ValidationProvider
                  rules="required|min_value:8|numeric"
                  name="Number of guests"
                  v-slot="{ errors }"
                  class="flex--column"
                >
                  <label for="numberOfGuest">Number of Guests*</label>
                  <input type="text" id="numberOfGuest" required v-model.number="requestWeddingInfo.numberOfGuest">
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
                <label for="consent">
                  <input type="checkbox" id="consent" @click="checked = !checked" required>
                  I understand that this form collects my name, email and phone number so I can be contacted.
                  For more information, please check our
                  <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</router-link>.
                </label>
              </div>
            </div>
          </div>
          <button type="submit" :disabled="!checked" class="btn-outline-md">SUBMIT</button>
        </form>
      </ValidationObserver>
    </section>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
// eslint-disable-next-line camelcase
import { alpha, alpha_spaces, min_value, numeric } from 'vee-validate/dist/rules'
import firebaseApi from '@/common/firebaseApi'
import dayjs from 'dayjs'
extend('alpha', alpha)
extend('alpha_spaces', alpha_spaces)
extend('min_value', min_value)
extend('numeric', numeric)
extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})
extend('regexPhoneNum', {
  validate (value) {
    const regex = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})/g
    return {
      required: true,
      valid: regex.test(value)
    }
  }
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
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      checked: false,
      requestWeddingInfo: {
        type: 'Wedding Inquiry',
        status: 'Upcoming',
        confirmationNum: '',
        createTime: '',
        lastUpdateTime: '',
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        weddingDate: '',
        serviceNeed: [],
        numberOfGuest: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.requestWeddingInfo.confirmationNum = 'ARNSW' + dayjs().format('MMDDYYSSS')
      this.requestWeddingInfo.createTime = dayjs().format()
      this.requestWeddingInfo.lastUpdateTime = dayjs().format()
      // Alert message for inquiry confirmation
      this.$confirm('Ready to submit?',
        {
          confirmButtonText: 'YES',
          cancelButtonText: 'CANCEL',
          customClass: 'notification-class',
          type: 'warning'
        }).then(() => {
        firebaseApi.postData('weddingRequestList', this.requestWeddingInfo)
          .then(() => {
            this.$notify({
              type: 'success',
              customClass: 'notification-class',
              message: 'Your request has been submitted successfully.'
            })
          })
          .then(() => {
            // Reload current page to reset all data
            setTimeout(() => {
              this.$router.push('/wedding')
            }, 2000)
          })
      }).catch(() => {
        setTimeout(() => {
          this.$notify({
            type: 'info',
            customClass: 'notification-class',
            message: 'Request canceled'
          })
        }, 500)
      })
    }
  },
  beforeMount () {
    this.requestWeddingInfo.weddingDate = new Date(new Date().setDate(new Date().getDate() + 15))
  }
}
</script>
<style src="./WeddingInquiry.scss" lang="scss" scoped/>
