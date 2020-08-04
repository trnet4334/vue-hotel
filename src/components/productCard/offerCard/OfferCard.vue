<template>
  <div class="content flex--column">
    <div class="image">
      <img :src="require(`@/assets/images/specials/${offer.imageUrl}.jpg`)" :alt="`${offer.imageAlt}`">
    </div>
    <div class="flex--column context page-content--body">
      <h4>{{offer.name}}</h4>
      <br>
      <p>{{offer.description}}</p>
      <a href="javascript:;">BOOK NOW</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    offer: {
      type: Object,
      required: true
    }
  }
}
</script>
<style src="./OfferCard.scss" lang="scss" scoped/>
