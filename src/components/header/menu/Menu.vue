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
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/story" @click="displayMenu = !displayMenu">About us</router-link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/rooms" @click="displayMenu = !displayMenu">Stay</router-link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/dining" @click="displayMenu = !displayMenu">Eat & Drink</router-link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/events" @click="displayMenu = !displayMenu">Meetings & Events</router-link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/wedding" @click="displayMenu = !displayMenu">Wedding</router-link>
              </li>
            </ul>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/spa-wellness" @click="displayMenu = !displayMenu">Spa & Wellness</router-link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/specials" @click="displayMenu = !displayMenu">Specials</router-link>
              </li>
<!--              <li><a href="javascript:;">Activities</a></li>-->
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/manage-booking" @click="displayMenu = !displayMenu">My Trip</router-link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 24 24" xml:space="preserve">
                  <path d="M21.119,6.594c-0.56-0.477-1.303-0.677-2.035-0.562C17.896,6.227,17,7.333,17,8.606v2.893c0,0.276-0.225,0.5-0.5,0.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-7.83c0-1.925-1.486-3.569-3.313-3.665C10.727-0.035,9.795,0.293,9.091,0.96C8.388,1.628,8,2.529,8,3.499v4c0,0.276-0.225,0.5-0.5,0.5S7,7.775,7,7.499V5.606c0-1.273-0.896-2.379-2.084-2.573C4.187,2.918,3.441,3.118,2.881,3.594C2.321,4.07,2,4.765,2,5.499v4c0,1.93,1.57,3.5,3.5,3.5H8v10.5c0,0.276,0.224,0.5,0.5,0.5H10v-13H6.5c-1.379,0-2.5-1.122-2.5-2.5v-3c0-0.276,0.224-0.5,0.5-0.5S5,5.223,5,5.499v3c0,0.827,0.673,1.5,1.5,1.5H10v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v20.5h1v-20.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.5h4.5c0.827,0,1.5-0.673,1.5-1.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4c0,1.378-1.121,2.5-2.5,2.5H13v9h1.5c0.276,0,0.5-0.224,0.5-0.5v-6.5h3.5c1.93,0,3.5-1.57,3.5-3.5v-5C22,7.765,21.679,7.07,21.119,6.594z"/>
                </svg>
                <router-link to="/information/faq" @click="displayMenu = !displayMenu">FAQ</router-link>
              </li>
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
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
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
