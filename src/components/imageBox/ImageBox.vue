<template>
  <div class="image-wrapper">
    <transition name="fade">
      <img
        :src="require(`@/assets/images/${imageName[0]}`)"
        :alt="imageName[1]"
        @load="onLoaded"
        v-show="loaded"
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
    return {
      loaded: false
    }
  },
  methods: {
    onLoaded () {
      this.loaded = true
    }
  }
}
</script>
<style lang="scss" src="./ImageBox.scss" scoped/>
