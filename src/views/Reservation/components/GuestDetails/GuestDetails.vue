<template>
  <Form ref="form" as="div" class="guest-details" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <div class="guest-details__body">
        <div class="guest-details__content">
          <div class="information--contact">
            <h4 class="content__title">Contact Information</h4>
            <div class="flex--column">
              <Field
                rules="required|alpha_spaces"
                name="firstName"
                v-model="customerInfo.contactDetail.firstName"
                v-slot="{ field, errors }"
                class="form--col flex--row input__text sm alert-message"
              >
                <label for="firstName">First Name*</label>
                <input type="text" id="firstName" v-bind="field">
                <span>{{errors[0]}}</span>
              </Field>
              <Field
                rules="required|alpha"
                v-model="customerInfo.contactDetail.lastName"
                name="lastName"
                v-slot="{ field, errors }"
                class="form--col flex--row input__text sm alert-message"
              >
                <label for="lastName">Last Name*</label>
                <input type="text" id="lastName" v-bind="field">
                <span>{{errors[0]}}</span>
              </Field>
              <Field
                rules="required|regexPhoneNum"
                v-model="customerInfo.contactDetail.phoneNum"
                name="phoneNum"
                v-slot="{ field, errors }"
                class="form--col flex--row input__text sm alert-message"
              >
                <label for="phoneNum">Phone Number*</label>
                <input type="text" id="phoneNum" placeholder="Start from area code(+)" v-bind="field">
                <span>{{errors[0]}}</span>
              </Field>
              <Field
                rules="required|regexEmail"
                v-model="customerInfo.contactDetail.email"
                name="email"
                v-slot="{ field, errors }"
                class="form--col flex--row input__text sm alert-message"
              >
                <label for="email">Email Address*</label>
                <input type="email" id="email" v-bind="field">
                <span>{{errors[0]}}</span>
              </Field>
            </div>
          </div>
          <div class="information--address">
            <h4 class="content__title">Address</h4>
            <div class="flex--column">
              <Field
                rules="required|regexAddress"
                v-model="customerInfo.addressDetail.address"
                name="address"
                v-slot="{ field, errors }"
                class="flex--row form--col input__text lg alert-message"
              >
                <label for="address">Address*</label>
                <input type="text" id="address" v-bind="field">
                <span>{{errors[0]}}</span>
              </Field>
              <div class="flex--row">
                <Field
                  rules="required|regexCity"
                  v-model="customerInfo.addressDetail.city"
                  name="city"
                  v-slot="{ field, errors }"
                  class="flex--row form--col input__text sm alert-message"
                >
                  <label for="city">City*</label>
                  <input type="text" id="city" v-bind="field">
                  <span>{{errors[0]}}</span>
                </Field>
                <Field
                  rules="required"
                  v-model="customerInfo.addressDetail.country"
                  name="country"
                  v-slot="{ field, errors }"
                  class="flex--row form--col input__select alert-message"
                >
                  <label for="country">Country*</label>
                  <select v-bind="field" id="country">
                    <option v-for="country in countries" :key="country.code" :value="country.name">{{country.name}}</option>
                  </select>
                  <span>{{errors[0]}}</span>
                </Field>
                <div class="flex--row form--col input__text sm">
                  <label for="zipCode">Zip/Postal Code</label>
                  <input type="text" id="zipCode" v-model="customerInfo.addressDetail.zipCode">
                </div>
              </div>
            </div>
          </div>
          <el-divider/>
          <div class="information--note input__textarea">
            <h4 class="content__title">Additional Details and Special Requests</h4>
            <textarea
              name="comments"
              cols="30"
              rows="10"
              placeholder="Please note your requests or special needs"
              v-model="customerInfo.note"
            />
          </div>
          <el-divider/>
          <div class="information--payment">
            <h4 class="content__title">Payment Information (Future)</h4>
            <div class="flex--row">
              <img src="@/assets/images/checkout/credit-card/Visa.png" alt="Visa logo" width="45px" height="30px">
              <img src="@/assets/images/checkout/credit-card/Amex.png" alt="Amex logo" width="45px" height="30px">
              <img src="@/assets/images/checkout/credit-card/DinersClub.png" alt="Diners Club logo" width="45px" height="30px">
              <img src="@/assets/images/checkout/credit-card/Discover.png" alt="Discover logo" width="45px" height="30px">
              <img src="@/assets/images/checkout/credit-card/MasterCard.png" alt="MasterCard logo" width="45px" height="30px">
            </div>
            <div class="flex--row">
              <div class="flex--column input__text sm alert-message">
                <label for="cardNum">Card Number*</label>
                <input type="text" id="cardNum" disabled>
              </div>
              <div class="flex--column input__text sm alert-message">
                <label for="expirationDate">Expiration Date*</label>
                <input type="text" id="expirationDate" placeholder="(MM/YY)" disabled>
              </div>
              <div class="flex--column input__text sm alert-message">
                <label for="cvv">CVV*</label>
                <input type="text" id="cvv" disabled>
              </div>
              <div class="flex--column input__text sm alert-message">
                <label for="name">Name on Card*</label>
                <input type="text" id="name" disabled>
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
      <div class="flex--row button">
        <button type="submit" class="btn-solid-md">CONTINUE</button>
      </div>
    </form>
  </Form>
</template>
<script>
import countries from '../../../../assets/data/checkout/countries'
import { Form, Field } from 'vee-validate'
import { mapState } from 'vuex'
export default {
  components: {
    Form,
    Field
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
      const information = {
        contact: this.customerInfo.contactDetail,
        address: this.customerInfo.addressDetail,
        note: this.customerInfo.note
      }
      this.$store.dispatch('forwardToConfirmation', information)
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
