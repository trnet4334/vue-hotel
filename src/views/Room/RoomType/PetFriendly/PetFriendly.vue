<template>
  <div>
    <Navbar/>
    <div class="pet-friendly">
      <div class="pet-friendly__container">
        <div class="pet-friendly__body--first util__flex--row">
          <div class="pet-friendly__image">
            <img src="@/assets/images/room/pet-friendly-img.jpg" alt="Pet">
          </div>
          <div class="pet-friendly__content">
            <h4 class="util__header--title">Pet Friendly</h4>
            <h1 class="util__header--subtitle">We welcome your pet(s)</h1>
            <br>
            <p class="util__header--description">A hotel is one of the most pet-friendly hotels and resorts
            nearby. In fact, we are crazy about animals as you are, and we really welcome their coming and get
            out royal treatment as you do.</p>
          </div>
        </div>
        <div class="pet-friendly__body--second util__flex--row">
          <div class="pet-friendly__content">
            <h1 class="util__header--subtitle">What we do for your lovely furry friend</h1>
            <br>
            <ul class="util__header--description">
              <li>Disposable pick-up bags around living area</li>
              <li>Pet-sitting, grooming and walking services appointment are available</li>
              <li>Water bowls, food and pet bed can be delivered to your room before arrival</li>
            </ul>
            <br>
            <p class="util__header--description">Our concierge is always happy to coordinate additional pet services if you need them.
            Please contact us before your arrival at 480.000.0008 to let us know what you need. Otherwise,
             we kindly invite you to fill out our pet registration form below.</p>
            <button>
              <router-link to="/pet-friendly/pet-firendly-form">REGISTER FORM</router-link>
            </button>
          </div>
          <div class="pet-friendly__image">
            <img src="@/assets/images/room/pet-friendly-img-2.jpg" alt="Pet">
          </div>
        </div>
        <div class="pet-friendly__body--third util__flex--column">
          <h4 class="util__header--subtitle">What you need to know before arrival</h4>
          <br>
          <ul class="util__header--description">
            <li>Guests must fill out pet registration form before arrival, and $150 non-refundable pet deposit
            per stay will be charge upon check-in.</li>
            <li>Pet must weigh under 50 pounds or under 70 pounds combined.</li>
            <li>Dogs are only permitted in Classic Guestroom and Deluxe Guestroom, and all pets are not allowed in
             the pool area or restaurant.</li>
            <li>For respecting other guests, pets must be on a leash and in your control at all times. Otherwist,
            we kindly ask that your dog should be settled down by 10pm.</li>
            <li>If you leave your pets in the room, please remember to leave your cell phone number at
            the front desk in case of an emergency.</li>
            <li>The hotel own the right to ask that pet be taken off property if your pet is bothering
            other guests due to barking or aggressive behavior.</li>
            <li>The hotel does not take any liability for your pet's action while in the hotel, and owners are
            responsible for retrieving for their pet waste.</li>
          </ul>
          <p>*ADA service animals are exempt from the policy above</p>
        </div>
      </div>
    </div>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner'
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
  .pet-friendly {
    width: 100%;
    position: relative;
    &__container {
      width: 100%;
      padding: 20vh 5vw;
    }
    &__content {
      width: 35%;
      height: 100%;
      margin: 0 50px;
    }
    &__image {
      width: 625px;
      height: 625px;
      & img {
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;
      }
    }
    &__body {
      width: 100%;
      text-align: start;
      &--first {
        justify-content: center;
        align-items: center;
        margin-bottom: 30vh;
        & h4 {
          line-height: 3rem;
        }
      }
      &--second {
        justify-content: center;
        align-items: center;
        margin-bottom: 30vh;
        margin-right: 30px;
        & p {
          padding: 20px 0;
        }
        & button {
          margin: 5px auto;
          padding: 10px 30px;
          background-color: transparent;
          border: 2px solid #3d405b;
          border-radius: 5px;
          & a {
            font-family: inherit;
            font-weight: 400;
            font-size: 1rem;
            color: #3d405b;
            text-decoration: none;
            &:visited {
              color: #3d405b;
            }
          }
          &:hover {
            background-color: #3d405b;
            cursor: pointer;
            & a {
              color: #ffffff;
            }
          }
        }
      }
      &--third {
        width: 100%;
        align-items: center;
        & ul {
          width: 60%;
          list-style-type: square;
          & li {
            margin-bottom: 20px;
          }
        }
        & p {
          font-size: 1.3rem;
        }
      }
    }
  }
</style>
