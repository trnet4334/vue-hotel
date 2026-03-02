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
    const imgs = document.querySelectorAll('img')
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) img.src = img.dataset.src
          observer.unobserve(img)
        }
      }),
      { rootMargin: '10px', threshold: 0.1 }
    )
    imgs.forEach(img => observer.observe(img))
  }
}
</script>
<style src="./OfferCard.scss" lang="scss" scoped/>
