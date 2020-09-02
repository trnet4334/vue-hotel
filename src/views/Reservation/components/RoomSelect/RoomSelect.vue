<template>
  <section class="room__select">
    <modifying-tag :isModifying="isModifying"/>
    <div class="rooms">
      <Room v-for="item in roomsIntro" :room="item" :key="item.id"/>
    </div>
  </section>
</template>
<script>
import Room from '@/components/checkout/Room/Room.vue'
import ModifyingTag from '@/components/checkout/ModifyingTag/ModifyingTag'
import { mapState } from 'vuex'
export default {
  components: {
    Room,
    ModifyingTag
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      isModifying: state => state.reservation.isEditingRoom
    }),
    roomsIntro () {
      return this.$store.getters.displayRoomSearchResult
    }
  }
}
</script>
<style src="./RoomSelect.scss" lang="scss" scoped/>
