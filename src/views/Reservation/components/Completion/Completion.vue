<template>
  <div class="completion flex--column">
    <checkout-navbar></checkout-navbar>
    <section>
      <div class="completion__container flex--row">
        <div class="block-1 flex--column">
          <div>
            <h2>Stay well at A Resort & Spa</h2>
            <h4>Thank you for booking direct, {{ firstName }}.</h4>
          </div>
          <div class="content">
            <p>A Resort & Spa</p>
            <p>#{{confirmationNum}}</p>
          </div>
        </div>
        <div class="block-2">
          <figure class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 24 24" xml:space="preserve">
              <path d="M23.5,15h-23C0.224,15,0,15.224,0,15.5S0.224,16,0.5,16h23c0.276,0,0.5-0.224,0.5-0.5S23.776,15,23.5,15z"/>
              <path d="M11,17.5c0-0.276-0.224-0.5-0.5-0.5h-4C6.224,17,6,17.224,6,17.5S6.224,18,6.5,18h4C10.776,18,11,17.776,11,17.5z"/>
              <path d="M18.5,18h-4c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h4c0.276,0,0.5-0.224,0.5-0.5S18.776,18,18.5,18z"/>
              <path d="M13,20.5c0-0.276-0.224-0.5-0.5-0.5h-3C9.224,20,9,20.224,9,20.5S9.224,21,9.5,21h3C12.776,21,13,20.776,13,20.5z"/>
              <path d="M12.52,18h-0.01c-0.002,0-0.003,0.001-0.005,0.001S12.502,18,12.5,18c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S12.796,18,12.52,18z"/>
              <path d="M14.52,20h-0.01c-0.002,0-0.003,0.001-0.005,0.001S14.502,20,14.5,20c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S14.796,20,14.52,20z"/>
              <path d="M7.52,20H7.51c-0.002,0-0.003,0.001-0.005,0.001S7.502,20,7.5,20C7.224,20,7,20.224,7,20.5C7,20.776,7.224,21,7.5,21c0.003,0,0.006-0.002,0.01-0.002C7.513,20.998,7.516,21,7.52,21c0.276,0,0.5-0.224,0.5-0.5S7.796,20,7.52,20z"/>
              <path d="M10.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S10.502,22,10.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S10.796,22,10.52,22z"/>
              <path d="M12.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S12.502,22,12.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S12.796,22,12.52,22z"/>
              <path d="M14.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S14.502,22,14.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S14.796,22,14.52,22z"/>
              <path d="M19.49,4c0.208,0.021,1.02,0.451,1.736,0.919C21.311,4.973,21.405,5,21.5,5c0.117,0,0.233-0.041,0.327-0.122C22.158,4.592,23.003,4,23.5,4C23.776,4,24,3.776,24,3.5S23.776,3,23.5,3c-0.742,0-1.589,0.553-2.032,0.886C20.835,3.491,19.957,3,19.5,3c-0.276,0-0.505,0.224-0.505,0.5C18.995,3.776,19.214,4,19.49,4z"/>
              <path d="M11.5,14c2.481,0,4.5-2.019,4.5-4.5S13.981,5,11.5,5S7,7.019,7,9.5S9.019,14,11.5,14z"/>
              <path d="M11.5,4C11.776,4,12,3.776,12,3.5v-2C12,1.224,11.776,1,11.5,1S11,1.224,11,1.5v2C11,3.776,11.224,4,11.5,4z"/>
              <path d="M8.067,4.554c0.092,0.161,0.261,0.25,0.433,0.25c0.085,0,0.171-0.021,0.25-0.067c0.239-0.138,0.321-0.444,0.183-0.683l-1-1.732c-0.138-0.24-0.444-0.32-0.683-0.183C7.011,2.277,6.929,2.583,7.067,2.822L8.067,4.554z"/>
              <path d="M4.322,5.933l1.731,1C6.133,6.979,6.219,7,6.304,7c0.172,0,0.341-0.089,0.433-0.25c0.139-0.239,0.057-0.545-0.183-0.683l-1.731-1C4.583,4.93,4.276,5.01,4.14,5.25C4.001,5.489,4.083,5.795,4.322,5.933z"/>
              <path d="M16.446,12.933l1.731,1C18.257,13.979,18.343,14,18.428,14c0.172,0,0.341-0.089,0.433-0.25c0.139-0.239,0.057-0.545-0.183-0.683l-1.731-1c-0.238-0.136-0.545-0.057-0.683,0.183C16.125,12.489,16.207,12.795,16.446,12.933z"/>
              <path d="M3.5,10h2C5.776,10,6,9.776,6,9.5S5.776,9,5.5,9h-2C3.224,9,3,9.224,3,9.5S3.224,10,3.5,10z"/>
              <path d="M17.5,9C17.224,9,17,9.224,17,9.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5S19.776,9,19.5,9H17.5z"/>
              <path d="M6.054,12.067l-1.731,1c-0.239,0.138-0.321,0.444-0.183,0.683C4.231,13.911,4.4,14,4.572,14c0.085,0,0.171-0.021,0.25-0.067l1.731-1c0.239-0.138,0.321-0.444,0.183-0.683C6.6,12.01,6.293,11.929,6.054,12.067z"/>
              <path d="M16.696,7c0.085,0,0.171-0.021,0.25-0.067l1.731-1c0.239-0.138,0.321-0.444,0.183-0.683c-0.138-0.24-0.445-0.322-0.683-0.183l-1.731,1c-0.239,0.138-0.321,0.444-0.183,0.683C16.355,6.911,16.524,7,16.696,7z"/>
              <path d="M14.25,4.737c0.079,0.045,0.165,0.067,0.25,0.067c0.172,0,0.341-0.089,0.433-0.25l1-1.732c0.139-0.239,0.057-0.545-0.183-0.683c-0.238-0.136-0.545-0.057-0.683,0.183l-1,1.732C13.929,4.293,14.011,4.599,14.25,4.737z"/>
              <circle cx="4.5" cy="17.5" r="0.5"/>
              </svg>
          </figure>
          <div class="flex--column content description">
            <p>{{ dateStart }} - {{ dateEnd }}</p>
            <router-link to="/manage-booking" class="flex--row">
              <span>STAY DETAILS</span>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   viewBox="0 0 24 24" xml:space="preserve">
                <g>
                  <path d="M12,0.495C5.656,0.495,0.495,5.656,0.495,12S5.656,23.505,12,23.505c6.344,0,11.505-5.161,11.505-11.505S18.344,0.495,12,0.495z M12.359,12.359l-5,4.989c-0.098,0.097-0.226,0.146-0.354,0.146s-0.256-0.049-0.354-0.147c-0.195-0.195-0.195-0.512,0-0.707l4.646-4.636L6.647,7.354c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l5.005,5.005c0.094,0.094,0.146,0.221,0.146,0.354C12.505,12.138,12.453,12.266,12.359,12.359z M18.359,12.359l-4.994,4.995c-0.098,0.098-0.226,0.146-0.354,0.146s-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l4.641-4.641l-4.651-4.652c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l5.005,5.005C18.554,11.847,18.554,12.164,18.359,12.359z"/>
                </g>
              </svg>
            </router-link>
          </div>
          <p class="special-note">If you would like to bring your pet(s), please check out <router-link to="/pet-friendly/pet-friendly-form" target="_blank" rel="noreferrer noopener">here</router-link> to complete pet registration. Thank you.</p>
        </div>
      </div>
    </section>
    <checkout-footer></checkout-footer>
  </div>
