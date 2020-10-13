<template>
  <div>
    <navbar/>
    <section class="room-details">
      <div class="room-details__container">
        <div class="page-wrapper">
          <div class="room-details__body--first flex--row">
            <div class="room-details__image">
              <img src="@/assets/images/room/classic-guestroom-img.jpg" alt="#">
            </div>
            <div class="room-details__content--first page-content--header">
              <h4>{{classicGuestroom.name}}</h4>
              <h1>{{classicGuestroom.title}}</h1>
              <p>{{classicGuestroom.description}}</p>
              <br>
              <p>{{classicGuestroom.description2}}</p>
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
                <li v-for="item in classicGuestroom.amenities" :key="item.index">{{item}}</li>
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
            <div class="room-details__content--fourth flex--column">
              <h2 class="page-content--title">More rooms</h2>
              <div class="room__cards flex--row">
                <div class="room__card" v-for="room in rooms" :key="room.id">
                  <room-card :room="room"/>
                </div>
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
import lozad from 'lozad'
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
      rooms: rooms.slice(1, 3),
      classicGuestroom: roomType[0],
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
        require('@/assets/images/room/room-card/room-carousel-1.jpg'),
        require('@/assets/images/room/room-card/room-carousel-3.jpg'),
        require('@/assets/images/room/room-card/room-carousel-5.jpg'),
        require('@/assets/images/room/room-card/room-carousel-6.jpg')
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
<style src="../RoomType.scss" lang="scss" scoped/>
