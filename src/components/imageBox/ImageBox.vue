<template>
  <img :data-src="`${imageSrc}`" :alt="`${imageAlt}`" class="lozad">
</template>
<script>
import lozad from 'lozad'
export default {
  name: 'imageBox',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  mounted () {
    const observer = lozad()
    observer.observe()
  }
}
</script>
