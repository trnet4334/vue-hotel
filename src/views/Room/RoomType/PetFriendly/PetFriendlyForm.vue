<template>
  <div class="pet-friendly-form">
    <navbar/>
    <Form
      ref="form"
      as="div"
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
                  <Field
                    rules="required|alpha_spaces"
                    name="guestLastName"
                    v-model="petFriendlyForm.guestLastName"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="guestName">Guest Last Name*</label>
                    <input type="text" id="guestName" v-bind="field"/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                  <Field
                    rules="required|regexEmail"
                    name="guestEmail"
                    v-model="petFriendlyForm.guestEmail"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="guestEmail">Guest Email*</label>
                    <input type="text" id="guestEmail" v-bind="field"/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                </div>
                <div class="flex--column align-center">
                  <Field
                    rules="required"
                    name="reservationNum"
                    v-model="petFriendlyForm.reservationNum"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="reservationNum">Guest Reservation Number*</label>
                    <input type="text" id="reservationNum" v-bind="field"/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                  <Field
                    rules="required|regexPhoneNum"
                    name="guestPhoneNum"
                    v-model="petFriendlyForm.guestPhoneNum"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="guestPhoneNum">Guest Phone Number*</label>
                    <input type="text" id="guestPhoneNum" v-bind="field"/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
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
                  <Field
                    rules="required|numeric"
                    name="petSize"
                    v-model="petFriendlyForm.petSize"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="petSize">Pet's Size*</label>
                    <input type="text" id="petSize" placeholder="Pet's Weight" v-bind="field"/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                </div>
                <div class="flex--column align-center">
                  <Field
                    rules="required"
                    name="petType"
                    v-model="petFriendlyForm.petType"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="petType">Type of Pet*</label>
                    <input type="text" id="petType" placeholder="Type of Pet(dog, cat, etc.)" v-bind="field"/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
                  <Field
                    rules="required"
                    name="petBreed"
                    v-model="petFriendlyForm.petBreed"
                    v-slot="{ field, errors }"
                    class="flex--column input__text sm alert-message"
                  >
                    <label for="petBreed">Pet Breed*</label>
                    <input type="text" id="petBreed" placeholder="Pet Breed" v-bind="field"/>
                    <span class="alert-message">{{errors[0]}}</span>
                  </Field>
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
                <input type="checkbox" id="consent" @click="checked = !checked">
                I understand that this form collects my name, email and phone number so I can be contacted.
                For more information, please check our
                <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</router-link>.
              </label>
              <button type="submit" :disabled="!checked" class="btn-outline-md">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </Form>
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
