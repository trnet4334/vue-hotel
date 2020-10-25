<template>
  <div class="addon-card flex--row">
    <div class="addon-card--image">
      <img :src="require(`@/assets/images/checkout/add-on-card/${addOn.id}.jpg`)" :alt="addOn.alt">
    </div>
    <div class="addon-card__content flex--column">
      <div class="flex--row">
        <div class="flex--column content--col-first">
          <h4>{{addOn.name}}</h4>
          <p>{{addOn.description}}</p>
        </div>
        <div class="flex--column content--col-second">
          <span>${{addOn.price}}</span>
          <p>Per Stay</p>
          <p>Excluding Taxes and Fee</p>
        </div>
      </div>
      <div class="flex--row content--button">
        <button @click="selectAddOn" v-if="!includedAddon">ADD TO MY STAY</button>
        <button @click="selectAddOn" v-if="includedAddon" class="btn-remove">REMOVE</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import lozad from 'lozad'
export default {
  props: {
    addOn: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isSelected: false
    }
  },
  methods: {
    selectAddOn () {
      const selection = {
        name: this.addOn.name,
        price: this.addOn.price
      }
      if (this.isSelected === false) {
        if (this.includedAddon === true) {
          this.$store.dispatch('removeAddonsFromSelection', this.addOn.name)
          this.isSelected = false
        } else if (this.includedAddon === false) {
          this.$store.dispatch('addAddonsToSelection', selection)
          this.isSelected = true
        }
      } else if (this.isSelected === true) {
        if (this.includedAddon === true) {
          this.$store.dispatch('removeAddonsFromSelection', this.addOn.name)
          this.isSelected = false
        } else if (this.includedAddon === false) {
          this.isSelected = false
        }
      }
    }
  },
  computed: {
    ...mapState({
      selectedAddons: state => state.reservation.onSearchRoom.addOns
    }),
    includedAddon () {
      const _temp = []
      if (this.selectedAddons.length === 0) {
        return this.isSelected === true
      } else {
        this.selectedAddons.forEach(element => {
          _temp.push(element.addOnName)
        })
        return _temp.includes(this.addOn.name)
      }
    }
  },
  mounted () {
    const el = document.querySelectorAll('img')
    const observer = lozad(el, {
      rootMargin: '10px',
      threshold: 0.1,
      enableAutoReload: true
    })
    observer.observe()
  }
}
</script>
<style src="./AddOnCard.scss" lang="scss" scoped/>
