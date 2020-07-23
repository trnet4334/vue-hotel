<template>
  <aside class="sidebar">
    <div class="side__header util__flex--row">
      <span>Invoice</span>
      <span class="util__flex--row" style="align-items: center;">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 20px; height: 20px; margin-right: 5px; fill: #ffffff;" xml:space="preserve">
          <path d="M14.584,14.594c0-0.966-0.86-1.774-2-1.96v3.919C13.724,16.367,14.584,15.56,14.584,14.594z"/>
          <path d="M9.584,9.594c0,0.966,0.86,1.774,2,1.96V7.634C10.445,7.82,9.584,8.628,9.584,9.594z"/>
          <path d="M12.084,0.594c-6.341,0-11.5,5.159-11.5,11.5s5.159,11.5,11.5,11.5s11.5-5.159,11.5-11.5S18.426,0.594,12.084,0.594zM15.584,14.594c0,1.508-1.308,2.747-3,2.957v0.543c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V17.55c-1.692-0.21-3-1.449-3-2.957c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,0.966,0.86,1.774,2,1.96V12.55c-1.692-0.21-3-1.449-3-2.957s1.308-2.747,3-2.957V6.094c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v0.543c1.692,0.21,3,1.449,3,2.957c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5c0-0.966-0.86-1.774-2-1.96v4.003C14.276,11.847,15.584,13.086,15.584,14.594z"/>
        </svg>
        USD
      </span>
    </div>
    <div class="side__body util__flex--column">
      <div>
        <div class="util__flex--row side__content--row">
          <span>Check In</span>
          <p>{{checkInDate}} 14:00</p>
        </div>
        <div class="util__flex--row side__content--row">
          <span>Check Out</span>
          <p>{{checkOutDate}} 11:00</p>
        </div>
        <div class="util__flex--row side__content--row">
          <span>Nights</span>
          <p>{{nightsOfStay}}</p>
        </div>
        <div class="util__flex--row side__content--row">
          <span>Guests</span>
          <p>Adults: {{numOfAdultGuests}}, Children: {{numOfChildrenGuest}}</p>
        </div>
      </div>
      <el-divider/>
      <div>
        <div class="util__flex--row side__content--row">
          <span>Classic Guestroom</span>
          <p>${{roomFee}}</p>
        </div>
        <div class="util__flex--row side__content--row">
          <span>Add-Ons</span>
          <p>${{addOns}}</p>
        </div>
        <div class="util__flex--row side__content--row">
          <span>Package</span>
          <p>${{packageFee}}</p>
        </div>
        <div class="util__flex--row side__content--row">
          <span>Taxes and Fees</span>
          <p>${{tax}}</p>
        </div>
        <div class="util__flex--row side__content--action">
          <span>Edit</span> |
          <span>Remove</span>
        </div>
        <br>
        <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">Terms & Conditions</router-link>
        <br>
      </div>
      <el-divider/>
      <div class="util__flex--column">
        <div class="util__flex--row side__content--row">
          <span>BOOKING AMOUNT</span>
          <p>${{totalPriceCalculate}}</p>
        </div>
        <div class="util__flex--row side__content--row">
          <p>Payable now</p>
          <p>$0</p>
        </div>
        <div class="util__flex--row side__content--row">
          <p>Payable at check-in</p>
          <p>${{totalPriceCalculate}}</p>
        </div>
      </div>
    </div>
    <div class="side__button">
      <button>CONTINUE TO BOOK</button>
    </div>
  </aside>
</template>
<script>
export default {
  props: ['bookingDetails'],
  data () {
    return {
      checkInDate: this.bookingDetails.checkInDate,
      checkOutDate: this.bookingDetails.checkOutDate,
      nightsOfStay: this.bookingDetails.nightsOfStay,
      numOfAdultGuests: this.bookingDetails.numOfAdultGuests,
      numOfChildrenGuest: this.bookingDetails.numOfChildrenGuest,
      roomFee: this.bookingDetails.roomFee,
      addOns: this.bookingDetails.addOns,
      packageFee: this.bookingDetails.packageFee,
      tax: this.bookingDetails.tax
    }
  },
  computed: {
    totalPriceCalculate: function () {
      return this.roomFee + this.addOns + this.packageFee + this.tax
    }
  }
}
</script>
<style lang="scss" scoped>
  .sidebar {
    width: 30%;
    height: 100vh;
    & a {
      &:visited {
        color: #3d405b;
      }
    }
    .side__header {
      justify-content: space-between;
      align-items: center;
      background-color: #283845;
      height: 15%;
      width: 100%;
      padding: 10px 20px;
      & span {
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
    .side__body {
      padding: 10px 15px 25px 15px;
      height: 85%;
      background-color: #ffffff;
      justify-content: space-between;
      & a {
        &:visited {
          color: #3d405b;
        }
      }
    }
    .side__content {
      &--row {
        justify-content: space-between;
        font-size: 1.2rem;
        & span {
          font-weight: 600;
          padding: 5px 0;
        }
        & p {
          font-size: 1.1rem;
        }
      }
      &--action {
        text-decoration: underline;
        padding-top: 20px;
        & span {
          margin: 0 5px;
        }
      }
    }
  }
  .side__button {
    & button {
      margin: 20px auto;
      padding: 12px 12px;
      font-size: 1.1rem;
      border: none;
      background-color: #283845;
      color: #ffffff;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
