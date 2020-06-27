<template>
  <div>
    <Navbar/>
    <section class="accessible-room">
      <div class="accessible-room__container">
        <div class="accessible-room__body--first util__flex--row">
          <div class="accessible-room__image">
            <img src="@/assets/images/room/accessible-img-2.jpg" alt="Accessible">
          </div>
          <div class="accessible-room__content--first">
            <h4 class="util__header--title">Accessible Accommodations</h4>
            <h1 class="util__header--subtitle">For people with disabilities</h1>
            <p class="util__header--description">We offer rooms for accommodate guests with disabilities.
            All details will be provided below, and you call book online or call our Reservation Specialist if
            you'd like to make a reservation or have any questions. We are really happy to help you everything as
            you request for.</p>
            <button>RESERVATION NOW</button>
          </div>
        </div>
        <div class="accessible-room__body--second util__flex--row">
          <div class="accessible-room__content--second util__flex--column">
            <h1 class="util__header--subtitle">Amenities</h1>
            <div>
              <h4 class="util__header--title">Communication/Hearing Room Features</h4>
              <ul>
                <li>Strobed doorbell</li>
                <li>Fire Alarm and Smoke Detector Strobe</li>
                <li>Assistive listening devices are available</li>
              </ul>
            </div>
            <div>
              <h4 class="util__header--title">Mobility Room Features</h4>
              <ul>
                <li>Grab Bars in Bathroom</li>
                <li>Fold Down Shower Seat</li>
                <li>Roll In Shower</li>
                <li>Accessible Entry, Bathroom Doorways and Commode</li>
                <li>Patio Access</li>
              </ul>
            </div>
          </div>
          <div class="accessible-room__image">
            <img src="@/assets/images/room/accessible-img-3.jpg" alt="Accessible">
          </div>
        </div>
      </div>
    </section>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .accessible-room {
    position: relative;
    &__container {
      padding: 20vh 5vw;
    }
    &__body {
      &--first, &--second {
        justify-content: space-evenly;
      }
      &--second {
        padding: 30vh 0 0 0;
      }
    }
    &__image {
      width: 450px;
      height: 450px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
    &__content {
      &--first {
        width: 45%;
        padding: 0 50px;
        & button {
          margin: 40px auto;
          padding: 10px 50px;
          background-color: transparent;
          border: 2px solid #3d405b;
          border-radius: 5px;
          font-family: inherit;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 2px;
          color: #3d405b;

          &:hover {
            background-color: #3d405b;
            cursor: pointer;
            color: #ffffff;
          }
        }
      }
      &--second {
        width: 45%;
        padding: 0 50px;
        & ul {
          padding-top: 20px;
          padding-bottom: 20px;
          text-align: start;
          font-size: 1.2rem;
          line-height: 3rem;
        }
      }
    }
  }
</style>
