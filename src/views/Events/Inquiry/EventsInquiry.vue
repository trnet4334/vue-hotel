<template>
  <div>
    <navbar/>
    <section class="events-inquiry page-container">
      <ValidationObserver
        ref="form"
        class="page-wrapper"
        v-slot="{ handleSubmit }"
      >
        <form @submit.prevent="handleSubmit(onSubmit)" class="flex--column">
          <div class="header page-content--header">
            <h4>Meetings & Events</h4>
            <h1>Request Proposal</h1>
            <p>We offer a various range of possibilities for your meeting or event. Please take a moment
              to fill out your information in the form below in two weeks before your meeting or event date.
              Our team staff will contact you for more details as soon as possible.</p>
            <br>
            <p>If you would like to contact us directly, please call 480.000.0008</p>
          </div>
          <br>
          <div class="body">
            <div class="content--first flex--column">
              <h2>Contact Information</h2>
              <div class="flex--column">
                <ValidationProvider
                  rules="required"
                  class="flex--column"
                  name="Selection"
                  v-slot="{ errors }"
                >
                  <label for="title">Title</label>
                  <select name="title" id="title" v-model="requestInfo.title">
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
                    <input type="text" id="firstName" placeholder="First name" required v-model.trim="requestInfo.firstName">
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="required|alpha"
                    class="flex--column"
                    name="Your last name"
                    v-slot="{ errors }"
                  >
                    <label for="lastName">Last Name*</label>
                    <input type="text" id="lastName" placeholder="Last name" required v-model.trim="requestInfo.lastName">
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                </div>
              </div>
              <ValidationProvider
                rules="required|regexAddress"
                name="Your address"
                v-slot="{ errors }"
                class="content--second flex--column"
              >
                <label for="address">Address*</label>
                <input type="text" id="address" placeholder="Address" v-model.trim="requestInfo.address" required>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <div class="flex--column">
                <div class="flex--row">
                  <ValidationProvider
                    rules="required"
                    class="flex--column"
                    name="Your company name"
                    v-slot="{ errors }"
                  >
                    <label for="company">Company*</label>
                    <input type="text" id="company" placeholder="Company" v-model.trim="requestInfo.company" required>
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="required|regexEmail"
                    name="Your email address"
                    class="flex--column"
                    v-slot="{ errors }"
                  >
                    <label for="email">Email*</label>
                    <input type="text" id="email" placeholder="email" v-model.trim="requestInfo.email" required>
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
                  <input type="text" id="phoneNum" placeholder="Phone Number" v-model.trim="requestInfo.phoneNum" required>
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="content--third flex--column">
              <h2>Guestroom Information</h2>
              <ValidationProvider
                rules="required"
                class="flex--row radio-input-group"
                name="Selection"
                v-slot="{ errors }"
              >
                <label>Guest Rooms Required?*</label>
                <div class="flex--row center">
                  <input type="radio" value="yes" id="needGuestrooms" v-model="requestInfo.guestroomRequirement">
                  <label for="needGuestrooms">Yes</label>
                  <input type="radio" value="no" id="noNeedGuestrooms" v-model="requestInfo.guestroomRequirement">
                  <label for="noNeedGuestrooms">No</label>
                </div>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <ValidationProvider
                rules="numeric"
                class="flex--column"
                name="Number"
                v-slot="{ errors }"
              >
                <label for="numberOfGuestroom">If yes, how many guest rooms do you need?</label>
                <input
                  type="text"
                  id="numberOfGuestroom"
                  placeholder="Number of guest Rooms required"
                  v-model.number.trim="requestInfo.numberOfGuestroom"
                  :disabled="requestInfo.guestroomRequirement === 'no'|| requestInfo.guestroomRequirement === ''"
                >
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
            </div>
            <div class="content--fourth flex--column">
              <h2>Meeting/Event Information</h2>
              <div class="flex--column">
                <ValidationProvider
                  rules="required"
                  name="Your meeting/event name"
                  class="flex--column"
                  v-slot="{ errors }"
                >
                  <label for="eventName">Meeting/Event Name*</label>
                  <input type="text" placeholder="Enter meeting / event name" id="eventName" v-model.trim="requestInfo.eventName" required>
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
                <ValidationProvider
                  rules="numeric|required"
                  class="flex--column"
                  name="Number"
                  v-slot="{ errors }"
                >
                  <label for="attendeesNum">Number of Attendees*</label>
                  <input type="text" placeholder="Enter number" id="attendeesNum" v-model.number="requestInfo.attendeesNum" required>
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <ValidationProvider
                rules="required"
                name="Selection"
                v-slot="{ errors }"
                class="flex--row radio-input-group"
              >
                <label>Food Service Requirements?*</label>
                <div class="flex--row center">
                  <input type="radio" value="yes" id="foodRequired" v-model="requestInfo.foodRequirement">
                  <label for="foodRequired">Yes</label>
                  <input type="radio" value="no" id="noFoodRequired" v-model="requestInfo.foodRequirement">
                  <label for="noFoodRequired">No</label>
                </div>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <ValidationProvider
                rules="required"
                name="Selection"
                class="flex--row radio-input-group"
                v-slot="{ errors }"
              >
                <label>Any AV Requirements for the meeting/event?*</label>
                <div class="flex--row center">
                  <input type="radio" value="yes" id="AvRequired" v-model="requestInfo.avRequirement">
                  <label for="AvRequired">Yes</label>
                  <input type="radio" value="no" id="noAvRequired" v-model="requestInfo.avRequirement">
                  <label for="noAvRequired">No</label>
                </div>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <ValidationProvider
                rules="required|numeric"
                name="Your budget number"
                v-slot="{ errors }"
                class="flex--column">
                <label for="budget">Total Budget*</label>
                <input type="text" id="budget" v-model.number="requestInfo.budget" placeholder="Number of budget" required>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <div class="flex--column">
                <label for="comments">Comments</label>
                <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments" v-model="requestInfo.comments"/>
              </div>
            </div>
            <div class="content--fourth flex--column">
              <h2>Dates</h2>
              <div class="flex--column">
                <ValidationProvider
                  class="flex--column"
                >
                  <label>Dates*</label>
                  <div class="flex--row date">
                    <v-date-picker
                      id="scheduledArrivalDate"
                      mode="range"
                      v-model="requestInfo.scheduledDates"
                      class="flex--row"
                      :min-date="new Date()"
                      :input-props="{
                       class: 'date-picker-input',
                       readonly: true,
                       isRequired: true
                      }"
                      :disabled-dates="[
                        {
                          start: new Date(new Date().setFullYear(new Date().getFullYear() - 1000)),
                          end: new Date(new Date().setDate((new Date().getDate() + 14)))
                        },
                        {
                          start: new Date( new Date().setMonth(new Date().getMonth() + 6)),
                          end: new Date(new Date().setFullYear(new Date().getFullYear() + 1000))
                        }
                      ]"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 24 24" xml:space="preserve">
                      <path d="M5.5,5C5.224,5,5,4.776,5,4.5v-4C5,0.224,5.224,0,5.5,0S6,0.224,6,0.5v4C6,4.776,5.776,5,5.5,5z"/>
                      <path d="M18.5,5C18.224,5,18,4.776,18,4.5v-4C18,0.224,18.224,0,18.5,0S19,0.224,19,0.5v4C19,4.776,18.776,5,18.5,5z"/>
                      <path d="M24,8V5.5C24,3.57,22.43,2,20.5,2H20v2.5C20,5.327,19.327,6,18.5,6S17,5.327,17,4.5V2H7v2.5C7,5.327,6.327,6,5.5,6S4,5.327,4,4.5V2H3.5C1.57,2,0,3.57,0,5.5V8H24z"/>
                      <path d="M0,9v11.5C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5V9H0z M12,19c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.276,0.224-0.5,0.5-0.5S7,18.724,7,19c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H7.5C7.224,17,7,16.776,7,16.5S7.224,16,7.5,16H9c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2c0,0.276-0.224,0.5-0.5,0.5S6,14.276,6,14c0-1.654,1.346-3,3-3s3,1.346,3,3c0,1.042-0.534,1.962-1.343,2.5C11.466,17.038,12,17.958,12,19z M17,21.5c0,0.276-0.224,0.5-0.5,0.5S16,21.776,16,21.5v-8.793l-1.146,1.146c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l2-2c0.144-0.143,0.357-0.186,0.545-0.108C16.878,11.115,17,11.298,17,11.5V21.5z"/>
                    </svg>
                  </div>
                </ValidationProvider>
                <ValidationProvider class="flex--column">
                  <label>Alternate Dates*</label>
                  <div class="flex--row date">
                    <v-date-picker
                      id="alternateArrivalDate"
                      mode="range"
                      v-model="requestInfo.alternateDates"
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
                        },
                        {
                          start: requestInfo.scheduledDates.start,
                          end: requestInfo.scheduledDates.end
                        }
                      ]"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 24 24" xml:space="preserve">
                      <path d="M5.5,5C5.224,5,5,4.776,5,4.5v-4C5,0.224,5.224,0,5.5,0S6,0.224,6,0.5v4C6,4.776,5.776,5,5.5,5z"/>
                      <path d="M18.5,5C18.224,5,18,4.776,18,4.5v-4C18,0.224,18.224,0,18.5,0S19,0.224,19,0.5v4C19,4.776,18.776,5,18.5,5z"/>
                      <path d="M24,8V5.5C24,3.57,22.43,2,20.5,2H20v2.5C20,5.327,19.327,6,18.5,6S17,5.327,17,4.5V2H7v2.5C7,5.327,6.327,6,5.5,6S4,5.327,4,4.5V2H3.5C1.57,2,0,3.57,0,5.5V8H24z"/>
                      <path d="M0,9v11.5C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5V9H0z M12,19c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.276,0.224-0.5,0.5-0.5S7,18.724,7,19c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H7.5C7.224,17,7,16.776,7,16.5S7.224,16,7.5,16H9c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2c0,0.276-0.224,0.5-0.5,0.5S6,14.276,6,14c0-1.654,1.346-3,3-3s3,1.346,3,3c0,1.042-0.534,1.962-1.343,2.5C11.466,17.038,12,17.958,12,19z M17,21.5c0,0.276-0.224,0.5-0.5,0.5S16,21.776,16,21.5v-8.793l-1.146,1.146c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l2-2c0.144-0.143,0.357-0.186,0.545-0.108C16.878,11.115,17,11.298,17,11.5V21.5z"/>
                    </svg>
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <div class="content--fifth flex--column">
              <h2>Additional Information</h2>
              <textarea name="additionInfo" placeholder="Program Agenda etc." cols="30" rows="10" v-model="requestInfo.additionalInfo"/>
            </div>
            <div
              class="content--sixth flex--column"
            >
              <label for="consent">
                <input type="checkbox" id="consent" @click="checked = !checked" required>
                I understand that this form collects my name, email and phone number so I can be contacted.
                For more information, please check our
                <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</router-link>.
              </label>
            </div>
          </div>
          <button type="submit" :disabled="!checked">SUBMIT</button>
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
import dayjs from 'dayjs'
import apiService from '@/common/api'
import shortid from 'shortid'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
// eslint-disable-next-line camelcase
import { alpha, alpha_spaces, min_value, numeric } from 'vee-validate/dist/rules'
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
    Navbar,
    SignupBanner,
    Footer,
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      checked: false,
      requestInfo: {
        id: '',
        confirmationNum: '',
        createTime: '',
        lastUpdateTime: '',
        type: 'Event/Meeting Inquiry',
        status: 'Upcoming',
        title: '',
        firstName: '',
        lastName: '',
        address: '',
        company: '',
        email: '',
        phoneNum: '',
        guestroomRequirement: '',
        numberOfGuestroom: '',
        eventName: '',
        attendeesNum: '',
        foodRequirement: '',
        avRequirement: '',
        budget: '',
        comments: '',
        scheduledDates: {
          start: '',
          end: ''
        },
        alternateDates: {
          start: '',
          end: ''
        },
        additionalInfo: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.requestInfo.confirmationNum = shortid.generate() + dayjs().format('MMDDHHmm')
      this.requestInfo.createTime = dayjs().format()
      this.requestInfo.lastUpdateTime = dayjs().format()
      // Alert message for inquiry confirmation
      this.$confirm('Ready to submit?',
        {
          confirmButtonText: 'YES',
          cancelButtonText: 'CANCEL',
          customClass: 'notification-class',
          type: 'warning'
        }).then(() => {
        apiService.postData('/eventsRequestList', this.requestInfo)
        this.$notify({
          type: 'success',
          customClass: 'notification-class',
          message: 'Your request has been submitted successfully.'
        })
        // Reload current page to reset all data
        setTimeout(() => {
          this.$router.push('/events')
        }, 2000)
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
  computed: {
  }
}
</script>
<style src="./EventsInquiry.scss" lang="scss" scoped/>
