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
import lozad from 'lozad'
export default {
  props: {
    offer: {
      type: Object,
      required: true
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
<style src="./OfferCard.scss" lang="scss" scoped/>
