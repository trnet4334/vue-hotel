<template>
  <div>
    <navbar/>
    <section class="page-container">
      <div class="page-wrapper">
        <div class="header page-content--header">
          <h4>Offers & Special Packages</h4>
          <h1>Treat yourself</h1>
          <p>It's here that you will have the opportunity to
            explore Sedona from a native point of view. To make your stay special, and even more memorable,
            we've created different packages designed to let you immerse in this nature beauty with us and
            experience the very best of our services.</p>
        </div>
        <div class="body flex--row">
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/homepage/specials-img-1.jpg" alt="Package 1">
            </div>
            <div class="flex--column context page-content--body">
              <h4>Spa & Breakfast Package</h4>
              <br>
              <p>Classic package combined with spa treatment and
                our typical continental breakfast. You can choose any one of treatment from our list for
                free, and 50% discount for one more treatment on the list.</p>
              <a href="javascript:;">BOOK NOW</a>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/homepage/specials-img-2.jpg" alt="Package 2">
            </div>
            <div class="flex--column context page-content--body">
              <h4>Nature Adventure Package</h4>
              <br>
              <p>Discover the wonderful nature with our experienced
                local guide to create lasting memories without compromising luxury, plus one hiking essential
                package for every guest.</p>
              <a href="javascript:;">BOOK NOW</a>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/homepage/specials-img-3.jpg" alt="Package 3">
            </div>
            <div class="flex--column context page-content--body">
              <h4>Summertime Escape</h4>
              <br>
              <p>Experience spectacular view from your private
                deck with our perfect service. With credits towards dining, spa services, welcome
                amenity and more.</p>
              <a href="javascript:;">BOOK NOW</a>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/specials/specials-img-1.jpg" alt="Package 4">
            </div>
            <div class="flex--column context page-content--body">
              <h4>The Anniversary/The Honeymoon</h4>
              <br>
              <p>Spend your honeymoon with luxurious
                accommodations, featuring dining credit, spa treatment credit and a gift that
                will complement your true love.</p>
              <a href="javascript:;">BOOK NOW</a>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/specials/specials-img-2.jpg" alt="Package 5">
            </div>
            <div class="flex--column context page-content--body">
              <h4>Retrograde Retreat</h4>
              <br>
              <p>Prioritize wellness and embrace retrograde
                with a 2-night stay, including two free yoga or fitness classes.</p>
              <a href="javascript:;">BOOK NOW</a>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/specials/special-img-3.jpg" alt="Package 6">
            </div>
            <div class="flex--column context page-content--body">
              <h4>Linger Longer</h4>
              <br>
              <p>Enjoy a fifth night with our compliments
                on stays. Stay with us as long as you wish, the longer you stay, the more you
                save!</p>
              <a href="javascript:;">BOOK NOW</a>
            </div>
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
import Footer from '@/components/footer/Footer.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  }
}
</script>
<style src="./Specials.scss" lang="scss" scoped/>
