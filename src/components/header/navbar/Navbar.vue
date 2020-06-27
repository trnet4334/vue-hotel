<template>
  <nav class="navbar util__flex--column" :class="scrollClasses">
    <div class="navbar__container util__flex--row">
<!--      TODO: Replace logo and link style.-->
<!--      TODO: Add scroll event.-->
      <div class="navbar__container--logo">
        <span style="font-weight: bold; font-size: 2rem; color: #2c3e50; text-align: center;">A Hotel</span>
      </div>
      <div class="navbar__container--link util__flex--row">
        <span>Reservation</span>
        <span>800.000.0000</span>
        <div class="navbar__container--menuBtn util__flex--column">
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      isOnTheTop: true,
      topPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.isOnTheTop = scrollTop === 0
    }
  },
  computed: {
    scrollClasses: function () {
      return {
        'navbar--scroll': !this.isOnTheTop
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .navbar {
    background-color: transparent;
    justify-content: center;
    height: 120px;
    width: 100%;
    position: fixed;
    z-index: 1;
    &__container {
      padding: 15px 5vw;
      color: #2c3e50;
      align-items: center;
      justify-content: space-between;
      &--link {
        & span {
          padding: 0 15px;
          font-size: 1.1rem;
          font-weight: bold;
        }
      }
      &--menuBtn {
        justify-content: space-around;
        align-items: center;
        & div {
          width: 55px;
          height: 2px;
          background-color: #2c3e50;
        }
      }
    }
  }
  .navbar--scroll {
    background-color: #ffffff;
    height: 60px;
  }
</style>
