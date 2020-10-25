<template>
  <div class="room">
    <div class="flex--row">
      <div class="flex--column col-1">
        <img :src="require(`@/assets/images/room/${room.imageUrl}.jpg`)" :alt="`${room.imageAlt}`">
      </div>
      <div class="flex--column col-2">
        <div class="flex--column room--introduction">
          <h4>{{room.type}}</h4>
          <h5>{{room.properties}}</h5>
          <p>{{room.description}}</p>
<!--          TODO: Change link to popout modal-->
          <span><router-link :to="`/rooms/${room.detailsLink}`" target="_blank" rel="noreferrer noopener">Room details</router-link></span>
        </div>
        <room-package v-for="item in room.package" :packageRate="item" :key="item.id"/>
      </div>
    </div>
  </div>
</template>
<script>
import RoomPackage from '@/components/checkout/Room/roomPackage/RoomPackage'
import lozad from 'lozad'
export default {
  props: {
    room: {
      type: Object,
      required: true
    }
  },
  components: {
    RoomPackage
  },
  data () {
    return {}
  },
  methods: {},
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
<style src="./Room.scss" lang="scss" scoped/>
