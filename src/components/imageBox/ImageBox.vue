<template>
  <div class="image-wrapper">
    <transition name="fade">
      <img
        :src="require(`@/assets/images/${imageName[0]}`)"
        :alt="imageName[1]"
      >
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    imageName: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" src="./ImageBox.scss" scoped/>
