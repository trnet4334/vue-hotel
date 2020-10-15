<template>
  <ValidationObserver ref="form" class="guest-details" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <div class="guest-details__body">
        <div class="guest-details__content">
          <div class="information--contact page-content--header">
            <h4>Contact Information</h4>
            <div class="flex--row">
              <ValidationProvider
                rules="required|alpha_spaces"
                vid="firstName"
                name="First name"
                v-slot="{ errors }"
                class="form--col flex--row"
              >
                <label for="firstName">First Name*</label>
                <input type="text" id="firstName" v-model="customerInfo.contactDetail.firstName" required>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <ValidationProvider
                rules="required|alpha"
                v-slot="{ errors }"
                vid="lastName"
                name="Last name"
                class="form--col flex--row"
              >
                <label for="lastName">Last Name*</label>
                <input type="text" id="lastName" v-model="customerInfo.contactDetail.lastName" required>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <ValidationProvider
                rules="required|regexPhoneNum"
                v-slot="{ errors }"
                vid="phoneNum"
                name="Phone number"
                class="form--col flex--row"
              >
                <label for="phoneNum">Phone Number*</label>
                <input type="text" id="phoneNum" placeholder="Start from area code(+)" v-model="customerInfo.contactDetail.phoneNum">
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <ValidationProvider
                rules="required|regexEmail"
                v-slot="{ errors }"
                vid="email"
                name="E-mail address"
                class="form--col flex--row"
              >
                <label for="email">Email Address*</label>
                <input type="email" id="email" v-model="customerInfo.contactDetail.email" required>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="information--address page-content--header">
            <h4>Address</h4>
            <div class="flex--row">
              <ValidationProvider
                rules="required|regexAddress"
                v-slot="{errors}"
                vid="address"
                name="Address"
                class="flex--row form--col"
              >
                <label for="address">Address*</label>
                <input type="text" id="address" v-model="customerInfo.addressDetail.address" required>
                <span class="alert-message">{{errors[0]}}</span>
              </ValidationProvider>
              <div class="flex--row">
                <ValidationProvider
                  rules="required|regexCity"
                  v-slot="{errors}"
                  vid="city"
                  name="City"
                  class="flex--row form--col-sub"
                >
                  <label for="city">City*</label>
                  <input type="text" id="city" v-model="customerInfo.addressDetail.city" required>
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
                <ValidationProvider
                  rules="required"
                  v-slot="{errors}"
                  vid="country"
                  name="Country"
                  class="flex--row form--col-sub"
                >
                  <label for="country">Country*</label>
                  <select v-model="customerInfo.addressDetail.country" id="country" required>
                    <option v-for="country in countries" :key="country.code" :value="country.name">{{country.name}}</option>
                  </select>
                  <span class="alert-message">{{errors[0]}}</span>
                </ValidationProvider>
                <div class="flex--row form--col-sub">
                  <label for="zipCode">Zip/Postal Code</label>
                  <input type="text" id="zipCode" v-model="customerInfo.addressDetail.zipCode">
                </div>
              </div>
            </div>
          </div>
          <el-divider/>
          <div class="information--note page-content--header">
            <h4>Additional Details and Special Requests</h4>
            <textarea
              name="comments"
              cols="30"
              rows="10"
              placeholder="Please note your requests or special needs"
              v-model="customerInfo.note"
            />
          </div>
          <el-divider/>
          <div class="information--payment page-content--header">
            <h4>Payment Information (Future)</h4>
            <div class="flex--row">
              <img src="@/assets/images/checkout/credit-card/Visa.png" alt="Visa logo" width="45px" height="30px">
              <img src="@/assets/images/checkout/credit-card/Amex.png" alt="Amex logo" width="45px" height="30px">
              <img src="@/assets/images/checkout/credit-card/DinersClub.png" alt="Diners Club logo" width="45px" height="30px">
              <img src="@/assets/images/checkout/credit-card/Discover.png" alt="Discover logo" width="45px" height="30px">
              <img src="@/assets/images/checkout/credit-card/MasterCard.png" alt="MasterCard logo" width="45px" height="30px">
            </div>
            <div class="flex--row">
              <div class="form--col flex--row">
                <label for="cardNum">Card Number*</label>
                <input type="text" id="cardNum" disabled required>
              </div>
              <div class="form--col flex--row">
                <label for="expirationDate">Expiration Date*</label>
                <input type="text" id="expirationDate" placeholder="(MM/YY)" disabled required>
              </div>
              <div class="form--col flex--row">
                <label for="cvv">CVV*</label>
                <input type="text" id="cvv" disabled required>
              </div>
              <div class="form--col flex--row">
                <label for="name">Name on Card*</label>
                <input type="text" id="name" disabled required>
              </div>
            </div>
            <el-divider/>
            <div class="page-content--header">
              <p>*We are really sorry that we only allow to pay in
                person now. We are happy to help you at front desk upon check-in.(Credit card services
                will open soon.) Please feel free to contact us if you have any question.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex--row buttons">
        <button type="submit">CONTINUE</button>
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
import countries from '../../../../assets/data/checkout/countries'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
// eslint-disable-next-line camelcase
import { alpha, alpha_spaces } from 'vee-validate/dist/rules'
import { mapState } from 'vuex'
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
extend('regexCity', {
  validate (value) {
    const regex = /^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
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
extend('alpha', alpha)
extend('alpha_spaces', alpha_spaces)
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      countries,
      customerInfo: {
        contactDetail: {
          firstName: '',
          lastName: '',
          phoneNum: '',
          email: ''
        },
        addressDetail: {
          country: '',
          city: '',
          address: '',
          zipCode: ''
        },
        note: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$refs.form.validate().then(success => {
        if (success) {
          const information = {
            contact: this.customerInfo.contactDetail,
            address: this.customerInfo.addressDetail,
            note: this.customerInfo.note
          }
          this.$store.dispatch('forwardToConfirmation', information)
        } else {
          this.$refs.form.setErrors({
            firstName: ['Please do not include any space or special character.'],
            lastName: ['Please do not include special characters except spaces.'],
            phoneNum: ['Please start from your country code including a plus sign, ex. +1 480-000-0001.'],
            email: ['Please enter a valid e-mail address.'],
            addressDetail: ['Please enter a correct address.'],
            city: ['Please enter a valid city name.'],
            country: ['Please select your country.']
          })
        }
      })
    }
  },
  computed: {
    ...mapState({
      customer: state => state.reservation.reservationDetails.customerInfo
    })
  },
  created () {
    if (!this.$_.isEmpty(this.customer)) {
      this.customerInfo = this.customer
    }
  }
}
</script>
<style src="./GuestDetails.scss" lang="scss" scoped/>
