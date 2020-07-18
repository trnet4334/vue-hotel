<template>
  <section>
    <div class="sitemap">
      <div class="sitemap__container page-container flex--column">
        <div class="flex--column page-content--header">
          <h4>Sitemap</h4>
          <h1>A Resort & Spa</h1>
        </div>
        <div class="sitemap__content flex--column">
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
                  <li>
                    <router-link to="/pet-friendly">Pet Friendly</router-link>
                    <ul>
                      <li><router-link to="/pet-friendly/pet-friendly-form">Pet Registration Form</router-link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><router-link to="/dining">Dining</router-link></li>
              <li>
                <router-link to="/events">Meeting & Event</router-link>
                <ul>
                  <li><router-link to="/events/inquiry">Meeting & Event Inquiry</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/wedding">Wedding</router-link>
                <ul>
                  <li><router-link to="/wedding/inquiry">Wedding Inquiry</router-link></li>
                </ul>
              </li>
              <li><router-link to="/spa-wellness">Spa & Wellness</router-link></li>
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
              <li><router-link to="/manage-booking">Manage my Booking</router-link></li>
              <li>Activities (Future)</li>
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
<style src="./Sitemap.scss" lang="scss" scoped/>
