<template>
  <div class="sitemap">
    <div class="sitemap__container util__flex--column">
      <div class="sitemap__header util__flex--column">
        <span>Sitemap</span>
        <span>A Hotel</span>
      </div>
      <div class="sitemap__content util__flex--column">
        <div>
          <ul>
            <li>Homepage</li>
            <li>Story</li>
            <li>
              Rooms
              <ul>
                <li>Classic Guestroom</li>
                <li>Deluxe Guestroom</li>
                <li>The Spa Suite</li>
                <li>Luxury Suite</li>
                <li>Accessible Accommodation</li>
                <li>Pet Friendly</li>
              </ul>
            </li>
            <li>Dinning</li>
            <li>
              Events
              <ul>
                <li>Meeting & Event inquiry</li>
                <li>Wedding inquiry</li>
              </ul>
            </li>
            <li>Spa & Wellness</li>
            <li>
              Information
              <ul>
                <li>Contact us</li>
                <li>Location</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
              </ul>
            </li>
            <li>Manage my Booking</li>
            <li>Activities</li>
            <li>Special Offers & Packages</li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
  .sitemap {
    width: 100%;
    &__container {
      width: 100%;
      padding: 2vh 4vw;
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
      }
    }
  }
</style>
