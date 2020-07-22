<template>
  <div>
    <Navbar/>
    <div class="pet-friendly">
      <div class="page-container">
        <div class="page-wrapper">
          <div class="pet-friendly__body--first flex--row">
            <div class="pet-friendly__image">
              <img src="@/assets/images/room/pet-friendly-img.jpg" alt="Pet">
            </div>
            <div class="pet-friendly__content page-content--header">
              <h4>Pet Friendly</h4>
              <h1>We welcome your pet(s)</h1>
              <br>
              <p>A hotel is one of the most pet-friendly hotels and resorts
                nearby. In fact, we are crazy about animals as you are, and we really welcome their coming and get
                out royal treatment as you do.</p>
            </div>
          </div>
          <div class="pet-friendly__body--second flex--row">
            <div class="pet-friendly__content page-content--body">
              <h2 class="page-content--title">What we do for your lovely furry friend</h2>
              <br>
              <ul class="list-group">
                <li>Disposable pick-up bags around living area</li>
                <li>Pet-sitting, grooming and walking services appointment are available</li>
                <li>Water bowls, food and pet bed can be delivered to your room before arrival</li>
              </ul>
              <br>
              <p>Our concierge is always happy to coordinate additional pet services if you need them.
                Please contact us before your arrival at 480.000.0008 to let us know what you need. Otherwise,
                we kindly invite you to fill out our pet registration form below.</p>
              <br>
              <button>
                <router-link to="/pet-friendly/pet-friendly-form">REGISTER FORM</router-link>
              </button>
            </div>
            <div class="pet-friendly__image">
              <img src="@/assets/images/room/pet-friendly-img-2.jpg" alt="Pet">
            </div>
          </div>
          <div class="pet-friendly__body--third flex--column page-content--body">
            <h2 class="page-content--title">What you need to know before arrival</h2>
            <br>
            <ul class="list-group">
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
            <br>
            <p>*ADA service animals are exempt from the policy above</p>
          </div>
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
<style src="./PetFriendly.scss" lang="scss" scoped/>
