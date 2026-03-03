<template>
  <div>
    <navbar/>
    <section class="page-container">
      <Form
        ref="form"
        as="div"
        class="page-wrapper"
        v-slot="{ handleSubmit }"
      >
        <form @submit.prevent="handleSubmit(onSubmit)" class="flex--column">
          <!-- Honeypot -->
          <input type="text" name="website" v-model="honeypot" style="display:none" tabindex="-1" autocomplete="off">

          <div class="header">
            <h4 class="content__title">{{ $t('wedding.title') }}</h4>
            <h1 class="page__title">{{ $t('wedding.subtitle') }}</h1>
            <br>
            <p class="content__description">{{ $t('wedding.description') }}</p>
            <br>
            <p class="content__description">{{ $t('wedding.phone') }}</p>
          </div>
          <div class="body">
            <div class="content flex--column">
              <div class="flex--column">
                <Field
                  rules="required"
                  name="Your title"
                  v-model="requestWeddingInfo.title"
                  v-slot="{ field, errors }"
                  class="flex--column input__select alert-message"
                >
                  <label for="title">{{ $t('wedding.titleField') }}</label>
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
                    v-model.trim="requestWeddingInfo.firstName"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="firstName">{{ $t('wedding.firstName') }}</label>
                    <input type="text" id="firstName" :placeholder="$t('wedding.firstNamePlaceholder')" required v-bind="field">
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                  <Field
                    rules="required|alpha_spaces"
                    name="Your last name"
                    v-model.trim="requestWeddingInfo.lastName"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="lastName">{{ $t('wedding.lastName') }}</label>
                    <input type="text" id="lastName" :placeholder="$t('wedding.lastNamePlaceholder')" required v-bind="field">
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                </div>
                <Field
                  rules="required|regexPhoneNum"
                  name="Your phone number"
                  v-model.trim="requestWeddingInfo.phoneNum"
                  v-slot="{ field, errors }"
                  class="flex--column input__text md alert-message"
                >
                  <label for="phoneNum">{{ $t('wedding.phoneNum') }}</label>
                  <input type="text" id="phoneNum" :placeholder="$t('wedding.phoneNumPlaceholder')" required v-bind="field">
                  <span class="alert-message">{{errors[0]}}</span>
                </Field>
                <Field
                  rules="required|regexEmail"
                  name="Your email address"
                  v-model.trim="requestWeddingInfo.email"
                  v-slot="{ field, errors }"
                  class="flex--column input__text md alert-message"
                >
                  <label for="email">{{ $t('wedding.email') }}</label>
                  <input type="text" id="email" :placeholder="$t('wedding.emailPlaceholder')" required v-bind="field">
                  <span class="alert-message">{{errors[0]}}</span>
                </Field>
                <div class="flex--column input__text">
                  <label>{{ $t('wedding.weddingDate') }}</label>
                  <v-date-picker
                      id="weddingDate"
                      is-required
                      v-model="requestWeddingInfo.weddingDate"
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
                    >
                      <template v-slot="{ inputValue, inputEvents }">
                        <div class="date flex--row">
                          <input
                            :value="inputValue"
                            v-on="inputEvents"
                          />
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                               viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 30px; height: 30px; fill: #3d405b;" xml:space="preserve">
                            <path d="M5.5,5C5.224,5,5,4.776,5,4.5v-4C5,0.224,5.224,0,5.5,0S6,0.224,6,0.5v4C6,4.776,5.776,5,5.5,5z"/>
                            <path d="M18.5,5C18.224,5,18,4.776,18,4.5v-4C18,0.224,18.224,0,18.5,0S19,0.224,19,0.5v4C19,4.776,18.776,5,18.5,5z"/>
                            <path d="M24,8V5.5C24,3.57,22.43,2,20.5,2H20v2.5C20,5.327,19.327,6,18.5,6S17,5.327,17,4.5V2H7v2.5C7,5.327,6.327,6,5.5,6S4,5.327,4,4.5V2H3.5C1.57,2,0,3.57,0,5.5V8H24z"/>
                            <path d="M0,9v11.5C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5V9H0z M12,19c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.276,0.224-0.5,0.5-0.5S7,18.724,7,19c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H7.5C7.224,17,7,16.776,7,16.5S7.224,16,7.5,16H9c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2c0,0.276-0.224,0.5-0.5,0.5S6,14.276,6,14c0-1.654,1.346-3,3-3s3,1.346,3,3c0,1.042-0.534,1.962-1.343,2.5C11.466,17.038,12,17.958,12,19z M17,21.5c0,0.276-0.224,0.5-0.5,0.5S16,21.776,16,21.5v-8.793l-1.146,1.146c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l2-2c0.144-0.143,0.357-0.186,0.545-0.108C16.878,11.115,17,11.298,17,11.5V21.5z"/>
                          </svg>
                        </div>
                      </template>
                    </v-date-picker>
                </div>
                <div class="flex--column input__checkbox">
                  <label>{{ $t('wedding.selectAll') }}</label>
                  <label for="ceremony">
                    <input type="checkbox" id="ceremony" value="Ceremony / Reception" v-model="requestWeddingInfo.serviceNeed">
                    {{ $t('wedding.services.ceremony') }}
                  </label>
                  <label for="shower">
                    <input type="checkbox" id="shower" value="Wedding Shower" v-model="requestWeddingInfo.serviceNeed">
                    {{ $t('wedding.services.shower') }}
                  </label>
                  <label for="dinner">
                    <input type="checkbox" id="dinner" value="Rehearsal Dinner" v-model="requestWeddingInfo.serviceNeed">
                    {{ $t('wedding.services.dinner') }}
                  </label>
                  <label for="guestrooms">
                    <input type="checkbox" id="guestrooms" value="Guestrooms Only" v-model="requestWeddingInfo.serviceNeed">
                    {{ $t('wedding.services.guestrooms') }}
                  </label>
                  <label for="reception">
                    <input type="checkbox" id="reception" value="Reception Only" v-model="requestWeddingInfo.serviceNeed">
                    {{ $t('wedding.services.reception') }}
                  </label>
                  <label for="brunch">
                    <input type="checkbox" id="brunch" value="Arrival / Departure Brunch" v-model="requestWeddingInfo.serviceNeed">
                    {{ $t('wedding.services.brunch') }}
                  </label>
                </div>
                <Field
                  rules="required|min_value:8|numeric"
                  name="Number of guests"
                  v-model.number="requestWeddingInfo.numberOfGuest"
                  v-slot="{ field, errors }"
                  class="flex--column input__text sm alert-message"
                >
                  <label for="numberOfGuest">{{ $t('wedding.numberOfGuest') }}</label>
                  <input type="text" id="numberOfGuest" required v-bind="field">
                  <span class="alert-message">{{errors[0]}}</span>
                </Field>
                <div class="input__checkbox">
                  <label for="consent">
                    <input type="checkbox" id="consent" @click="checked = !checked" required>
                    {{ $t('wedding.consent') }}
                    <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer" class="link">{{ $t('wedding.privacyPolicy') }}</router-link>.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            :disabled="!checked || submitting"
            class="btn-outline-md"
          >{{ $t('common.submit') }}</button>
        </form>
      </Form>

      <div v-if="orderId" class="wedding-confirmation page-wrapper">
        <h3>{{ $t('wedding.successMessage') }}</h3>
        <p><strong>{{ $t('wedding.orderLabel') }}:</strong> {{ orderId }}</p>
      </div>
    </section>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
