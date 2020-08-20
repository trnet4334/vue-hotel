<template>
  <aside class="sidebar">
    <div class="side__body flex--column">
      <h4>Your Stay</h4>
      <el-divider/>
      <div>
        <sidebar-room
          v-for="(item, index) in reservationDetails"
          :reservationInfo="item"
          :key="index"
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
export default {
  name: 'sidebar',
  components: {
    SidebarRoom,
    SidebarTotal
  },
  data () {
    return {
      reservationDetails: [],
      totalAmount: undefined
    }
  },
  methods: {
    addAnotherRoom () {
      this.$store.dispatch('addAnotherRoom')
    }
  },
  computed: {
    currentStep () {
      return this.$store.getters.currentStep
    }
  },
  beforeUpdate () {
    this.reservationDetails = this.$store.getters.reservationSelection
    // this.totalAmount = this.$store.getters.displayTotalAmount
  }
}
</script>
<style src="./Sidebar.scss" lang="scss" scoped/>
