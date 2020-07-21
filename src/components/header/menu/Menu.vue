<template>
  <div class="overlay" :class="displayMenuClass">
    <div class="overlay__half-background"/>
    <div class="overlay__background"/>
    <div class="overlay__body flex--column">
      <div class="overlay__content--first"/>
      <div class="overlay__content--second flex--column">
        <div class="links flex--row">
          <div class="link flex--row">
            <ul>
              <li><router-link to="/story" @click="displayMenu = !displayMenu">About us</router-link></li>
              <li><router-link to="/rooms" @click="displayMenu = !displayMenu">Stay</router-link></li>
              <li><router-link to="/dining" @click="displayMenu = !displayMenu">Eat & Drink</router-link></li>
              <li><router-link to="/spa-wellness" @click="displayMenu = !displayMenu">Spa & Wellness</router-link></li>
              <li><router-link to="/events" @click="displayMenu = !displayMenu">Meetings & Events</router-link></li>
              <li><router-link to="/wedding" @click="displayMenu = !displayMenu">Wedding</router-link></li>
            </ul>
            <ul>
              <li><router-link to="/specials" @click="displayMenu = !displayMenu">Specials</router-link></li>
<!--              <li><a href="javascript:;">Activities</a></li>-->
              <li><router-link to="/reservation" @click="displayMenu = !displayMenu">Reservation</router-link></li>
              <li><router-link to="/manage-booking" @click="displayMenu = !displayMenu">My Trip</router-link></li>
              <li><router-link to="/information/faq" @click="displayMenu = !displayMenu">FAQ</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="overlay__footer flex--row">
        <div class="content flex--column">
          <h5>Find Us</h5>
          <p>135 Bear Wallow Ln, Sedona, AZ 86336</p>
          <p>800.000.0002</p>
          <router-link to="/information/contact" target="_blank" rel="noreferrer noopener">
            Contact Us
          </router-link>
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
