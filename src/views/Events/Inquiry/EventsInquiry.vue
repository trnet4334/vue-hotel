<template>
  <div>
    <navbar/>
    <section class="events-inquiry page-container">
      <Form
        ref="form"
        as="div"
        class="page-wrapper"
        v-slot="{ handleSubmit }"
      >
        <form @submit.prevent="handleSubmit(onSubmit)" class="flex--column">
          <div class="header">
            <h4 class="content__title">Meetings & Events</h4>
            <h1 class="page__title">Request Proposal</h1>
            <p class="content__description">We offer a various range of possibilities for your meeting or event. Please take a moment
              to fill out your information in the form below in two weeks before your meeting or event date.
              Our team staff will contact you for more details as soon as possible.</p>
            <br>
            <p class="content__description">If you would like to contact us directly, please call 480.000.0008</p>
          </div>
          <br>
          <div class="body">
            <div class="content--first flex--column">
              <h2>Contact Information</h2>
              <div class="flex--column">
                <Field
                  rules="required"
                  name="Selection"
                  v-model="requestInfo.title"
                  v-slot="{ field, errors }"
                  class="flex--column input__select alert-message"
                >
                  <label for="title">Title</label>
                  <select name="title" id="title" v-bind="field">
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                  <span class="alert-message">{{errors[0]}}</span>
                </Field>
                <div class="flex--row">
                  <Field
                    rules="required|alpha_spaces"
                    name="Your first name"
                    v-model.trim="requestInfo.firstName"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="firstName">First Name*</label>
                    <input type="text" id="firstName" placeholder="First name" required v-bind="field">
                    <span>{{errors[0]}}</span>
                  </Field>
                  <Field
                    rules="required|alpha"
                    name="Your last name"
                    v-model.trim="requestInfo.lastName"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="lastName">Last Name*</label>
                    <input type="text" id="lastName" placeholder="Last name" required v-bind="field">
                    <span>{{errors[0]}}</span>
                  </Field>
                </div>
              </div>
              <Field
                rules="required|regexAddress"
                name="Your address"
                v-model.trim="requestInfo.address"
                v-slot="{ field, errors }"
                class="content--second flex--column input__text lg alert-message"
              >
                <label for="address">Address*</label>
                <input type="text" id="address" placeholder="Address" v-bind="field" required>
                <span class="alert-message">{{errors[0]}}</span>
              </Field>
              <div class="flex--column">
                <div class="flex--row">
                  <Field
                    rules="required"
                    name="Your company name"
                    v-model.trim="requestInfo.company"
                    v-slot="{ field, errors }"
                    class="flex--column input__text md alert-message"
                  >
                    <label for="company">Company*</label>
                    <input type="text" id="company" placeholder="Company" v-bind="field" required>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                  <Field
                    rules="required|regexEmail"
                    name="Your email address"
                    v-model.trim="requestInfo.email"
                    v-slot="{ field, errors }"
                    class="flex--column input__text md alert-message"
                  >
                    <label for="email">Email*</label>
                    <input type="text" id="email" placeholder="email" v-bind="field" required>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                </div>
                <Field
                  rules="required|regexPhoneNum"
                  name="Your phone number"
                  v-model.trim="requestInfo.phoneNum"
                  v-slot="{ field, errors }"
                  class="flex--column input__text md alert-message"
                >
                  <label for="phoneNum">Phone Number*</label>
                  <input type="text" id="phoneNum" placeholder="Start from country code(+)" v-bind="field" required>
                  <span class="alert-message">{{errors[0]}}</span>
                </Field>
              </div>
            </div>
            <div class="content--third flex--column">
              <h2>Guestroom Information</h2>
              <Field
                rules="required"
                name="Selection"
                v-model="requestInfo.guestroomRequirement"
                v-slot="{ field, errors }"
                class="flex--row radio-input-group input__radio"
              >
                <label>Guest Rooms Required?*</label>
                <div class="flex--row center">
                  <input type="radio" value="yes" id="needGuestrooms" v-bind="field">
                  <label for="needGuestrooms">Yes</label>
                  <input type="radio" value="no" id="noNeedGuestrooms" v-bind="field">
                  <label for="noNeedGuestrooms">No</label>
                </div>
                <span class="alert-message">{{errors[0]}}</span>
              </Field>
              <Field
                rules="numeric"
                name="Number"
                v-model.number.trim="requestInfo.numberOfGuestroom"
                v-slot="{ field, errors }"
                class="flex--column input__text lg alert-message"
              >
                <label for="numberOfGuestroom">If yes, how many guest rooms do you need?</label>
                <input
                  type="text"
                  id="numberOfGuestroom"
                  placeholder="Number of guest Rooms required"
                  v-bind="field"
                  :disabled="requestInfo.guestroomRequirement === 'no'|| requestInfo.guestroomRequirement === ''"
                >
                <span class="alert-message">{{errors[0]}}</span>
              </Field>
            </div>
            <div class="content--fourth flex--column">
              <h2>Meeting/Event Information</h2>
              <div class="flex--column">
                <Field
                  rules="required"
                  name="Your meeting/event name"
                  v-model.trim="requestInfo.eventName"
                  v-slot="{ field, errors }"
                  class="flex--column input__text lg alert-message"
                >
                  <label for="eventName">Meeting/Event Name*</label>
                  <input type="text" placeholder="Enter meeting / event name" id="eventName" v-bind="field" required>
                  <span class="alert-message">{{errors[0]}}</span>
                </Field>
                <Field
                  rules="numeric|required"
                  name="Number"
                  v-model.number="requestInfo.attendeesNum"
                  v-slot="{ field, errors }"
                  class="flex--column input__text md alert-message"
                >
                  <label for="attendeesNum">Number of Attendees*</label>
                  <input type="text" placeholder="Enter number" id="attendeesNum" v-bind="field" required>
                  <span class="alert-message">{{errors[0]}}</span>
                </Field>
              </div>
              <Field
                rules="required"
                name="Selection"
                v-model="requestInfo.foodRequirement"
                v-slot="{ field, errors }"
                class="flex--row radio-input-group input__radio"
              >
                <label>Food Service Requirements?*</label>
                <div class="flex--row center">
                  <input type="radio" value="yes" id="foodRequired" v-bind="field">
                  <label for="foodRequired">Yes</label>
                  <input type="radio" value="no" id="noFoodRequired" v-bind="field">
                  <label for="noFoodRequired">No</label>
                </div>
                <span class="alert-message">{{errors[0]}}</span>
              </Field>
              <Field
                rules="required"
                name="Selection"
                v-model="requestInfo.avRequirement"
                v-slot="{ field, errors }"
                class="flex--row radio-input-group input__radio"
              >
                <label>Any AV Requirements for the meeting/event?*</label>
                <div class="flex--row center">
                  <input type="radio" value="yes" id="AvRequired" v-bind="field">
                  <label for="AvRequired">Yes</label>
                  <input type="radio" value="no" id="noAvRequired" v-bind="field">
                  <label for="noAvRequired">No</label>
                </div>
                <span class="alert-message">{{errors[0]}}</span>
              </Field>
              <Field
                rules="required|numeric"
                name="Your budget number"
                v-model.number="requestInfo.budget"
                v-slot="{ field, errors }"
                class="flex--column input__text md alert-message"
              >
                <label for="budget">Total Budget*</label>
                <input type="text" id="budget" v-bind="field" placeholder="Number of budget" required>
                <span class="alert-message">{{errors[0]}}</span>
              </Field>
              <div class="flex--column input__textarea">
                <label for="comments">Comments</label>
                <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments" v-model="requestInfo.comments"/>
              </div>
            </div>
            <div class="content--fourth flex--column">
              <h2>Dates</h2>
              <div class="flex--column">
                <div class="flex--column input__text">
                  <label>Dates*</label>
                  <v-date-picker
                      id="scheduledArrivalDate"
                      is-range
                      is-required
                      v-model="requestInfo.scheduledDates"
                      :min-date="new Date()"
                      :update-on-input="false"
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
                    >
                    <template v-slot="{ inputValue, inputEvents }">
                      <div class="date flex--row">
                        <input
                          :value="inputValue.start"
                          v-on="inputEvents.start"
                        />
                        <span> - </span>
                        <input
                          :value="inputValue.end"
                          v-on="inputEvents.end"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 24 24" xml:space="preserve">
                      <path d="M5.5,5C5.224,5,5,4.776,5,4.5v-4C5,0.224,5.224,0,5.5,0S6,0.224,6,0.5v4C6,4.776,5.776,5,5.5,5z"/>
                          <path d="M18.5,5C18.224,5,18,4.776,18,4.5v-4C18,0.224,18.224,0,18.5,0S19,0.224,19,0.5v4C19,4.776,18.776,5,18.5,5z"/>
                          <path d="M24,8V5.5C24,3.57,22.43,2,20.5,2H20v2.5C20,5.327,19.327,6,18.5,6S17,5.327,17,4.5V2H7v2.5C7,5.327,6.327,6,5.5,6S4,5.327,4,4.5V2H3.5C1.57,2,0,3.57,0,5.5V8H24z"/>
                          <path d="M0,9v11.5C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5V9H0z M12,19c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.276,0.224-0.5,0.5-0.5S7,18.724,7,19c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H7.5C7.224,17,7,16.776,7,16.5S7.224,16,7.5,16H9c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2c0,0.276-0.224,0.5-0.5,0.5S6,14.276,6,14c0-1.654,1.346-3,3-3s3,1.346,3,3c0,1.042-0.534,1.962-1.343,2.5C11.466,17.038,12,17.958,12,19z M17,21.5c0,0.276-0.224,0.5-0.5,0.5S16,21.776,16,21.5v-8.793l-1.146,1.146c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l2-2c0.144-0.143,0.357-0.186,0.545-0.108C16.878,11.115,17,11.298,17,11.5V21.5z"/>
                    </svg>
                      </div>
                    </template>
                  </v-date-picker>
                </div>
                <div class="flex--column input__text">
                  <label>Alternate Dates*</label>
                    <v-date-picker
                      id="alternateArrivalDate"
                      is-range
                      is-required
                      v-model="requestInfo.alternateDates"
                      :update-on-input="false"
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
                    >
                      <template v-slot="{ inputValue, inputEvents }">
                        <div class="date flex--row">
                          <input
                              :value="inputValue.start"
                              v-on="inputEvents.start"
                          />
                          <span> - </span>
                          <input
                              :value="inputValue.end"
                              v-on="inputEvents.end"
                            >
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                               viewBox="0 0 24 24" xml:space="preserve">
                      <path d="M5.5,5C5.224,5,5,4.776,5,4.5v-4C5,0.224,5.224,0,5.5,0S6,0.224,6,0.5v4C6,4.776,5.776,5,5.5,5z"/>
                            <path d="M18.5,5C18.224,5,18,4.776,18,4.5v-4C18,0.224,18.224,0,18.5,0S19,0.224,19,0.5v4C19,4.776,18.776,5,18.5,5z"/>
                            <path d="M24,8V5.5C24,3.57,22.43,2,20.5,2H20v2.5C20,5.327,19.327,6,18.5,6S17,5.327,17,4.5V2H7v2.5C7,5.327,6.327,6,5.5,6S4,5.327,4,4.5V2H3.5C1.57,2,0,3.57,0,5.5V8H24z"/>
                            <path d="M0,9v11.5C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5V9H0z M12,19c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.276,0.224-0.5,0.5-0.5S7,18.724,7,19c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H7.5C7.224,17,7,16.776,7,16.5S7.224,16,7.5,16H9c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2c0,0.276-0.224,0.5-0.5,0.5S6,14.276,6,14c0-1.654,1.346-3,3-3s3,1.346,3,3c0,1.042-0.534,1.962-1.343,2.5C11.466,17.038,12,17.958,12,19z M17,21.5c0,0.276-0.224,0.5-0.5,0.5S16,21.776,16,21.5v-8.793l-1.146,1.146c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l2-2c0.144-0.143,0.357-0.186,0.545-0.108C16.878,11.115,17,11.298,17,11.5V21.5z"/>
                    </svg>
                        </div>
                      </template>
                    </v-date-picker>
                </div>
              </div>
            </div>
            <div class="content--fifth flex--column input__textarea">
              <h2>Additional Information</h2>
              <textarea name="additionInfo" placeholder="Program Agenda etc." cols="30" rows="10" v-model="requestInfo.additionalInfo"/>
            </div>
            <div
              class="content--sixth flex--column"
            >
              <label for="consent" class="input__checkbox">
                <input type="checkbox" id="consent" @click="checked = !checked" required>
                I understand that this form collects my name, email and phone number so I can be contacted.
                For more information, please check our
                <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer" class="link">privacy policy</router-link>.
              </label>
            </div>
          </div>
          <button type="submit" :disabled="!checked" class="btn-outline-md">SUBMIT</button>
        </form>
      </Form>
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
import firebaseApi from '@/common/firebaseApi'
import { Form, Field } from 'vee-validate'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    Form,
    Field
  },
  data () {
    return {
      checked: false,
      requestInfo: {
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
      this.requestInfo.confirmationNum = 'ARNSEM' + dayjs().format('MMDDYYSSS')
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
        firebaseApi.postData('eventsRequestList', this.requestInfo).then(() => {
          this.$notify({
            type: 'success',
            customClass: 'notification-class',
            message: 'Your request has been submitted successfully.'
          })
        }).then(() => {
          // Reload current page to reset all data
          setTimeout(() => {
            this.$router.push('/events')
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
    this.requestInfo.scheduledDates = {
      start: new Date(new Date().setDate(new Date().getDate() + 15)),
      end: new Date(new Date().setDate(new Date().getDate() + 16))
    }
    this.requestInfo.alternateDates = {
      start: new Date(new Date().setDate(new Date().getDate() + 17)),
      end: new Date(new Date().setDate(new Date().getDate() + 18))
    }
  }
}
</script>
<style src="./EventsInquiry.scss" lang="scss" scoped/>
