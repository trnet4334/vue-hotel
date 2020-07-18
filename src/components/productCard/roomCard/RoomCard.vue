<template>
  <div class="card util__flex--column">
    <div class="card__carousel">
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
    <div class="card__body util__flex--column">
      <div class="card__body--content">
        <h3>{{room.name}}</h3>
        <p>{{room.description}}</p>
      </div>
      <div class="card__body--link">
        <router-link :to="{ name: `${room.routeName}` }">ROOM DETAILS</router-link>
        <router-link to="/reservation">RESERVE NOW</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {
  VueFlux,
  FluxControls,
  FluxPreloader
} from 'vue-flux'
export default {
  props: ['room'],
  components: {
    VueFlux,
    FluxControls,
    FluxPreloader
  },
  data () {
    return {
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
        require(`@/assets/images/room/room-card/${this.room.galleryUrl[0]}.jpg`),
        require(`@/assets/images/room/room-card/${this.room.galleryUrl[1]}.jpg`),
        require(`@/assets/images/room/room-card/${this.room.galleryUrl[2]}.jpg`),
        require(`@/assets/images/room/room-card/${this.room.galleryUrl[3]}.jpg`)
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
<style src="./RoomCard.scss" lang="scss" scoped/>
