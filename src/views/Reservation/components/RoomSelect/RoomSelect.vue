<template>
  <section class="room__select">
    <modifying-tag :isModifying="isModifying"/>
    <div class="rooms">
      <Room v-for="item in roomsIntro" :room="item" :key="item.id"/>
    </div>
    <button @click="skipUpdate" v-if="isModifying">SKIP</button>
  </section>
</template>
<script>
import Room from '@/components/checkout/Room/Room.vue'
import ModifyingTag from '@/components/checkout/ModifyingTag/ModifyingTag'
import { mapState } from 'vuex'
import dayjs from 'dayjs'
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
      id: state => state.reservation.tempId,
      time: state => state.reservation.reservationDetails.createTime,
      isModifying: state => state.reservation.isEditingRoom
    }),
    roomsIntro () {
      return this.$store.getters.displayRoomSearchResult
    }
  },
  methods: {
    async skipUpdate () {
      await this.$store.dispatch('goNextStep')
      await this.$router.push({
        name: 'Reservation',
        params: { tempId: this.id },
        query: {
          createdTime: dayjs(this.time).format('YYYY-MM-DD'),
          currentStep: 's2',
          prevStep: 's1'
        }
      })
    }
  }
}
</script>
<style src="./RoomSelect.scss" lang="scss" scoped/>
