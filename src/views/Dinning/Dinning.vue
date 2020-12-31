<template>
  <div>
    <navbar/>
    <section class="dinning page-container">
      <div class="page-wrapper">
        <div class="body flex--row">
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl[0]"/>
          </div>
          <div class="content">
            <h4 class="content__title">Dinning</h4>
            <h1 class="page__title">Exquisite Cuisine, Unmatched Location</h1>
            <p class="content__description">A perfect combination to the property's transcendent
              natural beauty and level of luxury, our culinary program features seasonal menus centered
              around healthy, inspired dishes that delight the taste buds and nourish the spirit. While
              in residence, enjoy innovative cocktails, nourishing creative cuisine and panoramic views of
              nature.</p>
          </div>
        </div>
        <div class="body flex--row reverse">
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl[1]"/>
          </div>
          <div class="content">
            <h2 class="page__subtitle">Our Chef's Garden</h2>
            <p class="content__description">Our Chef's Garden is located nearby our property
              and provides most of the vegetables and herbs used in our cuisine. Here we produce
              numerous varieties of heirloom tomatoes, edible flowers, herbs and summer squash. There
              are also spots for garlic, basil, lemon thyme, pepper mint and thai basil.</p>
            <br>
            <p class="content__description">Passionate about sustainability, we construct an eco-system which efficiently reuse
              all the waste from production. Following the standard methods for organic composting,
              brown and green material is mixed with water and the heap is turned periodically,
              which is the most friendly way for our environment. We offer a garden and composing
              tour for guests to learn the benefits of eating organically.</p>
          </div>
        </div>
        <div class="body flex--row feature-group">
          <div class="content flex--column">
            <div class="image-fluid lg">
              <image-box :imageName="imageUrl[2]"/>
            </div>
            <div>
              <h4 class="image-label">Club Lounge</h4>
              <p class="image-description">All-day snacks, complimentary breakfast and beverages
                keep you fueled, and we also provide free Wi-Fi to let you connect to the latest world.</p>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image-fluid lg">
              <image-box :imageName="imageUrl[3]"/>
            </div>
            <div class="flex--column">
              <h4 class="image-label">The Poolside Bar</h4>
              <p class="image-description">The poolside bar provides a lively, social
                atmosphere set among our pools and gardens. You can select from a wide variety of appetizers,
                salads, sandwiches and bunch of choices while sipping refreshing craft cocktails, local
                beers.</p>
            </div>
          </div>
        </div>
        <div class="body flex--row">
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl[4]"/>
          </div>
          <div class="content list-group no-decoration">
            <h2 class="page__subtitle">Opening Hours</h2>
            <div class="flex--row">
              <ul>
                <li><h4 class="content__title">Restaurant Hours</h4></li>
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
              <ul>
                <li><h4 class="content__title">Bar Hours</h4></li>
                <li>
                  <ul>
                    <li>Daily 7am - 10pm</li>
                  </ul>
                </li>
                <li><h4 class="content__title">Menus</h4></li>
                <li>
                  <ul>
                    <li><a class="link underline">Breakfast</a></li>
                    <li><a class="link underline">Brunch</a></li>
                    <li><a class="link underline">Lunch/Dinner</a></li>
                    <li><a class="link underline">Bar</a></li>
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
import ImageBox from '@/components/imageBox/ImageBox'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    ImageBox
  },
  data () {
    return {
      imageUrl: [
        ['dinning/dinning-img-1.jpg', 'Dining 1'],
        ['dinning/dinning-img-2.jpg', 'Dining 2'],
        ['dinning/club-img.jpg', 'Club'],
        ['dinning/pool-bar-img.jpg', 'Bar'],
        ['dinning/sunday-brunch-img.jpg', 'Service']
      ]
    }
  }
}
</script>
<style src="./Dinning.scss" lang="scss" scoped/>
