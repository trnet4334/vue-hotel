<template>
  <div class="home">
    <Navbar :isOnHomepage="isOnHomepage"/>
    <Header/>
    <section class="slogan flex--column flex--center">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               viewBox="0 0 24 24" xml:space="preserve">
            <path d="M23.5,15h-23C0.224,15,0,15.224,0,15.5S0.224,16,0.5,16h23c0.276,0,0.5-0.224,0.5-0.5S23.776,15,23.5,15z"/>
            <path d="M11,17.5c0-0.276-0.224-0.5-0.5-0.5h-4C6.224,17,6,17.224,6,17.5S6.224,18,6.5,18h4C10.776,18,11,17.776,11,17.5z"/>
            <path d="M18.5,18h-4c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h4c0.276,0,0.5-0.224,0.5-0.5S18.776,18,18.5,18z"/>
            <path d="M13,20.5c0-0.276-0.224-0.5-0.5-0.5h-3C9.224,20,9,20.224,9,20.5S9.224,21,9.5,21h3C12.776,21,13,20.776,13,20.5z"/>
            <path d="M12.52,18h-0.01c-0.002,0-0.003,0.001-0.005,0.001S12.502,18,12.5,18c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S12.796,18,12.52,18z"/>
            <path d="M14.52,20h-0.01c-0.002,0-0.003,0.001-0.005,0.001S14.502,20,14.5,20c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S14.796,20,14.52,20z"/>
            <path d="M7.52,20H7.51c-0.002,0-0.003,0.001-0.005,0.001S7.502,20,7.5,20C7.224,20,7,20.224,7,20.5C7,20.776,7.224,21,7.5,21c0.003,0,0.006-0.002,0.01-0.002C7.513,20.998,7.516,21,7.52,21c0.276,0,0.5-0.224,0.5-0.5S7.796,20,7.52,20z"/>
            <path d="M10.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S10.502,22,10.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S10.796,22,10.52,22z"/>
            <path d="M12.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S12.502,22,12.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S12.796,22,12.52,22z"/>
            <path d="M14.52,22h-0.01c-0.002,0-0.003,0.001-0.005,0.001S14.502,22,14.5,22c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.003,0,0.006-0.002,0.01-0.002c0.003,0,0.006,0.002,0.01,0.002c0.276,0,0.5-0.224,0.5-0.5S14.796,22,14.52,22z"/>
            <path d="M19.49,4c0.208,0.021,1.02,0.451,1.736,0.919C21.311,4.973,21.405,5,21.5,5c0.117,0,0.233-0.041,0.327-0.122C22.158,4.592,23.003,4,23.5,4C23.776,4,24,3.776,24,3.5S23.776,3,23.5,3c-0.742,0-1.589,0.553-2.032,0.886C20.835,3.491,19.957,3,19.5,3c-0.276,0-0.505,0.224-0.505,0.5C18.995,3.776,19.214,4,19.49,4z"/>
            <path d="M11.5,14c2.481,0,4.5-2.019,4.5-4.5S13.981,5,11.5,5S7,7.019,7,9.5S9.019,14,11.5,14z"/>
            <path d="M11.5,4C11.776,4,12,3.776,12,3.5v-2C12,1.224,11.776,1,11.5,1S11,1.224,11,1.5v2C11,3.776,11.224,4,11.5,4z"/>
            <path d="M8.067,4.554c0.092,0.161,0.261,0.25,0.433,0.25c0.085,0,0.171-0.021,0.25-0.067c0.239-0.138,0.321-0.444,0.183-0.683l-1-1.732c-0.138-0.24-0.444-0.32-0.683-0.183C7.011,2.277,6.929,2.583,7.067,2.822L8.067,4.554z"/>
            <path d="M4.322,5.933l1.731,1C6.133,6.979,6.219,7,6.304,7c0.172,0,0.341-0.089,0.433-0.25c0.139-0.239,0.057-0.545-0.183-0.683l-1.731-1C4.583,4.93,4.276,5.01,4.14,5.25C4.001,5.489,4.083,5.795,4.322,5.933z"/>
            <path d="M16.446,12.933l1.731,1C18.257,13.979,18.343,14,18.428,14c0.172,0,0.341-0.089,0.433-0.25c0.139-0.239,0.057-0.545-0.183-0.683l-1.731-1c-0.238-0.136-0.545-0.057-0.683,0.183C16.125,12.489,16.207,12.795,16.446,12.933z"/>
            <path d="M3.5,10h2C5.776,10,6,9.776,6,9.5S5.776,9,5.5,9h-2C3.224,9,3,9.224,3,9.5S3.224,10,3.5,10z"/>
            <path d="M17.5,9C17.224,9,17,9.224,17,9.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5S19.776,9,19.5,9H17.5z"/>
            <path d="M6.054,12.067l-1.731,1c-0.239,0.138-0.321,0.444-0.183,0.683C4.231,13.911,4.4,14,4.572,14c0.085,0,0.171-0.021,0.25-0.067l1.731-1c0.239-0.138,0.321-0.444,0.183-0.683C6.6,12.01,6.293,11.929,6.054,12.067z"/>
            <path d="M16.696,7c0.085,0,0.171-0.021,0.25-0.067l1.731-1c0.239-0.138,0.321-0.444,0.183-0.683c-0.138-0.24-0.445-0.322-0.683-0.183l-1.731,1c-0.239,0.138-0.321,0.444-0.183,0.683C16.355,6.911,16.524,7,16.696,7z"/>
            <path d="M14.25,4.737c0.079,0.045,0.165,0.067,0.25,0.067c0.172,0,0.341-0.089,0.433-0.25l1-1.732c0.139-0.239,0.057-0.545-0.183-0.683c-0.238-0.136-0.545-0.057-0.683,0.183l-1,1.732C13.929,4.293,14.011,4.599,14.25,4.737z"/>
            <circle cx="4.5" cy="17.5" r="0.5"/>
          </svg>
      <h2 class="page__subtitle">Let Your Soul Follow the Nature</h2>
      <span>
        <p>- John S.</p>
        <p>Newport Beach, CA</p>
      </span>
    </section>
    <section class="room flex--row">
      <div class="image-fluid xl">
        <image-box :imageName="imageUrl[0]"/>
      </div>
      <div class="room--type flex--column">
        <h2 class="page__subtitle">Stay with us</h2>
        <h4 class="content__title">
          Beautifully set amidst the wonderful nature around.
        </h4>
        <br>
        <ul>
          <li>
            <router-link to="/rooms/classic-guestroom">Classic Guestroom</router-link>
          </li>
          <el-divider/>
          <li>
            <router-link to="/rooms/deluxe-guestroom">Deluxe Guestroom</router-link>
          </li>
          <el-divider/>
          <li>
            <router-link to="/rooms/the-spa-suite">The Spa Suite</router-link>
          </li>
          <el-divider/>
          <li>
            <router-link to="/rooms/luxury-suite">Luxury Suite</router-link>
          </li>
        </ul>
        <router-link to="/rooms" class="link colored no-underline">VIEW DETAIL</router-link>
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
        </vue-flux>
      </div>
    </section>
    <section class="dining flex--row">
      <div class="dining__content flex--column">
        <h2 class="page__subtitle">Dine with stunning view</h2>
        <p class="content__description">
          We offer few types of food, including western style and eastern style.
          Especially, we have a front-row seat outside our dining place surrounded by stunning nature.
          Delight in a 360-degree view of the canyon with handcrafted cocktails and sophisticated light-fare.
        </p>
        <br>
        <p class="content__description">Reservations are recommended.</p>
        <button class="btn-outline-md">
          <router-link to="/dining">DINE WITH US</router-link>
        </button>
      </div>
      <div class="image-fluid xl">
        <image-box :imageName="imageUrl[1]"/>
      </div>
    </section>
    <section class="spa flex--column flex--center">
      <div class="spa__container flex--row">
        <div class="spa__container--slogan flex--column flex--center">
          <h2>Recover and relax with rejuvenating spa treatment</h2>
        </div>
        <div class="spa__container--content flex--column flex--center">
          <p class="content__description">
            As our honorable guest at A Resort & Spa, please enjoy the complimentary use of our resort pools, fitness center,
             bathrobes, slippers, and different kinds of herbal teas. With five private treatment rooms, there are several
            treatments you can choose as you wish. Our reserved spots are limited, please make reservations as soon as possible.
          </p>
          <br>
          <button class="btn-outline-lg">
            <router-link to="/spa-wellness">VIEW MORE</router-link>
          </button>
        </div>
      </div>
    </section>
    <section class="events flex--column flex--center">
      <div class="events__header flex--column">
        <h2 class="page__subtitle">Inspired Gatherings</h2>
        <p class="content__description">
          Combined with amazing view and fantastic cuisine, A Resort & Spa provide a
          great place for o one-of-a-kind wedding or an unforgettable meeting.
        </p>
      </div>
      <div class="events__body flex--row">
        <div class="flex--column events__content">
          <div class="image-fluid lg">
            <image-box :imageName="imageUrl[2]"/>
          </div>
          <div class="content">
            <h4 class="image-label">Meeting & Events</h4>
            <br>
            <p class="image-description">
              Need a place for grouping an event or celebrating party? Make them real by
              make an appointment with us.
            </p>
            <br>
            <router-link to="/events" class="link">Learn more</router-link>
          </div>
        </div>
        <div class="flex--column events__content">
          <div class="image-fluid lg">
            <image-box :imageName="imageUrl[3]"/>
          </div>
          <div class="content page-content--body">
            <h4 class="image-label">Wedding</h4>
            <br>
            <p class="image-description">
              Preparing a unforgettable wedding with us. Have the wedding you envisioned
              from the moment you imagined.
            </p>
            <br>
            <router-link to="/wedding" class="link">Learn more</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="offers">
      <div class="flex--column flex--center">
        <div class="flex--column">
          <h2 class="page__subtitle">Special Offers</h2>
          <br>
          <router-link to="/specials" class="link">VIEW ALL OFFERS</router-link>
          <br>
        </div>
        <div class="offers__body flex--row">
          <div class="content flex--column">
            <div class="image-fluid md">
              <image-box :imageName="imageUrl[4]"/>
            </div>
            <br>
            <div>
              <h4 class="image-label">Spa & Breakfast Package</h4>
              <br>
              <p class="image-description">
                Refresh your mind and bodies with a couples
              massage, our classic spa treatment, or private in-room treatment, including one continental
              breakfast in offer.
              </p>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image-fluid md">
              <image-box :imageName="imageUrl[5]"/>
            </div>
            <br>
            <div>
              <h4 class="image-label">Summertime Escape</h4>
              <br>
              <p class="image-description">
                It's easy to fall in love and free your soul through the stunning
                nature from your private deck. There're only few spots available for Deluxe Guestrooms and Luxury Suite.
                Contact us to get the early deal as soon as possible.
              </p>
            </div>
          </div>
          <div class="content flex--column">
            <div class="image-fluid md">
              <image-box :imageName="imageUrl[6]"/>
            </div>
            <br>
            <div>
              <h4 class="image-label">Nature Adventure Package</h4>
              <br>
              <p class="image-description">
                Experience with one-day hike with our local hiking
              guides to create the forgettable memories in this trip that best suits your desires.
              </p>
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
import ImageBox from '@/components/imageBox/ImageBox'
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
    ImageBox,
    Footer
  },
  data () {
    return {
      isOnHomepage: true,
      imageUrl: [
        ['homepage/room-img.jpg', 'Room'],
        ['homepage/dinning-img.jpg', 'Dining'],
        ['homepage/events-img.jpg', 'Events'],
        ['homepage/wedding-img.jpg', 'Wedding'],
        ['homepage/specials-1.jpg', 'Spa'],
        ['homepage/specials-2.jpg', 'River'],
        ['homepage/specials-3.jpg', 'Adventure']
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
        'swipe',
        'warp',
        'wave'
      ]
    }
  }
}
</script>
<style src="./Home.scss" lang="scss" scoped/>
