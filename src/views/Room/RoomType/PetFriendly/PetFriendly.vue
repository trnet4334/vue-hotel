<template>
  <div>
    <Navbar/>
    <div class="pet-friendly">
      <div class="page-container">
        <div class="page-wrapper">
          <div class="pet-friendly__body--first flex--row">
            <div class="image-fluid xl">
              <image-box :imageName="['room/pet-friendly-img.jpg', 'Pet 1']"/>
            </div>
            <div class="pet-friendly__content">
              <h4 class="content__title">Pet Friendly</h4>
              <h1 class="page__title">We welcome your pet(s)</h1>
              <br>
              <p class="content__description">A hotel is one of the most pet-friendly hotels and resorts
                nearby. In fact, we are crazy about animals as you are, and we really welcome their coming and get
                out royal treatment as you do.</p>
            </div>
          </div>
          <div class="pet-friendly__body--second flex--row">
            <div class="pet-friendly__content list-group">
              <h2 class="page__subtitle">What we do for your lovely furry friend</h2>
              <br>
              <ul>
                <li>Disposable pick-up bags around living area</li>
                <li>Pet-sitting, grooming and walking services appointment are available</li>
                <li>Water bowls, food and pet bed can be delivered to your room before arrival</li>
              </ul>
              <br>
              <p class="content__description">Our concierge is always happy to coordinate additional pet services if you need them.
                Please contact us before your arrival at 480.000.0008 to let us know what you need. Otherwise,
                we kindly invite you to fill out our pet registration form below.</p>
              <br>
              <button class="btn-outline-md">
                <router-link to="/pet-friendly/pet-friendly-form">REGISTER FORM</router-link>
              </button>
            </div>
            <div class="image-fluid xl">
              <image-box :imageName="['room/pet-friendly-img-2.jpg', 'Pet 2']"/>
            </div>
          </div>
          <div class="pet-friendly__body--third flex--column list-group">
            <h2 class="page__subtitle">What you need to know before arrival</h2>
            <br>
            <ul>
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
            <p class="content__description">*ADA service animals are exempt from the policy above</p>
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
import ImageBox from '@/components/imageBox/ImageBox'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    ImageBox
  }
}
</script>
<style src="./PetFriendly.scss" lang="scss" scoped/>
