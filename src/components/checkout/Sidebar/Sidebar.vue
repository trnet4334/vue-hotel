<template>
  <aside class="sidebar">
    <div class="side__body flex--column">
      <h4>Your Stay</h4>
      <el-divider/>
      <div>
        <sidebar-room
          v-for="(item, index) in reservationDetails"
          :reservationInfo="item"
          :key="item.createTime"
          :id="index"
        />
        <span @click="addAnotherRoom" class="span-add">Add Room</span>
      </div>
      <sidebar-total :totalAmount="totalAmount"/>
    </div>
  </aside>
</template>
<script>
import SidebarRoom from '@/components/checkout/Sidebar/SidebarRoom/SidebarRoom'
import SidebarTotal from '@/components/checkout/Sidebar/SidebarTotal/SidebarTotal'
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
