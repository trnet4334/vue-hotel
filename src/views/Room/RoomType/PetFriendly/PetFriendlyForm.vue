<template>
  <div class="pet-friendly-form">
    <navbar/>
    <ValidationObserver
      ref="form"
      v-slot="{ handleSubmit }"
    >
      <div class="page-container">
        <div class="page-wrapper">
          <div class="pet-friendly-form__header flex--column">
            <h1 class="page__title">Pet Registration</h1>
            <p class="content__description">Please tell us some information about your pet(s) that we
              can make some adjustment for your pleasure in your stay.</p>
          </div>
          <div class="pet-friendly-form__body">
            <form @submit.prevent="handleSubmit(onSubmit)" class="flex--column">
              <h2 class="page__subtitle">Guest Information</h2>
              <div class="flex--row">
                <div class="flex--column align-center">
                  <ValidationProvider
                    rules="required|alpha_spaces"
                    name="Your last name"
                    v-slot="{ errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="guestName">Guest Last Name*</label>
                    <input type="text" id="guestName" v-model="petFriendlyForm.guestLastName" required/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="required|regexEmail"
                    name="Your email address"
                    v-slot="{ errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="guestEmail">Guest Email*</label>
                    <input type="text" id="guestEmail" v-model="petFriendlyForm.guestEmail" required/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                </div>
                <div class="flex--column align-center">
                  <ValidationProvider
                    rules="required"
                    name="Your reservation number"
                    v-slot="{ errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="reservationNum">Guest Reservation Number*</label>
                    <input type="text" id="reservationNum" v-model="petFriendlyForm.reservationNum" required/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="required|regexPhoneNum"
                    name="Your phone number"
                    v-slot="{ errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="guestPhoneNum">Guest Phone Number*</label>
                    <input type="text" id="guestPhoneNum" v-model="petFriendlyForm.guestPhoneNum" required/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                </div>
              </div>
              <br>
              <h2 class="page__subtitle">Pet Information</h2>
              <div class="flex--row">
                <div class="flex--column align-center">
                  <div class="flex--column input__text sm">
                    <label for="petName">Pet's Name</label>
                    <input type="text" id="petName" placeholder="Pet's Name" v-model="petFriendlyForm.petName"/>
                  </div>
                  <ValidationProvider
                    rules="required|numeric"
                    name="Your pet's size"
                    v-slot="{ errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="petSize">Pet's Size*</label>
                    <input type="text" id="petSize" placeholder="Pet's Weight" v-model="petFriendlyForm.petSize" required/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                </div>
                <div class="flex--column align-center">
                  <ValidationProvider
                    rules="required"
                    name="Your type of pet"
                    v-slot="{ errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="petType">Type of Pet*</label>
                    <input type="text" id="petType" placeholder="Type of Pet(dog, cat, etc.)" v-model="petFriendlyForm.petType" required/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="required"
                    name="Your pet breed"
                    v-slot="{ errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="petBreed">Pet Breed*</label>
                    <input type="text" id="petBreed" placeholder="Pet Breed" v-model="petFriendlyForm.petBreed"/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div
                style="width: 100%;"
                class="input__textarea flex--column"
              >
                <label for="comment">Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="7"
                  cols="5"
                  v-model="petFriendlyForm.comment"
                  placeholder="Notes (age, dietary need and so on)"
                />
              </div>
              <br>
              <h2 class="page__subtitle">About Your Stay</h2>
              <div class="flex--row align-center radio-input-group input__radio">
                <label>Need a pet sitter, day care or walker?*</label>
                <div class="flex--row">
                  <div>
                    <input type="radio" id="requirePetCare" name="Pet Care" value="Yes" v-model="petFriendlyForm.requireCare">
                    <label for="requirePetCare">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="notRequirePetCare" name="Pet Care" value="No" v-model="petFriendlyForm.requireCare" checked>
                    <label for="notRequirePetCare">No</label>
                  </div>
                </div>
              </div>
              <div class="flex--row align-center radio-input-group input__radio">
                <label>Need grooming services?*</label>
                <div class="flex--row">
                  <div>
                    <input type="radio" id="requireGroomingService" name="Grooming Service" value="Yes" v-model="petFriendlyForm.requireService">
                    <label for="requireGroomingService">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="notRequireGroomingService" name="Grooming Service" value="No" v-model="petFriendlyForm.requireService" checked>
                    <label for="notRequireGroomingService">No</label>
                  </div>
                </div>
              </div>
              <label for="consent" class="input__checkbox">
                <input type="checkbox" id="consent" @click="checked = !checked" required>
                I understand that this form collects my name, email and phone number so I can be contacted.
                For more information, please check our
                <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</router-link>.
              </label>
              <button type="submit" :disabled="!checked" class="btn-outline-md">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </ValidationObserver>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { numeric } from 'vee-validate/dist/rules'
import firebaseApi from '@/common/firebaseApi'
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
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/g
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
      petFriendlyForm: {
        type: 'Pet Registration',
        status: 'Upcoming',
        guestLastName: '',
        guestEmail: '',
        reservationNum: '',
        guestPhoneNum: '',
        petName: '',
        petSize: '',
        petType: '',
        petBreed: '',
        comment: '',
        requireCare: '',
        requireService: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const isReservedStayExist = await firebaseApi.getReservedStayData('reservationList', {
        email: this.petFriendlyForm.guestEmail,
        reservationNum: this.petFriendlyForm.reservationNum,
        lastName: this.petFriendlyForm.guestLastName
      })
      if (!this.$_.isEmpty(isReservedStayExist)) {
        if (isReservedStayExist.isRegistered === true) {
          await this.$alert('Your pet(s) has been registered. We are looking forward to see you soon.', {
            type: 'info',
            customClass: 'notification-class'
          })
        } else {
          await this.$confirm('Ready to submit?',
            'Confirmation',
            {
              confirmButtonText: 'YES',
              cancelButtonText: 'CANCEL',
              customClass: 'notification-class',
              type: 'warning'
            }).then(() => {
            firebaseApi.postPetRegistrationData('petRegistration', {
              id: isReservedStayExist.id,
              form: this.petFriendlyForm
            }).then(() => {
              this.$notify({
                type: 'success',
                message: 'Your request has been submitted successfully.',
                customClass: 'notification-class'
              })
            }).then(() => {
              // Reload current page to reset all data
              setTimeout(() => {
                this.$router.push('/pet-friendly')
              }, 2000)
            })
          }).catch(() => {
            setTimeout(() => {
              this.$notify({
                type: 'info',
                message: 'Request canceled',
                customClass: 'notification-class'
              })
            }, 500)
          })
        }
      } else {
        await this.$alert('There is no matched reserved data. Please check your reservation number and personal info again.', {
          type: 'info',
          customClass: 'notification-class'
        })
      }
    }
  }
}
</script>
<style src="./PetFriendlyForm.scss" lang="scss" scoped/>
