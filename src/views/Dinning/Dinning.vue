<template>
  <div>
    <navbar/>
    <section class="dinning page-container">
      <div class="page-wrapper">
        <div class="body flex--row">
          <div class="image">
            <img src="@/assets/images/dinning/dinning-img-1.jpg" alt="Dinning">
          </div>
          <div class="content page-content--header">
            <h4>Dinning</h4>
            <h1>Exquisite Cuisine, Unmatched Location</h1>
            <p>A perfect combination to the property's transcendent
              natural beauty and level of luxury, our culinary program features seasonal menus centered
              around healthy, inspired dishes that delight the taste buds and nourish the spirit. While
              in residence, enjoy innovative cocktails, nourishing creative cuisine and panoramic views of
              nature.</p>
          </div>
        </div>
        <div class="body flex--row reverse">
          <div class="image">
            <img src="@/assets/images/dinning/dinning-img-2.jpg" alt="Dinning">
          </div>
          <div class="content page-content--header">
            <h1>Our Chef's Garden</h1>
            <p>Our Chef's Garden is located nearby our property
              and provides most of the vegetables and herbs used in our cuisine. Here we produce
              numerous varieties of heirloom tomatoes, edible flowers, herbs and summer squash. There
              are also spots for garlic, basil, lemon thyme, pepper mint and thai basil.</p>
            <br>
            <p>Passionate about sustainability, we construct an eco-system which efficiently reuse
              all the waste from production. Following the standard methods for organic composting,
              brown and green material is mixed with water and the heap is turned periodically,
              which is the most friendly way for our environment. We offer a garden and composing
              tour for guests to learn the benefits of eating organically.</p>
          </div>
        </div>
        <div class="body flex--row feature-group">
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/dinning/club-img.jpg" alt="Club">
            </div>
            <div class="page-content--body">
              <h4>Club Lounge</h4>
              <p>All-day snacks, complimentary breakfast and beverages
                keep you fueled, and we also provide free Wi-Fi to let you connect to the latest world.</p>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/dinning/pool-bar-img.jpg" alt="Club">
            </div>
            <div class="page-content--body flex--column">
              <h4>The Poolside Bar</h4>
              <p>The poolside bar provides a lively, social
                atmosphere set among our pools and gardens. You can select from a wide variety of appetizers,
                salads, sandwiches and bunch of choices while sipping refreshing craft cocktails, local
                beers.</p>
            </div>
          </div>
        </div>
        <div class="body flex--row">
          <div class="image">
            <img src="@/assets/images/dinning/sunday-brunch-img.jpg" alt="Club">
          </div>
          <div class="content page-content--header list-groups">
            <h1>Opening Hours</h1>
            <div class="flex--row">
              <ul class="list-group">
                <li><h4>Restaurant Hours</h4></li>
                <li>
                  <ul>
                    <li><b>Mon - Fri</b></li>
                    <li>Breakfast 7am - 11am</li>
                    <li>Lunch 11am - 3pm</li>
                    <li>Dinner 3pm - 10pm</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li><b>Sat - Sun</b></li>
                    <li>Brunch 7am - 3pm</li>
                    <li>Dinner 3pm - 10pm</li>
                  </ul>
                </li>
              </ul>
              <ul class="list-group">
                <li><h4>Bar Hours</h4></li>
                <li>
                  <ul>
                    <li>Daily 7am - 10pm</li>
                  </ul>
                </li>
                <li><h4>Menus</h4></li>
                <li>
                  <ul>
                    <li><a href="javascript:;">Breakfast</a></li>
                    <li><a href="javascript:;">Brunch</a></li>
                    <li><a href="javascript:;">Lunch/Dinner</a></li>
                    <li><a href="javascript:;">Bar</a></li>
                  </ul>
                </li>
              </ul>
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
import lozad from 'lozad'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  },
  mounted () {
    const el = document.querySelectorAll('img')
    const observer = lozad(el, {
      rootMargin: '10px',
      threshold: 0.1,
      enableAutoReload: true
    })
    observer.observe()
  }
}
</script>
<style src="./Dinning.scss" lang="scss" scoped/>
