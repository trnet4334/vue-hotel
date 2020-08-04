<template>
  <div class="addon-card util__flex--row">
    <div class="addon-card--image">
      <img :src="require(`@/assets/images/checkout/add-on-card/${addOn.id}.jpg`)" :alt="addOn.alt">
    </div>
    <div class="addon-card__content util__flex--column">
      <div class="util__flex--row">
        <div class="util__flex--column content--col-first">
          <h4>{{addOn.name}}</h4>
          <p>{{addOn.description}}</p>
        </div>
        <div class="util__flex--column content--col-second">
          <span>${{addOn.price}}</span>
          <p>Per Stay</p>
          <p>Including Taxes and Fee</p>
        </div>
      </div>
      <div class="util__flex--row content--button">
        <button>ADD TO MY STAY</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['addOn']
}
</script>
<style src="./AddOnCard.scss" lang="scss" scoped/>
