<template>
  <div class="overlay" :class="displayOverlay">
    <div class="overlay__wrapper flex--column">
      <div class="overlay__body">
        <div class="header">
          <div class="flex--row">
            <h2>Your Stay</h2>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 24 24" xml:space="preserve" @click="closeMobileSidebar">
              <path d="M12.707,12l8.146-8.146c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0L12,11.293L3.854,3.146c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L11.293,12l-8.146,8.146c-0.195,0.195-0.195,0.512,0,0.707C3.244,20.951,3.372,21,3.5,21s0.256-0.049,0.354-0.146L12,12.707l8.146,8.146C20.244,20.951,20.372,21,20.5,21s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L12.707,12z"/>
            </svg>
          </div>
          <el-divider/>
        </div>
        <div class="content">
          <sidebar-room
            v-for="(item, index) in reservationDetails"
            :reservationInfo="item"
            :key="item.createTime"
            :id="index"
          />
          <div class="flex--row tag-add" @click="addAnotherRoom" v-show="selectedInfo.length > 0">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 24 24" xml:space="preserve">
              <path d="M11.5,0C5.159,0,0,5.159,0,11.5S5.159,23,11.5,23S23,17.841,23,11.5S17.841,0,11.5,0z M17.5,12H12v5.5c0,0.276-0.224,0.5-0.5,0.5S11,17.776,11,17.5V12H5.5C5.224,12,5,11.776,5,11.5S5.224,11,5.5,11H11V5.5C11,5.224,11.224,5,11.5,5S12,5.224,12,5.5V11h5.5c0.276,0,0.5,0.224,0.5,0.5S17.776,12,17.5,12z"/>
            </svg>
            <span>Add room</span>
          </div>
        </div>
      </div>
      <div class="overlay__footer flex--row">
        <span>Total:</span>
        <span :key="currentStep" v-show="total !== ''">$ {{total}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarRoom from '@/components/checkout/Sidebar/SidebarRoom/SidebarRoom'
import { mapState } from 'vuex'
export default {
  components: {
    SidebarRoom
  },
  data () {
    return {
      total: ''
    }
  },
  methods: {
    addAnotherRoom () {
      this.$store.dispatch('addAnotherRoom')
      this.$store.dispatch('displayMobileSidebar')
    },
    closeMobileSidebar () {
      this.$store.dispatch('displayMobileSidebar')
    }
  },
  computed: {
    ...mapState({
      openOverlay: state => state.isMobileSidebarDisplay,
      currentStep: state => state.reservation.currentStep,
      onSearchDate: state => state.reservation.onSearchRoom.date,
      onSearchGuests: state => state.reservation.onSearchRoom.guests,
      selectedInfo: state => state.reservation.reservationDetails.roomSelections,
      totalAmount: state => state.reservation.reservationDetails.totalAmount
    }),
    displayOverlay () {
      return {
        'display-overlay': this.openOverlay
      }
    },
    reservationDetails () {
      return this.$store.getters.reservationSelection
    }
  },
  beforeUpdate () {
    this.total = this.totalAmount
  }
}
</script>
<style src="./SidebarMobile.scss" lang="scss" scoped/>
