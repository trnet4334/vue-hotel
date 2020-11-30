<template>
  <div>
    <navbar :isOnHomepage="isOnHomepage"/>
    <section class="events">
      <div class="page-wrapper">
        <div class="events__body--first flex--row">
          <div class="events__content events__header">
            <h4 class="content__title">Meeting & Events</h4>
            <h1 class="page__title">Gather in a Royal-Like Setting</h1>
            <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur distinctio eligendi est inventore nemo sint, soluta temporibus totam.</p>
            <br>
            <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur est iure, magni non quae. Consequuntur expedita, laudantium! Eius, repellendus!</p>
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
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
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
            <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dignissimos id ipsa iste iusto laboriosam nihil, odio, provident quia recusandae similique voluptate? Blanditiis dolore doloribus, eius error excepturi harum incidunt inventore ipsam laborum maiores modi nihil officia, perspiciatis quod recusandae sapiente tempore totam vero voluptate voluptates. Consectetur, et libero?</p>
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

            <template v-slot:controls>
              <flux-controls />
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
