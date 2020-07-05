<template>
  <div>
    <navbar/>
    <section class="events">
      <div class="events__container">
        <div class="events__body--first util__flex--row">
          <div class="events__content events__header">
            <h4 class="util__header--title">Meeting & Events</h4>
            <h1 class="util__header--subtitle">Gather in a Royal-Like Setting</h1>
            <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur distinctio eligendi est inventore nemo sint, soluta temporibus totam.</p>
            <br>
            <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur est iure, magni non quae. Consequuntur expedita, laudantium! Eius, repellendus!</p>
            <button>
              <router-link to="/inquiry">REQUEST PROPOSAL</router-link>
            </button>
          </div>
          <div class="events--image">
            <img src="@/assets/images/meeting/meeting-img-1.jpg" alt="Meeting">
          </div>
        </div>
        <div class="events__body--second util__flex--row">
          <div class="events--image">
            <img src="@/assets/images/meeting/meeting-img-2.jpg" alt="Meeting">
          </div>
          <div class="events__content">
            <h1 class="util__header--subtitle">The Essentials</h1>
            <br>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolore.</li>
            </ul>
            <button><a href="javascript:;">VIEW FLOOR PLANS</a></button>
          </div>
        </div>
        <div class="events__body--third util__flex--row">
          <div class="events__content">
            <h1 class="util__header--subtitle">Spaces for all purposes</h1>
            <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dignissimos id ipsa iste iusto laboriosam nihil, odio, provident quia recusandae similique voluptate? Blanditiis dolore doloribus, eius error excepturi harum incidunt inventore ipsam laborum maiores modi nihil officia, perspiciatis quod recusandae sapiente tempore totam vero voluptate voluptates. Consectetur, et libero?</p>
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
            <button><a href="javascript:;">VIEW FLOOR PLANS</a></button>
          </div>
          <div class="events--image">
            <img src="@/assets/images/meeting/meeting-img-3.jpg" alt="Meeting">
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
        <div class="events__body--fifth util__flex--column util__flex--center">
          <div class="util__flex--row" style="justify-content: space-evenly; align-items: center;">
            <div style="width: 40%;">
              <h1 class="util__header--subtitle">Let Us Help You Plan Your Event</h1>
            </div>
            <div class="util__flex--column" style="width: 40%;">
              <p class="util__header--description" style="margin-bottom: 30px;">For questions regarding your meeting or event, please contact the sales team at 480-000-0009 or sales@ahotel.com.</p>
              <button>
                <router-link to="/inquiry">REQUEST PROPOSAL</router-link>
              </button>
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
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
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
    Footer
  },
  data () {
    return {
      options: {
        allowFullscreen: false,
        allowToSkipTransition: true,
        autohideTime: 2500,
        autoplay: false,
        bindKeys: false,
        delay: 5000,
        enableGestures: false,
        infinite: true,
        lazyLoad: true,
        lazyLoadAfter: 3
      },
      images: ['', '', ''],
      transitions: [
        'blinds3d',
        'blocks2',
        'book',
        'cube',
        'round2',
        'swipe',
        'warp',
        'wave'
      ]
    }
  }
}
</script>
<style src="./Events.scss" lang="scss" scoped/>
