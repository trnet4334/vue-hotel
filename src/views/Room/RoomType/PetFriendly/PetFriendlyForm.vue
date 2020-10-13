<template>
  <div class="pet-friendly-form">
    <navbar/>
<!--    TODO: Finish data processing, submit function.-->
    <div class="page-container">
      <div class="page-wrapper">
        <div class="pet-friendly-form__header flex--column page-content--header">
          <h1>Pet Registration</h1>
          <p>Please tell us some information about your pet(s) that we
            can make some adjustment for your pleasure in your stay.</p>
        </div>
        <div class="pet-friendly-form__body">
          <form class="flex--column">
            <h2>Guest Information</h2>
            <div class="flex--row">
              <div class="flex--column align-center">
                <div class="flex--column">
                  <label for="guestName">Guest Full Name*</label>
                  <input type="text" id="guestName" v-model="petFriendlyForm.guestName" required/>
                </div>
                <div class="flex--column">
                  <label for="guestEmail">Guest Email*</label>
                  <input type="text" id="guestEmail" v-model="petFriendlyForm.guestEmail" required/>
                </div>
              </div>
              <div class="flex--column align-center">
                <div class="flex--column">
                  <label for="reservationNum">Guest Reservation Number*</label>
                  <input type="text" id="reservationNum" v-model="petFriendlyForm.reservationNum" required/>
                </div>
                <div class="flex--column">
                  <label for="guestPhoneNum">Guest Phone Number*</label>
                  <input type="text" id="guestPhoneNum" v-model="petFriendlyForm.guestPhoneNum" required/>
                </div>
              </div>
            </div>
            <br>
            <h2>Pet Information</h2>
            <div class="flex--row">
              <div class="flex--column align-center">
                <div class="flex--column">
                  <label for="petName">Pet's Name</label>
                  <input type="text" id="petName" placeholder="Pet's Name" v-model="petFriendlyForm.petName"/>
                </div>
                <div class="flex--column">
                  <label for="petSize">Pet's Size*</label>
                  <input type="text" id="petSize" placeholder="Pet's Weight" v-model="petFriendlyForm.petSize" required/>
                </div>
              </div>
              <div class="flex--column align-center">
                <div class="flex--column">
                  <label for="petType">Type of Pet*</label>
                  <input type="text" id="petType" placeholder="Type of Pet(dog, cat, etc.)" v-model="petFriendlyForm.petType" required/>
                </div>
                <div class="flex--column">
                  <label for="petBreed">Pet Breed</label>
                  <input type="text" id="petBreed" placeholder="Pet Breed" v-model="petFriendlyForm.petBreed"/>
                </div>
              </div>
            </div>
            <label for="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              rows="7"
              cols="5"
              v-model="petFriendlyForm.comment"
              placeholder="Notes (age, dietary need and so on)"
            />
            <br>
            <h2>About Your Stay</h2>
            <div class="flex--column">
              <label>Check-in Date*</label>
              <div class="flex--row date">
                <v-date-picker
                  id="alternateArrivalDate"
                  required
                  v-model="petFriendlyForm.checkInDate"
                  class="flex--row"
                  :input-props="{
                        class: 'date-picker-input',
                        readonly: true,
                        isRequired: true
                      }"
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
            <div class="flex--row align-center radio-input-group">
              <label>Need a pet sitter, day care or walker?*</label>
              <div class="flex--row">
                <div>
                  <input type="radio" id="requirePetCare" name="Pet Care" value="yes" v-model="petFriendlyForm.requireCare">
                  <label for="requirePetCare">Yes</label>
                </div>
                <div>
                  <input type="radio" id="notRequirePetCare" name="Pet Care" value="no" v-model="petFriendlyForm.requireCare" checked>
                  <label for="notRequirePetCare">No</label>
                </div>
              </div>
            </div>
            <div class="flex--row align-center radio-input-group">
              <label>Need grooming services?*</label>
              <div class="flex--row">
                <div>
                  <input type="radio" id="requireGroomingService" name="Grooming Service" value="yes" v-model="petFriendlyForm.requireService">
                  <label for="requireGroomingService">Yes</label>
                </div>
                <div>
                  <input type="radio" id="notRequireGroomingService" name="Grooming Service" value="no" v-model="petFriendlyForm.requireService" checked>
                  <label for="notRequireGroomingService">No</label>
                </div>
              </div>
            </div>
            <br>
            <br>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
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
      petFriendlyForm: {
        guestName: '',
        guestEmail: '',
        reservationNum: '',
        guestPhoneNum: '',
        petName: '',
        petSize: '',
        petType: '',
        petBreed: '',
        comment: '',
        checkInDate: '',
        requireCare: '',
        requireService: ''
      }
    }
  },
  methods: {}
}
</script>
<style src="./PetFriendlyForm.scss" lang="scss" scoped/>
