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
export default {
  components: {
    AddOnCard
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      displayAddOns: state => state.reservation.addOns,
      addOnSelection: state => state.reservation.onSearchRoom.addOns
    })
  },
  methods: {
    goNext () {
      this.$store.dispatch('forwardToCustomerInfo')
    },
    backPrevious () {
      this.$router.push('/reservation/s1')
      this.$store.dispatch('backPreviousStep')
    }
  }
}
</script>
<style src="./AddOns.scss" lang="scss" scoped/>
