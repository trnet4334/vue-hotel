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
          <p>Including Taxes and Fee</p>
        </div>
      </div>
      <div class="flex--row content--button">
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
