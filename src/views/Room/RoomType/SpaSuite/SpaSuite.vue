<template>
  <div>
    <navbar/>
    <section class="room-details">
      <div class="room-details__container">
        <div class="room-details__body--first util__flex--row">
          <div class="room-details__image">
            <img src="@/assets/images/room/the-spa-suite-img.jpg" alt="#">
          </div>
          <div class="room-details__content--first">
            <h4 class="util__header--title">{{theSpaSuite.name}}</h4>
            <h1 class="util__header--subtitle">{{theSpaSuite.title}}</h1>
            <p class="util__header--description">{{theSpaSuite.description}}</p>
            <br>
            <p class="util__header--description">{{theSpaSuite.description2}}</p>
            <button>
              <router-link to="/reservation">
                RESERVATION NOW
              </router-link>
            </button>
          </div>
        </div>
        <div class="room-details__body--second">
          <div class="room-details__content--second">
            <ul>
              <li v-for="item in theSpaSuite.amenities" :key="item.index">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="room-details__body--third">
          <div class="room-details__content--third">
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
        </div>
        <div class="room-details__body--fourth">
          <div class="room-details__content--fourth util__flex--column">
            <h1 class="util__header--subtitle">More rooms</h1>
            <div class="room-cards util__flex--row">
              <div class="room-card" v-for="room in rooms" :key="room.id">
                <room-card :room="room"/>
              </div>
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
import RoomCard from '@/components/productCard/roomCard/RoomCard'
import rooms from '@/assets/data/rooms'
import roomType from '@/assets/data/checkout/roomType'
import {
  VueFlux,
  FluxControls,
  FluxPreloader
} from 'vue-flux'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    RoomCard,
    VueFlux,
    FluxControls,
    FluxPreloader
  },
  data () {
    return {
      rooms: rooms.slice(0, 1).concat(rooms.slice(-1)),
      theSpaSuite: roomType[2],
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
        require('@/assets/images/room/room-card/room-carousel-3.jpg'),
        require('@/assets/images/room/room-card/room-carousel-6.jpg'),
        require('@/assets/images/room/room-card/room-carousel-2.jpg'),
        require('@/assets/images/room/room-card/room-carousel-5.jpg')
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
<style src="../RoomType.scss" lang="scss" scoped/>
