<template>
  <div>
    <checkout-navbar/>
    <div class="header">
      <img src="../../assets/images/checkout/background-img.jpg" alt="" class="header__image"/>
      <div style="position: absolute; bottom: 0;">
        <div class="header__content flex--column">
          <h2>A Resort & Spa</h2>
          <span class="flex--row" style="align-items: center;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 10px;fill: #283845;" xml:space="preserve">
              <g>
                <path d="M11.5,21c0.156,0,0.302-0.072,0.397-0.196C12.187,20.426,19,11.49,19,7.5C19,3.364,15.636,0,11.5,0S4,3.364,4,7.5c0,3.99,6.813,12.926,7.103,13.304C11.198,20.928,11.344,21,11.5,21z M8,7.5C8,5.57,9.57,4,11.5,4S15,5.57,15,7.5S13.43,11,11.5,11S8,9.43,8,7.5z"/>
                <path d="M22.916,23.223l-4-6C18.823,17.084,18.667,17,18.5,17h-2.705c-1.449,2.229-2.79,4.003-3.104,4.412C12.41,21.779,11.964,22,11.5,22s-0.91-0.221-1.192-0.589C9.995,21.002,8.653,19.228,7.205,17H4.5c-0.167,0-0.323,0.084-0.416,0.223l-4,6c-0.102,0.153-0.112,0.351-0.025,0.514C0.146,23.898,0.315,24,0.5,24h22c0.185,0,0.354-0.102,0.44-0.264C23.028,23.573,23.019,23.376,22.916,23.223z"/>
              </g>
            </svg>
            135 Bear Wallow Ln, Sedona, AZ 86336
          </span>
          <span class="flex--row" style="align-items: center;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 10px;fill: #283845;" xml:space="preserve">
              <path d="M2.801,10.066c0.547,0.547,1.539,0.53,2.044,0.023c0.744-0.688,1.563-1.258,2.428-1.69C7.809,8.139,8,7.506,8,7V6.374C9.276,6.031,10.725,6,12,6c1.351,0,2.764,0.031,4,0.371V7c0,0.664,0.268,1.19,0.712,1.406c0.904,0.452,1.726,1.02,2.439,1.689c0.272,0.257,0.642,0.405,1.014,0.405c0.393,0,0.76-0.15,1.034-0.424l2.376-2.376C23.849,7.426,24,7.059,24,6.665c0-0.393-0.15-0.76-0.435-1.043C20.923,3.117,17.355,2,12,2C6.644,2,3.077,3.117,0.424,5.631C0.15,5.905,0,6.272,0,6.665c0,0.396,0.158,0.773,0.424,1.024L2.801,10.066z"/>
              <path d="M12,7c-2.804,0-5,1.538-5,3.5S9.196,14,12,14s5-1.538,5-3.5S14.804,7,12,7z"/>
              <path d="M20.181,12.473c-0.351-0.351-0.818-0.518-1.306-0.475c-0.519,0.047-0.992,0.33-1.298,0.775C16.662,14.105,14.421,15,12,15c-2.42,0-4.662-0.895-5.577-2.227c-0.306-0.446-0.779-0.729-1.298-0.776c-0.485-0.042-0.952,0.123-1.303,0.474l-2.792,2.792C0.308,15.985,0,16.604,0,17.328V19.5C0,20.879,1.122,22,2.5,22h19c1.379,0,2.5-1.121,2.5-2.5v-2.172c0-0.668-0.26-1.295-0.732-1.768L20.181,12.473z"/>
            </svg>
            480-000-0101 (Direct)
          </span>
          <span class="flex--row" style="align-items: center;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 10px;fill: #283845;" xml:space="preserve">
              <path d="M2.801,10.066c0.547,0.547,1.539,0.53,2.044,0.023c0.744-0.688,1.563-1.258,2.428-1.69C7.809,8.139,8,7.506,8,7V6.374C9.276,6.031,10.725,6,12,6c1.351,0,2.764,0.031,4,0.371V7c0,0.664,0.268,1.19,0.712,1.406c0.904,0.452,1.726,1.02,2.439,1.689c0.272,0.257,0.642,0.405,1.014,0.405c0.393,0,0.76-0.15,1.034-0.424l2.376-2.376C23.849,7.426,24,7.059,24,6.665c0-0.393-0.15-0.76-0.435-1.043C20.923,3.117,17.355,2,12,2C6.644,2,3.077,3.117,0.424,5.631C0.15,5.905,0,6.272,0,6.665c0,0.396,0.158,0.773,0.424,1.024L2.801,10.066z"/>
              <path d="M12,7c-2.804,0-5,1.538-5,3.5S9.196,14,12,14s5-1.538,5-3.5S14.804,7,12,7z"/>
              <path d="M20.181,12.473c-0.351-0.351-0.818-0.518-1.306-0.475c-0.519,0.047-0.992,0.33-1.298,0.775C16.662,14.105,14.421,15,12,15c-2.42,0-4.662-0.895-5.577-2.227c-0.306-0.446-0.779-0.729-1.298-0.776c-0.485-0.042-0.952,0.123-1.303,0.474l-2.792,2.792C0.308,15.985,0,16.604,0,17.328V19.5C0,20.879,1.122,22,2.5,22h19c1.379,0,2.5-1.121,2.5-2.5v-2.172c0-0.668-0.26-1.295-0.732-1.768L20.181,12.473z"/>
            </svg>
            480-000-0001 (Reservation)
          </span>
        </div>
      </div>
    </div>
    <section class="reservation">
      <div class="reservation__container flex--row">
        <div class="reservation__main flex--column flex--center">
          <div class="reservation__header">
            <div class="reservation--alert flex--row" v-if="currentStep <= 1">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 24 24" xml:space="preserve">
                <path d="M12,0C5.383,0,0,5.383,0,12c0,6.617,5.383,12,12,12c6.617,0,12-5.383,12-12C24,5.383,18.617,0,12,0z M12,4c1.654,0,3,1.346,3,3s-1.346,3-3,3S9,8.654,9,7S10.346,4,12,4z M15.5,20h-6C8.673,20,8,19.327,8,18.5S8.673,17,9.5,17H10v-3H9.5C8.673,14,8,13.327,8,12.5S8.673,11,9.5,11h4c0.827,0,1.5,0.673,1.5,1.5V17h0.5c0.827,0,1.5,0.673,1.5,1.5S16.327,20,15.5,20z"/>
              </svg>
              <span>
                If the dates or accommodations do not match what your needs, please call our reservations specialists for additional availability through 480.001.0002.
              </span>
            </div>
            <div class="reservation__header--search flex--row" v-if="currentStep <= 1">
              <div class=" search--col col-1 dropdown">
                <div class="flex--row" @click="isGuestSelected = !isGuestSelected">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 24 24" style="width: 32px; height: 32px; margin-right: 10px;" xml:space="preserve">
                    <path d="M20.755,16.342l-2.756-0.688l-0.203-0.817c0.729-0.746,1.233-1.746,1.401-2.778c0.431-0.153,0.756-0.539,0.814-1.014l0.185-1.478C20.24,9.217,20.132,8.865,19.9,8.6c-0.113-0.13-0.252-0.234-0.405-0.306l0.061-1.25L19.799,6.8c0.448-0.478,0.822-1.292,0.055-2.464c-0.58-0.886-1.559-1.335-2.909-1.335c-0.539,0-1.801,0-2.963,0.825c-0.199,0.142-0.267,0.409-0.158,0.628c0.492,1,0.742,2.42,0.742,4.221c0,2.459,0.591,3.55,0.846,3.905c0.041,0.058,0.095,0.106,0.156,0.142c0.402,0.233,0.597,0.606,0.611,1.174c0.011,0.415-0.247,0.742-0.465,0.943c-0.124,0.115-0.182,0.284-0.154,0.45c0.027,0.167,0.138,0.308,0.292,0.375C17.764,16.506,19,18.404,19,20.5c0,0.276,0.224,0.5,0.5,0.5h4c0.276,0,0.5-0.226,0.5-0.502C24,18.529,22.666,16.819,20.755,16.342z M14.755,16.342l-2.756-0.688l-0.11-0.443c1.887-0.337,2.865-0.906,2.91-0.933c0.141-0.083,0.229-0.233,0.24-0.396c0.012-0.164-0.061-0.325-0.188-0.428c-0.013-0.01-1.285-1.083-1.285-4.779c0-3.274-0.79-4.935-2.348-4.935h-0.166C10.523,3.238,10.085,3,9,3C7.569,3,4.435,4.429,4.435,8.674c0,3.697-1.272,4.769-1.278,4.774c-0.133,0.1-0.208,0.259-0.199,0.425c0.008,0.167,0.099,0.317,0.241,0.403c0.044,0.026,1.014,0.599,2.913,0.937l-0.11,0.44l-2.756,0.689C1.334,16.819,0,18.529,0,20.5C0,20.776,0.224,21,0.5,21h17c0.276,0,0.5-0.226,0.5-0.502C18,18.529,16.666,16.819,14.755,16.342z"/>
                  </svg>
                  <div class="flex--column flex--center">
                    <span>Guests</span>
                    <p>Adults: {{bookingDetails.guests.numOfAdultGuest}}, Children: {{bookingDetails.guests.numOfChildrenGuest}}</p>
                  </div>
                </div>
                <div class="dropdown__content flex--column" :class="dropdownClass">
                  <h4>Select Guests</h4>
                  <el-divider/>
                  <div class="flex--row dropdown__item">
                    <span>Adults</span>
                    <el-input-number size="small" :min="0" :max="8" v-model="bookingDetails.guests.numOfAdultGuest"></el-input-number>
                  </div>
                  <div class="flex--row dropdown__item">
                    <span>Children</span>
                    <el-input-number size="small" :min="0" :max="6" v-model="bookingDetails.guests.numOfChildrenGuest"></el-input-number>
                  </div>
                </div>
              </div>
              <div class="flex--row flex--center search--col col-2">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 24 24" style="width: 32px; height: 32px; margin-right: 10px;" xml:space="preserve">
                    <path d="M5.5,5C5.224,5,5,4.776,5,4.5v-4C5,0.224,5.224,0,5.5,0S6,0.224,6,0.5v4C6,4.776,5.776,5,5.5,5z"/>
                  <path d="M18.5,5C18.224,5,18,4.776,18,4.5v-4C18,0.224,18.224,0,18.5,0S19,0.224,19,0.5v4C19,4.776,18.776,5,18.5,5z"/>
                  <path d="M24,8V5.5C24,3.57,22.43,2,20.5,2H20v2.5C20,5.327,19.327,6,18.5,6S17,5.327,17,4.5V2H7v2.5C7,5.327,6.327,6,5.5,6S4,5.327,4,4.5V2H3.5C1.57,2,0,3.57,0,5.5V8H24z"/>
                  <path d="M0,9v11.5C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5V9H0z M12,19c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.276,0.224-0.5,0.5-0.5S7,18.724,7,19c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H7.5C7.224,17,7,16.776,7,16.5S7.224,16,7.5,16H9c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2c0,0.276-0.224,0.5-0.5,0.5S6,14.276,6,14c0-1.654,1.346-3,3-3s3,1.346,3,3c0,1.042-0.534,1.962-1.343,2.5C11.466,17.038,12,17.958,12,19z M17,21.5c0,0.276-0.224,0.5-0.5,0.5S16,21.776,16,21.5v-8.793l-1.146,1.146c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l2-2c0.144-0.143,0.357-0.186,0.545-0.108C16.878,11.115,17,11.298,17,11.5V21.5z"/>
                  </svg>
                <div class="flex--column flex--center">
                  <span>Check in - Check out</span>
                  <v-date-picker
                    mode="range"
                    is-required
                    class="flex--row"
                    :input-props="{
                        class: 'date-picker-input',
                        readonly: true
                    }"
                    v-model="bookingDetails.date"
                    :disabled-dates="[
                      {
                        start: null,
                        end: new Date()
                      },
                      {
                        start: new Date( new Date().setMonth(new Date().getMonth() + 6)),
                        end: null
                      }
                    ]"
                  />
                </div>
              </div>
              <div class="col-3">
                <button @click="setSearchChoice">
