<template>
  <section>
    <div class="sitemap">
      <div class="sitemap__container page-container flex--column">
        <div class="flex--column">
          <h4 class="content__title">Sitemap</h4>
          <h1 class="page__title">A Resort & Spa</h1>
        </div>
        <div class="sitemap__content flex--column">
          <div class="list-group">
            <ul>
              <li><router-link to="/home" class="link no-underline">Homepage</router-link></li>
              <li><router-link to="/story" class="link no-underline">Story</router-link></li>
              <li>
                <router-link to="/rooms" class="link no-underline">Rooms</router-link>
                <ul>
                  <li><router-link to="/rooms/classic-guestroom" class="link no-underline">Classic Guestroom</router-link></li>
                  <li><router-link to="/rooms/deluxe-guestroom" class="link no-underline">Deluxe Guestroom</router-link></li>
                  <li><router-link to="/rooms/the-spa-suite" class="link no-underline">The Spa Suite</router-link></li>
                  <li><router-link to="/rooms/luxury-suite" class="link no-underline">Luxury Suite</router-link></li>
                  <li><router-link to="/rooms/accessible-accommodation" class="link no-underline">Accessible Accommodation</router-link></li>
                  <li>
                    <router-link to="/pet-friendly" class="link no-underline">Pet Friendly</router-link>
                    <ul>
                      <li><router-link to="/pet-friendly/pet-friendly-form" class="link no-underline">Pet Registration Form</router-link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><router-link to="/dining" class="link no-underline">Dining</router-link></li>
              <li>
                <router-link to="/events" class="link no-underline">Meeting & Event</router-link>
                <ul>
                  <li><router-link to="/events/inquiry" class="link no-underline">Meeting & Event Inquiry</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/wedding" class="link no-underline">Wedding</router-link>
                <ul>
                  <li><router-link to="/wedding/inquiry" class="link no-underline">Wedding Inquiry</router-link></li>
                </ul>
              </li>
              <li><router-link to="/spa-wellness" class="link no-underline">Spa & Wellness</router-link></li>
              <li>
                Information
                <ul>
                  <li><router-link to="/information/contact" class="link no-underline">Contact us</router-link></li>
                  <li><router-link to="/information/careers" class="link no-underline">Careers</router-link></li>
                  <li><router-link to="/information/privacy-policy" class="link no-underline">Privacy Policy</router-link></li>
                  <li><router-link to="/information/sitemap" class="link no-underline">Sitemap</router-link></li>
                  <li><router-link to="/information/faq" class="link no-underline">FAQ</router-link></li>
                </ul>
              </li>
              <li><router-link to="/manage-booking" class="link no-underline">Manage my Booking</router-link></li>
              <li>Activities (Future)</li>
              <li><router-link to="/specials" class="link no-underline">Special Offers & Packages</router-link></li>
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
