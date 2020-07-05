<template>
  <div class="collapse" :class="collapseClasses">
    <div class="collapse__header util__flex--row" @click="toggleCollapse">
      <span>{{faq.question}}</span>
      <img src="@/assets/images/icons/Add.svg" width="17px" height="17px" :class="rotateIcon">
    </div>
    <div class="collapse__body">
      <div class="collapse__content" :class="displayContentBorder">
        <p>{{faq.answer}}</p>
      </div>
    </div>
    <el-divider/>
  </div>
</template>
<script>
export default {
  props: ['faq'],
  data: function () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleCollapse: function () {
      this.isOpen = !this.isOpen
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
