<template>
  <section class="guest-details">
    <div class="guest-details__body">
      <div class="guest-details__content">
        <div class="information--contact page-content--header">
          <h4>Contact Information</h4>
          <div class="flex--row">
            <div class="form--col flex--row">
              <label for="firstName">First Name*</label>
              <input type="text" id="firstName" v-model="contactInfo.firstName" required>
            </div>
            <div class="form--col flex--row">
              <label for="lastName">Last Name*</label>
              <input type="text" id="lastName" v-model="contactInfo.lastName" required>
            </div>
            <div class="form--col flex--row">
              <label for="phoneNum">Phone*</label>
              <input type="text" id="phoneNum" v-model="contactInfo.phoneNum" required>
            </div>
            <div class="form--col flex--row">
              <label for="email">Email Address*</label>
              <input type="email" id="email" v-model="contactInfo.email" required>
            </div>
          </div>
        </div>
        <div class="information--address page-content--header">
          <h4>Address</h4>
          <div class="flex--row">
            <div class="flex--row form--col">
              <label for="country">Country</label>
              <select v-model="contactInfo.country" id="country" required>
                <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
              </select>
            </div>
            <div class="flex--row form--col">
              <label for="address">Address*</label>
              <input type="text" id="address" v-model="contactInfo.address" required>
            </div>
            <div class="flex--row form--col">
              <label for="city">City*</label>
              <input type="text" id="city" v-model="contactInfo.city" required>
            </div>
            <div class="flex--row form--col">
              <label for="zipCode">Zip/Postal Code</label>
              <input type="text" id="zipCode" v-model="contactInfo.zipCode">
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
            v-model="contactInfo.note"
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
  </section>
</template>
<script>
import countries from '../../../assets/data/checkout/countries'
export default {
  data () {
    return {
      countries,
      contactInfo: {
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        country: '',
        city: '',
        address: '',
        zipCode: '',
        note: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .guest-details {
    &__content {
      padding: 15px 20px;
      border: 1px solid #3d405b;
      border-radius: 5px;
      background-color: #ffffff;
      margin: 10px auto;
      & h4 {
        padding-bottom: 10px;
      }
      & label {
        font-size: 1.3rem;
        padding: 3px 5px;
      }
      .information {
        &--contact, &--payment {
          .form--col {
            width: 45%;
            justify-content: space-between;
            padding: 10px 15px;
            & input {
              width: 50%;
              font-size: 1.1rem;
              padding: 0 5px;
            }
          }
        }
        &--contact {
          width: 100%;
          & div:nth-of-type(1) {
            flex-wrap: wrap;
          }
        }
        &--address {
          width: 100%;
          & div:nth-of-type(1) {
            flex-wrap: wrap;
          }
          & select {
            width: 50%;
            font-size: 1.1rem;
            padding: 5px;
          }
          .form--col {
            width: 45%;
            justify-content: space-between;
            padding: 10px 15px;
            & input {
              width: 50%;
              font-size: 1.1rem;
              padding: 0 5px;
            }
          }
        }
        &--note {
          width: 100%;
          & textarea {
            width: 100%;
            padding: 15px;
            resize: none;
            margin-top: 15px;
          }
        }
        &--payment {
          width: 100%;
          & div:nth-of-type(2) {
            flex-wrap: wrap;
          }
        }
      }
    }
  }
</style>