<!--                  <router-link to="/reservation/s1">SEARCH</router-link>-->
                  SEARCH
                </button>
              </div>
            </div>
            <div class="reservation__header--breadcrumb flex--column" v-show="currentStep >= 1">
              <h1>{{steps[currentStep - 1]}}</h1>
              <div>
                <el-steps
                  :active="currentStep - 1"
                  finish-status="success"
                  process-status="process"
                  align-center
                >
                  <el-step title="Rooms" @click.native="switchStep(1)"/>
                  <el-step title="Add-ons" @click.native="switchStep(2)"/>
                  <el-step title="Guest Details" @click.native="switchStep(3)"/>
                  <el-step title="Confirmation" @click.native="switchStep(4)"/>
                </el-steps>
              </div>
            </div>
          </div>
          <!--          This div is search bar for mobile device only  -->
          <div class="reservation__search-bar--mobile"></div>
          <!--          -->
          <div class="reservation__body">
            <div class="reservation__content">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </div>
          </div>
        </div>
        <sidebar
          v-show="displaySidebar"
        />
      </div>
    </section>
    <checkout-footer/>
  </div>
</template>
<script>
import CheckoutNavbar from '@/components/header/navbar/CheckoutNavbar.vue'
import CheckoutFooter from '@/components/footer/CheckoutFooter.vue'
import Sidebar from '@/views/Reservation/components/Sidebar/Sidebar.vue'
export default {
  name: 'reservation',
  components: {
    CheckoutNavbar,
    CheckoutFooter,
    Sidebar
  },
  data () {
    return {
      isGuestSelected: false,
      steps: [
        'Select a Room',
        'Choose your favorite Add-ons',
        'Tell us about you',
        'You are almost done'
      ],
      bookingDetails: {
        date: {
          start: new Date(),
          end: new Date()
        },
        guests: {
          numOfAdultGuest: 0,
          numOfChildrenGuest: 0
        }
      }
    }
  },
  methods: {
    setSearchChoice () {
      const selection = {
        date: this.bookingDetails.date,
        guests: this.bookingDetails.guests
      }
      this.$store.dispatch('searchRoomType', selection)
      this.$router.push('/reservation/s1')
    },
    switchStep (step) {
      if (this.$store.getters.reservationSelection.length !== 0) {
        this.$store.dispatch('switchStep', step)
      }
    }
  },
  computed: {
    currentStep () {
      return this.$store.getters.currentStep
    },
    displaySidebar () {
      return this.$store.getters.currentStep >= 3
    },
    dropdownClass () {
      return {
        'display-dropdown': this.isGuestSelected
      }
    }
  },
  // created () {
  //   this.$store.dispatch('initRoom')
  // },
  deactivated () {
    this.bookingDetails = {
      date: {
        start: new Date(),
        end: new Date()
      },
      guests: {
        numOfAdultGuest: 0,
        numOfChildrenGuest: 0
      }
    }
  }
}
</script>
<style src="./Reservation.scss" lang="scss" scoped/>
