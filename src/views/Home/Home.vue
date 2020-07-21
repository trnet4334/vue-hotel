<template>
  <div class="home">
    <Navbar :isOnHomepage="isOnHomepage"/>
    <Header/>
    <section class="home flex--column">
      <div class="home__slogan flex--column flex--center">
        <div class="home__slogan--icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; fill: #3d405b;" xml:space="preserve">
            <path id="XMLID_270_" d="M23.5,15h-23C0.224,15,0,15.224,0,15.5S0.224,16,0.5,16h23c0.276,0,0.5-0.224,0.5-0.5S23.776,15,23.5,15z"/>
            <path id="XMLID_379_" d="M11,17.5c0-0.276-0.224-0.5-0.5-0.5h-4C6.224,17,6,17.224,6,17.5S6.224,18,6.5,18h4C10.776,18,11,17.776,11,17.5z"/>
            <path id="XMLID_380_" d="M18.5,18h-4c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h4c0.276,0,0.5-0.224,0.5-0.5S18.776,18,18.5,18z"/>
            <path id="XMLID_381_" d="M13,20.5c0-0.276-0.224-0.5-0.5-0.5h-3C9.224,20,9,20.224,9,20.5S9.224,21,9.5,21h3C12.776,21,13,20.776,13,20.5z"/>
            <path id="XMLID_382_" d="M12.52,18h-0.01c-0.002,0-0.003,0.001-0.005,0.001S12.502,18,12.5,18c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S12.796,18,12.52,18z"/>
            <path id="XMLID_388_" d="M14.52,20h-0.01c-0.002,0-0.003,0.001-0.005,0.001S14.502,20,14.5,20c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S14.796,20,14.52,20z"/>
            <path id="XMLID_389_" d="M7.52,20H7.51c-0.002,0-0.003,0.001-0.005,0.001S7.502,20,7.5,20C7.224,20,7,20.224,7,20.5C7,20.776,7.224,21,7.5,21c0.003,0,0.006-0.002,0.01-0.002C7.513,20.998,7.516,21,7.52,21c0.276,0,0.5-0.224,0.5-0.5S7.796,20,7.52,20z"/>
            <path id="XMLID_392_" d="M10.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S10.502,22,10.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S10.796,22,10.52,22z"/>
            <path id="XMLID_393_" d="M12.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S12.502,22,12.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S12.796,22,12.52,22z"/>
            <path id="XMLID_398_" d="M14.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S14.502,22,14.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S14.796,22,14.52,22z"/>
            <path id="XMLID_407_" d="M19.49,4c0.208,0.021,1.02,0.451,1.736,0.919C21.311,4.973,21.405,5,21.5,5c0.117,0,0.233-0.041,0.327-0.122C22.158,4.592,23.003,4,23.5,4C23.776,4,24,3.776,24,3.5S23.776,3,23.5,3c-0.742,0-1.589,0.553-2.032,0.886C20.835,3.491,19.957,3,19.5,3c-0.276,0-0.505,0.224-0.505,0.5C18.995,3.776,19.214,4,19.49,4z"/>
            <path id="XMLID_408_" d="M11.5,14c2.481,0,4.5-2.019,4.5-4.5S13.981,5,11.5,5S7,7.019,7,9.5S9.019,14,11.5,14z"/>
            <path id="XMLID_409_" d="M11.5,4C11.776,4,12,3.776,12,3.5v-2C12,1.224,11.776,1,11.5,1S11,1.224,11,1.5v2C11,3.776,11.224,4,11.5,4z"/>
            <path id="XMLID_410_" d="M8.067,4.554c0.092,0.161,0.261,0.25,0.433,0.25c0.085,0,0.171-0.021,0.25-0.067c0.239-0.138,0.321-0.444,0.183-0.683l-1-1.732c-0.138-0.24-0.444-0.32-0.683-0.183C7.011,2.277,6.929,2.583,7.067,2.822L8.067,4.554z"/>
            <path id="XMLID_411_" d="M4.322,5.933l1.731,1C6.133,6.979,6.219,7,6.304,7c0.172,0,0.341-0.089,0.433-0.25c0.139-0.239,0.057-0.545-0.183-0.683l-1.731-1C4.583,4.93,4.276,5.01,4.14,5.25C4.001,5.489,4.083,5.795,4.322,5.933z"/>
            <path id="XMLID_412_" d="M16.446,12.933l1.731,1C18.257,13.979,18.343,14,18.428,14c0.172,0,0.341-0.089,0.433-0.25c0.139-0.239,0.057-0.545-0.183-0.683l-1.731-1c-0.238-0.136-0.545-0.057-0.683,0.183C16.125,12.489,16.207,12.795,16.446,12.933z"/>
            <path id="XMLID_413_" d="M3.5,10h2C5.776,10,6,9.776,6,9.5S5.776,9,5.5,9h-2C3.224,9,3,9.224,3,9.5S3.224,10,3.5,10z"/>
            <path id="XMLID_414_" d="M17.5,9C17.224,9,17,9.224,17,9.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5S19.776,9,19.5,9H17.5z"/>
            <path id="XMLID_415_" d="M6.054,12.067l-1.731,1c-0.239,0.138-0.321,0.444-0.183,0.683C4.231,13.911,4.4,14,4.572,14c0.085,0,0.171-0.021,0.25-0.067l1.731-1c0.239-0.138,0.321-0.444,0.183-0.683C6.6,12.01,6.293,11.929,6.054,12.067z"/>
            <path id="XMLID_416_" d="M16.696,7c0.085,0,0.171-0.021,0.25-0.067l1.731-1c0.239-0.138,0.321-0.444,0.183-0.683c-0.138-0.24-0.445-0.322-0.683-0.183l-1.731,1c-0.239,0.138-0.321,0.444-0.183,0.683C16.355,6.911,16.524,7,16.696,7z"/>
            <path id="XMLID_417_" d="M14.25,4.737c0.079,0.045,0.165,0.067,0.25,0.067c0.172,0,0.341-0.089,0.433-0.25l1-1.732c0.139-0.239,0.057-0.545-0.183-0.683c-0.238-0.136-0.545-0.057-0.683,0.183l-1,1.732C13.929,4.293,14.011,4.599,14.25,4.737z"/>
            <circle id="XMLID_418_" cx="4.5" cy="17.5" r="0.5"/>
          </svg>
        </div>
        <div class="home__slogan--content flex--column flex--center">
          <h1>Let Your Soul Follow the Nature</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem cupiditate dolor eaque ex fuga inventore, ipsa molestiae perspiciatis sunt? A excepturi explicabo natus nisi nobis omnis, placeat quod ut.</p>
        </div>
      </div>
    </section>
    <section class="room flex--row">
      <div class="room--image">
        <img src="@/assets/images/homepage/room-img.jpg" alt="Room">
      </div>
      <div class="room--type flex--column page-content--header">
        <h1>Stay with us</h1>
        <h4>Beautifully set amidst the wonderful nature around.</h4>
        <br>
        <ul>
          <li><router-link to="/rooms/classic-guestroom">Classic Guestroom</router-link></li>
          <el-divider/>
          <li><router-link to="/rooms/deluxe-guestroom">Deluxe Guestroom</router-link></li>
          <el-divider/>
          <li><router-link to="/rooms/the-spa-suite">The Spa Suite</router-link></li>
          <el-divider/>
          <li><router-link to="/rooms/luxury-suite">Luxury Suite</router-link></li>
        </ul>
        <router-link to="/rooms" class="room--link">VIEW DETAIL</router-link>
      </div>
    </section>
    <section class="carousel">
      <div class="carousel__container">
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
    </section>
    <section class="dining flex--row">
      <div class="dining__content flex--column">
        <div class="page-content--header">
          <h1>Dine with stunning view</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur beatae culpa facilis ipsum laudantium, nihil porro quam quod sapiente tenetur velit. Aliquam aliquid dolor enim est iste nisi quisquam!</p>
        </div>
        <button><router-link to="/dining">DINE WITH US</router-link></button>
      </div>
      <div class="dining__image">
        <img src="@/assets/images/homepage/dinning-img.jpg" alt="Dining">
      </div>
    </section>
    <section class="spa flex--column flex--center">
      <div class="spa__container flex--row">
        <div class="spa__container--slogan">
          <h1>Recover and relax with rejuvenating spa treatment</h1>
        </div>
        <div class="spa__container--content flex--column page-content--body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis harum tempore! Beatae dolores eaque impedit non obcaecati? Accusantium, aliquam dolore earum ipsam iusto quo recusandae similique ullam unde vero? possimus, quidem reiciendis velit vero voluptas voluptates. Commodi doloribus natus perspiciatis quas saepe!</p>
          <br>
          <button><router-link to="/spa-wellness">VIEW MORE</router-link></button>
        </div>
      </div>
    </section>
    <section class="events flex--column flex--center">
      <div class="events__header flex--column page-content--header">
        <h1>Inspired Gatherings</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ipsum labore nobis provident similique. Aspernatur cupiditate debitis iste quidem rem.</p>
      </div>
      <div class="events__body flex--row">
        <div class="flex--column events__content">
          <div class="image">
            <img src="@/assets/images/homepage/events-img.jpg" alt="Events">
          </div>
          <div class="content page-content--body">
            <h4>Meeting & Events</h4>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eum explicabo quidem.</p>
            <br>
            <router-link to="/events">Learn more</router-link>
          </div>
        </div>
        <div class="flex--column events__content">
          <div class="image">
            <img src="@/assets/images/homepage/wedding-img.jpg" alt="Wedding">
          </div>
          <div class="content page-content--body">
            <h4>Wedding</h4>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dolorum exercitationem!</p>
            <br>
            <router-link to="/wedding">Learn more</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="offers">
      <div class="flex--column flex--center">
        <div class="offers__header flex--column page-content--header">
          <h1>Special Offers</h1>
          <router-link to="/specials">VIEW ALL OFFERS</router-link>
        </div>
        <div class="offers__body flex--row">
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/homepage/specials-1.jpg" alt="Spa">
            </div>
            <br>
            <div class="page-content--body">
              <h4>Spa & Breakfast Package</h4>
              <br>
              <p>Refresh your mind and bodies with a couples
              massage, our classic spa treatment, or private in-room treatment, including one continental
              breakfast in offer.</p>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/homepage/specials-2.jpg" alt="River">
            </div>
            <br>
            <div class="page-content--body">
              <h4>Summertime Escape</h4>
              <br>
              <p>It's easy to fall in love and free your soul through the stunning
                nature from your private deck. There're only few spots available for Deluxe Guestrooms and Luxury Suite.
                Contact us to get the early deal as soon as possible.</p>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image">
              <img src="@/assets/images/homepage/specials-3.jpg" alt="Adventure">
            </div>
            <br>
            <div class="page-content--body">
              <h4>Nature Adventure Package</h4>
              <br>
              <p>Experience with one-day hike with our local hiking
              guides to create the forgettable memories in this trip that best suits your desires.</p>
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
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import {
  VueFlux,
  FluxControls,
  FluxPreloader
} from 'vue-flux'
export default {
  name: 'Home',
  components: {
    VueFlux,
    FluxControls,
    FluxPreloader,
    Navbar,
    Header,
    SignupBanner,
    Footer
  },
  data () {
    return {
      isOnHomepage: true,
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
        require('@/assets/images/homepage/carousel/hotel.jpg'),
        require('@/assets/images/homepage/carousel/dining.jpg'),
        require('@/assets/images/homepage/carousel/private-deck.jpg'),
        require('@/assets/images/homepage/carousel/outdoor.jpg'),
        require('@/assets/images/homepage/carousel/room.jpg'),
        require('@/assets/images/homepage/carousel/bar.jpg')
      ],
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
<style src="./Home.scss" lang="scss" scoped/>
