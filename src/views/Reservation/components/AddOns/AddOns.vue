<template>
  <section class="add-ons">
    <div>
      <div v-for="addOn in displayAddOns" :key="addOn.id">
        <AddOnCard :addOn="addOn"/>
      </div>
      <div class="flex--row buttons">
        <button @click="backPrevious">BACK</button>
        <button @click="goNext">{{
            addOnSelection.length === 0 ?
              'SKIP':
              'CONTINUE'
          }}</button>
      </div>
    </div>
  </section>
</template>
<script>
import AddOnCard from '@/components/checkout/AddOnCard/AddOnCard.vue'
import { mapState } from 'vuex'
import dayjs from 'dayjs'
export default {
  components: {
    AddOnCard
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      id: state => state.reservation.tempId,
      time: state => state.reservation.reservationDetails.createTime,
      displayAddOns: state => state.reservation.addOns,
      addOnSelection: state => state.reservation.onSearchRoom.addOns
    })
  },
  methods: {
    goNext () {
      this.$store.dispatch('forwardToCustomerInfo')
    },
    backPrevious () {
      this.$router.push({
        name: 'Reservation',
        params: { tempId: this.id },
        query: {
          createdTime: dayjs(this.time).format('YYYY-MM-DD'),
          currentStep: 's1',
          prevStep: 's2'
        }
      })
      this.$store.dispatch('backPreviousStep')
    }
  }
}
</script>
<style src="./AddOns.scss" lang="scss" scoped/>
