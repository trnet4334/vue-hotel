<template>
  <div class="collapse" :class="collapseClasses">
    <div class="collapse__header flex--row" @click="isOpen = !isOpen">
      <span>{{faq.question}}</span>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 24 24" xml:space="preserve" :class="rotateIcon">
        <path d="M11.5,0C5.159,0,0,5.159,0,11.5S5.159,23,11.5,23S23,17.841,23,11.5S17.841,0,11.5,0z M17.5,12H12v5.5c0,0.276-0.224,0.5-0.5,0.5S11,17.776,11,17.5V12H5.5C5.224,12,5,11.776,5,11.5S5.224,11,5.5,11H11V5.5C11,5.224,11.224,5,11.5,5S12,5.224,12,5.5V11h5.5c0.276,0,0.5,0.224,0.5,0.5S17.776,12,17.5,12z"/>
      </svg>
    </div>
    <div class="collapse__body">
      <div :class="displayContentBorder">
        <p class="content__description">{{faq.answer}}</p>
      </div>
    </div>
    <el-divider/>
  </div>
</template>
<script>
export default {
  props: {
    faq: Object
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    collapseClasses: function () {
      return {
        'is-closed': !this.isOpen
      }
    },
    rotateIcon: function () {
      return {
        'is-rotated': this.isOpen
      }
    },
    displayContentBorder: function () {
      return {
        'is-shown': this.isOpen
      }
    }
  }
}
</script>
<style src="./Collapse.scss" lang="scss" scoped/>
