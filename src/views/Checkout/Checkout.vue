<template>
  <div>
    <checkout-navbar/>
    <section class="checkout">
      <div class="checkout__container">
        <div class="checkout--alert">
          <span class="util__flex--row">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 1.1rem; height: 1.1rem; margin-right: 5px;" xml:space="preserve">
              <path d="M12,0C5.383,0,0,5.383,0,12c0,6.617,5.383,12,12,12c6.617,0,12-5.383,12-12C24,5.383,18.617,0,12,0z M12,4c1.654,0,3,1.346,3,3s-1.346,3-3,3S9,8.654,9,7S10.346,4,12,4z M15.5,20h-6C8.673,20,8,19.327,8,18.5S8.673,17,9.5,17H10v-3H9.5C8.673,14,8,13.327,8,12.5S8.673,11,9.5,11h4c0.827,0,1.5,0.673,1.5,1.5V17h0.5c0.827,0,1.5,0.673,1.5,1.5S16.327,20,15.5,20z"/>
            </svg>
            If the dates or accommodations do not match what your needs, please call our reservations specialists for additional availability through 480.001.0002.
          </span>
        </div>
        <div class="checkout__main util__flex--row">
          <div class="checkout__body">
            <div class="checkout__header">
              <div class="checkout__header--search util__flex--row" v-if="!isRoomSelected">
                <div class="util__flex--row util__flex--center search--col item-30">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 32px; height: 32px; margin-right: 10px;" xml:space="preserve">
                    <path d="M20.755,16.342l-2.756-0.688l-0.203-0.817c0.729-0.746,1.233-1.746,1.401-2.778c0.431-0.153,0.756-0.539,0.814-1.014l0.185-1.478C20.24,9.217,20.132,8.865,19.9,8.6c-0.113-0.13-0.252-0.234-0.405-0.306l0.061-1.25L19.799,6.8c0.448-0.478,0.822-1.292,0.055-2.464c-0.58-0.886-1.559-1.335-2.909-1.335c-0.539,0-1.801,0-2.963,0.825c-0.199,0.142-0.267,0.409-0.158,0.628c0.492,1,0.742,2.42,0.742,4.221c0,2.459,0.591,3.55,0.846,3.905c0.041,0.058,0.095,0.106,0.156,0.142c0.402,0.233,0.597,0.606,0.611,1.174c0.011,0.415-0.247,0.742-0.465,0.943c-0.124,0.115-0.182,0.284-0.154,0.45c0.027,0.167,0.138,0.308,0.292,0.375C17.764,16.506,19,18.404,19,20.5c0,0.276,0.224,0.5,0.5,0.5h4c0.276,0,0.5-0.226,0.5-0.502C24,18.529,22.666,16.819,20.755,16.342z M14.755,16.342l-2.756-0.688l-0.11-0.443c1.887-0.337,2.865-0.906,2.91-0.933c0.141-0.083,0.229-0.233,0.24-0.396c0.012-0.164-0.061-0.325-0.188-0.428c-0.013-0.01-1.285-1.083-1.285-4.779c0-3.274-0.79-4.935-2.348-4.935h-0.166C10.523,3.238,10.085,3,9,3C7.569,3,4.435,4.429,4.435,8.674c0,3.697-1.272,4.769-1.278,4.774c-0.133,0.1-0.208,0.259-0.199,0.425c0.008,0.167,0.099,0.317,0.241,0.403c0.044,0.026,1.014,0.599,2.913,0.937l-0.11,0.44l-2.756,0.689C1.334,16.819,0,18.529,0,20.5C0,20.776,0.224,21,0.5,21h17c0.276,0,0.5-0.226,0.5-0.502C18,18.529,16.666,16.819,14.755,16.342z"/>
                  </svg>
                  <div class="util__flex--column util__flex--center">
                    <span>Guests</span>
                    <p>Adults: {{numOfAdultGuests}}, Children: {{numOfChildrenGuest}}</p>
                  </div>
                </div>
                <div class="util__flex--row util__flex--center search--col item-30">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 32px; height: 32px; margin-right: 10px;" xml:space="preserve">
                    <path d="M5.5,5C5.224,5,5,4.776,5,4.5v-4C5,0.224,5.224,0,5.5,0S6,0.224,6,0.5v4C6,4.776,5.776,5,5.5,5z"/>
                    <path d="M18.5,5C18.224,5,18,4.776,18,4.5v-4C18,0.224,18.224,0,18.5,0S19,0.224,19,0.5v4C19,4.776,18.776,5,18.5,5z"/>
                    <path d="M24,8V5.5C24,3.57,22.43,2,20.5,2H20v2.5C20,5.327,19.327,6,18.5,6S17,5.327,17,4.5V2H7v2.5C7,5.327,6.327,6,5.5,6S4,5.327,4,4.5V2H3.5C1.57,2,0,3.57,0,5.5V8H24z"/>
                    <path d="M0,9v11.5C0,22.43,1.57,24,3.5,24h17c1.93,0,3.5-1.57,3.5-3.5V9H0z M12,19c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.276,0.224-0.5,0.5-0.5S7,18.724,7,19c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H7.5C7.224,17,7,16.776,7,16.5S7.224,16,7.5,16H9c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2c0,0.276-0.224,0.5-0.5,0.5S6,14.276,6,14c0-1.654,1.346-3,3-3s3,1.346,3,3c0,1.042-0.534,1.962-1.343,2.5C11.466,17.038,12,17.958,12,19z M17,21.5c0,0.276-0.224,0.5-0.5,0.5S16,21.776,16,21.5v-8.793l-1.146,1.146c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l2-2c0.144-0.143,0.357-0.186,0.545-0.108C16.878,11.115,17,11.298,17,11.5V21.5z"/>
                  </svg>
                  <div class="util__flex--column util__flex--center">
                    <span>Check in - Check out</span>
                    <p>{{checkInDate}} - {{checkOutDate}}</p>
                  </div>
                </div>
                <div class="util__flex--column util__flex--center search--col item-30">
                  <label for="code">Promo Codes</label>
                  <input type="text" id="code" placeholder="Code"/>
                </div>
                <div class="search--col item-10">
                  <button>SEARCH</button>
                </div>
              </div>
              <div class="checkout__header--breadcrumb util__flex--column">
                <h1>{{steps[3]}}</h1>
                <div>
                  <el-steps
                    :active="3"
                    finish-status="success"
                    process-status="process"
                    align-center
                  >
                    <el-step title="Rooms"/>
                    <el-step title="Add-ons"/>
                    <el-step title="Guest Details"/>
                    <el-step title="Confirmation"/>
                  </el-steps>
                </div>
              </div>
            </div>
            <div class="checkout__content">
              <room-select/>
