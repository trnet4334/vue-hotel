<template>
  <div class="content flex--column flex--center">
    <div class="image-fluid md">
      <image-box :imageName="[`specials/${offer.imageUrl}.jpg`, `${offer.imageAlt}`]"/>
    </div>
    <div class="flex--column context">
      <h5 class="image-label">{{offer.name}}</h5>
      <br>
      <p class="image-description">{{offer.description}}</p>
      <a class="link underline">BOOK NOW</a>
    </div>
  </div>
</template>
<script>
import ImageBox from '@/components/imageBox/ImageBox'
import lozad from 'lozad'
export default {
  components: {
    ImageBox
  },
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
