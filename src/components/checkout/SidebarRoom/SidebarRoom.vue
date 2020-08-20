<template>
  <div>
    <div>
      <div class="flex--column">
        <div class="flex--row side__content--row">
          <span><u><i>{{ info.roomSelect.roomType }}</i></u></span>
          <p></p>
        </div>
        <ul class="list-items">
          <li class="flex--row list-item">
            <span>{{ info.roomSelect.packageName }}</span>
            <p>${{ info.roomSelect.rate }}</p>
          </li>
          <li class="flex--row list-item">
            <span>Add-Ons</span>
            <p>${{ calculateAddOnPrice }}</p>
          </li>
        </ul>
      </div>
      <div class="flex--row side__content--row">
        <span>Taxes and Fees</span>
        <p>${{ calculateTax }}</p>
      </div>
      <div class="flex--row side__content--action">
        <span>Edit</span> |
        <span>Remove</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reservationInfo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      info: this.reservationInfo
    }
  },
  computed: {
    calculateTax () {
      return Math.round((this.info.roomSelect.rate + this.calculateAddOnPrice) * 0.08 * 100) / 100
    },
    calculateAddOnPrice () {
      return this.info.addOns.reduce((acc, item) => {
        return acc + item.addOnPrice
      }, 0)
    }
  }
}
</script>
<style src="./SidebarRoom.scss" lang="scss" scoped/>