<!--              <add-ons/>-->
<!--              <guest-details/>-->
<!--              <confirmation/>-->
            </div>
          </div>
          <sidebar :bookingDetails="bookingDetails" v-if="!isBookingCompleted"/>
        </div>
      </div>
    </section>
    <checkout-footer/>
  </div>
</template>
<script>
import CheckoutNavbar from '@/components/header/navbar/CheckoutNavbar.vue'
import CheckoutFooter from '@/components/footer/CheckoutFooter.vue'
import Sidebar from '@/views/Checkout/components/Sidebar.vue'
import RoomSelect from '@/views/Checkout/components/RoomSelect.vue'
// import AddOns from '@/views/Checkout/components/AddOns.vue'
// import GuestDetails from '@/views/Checkout/components/GuestDetails.vue'
// import Confirmation from '@/views/Checkout/components/Confirmation.vue'
export default {
  components: {
    CheckoutNavbar,
    CheckoutFooter,
    Sidebar,
    RoomSelect
    // AddOns,
    // GuestDetails,
    // Confirmation
  },
  data () {
    return {
      isRoomSelected: true,
      isBookingCompleted: false,
      steps: [
        'Select a Room',
        'Choose your favorite Add-ons',
        'Tell us about you',
        'You are almost done'
      ],
      bookingDetails: {
        checkInDate: '10-05-2020',
        checkOutDate: '10-10-2020',
        nightsOfStay: 5,
        numOfAdultGuests: 5,
        numOfChildrenGuest: 3,
        roomFee: 500,
        addOns: 200,
        packageFee: 300,
        tax: 400
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .checkout {
    width: 100%;
    padding: 5vh 5vw;
    &__container {
      width: 100%;
    }
    &__main {
      margin-top: 2.5vh;
      justify-content: space-evenly;
    }
    &__body {
      width: 67.5%;
    }
    &__header {
      width: 100%;
      &--search {
        width: 100%;
        align-items: center;
        justify-content: space-around;
        padding: 15px 10px;
        border: 1px solid #3d405b;
        background-color: #ffffff;
        border-radius: 5px;
        & button {
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
      &--breadcrumb {
        & h1 {
          font-size: 2.6rem;
        }
      }
      .search--col {
        width: 100%;
        height: 100%;
        & span {
          font-size: 1.1rem;
          font-weight: 700;
        }
        & p {
          font-size: 1.1rem;
        }
        & div:nth-of-type(1) {
          align-items: flex-start;
        }
        & label {
          font-size: 1.1rem;
          font-weight: 700;
        }
        & input[id="code"] {
          width: 75%;
          margin: 0 auto;
          border: none;
          background-color: transparent;
          border-bottom: 1px solid #3d405b;
          font-size: 1.1rem;
          line-height: 1.8rem;
          padding: 2px 10px;
        }
      }
    }
    &--alert {
      width: 90%;
      padding: 10px;
      margin: 5vh auto 2vh auto;
      background-color: #ededee;
      border-radius: 5px;
      & span {
        align-items: center;
        font-size: 1.1rem;
        justify-content: center;
      }
    }
  }
  .item-30 {
    flex-basis: 30%;
  }
  .item-10 {
    flex-basis: 10%;
  }
</style>