</template>
<script>
import CheckoutNavbar from '@/components/header/navbar/CheckoutNavbar.vue'
import CheckoutFooter from '@/components/footer/CheckoutFooter.vue'
import dayjs from 'dayjs'
import { mapState } from 'vuex'
export default {
  components: {
    CheckoutNavbar,
    CheckoutFooter
  },
  data () {
    return {
      firstName: '',
      confirmationNum: '',
      dateStart: '',
      dateEnd: '',
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    }
  },
  computed: {
    ...mapState({
      reservedInfo: state => state.reservation.reservationDetails
    })
  },
  mounted () {
    // Prevent user use the back button to go back to previous page
    // window.history.pushState(null, null, location.href)
    // window.onpopstate = function () {
    //   history.go(1)
    // }
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.back, false)
    }
  },
  beforeDestroy () {
    if (this.$router.currentRoute.name !== 'Completion') {
      this.$store.dispatch('resetReservedInfo')
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.back, false)
    window.sessionStorage.clear()
  },
  methods: {
    // Prevent user use the back button to go back to previous page
    back () {
      history.pushState(null, null, document.URL)
    }
  },
  created () {
    this.firstName = this.$_.capitalize(this.reservedInfo.customerInfo.contactDetail.firstName)
    this.confirmationNum = this.reservedInfo.confirmationNum
    this.dateStart = dayjs(this.reservedInfo.roomSelections[0].date.start).format('ddd MMM, DD, YYYY')
    this.dateEnd = dayjs(this.reservedInfo.roomSelections[0].date.end).format('ddd MMM, DD, YYYY')
  }
}
</script>
<style lang="scss" src="./Completion.scss" scoped/>
