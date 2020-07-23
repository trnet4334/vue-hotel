<template>
  <section class="add-ons">
    <div>
      <div v-for="addOn in addOns" :key="addOn.id">
        <AddOnCard :addOn="addOn"/>
      </div>
      <div class="util__flex--row add-ons__button">
        <button>CONTINUE TO BOOK</button>
      </div>
    </div>
  </section>
</template>
<script>
import addOns from '@/assets/data/checkout/addOns'
import AddOnCard from '@/components/checkout/AddOnCard.vue'
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
    &__button {
      justify-content: flex-end;
    }
    & button {
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
