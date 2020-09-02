<template>
  <aside class="sidebar">
    <div class="side__body flex--column">
      <h4>Your Stay</h4>
      <el-divider/>
      <div>
        <sidebar-room
          v-for="item in reservationDetails"
          :reservationInfo="item"
          :key="item.createTime"
        />
        <span @click="addAnotherRoom">Add Room</span>
      </div>
      <sidebar-total :totalAmount="totalAmount"/>
    </div>
    <div class="side__button">
      <button v-if="currentStep === 4">COMPLETE BOOKING</button>
    </div>
  </aside>
</template>
<script>
import SidebarRoom from '@/components/checkout/SidebarRoom/SidebarRoom'
import SidebarTotal from '@/components/checkout/SidebarTotal/SidebarTotal'
import { mapState } from 'vuex'
export default {
  name: 'sidebar',
  components: {
    SidebarRoom,
    SidebarTotal
  },
  data () {
    return {
    }
  },
  methods: {
    addAnotherRoom () {
      this.$store.dispatch('addAnotherRoom')
    }
  },
  computed: {
    ...mapState({
      currentStep: state => state.reservation.currentStep,
      totalAmount: state => state.reservation.reservationDetails.totalAmount
    }),
    reservationDetails () {
      return this.$store.getters.reservationSelection
    }
  }
}
</script>
<style src="./Sidebar.scss" lang="scss" scoped/>
