<template>
  <aside class="sidebar">
    <div class="side__body flex--column">
      <h4>Your Stay</h4>
      <br>
      <div>
        <div class="flex--row side__content--row">
          <span>Check In</span>
          <p>{{reservationDetails.date.start}} 2:00 PM</p>
        </div>
        <div class="flex--row side__content--row">
          <span>Check Out</span>
          <p>{{reservationDetails.date.end}} 11:00 AM</p>
        </div>
        <el-divider/>
      </div>
      <div v-show="isRoomSelected">
        <div class="flex--column">
          <div class="flex--row side__content--row">
            <span><u><i>Classic Guestroom</i></u></span>
            <p>${{reservationDetails.fee.roomFee}}</p>
          </div>
          <ul class="list-items">
            <li class="flex--row list-item">
              <span>Add-Ons</span>
              <p>${{reservationDetails.fee.addOns}}</p>
            </li>
            <li class="flex--row list-item">
              <span>Package</span>
              <p>${{reservationDetails.fee.packageFee}}</p>
            </li>
          </ul>
        </div>
        <div class="flex--row side__content--row">
          <span>Taxes and Fees</span>
          <p>${{reservationDetails.fee.tax}}</p>
        </div>
        <div class="flex--row side__content--action">
          <span>Edit</span> |
          <span>Remove</span>
        </div>
        <el-divider/>
      </div>
      <div class="flex--column" v-show="isRoomSelected">
        <div class="flex--row side__content--row">
          <span>BOOKING AMOUNT</span>
          <p>${{totalPriceCalculate}}</p>
        </div>
        <div class="flex--row side__content--row">
          <p>Payable now</p>
          <p>$0</p>
        </div>
        <div class="flex--row side__content--row">
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
      isRoomSelected: false,
      reservationDetails: {
        date: {
          start: undefined,
          end: undefined
        },
        nightsOfStay: undefined,
        guests: {
          numOfAdultGuests: undefined,
          numOfChildrenGuest: undefined
        },
        fee: {
          roomFee: undefined,
          addOns: undefined,
          packageFee: undefined,
          tax: undefined
        }
      }
    }
  },
  computed: {
    totalPriceCalculate: function () {
      return this.reservationDetails.fee.roomFee + this.reservationDetails.fee.addOns + this.reservationDetails.fee.packageFee + this.reservationDetails.fee.tax
    }
  }
}
</script>
<style src="./Sidebar.scss" lang="scss" scoped/>
