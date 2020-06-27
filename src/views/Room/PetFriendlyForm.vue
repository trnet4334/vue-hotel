<template>
  <div class="pet-friendly-form">
    <navbar/>
<!--    TODO: Finish data processing, submit function.-->
    <div class="pet-friendly-form__container">
      <div class="pet-friendly-form__header util__flex--column">
        <h1 class="util__header--subtitle">Pet Registration</h1>
        <p class="util__header--description">Please tell us some information about your pet(s) that we
        can make some adjustment for your pleasure in your stay.</p>
      </div>
      <div class="pet-friendly-form__body">
        <form class="util__flex--column">
          <h2>Guest Information</h2>
          <div class="util__flex--row">
            <div class="util__flex--column form__column--align">
              <div class="util__flex--column">
                <label for="guestName">Guest Full Name*</label>
                <input id="guestName" v-model="petFriendlyForm.guestName" required/>
              </div>
              <div class="util__flex--column">
                <label for="guestEmail">Guest Email*</label>
                <input id="guestEmail" v-model="petFriendlyForm.guestEmail" required/>
              </div>
            </div>
            <div class="util__flex--column form__column--align">
              <div class="util__flex--column">
                <label for="reservationNum">Guest Reservation Number*</label>
                <input id="reservationNum" v-model="petFriendlyForm.reservationNum" required/>
              </div>
              <div class="util__flex--column">
                <label for="guestPhoneNum">Guest Phone Number*</label>
                <input id="guestPhoneNum" v-model="petFriendlyForm.guestPhoneNum" required/>
              </div>
            </div>
          </div>
          <br>
          <h2>Pet Information</h2>
          <div class="util__flex--row">
            <div class="util__flex--column form__column--align">
              <div class="util__flex--column">
                <label for="petName">Pet's Name</label>
                <input id="petName" placeholder="Pet's Name" v-model="petFriendlyForm.petName"/>
              </div>
              <div class="util__flex--column">
                <label for="petSize">Pet's Size*</label>
                <input id="petSize" placeholder="Pet's Weight" v-model="petFriendlyForm.petSize" required/>
              </div>
            </div>
            <div class="util__flex--column form__column--align">
              <div class="util__flex--column">
                <label for="petType">Type of Pet*</label>
                <input id="petType" placeholder="Type of Pet(dog, cat, etc.)" v-model="petFriendlyForm.petType" required/>
              </div>
              <div class="util__flex--column">
                <label for="petBreed">Pet Breed</label>
                <input id="petBreed" placeholder="Pet Breed" v-model="petFriendlyForm.petBreed"/>
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
          <label for="checkInDate">Check-in Date*</label>
          <input type="date" id="checkInDate" v-model="petFriendlyForm.checkInDate" required>
          <div class="util__flex--column form__column--align">
            <label>Need a pet sitter, day care or walker?*</label>
            <div class="util__flex--column">
              <div>
                <input type="radio" id="requirePetCare" name="Pet Care" value="yes" v-model="requireCare">
                <label for="requirePetCare">Yes</label>
              </div>
              <div>
                <input type="radio" id="notRequirePetCare" name="Pet Care" value="no" v-model="requireCare" checked>
                <label for="notRequirePetCare">No</label>
              </div>
            </div>
          </div>
          <div class="util__flex--column form__column--align">
            <label>Need grooming services?*</label>
            <div class="util__flex--column">
              <div>
                <input type="radio" id="requireGroomingService" name="Grooming Service" value="yes" v-model="requireService">
                <label for="requireGroomingService">Yes</label>
              </div>
              <div>
                <input type="radio" id="notRequireGroomingService" name="Grooming Service" value="no" v-model="requireService" checked>
                <label for="notRequireGroomingService">No</label>
              </div>
            </div>
          </div>
          <br>
          <button>SUBMIT</button>
        </form>
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
<style lang="scss" scoped>
  .pet-friendly-form {
    width: 100%;
    position: relative;
    &__container {
      width: 100%;
      padding: 20vh 15vw;
    }
    &__header {
      width: 65%;
      padding-bottom: 30px;
    }
    &__body {
      & form {
        & h2 {
          text-align: start;
          font-size: 2rem;
        }
        & label {
          font-size: 1.5rem;
          text-align: start;
          margin-top: 20px;
        }
        & input {
          border: none;
          border-bottom: 1px solid rgba(61, 64, 91, 0.3);
          background-color: transparent;
          width: 300px;
          line-height: 3rem;
          font-size: 1.2rem;
        }
        & textarea {
          margin-top: 10px;
          resize: none;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(61, 64, 91, 0.3);
          width: 65%;
        }
        & input[type=date] {
          width: 150px;
        }
        & input[type=radio] {
          width: 30px;
        }
        & button {
          margin: 5px auto;
          padding: 20px 100px;
          background-color: transparent;
          border: 2px solid #3d405b;
          border-radius: 5px;
          font-family: inherit;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 3px;
          color: #3d405b;
          &:hover {
            background-color: #3d405b;
            cursor: pointer;
            color: #ffffff;
          }
        }
      }
    }
  }
  .form__column--align {
    align-items: flex-start;
    margin-right: 20px;
  }
</style>
