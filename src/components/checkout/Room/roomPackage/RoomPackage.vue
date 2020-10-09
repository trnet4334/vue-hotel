<template>
  <div>
    <el-divider/>
    <div class="flex--row package-rate">
      <div>
        <span><u>{{packageRate.name}}</u></span>
        <p>{{packageRate.description}}</p>
      </div>
      <div>
        <span>${{packageRate.rate}}</span>
        <p>Per Night</p>
        <p>Excluding Taxes & Fees</p>
        <button @click="selectRoom" v-if="!isEditingRoom">BOOK NOW</button>
        <button v-if="isEditingRoom && isSelected" :disabled="true">SELECTED</button>
        <button @click="selectRoom" v-if="isEditingRoom && !isSelected">UPDATE</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
export default {
  props: {
    packageRate: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    selectRoom () {
      const selection = {
        type: this.packageRate.type,
        packageName: this.packageRate.name,
        rate: this.packageRate.rate
      }
      this.$store.dispatch('addRoomToSelection', selection)
      this.$router.push({
        name: 'Reservation',
        params: { tempId: this.id },
        query: {
          createdTime: dayjs(this.time).format('YYYY-MM-DD'),
          currentStep: 's2',
          prevStep: 's1'
        }
      })
    }
  },
  computed: {
    ...mapState({
      id: state => state.reservation.tempId,
      time: state => state.reservation.reservationDetails.createTime,
      isEditingRoom: state => state.reservation.isEditingRoom,
      selectedRoom: state => state.reservation.onSearchRoom.roomSelect
    }),
    isSelected () {
      return this.selectedRoom.packageName === this.packageRate.name && this.selectedRoom.roomType === this.packageRate.type
    }
  }
}
</script>
<style src="./RoomPackage.scss" lang="scss" scoped></style>
