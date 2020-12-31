<template>
  <div>
    <navbar :isOnHomepage="isOnHomepage"/>
    <section class="events">
      <div class="page-wrapper">
        <div class="events__body--first flex--row">
          <div class="events__content events__header">
            <h4 class="content__title">Meeting & Events</h4>
            <h1 class="page__title">Gather in a Royal-Like Setting</h1>
            <p class="content__description">
              We provide a great spot for truly unforgettable, productive meetings and events.
              From annual gatherings to corporate functions or even more, we provide several different
              options for our guest. In our resort, you'll discover a wide range of spectacular facilities and
               entertaining team-building activities.
            </p>
            <br>
            <p class="content__description">
              Whatever your vision, we have enough space to make it a reality. Combined with numbers of outdoor event space and more
              than 16,000 square feet of indoor meeting space. We can satisfy all kinds of need for your event.
            </p>
            <button class="btn-outline-md">
              <router-link to="/events/inquiry">REQUEST PROPOSAL</router-link>
            </button>
          </div>
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl[0]"/>
          </div>
        </div>
        <div class="events__body--second flex--row flex--reverse">
          <div class="events__content list-group">
            <h2 class="page__subtitle">The Essentials</h2>
            <br>
            <ul>
              <li>Outdoor dining options for group guests</li>
              <li>Unique, tasty and healthy food & beverage (Ingredients from local farmer)</li>
              <li>Premiere location - Surrounded by authentic nature view</li>
              <li>Ballrooms and meeting spaces with full of natural light</li>
              <li>Exclusive meetings package - wonderful ideas to escape from the norm</li>
            </ul>
            <button class="btn-outline-md" disabled>
              <a>VIEW FLOOR PLANS</a>
            </button>
          </div>
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl[1]"/>
          </div>
        </div>
        <div class="events__body--third flex--row">
          <div class="events__content list-group">
            <h2 class="page__subtitle">Spaces for all purposes</h2>
            <p class="content__description">From the ballroom to the boardroom, we've offered various options to
            accommodate your need. Besides, A Resort & Spa can comfortably host
            up to 400 guests for seated dinner or up to 750 guests for standing cocktail
            reception. With these flexible selection of spaces and elevated dining options,
            we can guarantee your party will pop and unforgettable.</p>
            <br>
            <ul>
              <li>Family Celebrations</li>
              <li>Corporate Events</li>
              <li>Weddings & Receptions</li>
              <li>Engagement Parties & Bridal Showers</li>
              <li>Birthday Dinners & Anniversaries</li>
              <li>Galas & Fundraisers</li>
              <li>And Much More</li>
            </ul>
            <button class="btn-outline-md" disabled>
              <a>VIEW FLOOR PLANS</a>
            </button>
          </div>
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl[2]"/>
          </div>
        </div>
        <div class="events__body--fourth">
          <vue-flux
            :options="options"
            :images="images"
            :transitions="transitions"
          >
            <template v-slot:preloader>
              <flux-preloader />
            </template>
          </vue-flux>
        </div>
        <div class="events__body--fifth flex--row">
            <div class="events__content">
              <h2 class="page__subtitle">Let Us Help You Plan Your Event</h2>
            </div>
            <div class="events__content">
              <p class="content__description">For questions regarding your meeting or event, please contact the sales team at 480-000-0009 or sales@ahotel.com.</p>
              <button class="btn-outline-md">
                <router-link to="/events/inquiry">REQUEST PROPOSAL</router-link>
              </button>
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
import ImageBox from '@/components/imageBox/ImageBox'
import {
  VueFlux,
  FluxControls,
  FluxPreloader
} from 'vue-flux'
export default {
  components: {
    VueFlux,
    FluxControls,
    FluxPreloader,
    Navbar,
    SignupBanner,
    Footer,
    ImageBox
  },
  data () {
    return {
      isOnHomepage: false,
      imageUrl: [
        ['meeting/meeting-img-1.jpg', 'Meeting 1'],
        ['meeting/meeting-img-2.jpg', 'Meeting 2'],
        ['meeting/meeting-img-3.jpg', 'Meeting 3']
      ],
      options: {
        allowFullscreen: false,
        allowToSkipTransition: true,
        autohideTime: 2500,
        autoplay: true,
        bindKeys: false,
        delay: 3000,
        enableGestures: false,
        infinite: true,
        lazyLoad: true,
        lazyLoadAfter: 3
      },
      images: [
        require('@/assets/images/meeting/carousel/meeting-carousel-1.jpg'),
        require('@/assets/images/meeting/carousel/meeting-carousel-2.jpg'),
        require('@/assets/images/meeting/carousel/meeting-carousel-3.jpg'),
        require('@/assets/images/meeting/carousel/meeting-carousel-4.jpg')
      ],
      transitions: [
        'blinds3d',
        'blocks2',
        'warp',
        'wave'
      ]
    }
  }
}
</script>
<style src="./Events.scss" lang="scss" scoped/>
