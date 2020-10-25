<template>
  <div>
    <navbar :isOnHomepage="isOnHomepage"/>
    <section class="events">
      <div class="page-wrapper">
        <div class="events__body--first flex--row">
          <div class="events__content events__header page-content--header">
            <h4>Meeting & Events</h4>
            <h1>Gather in a Royal-Like Setting</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur distinctio eligendi est inventore nemo sint, soluta temporibus totam.</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur est iure, magni non quae. Consequuntur expedita, laudantium! Eius, repellendus!</p>
            <button>
              <router-link to="/events/inquiry">REQUEST PROPOSAL</router-link>
            </button>
          </div>
          <div class="image">
            <img src="@/assets/images/meeting/meeting-img-1.jpg" alt="Meeting">
          </div>
        </div>
        <div class="events__body--second flex--row flex--reverse">
          <div class="events__content page-content--header">
            <h1>The Essentials</h1>
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
          <div class="image">
            <img src="@/assets/images/meeting/meeting-img-2.jpg" alt="Meeting">
          </div>
        </div>
        <div class="events__body--third flex--row">
          <div class="events__content page-content--header">
            <h1>Spaces for all purposes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dignissimos id ipsa iste iusto laboriosam nihil, odio, provident quia recusandae similique voluptate? Blanditiis dolore doloribus, eius error excepturi harum incidunt inventore ipsam laborum maiores modi nihil officia, perspiciatis quod recusandae sapiente tempore totam vero voluptate voluptates. Consectetur, et libero?</p>
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
          <div class="image">
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
        <div class="events__body--fifth flex--row page-content--header">
            <div class="events__content">
              <h1>Let Us Help You Plan Your Event</h1>
            </div>
            <div class="events__content">
              <p>For questions regarding your meeting or event, please contact the sales team at 480-000-0009 or sales@ahotel.com.</p>
              <button>
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
import lozad from 'lozad'
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
      isOnHomepage: false,
      options: {
        allowFullscreen: false,
        allowToSkipTransition: true,
        autohideTime: 2500,
        autoplay: false,
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
<style src="./Events.scss" lang="scss" scoped/>
