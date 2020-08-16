<template>
  <section class="add-ons">
    <div>
      <div v-for="addOn in displayAddOns" :key="addOn.id">
        <AddOnCard :addOn="addOn"/>
      </div>
      <div class="flex--row buttons">
        <button @click="backPrevious">BACK</button>
        <button @click="goNext">SKIP</button>
      </div>
    </div>
  </section>
</template>
<script>
// import addOns from '@/assets/data/checkout/addOns'
import AddOnCard from '@/components/checkout/AddOnCard/AddOnCard.vue'
export default {
  components: {
    AddOnCard
  },
  data () {
    return {}
  },
  computed: {
    displayAddOns () {
      return this.$store.getters.displayAddOns
    }
  },
  methods: {
    goNext () {
      this.$store.dispatch('goNextStep')
    },
    backPrevious () {
      this.$store.dispatch('backPreviousStep')
    }
  }
}
</script>
<style lang="scss" scoped>
  .add-ons {
    padding-top: 5vh;
  }
  .buttons {
    justify-content: center;
    margin-top: 30px;
    & button {
      width: 150px;
      margin: 0 30px;
      padding: 12px 12px;
      font-size: 1.1rem;
      border: none;
      background-color: #283845;
      color: #ffffff;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
