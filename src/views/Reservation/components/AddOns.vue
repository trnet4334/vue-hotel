<template>
  <section class="add-ons">
    <div>
      <div v-for="addOn in addOns" :key="addOn.id">
        <AddOnCard :addOn="addOn"/>
      </div>
    </div>
  </section>
</template>
<script>
import addOns from '@/assets/data/checkout/addOns'
import AddOnCard from '@/components/checkout/AddOnCard/AddOnCard.vue'
export default {
  components: {
    AddOnCard
  },
  data () {
    return {
      addOns: addOns
    }
  }
}
</script>
<style lang="scss" scoped>
  .add-ons {
    padding-top: 5vh;
  }
</style>
