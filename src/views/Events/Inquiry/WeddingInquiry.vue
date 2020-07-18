<template>
  <div>
    <navbar/>
    <section class="page-container">
      <div class="page-wrapper">
        <form class="flex--column">
          <div class="header page-content--header">
            <h4>Weddings</h4>
            <h1>Request Proposal</h1>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolor earum eveniet fuga laboriosam maiores ratione repellendus rerum temporibus? Amet aspernatur dolorem impedit ipsum maiores, officiis placeat qui totam.</p>
            <br>
            <p>If you would like to contact us directly, please call 480.000.0008</p>
          </div>
          <div class="body">
            <div class="content flex--column">
              <div class="flex--column">
                <div class="flex--column">
                  <label for="title">Title</label>
                  <select name="title" id="title" v-model="requestWeddingInfo.title">
                    <option value="mr">Mr.</option>
                    <option value="ms">Ms.</option>
                  </select>
                </div>
                <div class="flex--row">
                  <div class="flex--column">
                    <label for="firstName">First Name*</label>
                    <input type="text" id="firstName" placeholder="First name" required v-model="requestWeddingInfo.firstName">
                  </div>
                  <div class="flex--column">
                    <label for="lastName">Last Name*</label>
                    <input type="text" id="lastName" placeholder="Last name" required v-model="requestWeddingInfo.lastName">
                  </div>
                </div>
                <div class="flex--column">
                  <label for="phoneNum">Phone Number*</label>
                  <input type="text" id="phoneNum" placeholder="Phone Number" required v-model="requestWeddingInfo.phoneNum">
                </div>
                <div class="flex--column">
                  <label for="email">Email Address*</label>
                  <input type="text" id="email" placeholder="Email Address" required v-model="requestWeddingInfo.email">
                </div>
                <div class="flex--column">
                  <label>Wedding Date</label>
                  <div class="flex--row date">
                    <v-date-picker
                      id="weddingDate"
                      required
                      v-model="requestWeddingInfo.weddingDate"
                      class="util__flex--row"
                      :input-props="{
                      class: 'date-picker-input',
                      readonly: true,
                      isRequired: true
                    }"
                    />
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                    <input type="checkbox" id="ceremony" v-model="requestWeddingInfo.serviceNeed">
                    Ceremony / Reception
                  </label>
                  <label for="shower">
                    <input type="checkbox" id="shower" v-model="requestWeddingInfo.serviceNeed">
                    Wedding Shower
                  </label>
                  <label for="dinner">
                    <input type="checkbox" id="dinner" v-model="requestWeddingInfo.serviceNeed">
                    Rehersal Dinner
                  </label>
                  <label for="guestrooms">
                    <input type="checkbox" id="guestrooms" v-model="requestWeddingInfo.serviceNeed">
                    Guestrooms Only
                  </label>
                  <label for="reception">
                    <input type="checkbox" id="reception" v-model="requestWeddingInfo.serviceNeed">
                    Reception Only
                  </label>
                  <label for="brunch">
                    <input type="checkbox" id="brunch" v-model="requestWeddingInfo.serviceNeed">
                    Arrival / Departure Brunch
                  </label>
                </div>
                <div class="flex--column">
                  <label for="numberOfGuest">Number of Guests*</label>
                  <input type="text" id="numberOfGuest" required v-model="requestWeddingInfo.numberOfGuest">
                </div>
                <div class="flex--column">
                  <label for="consent">
                    <input type="checkbox" id="consent" v-model="requestWeddingInfo.consent" required>
                    I understand that this form collects my name, email and phone number so I can be contacted.
                    For more information, please check our
                    <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</router-link>.
                  </label>
                  <button>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </form>
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
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  },
  data () {
    return {
      requestWeddingInfo: {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        weddingDate: null,
        serviceNeed: [],
        numberOfGuest: '',
        consent: false
      }
    }
  }
}
</script>
<style src="./WeddingInquiry.scss" lang="scss" scoped/>
