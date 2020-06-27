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
<style lang="scss" scoped>
  .collapse {
    width: 90%;
    text-align: start;
    text-wrap: normal;
    &__header {
      cursor: pointer;
      padding: 2px 0 4px 0;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      & span {
        font-size: 1.3rem;
        font-weight: 600;
      }
    }
    &__body {
      transition: 0.3s ease all;
      max-height: 20rem;
      overflow: hidden;
    }
    &__content {
      & p {
        font-size: 1.3rem;
      }
    }
  }
  .is-closed .collapse__body {
    height: 0;
  }
  .is-rotated {
    transform: rotate(45deg);
    transition: 0.4s ease all;
  }
  .is-shown {
    border-left: 3px solid #2c3e50;
    padding-left: 15px;
  }
</style>
