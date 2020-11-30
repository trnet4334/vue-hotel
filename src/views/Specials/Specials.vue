<template>
  <div>
    <navbar/>
    <section class="page-container">
      <div class="page-wrapper">
        <div class="header">
          <h4 class="content__title">Offers & Special Packages</h4>
          <h1 class="page__title">Treat yourself</h1>
          <p class="content__description">It's here that you will have the opportunity to
            explore Sedona from a native point of view. To make your stay special, and even more memorable,
            we've created different packages designed to let you immerse in this nature beauty with us and
            experience the very best of our services.</p>
        </div>
        <div class="body flex--row">
          <offer-card v-for="offer in this.$offersInfo" :offer="offer" :key="offer.id"/>
        </div>
      </div>
    </section>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import OfferCard from '@/components/productCard/offerCard/OfferCard'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    OfferCard
  }
}
</script>
<style src="./Specials.scss" lang="scss" scoped/>
