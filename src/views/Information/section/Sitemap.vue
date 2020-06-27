<template>
  <section>
    <div class="sitemap">
      <div class="sitemap__container util__flex--column">
        <div class="sitemap__header util__flex--column">
          <span>Sitemap</span>
          <span>A Hotel</span>
        </div>
        <div class="sitemap__content util__flex--column">
          <div>
            <ul>
              <li><router-link to="/">Homepage</router-link></li>
              <li><router-link to="/story">Story</router-link></li>
              <li>
                <router-link to="/rooms">Rooms</router-link>
                <ul>
                  <li><router-link to="/rooms/classic-guestroom">Classic Guestroom</router-link></li>
                  <li><router-link to="/rooms/deluxe-guestroom">Deluxe Guestroom</router-link></li>
                  <li><router-link to="/rooms/the-spa-suite">The Spa Suite</router-link></li>
                  <li><router-link to="/rooms/luxury-suite">Luxury Suite</router-link></li>
                  <li><router-link to="/rooms/accessible-accommodation">Accessible Accommodation</router-link></li>
                  <li><router-link to="/pet-friendly">Pet Friendly</router-link></li>
                </ul>
              </li>
              <li><router-link to="/dinning">Dinning</router-link></li>
              <li>
                <router-link to="/events">Events</router-link>
                <ul>
                  <li><router-link to="/events/meeting">Meeting & Event inquiry</router-link></li>
                  <li><router-link to="/events/wedding">Wedding inquiry</router-link></li>
                </ul>
              </li>
              <li><router-link to="/wellness">Spa & Wellness</router-link></li>
              <li>
                Information
                <ul>
                  <li><router-link to="/information/contact">Contact us</router-link></li>
                  <li><router-link to="/information/careers">Careers</router-link></li>
                  <li><router-link to="/information/privacy-policy">Privacy Policy</router-link></li>
                  <li><router-link to="/information/sitemap">Sitemap</router-link></li>
                  <li><router-link to="/information/faq">FAQ</router-link></li>
                </ul>
              </li>
              <li>Manage my Booking</li>
              <li>Activities</li>
              <li><router-link to="/specials">Special Offers & Packages</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style lang="scss" scoped>
  .sitemap {
    width: 100%;
    &__container {
      width: 100%;
      padding: 15vh 4vw;
      align-items: center;
      justify-content: center;
    }
    &__header {
      width: 450px;
      padding: 1vh 0;
      text-align: start;
      & span:nth-of-type(1) {
        font-size: 1.4rem;
      }
      & span:nth-of-type(2) {
        font-size: 3.6rem;
        font-weight: bold;
      }
    }
    &__content {
      width: 450px;
      & div {
        text-align: start;
        font-size: 1.2rem;
        line-height: 2.2rem;
        font-weight: bold;
        & a {
          text-decoration: none;
          color: #2c3e50;
          &:visited {
            color: #2c3e50;
          }
        }
      }
    }
  }
</style>