import { Form, Field } from 'vee-validate'
import firebaseApi from '@/common/firebaseApi'
import { sendConfirmationEmail } from '@/common/emailService'
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
      submitting: false,
      orderId: null,
      honeypot: '',
      requestWeddingInfo: {
        type: 'Wedding Inquiry',
        status: 'Upcoming',
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
    async onSubmit () {
      if (this.honeypot) return
      this.$confirm(this.$t('common.readyToSubmit'),
        {
          confirmButtonText: this.$t('common.yes'),
          cancelButtonText: this.$t('common.cancel'),
          customClass: 'notification-class',
          type: 'warning'
        }).then(async () => {
        this.submitting = true
        const result = await firebaseApi.submitWeddingRequest({
          type: this.requestWeddingInfo.type,
          status: this.requestWeddingInfo.status,
          title: this.requestWeddingInfo.title,
          firstName: this.requestWeddingInfo.firstName,
          lastName: this.requestWeddingInfo.lastName,
          email: this.requestWeddingInfo.email,
          phoneNum: this.requestWeddingInfo.phoneNum,
          weddingDate: this.requestWeddingInfo.weddingDate ? this.requestWeddingInfo.weddingDate.toString() : '',
          serviceNeed: this.requestWeddingInfo.serviceNeed,
          numberOfGuest: this.requestWeddingInfo.numberOfGuest
        })
        if (result.success) {
          this.orderId = result.orderId
          await sendConfirmationEmail(
            process.env.VUE_APP_EMAILJS_TEMPLATE_WEDDING,
            {
              guest_name: `${this.requestWeddingInfo.firstName} ${this.requestWeddingInfo.lastName}`,
              email: this.requestWeddingInfo.email,
              event_date: this.requestWeddingInfo.weddingDate ? this.requestWeddingInfo.weddingDate.toString() : '',
              order_id: result.orderId,
              package: this.requestWeddingInfo.serviceNeed.join(', ')
            }
          )
        } else {
          this.$notify({
            type: 'error',
            customClass: 'notification-class',
            message: this.$t('common.error')
          })
        }
        this.submitting = false
      }).catch(() => {
        setTimeout(() => {
          this.$notify({
            type: 'info',
            customClass: 'notification-class',
            message: this.$t('common.requestCanceled')
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
