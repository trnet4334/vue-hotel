<template>
  <div class="overlay" :class="displayMenuClass">
    <div class="overlay__half-background"/>
    <div class="overlay__background"/>
    <div class="overlay__body util__flex--column">
      <div class="overlay__content--first"/>
      <div class="overlay__content--second util__flex--column">
        <div class="links util__flex--row">
          <div class="link util__flex--row">
            <ul>
              <li><router-link to="/story">About us</router-link></li>
              <li><router-link to="/rooms">Stay</router-link></li>
              <li><router-link to="/dining">Eat & Drink</router-link></li>
              <li><router-link to="/spa-wellness">Spa & Wellness</router-link></li>
              <li><router-link to="/events">Meetings & Events</router-link></li>
              <li><router-link to="/wedding">Wedding</router-link></li>
            </ul>
            <ul>
              <li><router-link to="/specials">Specials</router-link></li>
<!--              <li><a href="javascript:;">Activities</a></li>-->
              <li><router-link to="/checkout">Reservation</router-link></li>
              <li><router-link to="/manage-booking">Manage Booking</router-link></li>
              <li><router-link to="/information/faq">FAQ</router-link></li>
              <li><router-link to="/information/contact">Contact Us</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="overlay__footer util__flex--row">
        <div class="content util__flex--column">
          <h5>Find Us</h5>
          <p>135 Bear Wallow Ln, Sedona, AZ 86336</p>
          <p>800.000.0002</p>
          <a href="https://goo.gl/maps/YcdQj1QhLYC7R4zw9" target="_blank" rel="noreferrer noopener">
            Get Directions
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['isOpen'],
  data () {
    return {
      displayMenu: this.isOpen
    }
  },
  computed: {
    displayMenuClass: function () {
      return {
        'display-menu': this.isOpen
      }
    }
  }
}
</script>
<style src="./Menu.scss" lang="scss" scoped/>
