<template>
  <nav>
    <div class="header__container">
      <h1 class="header__slogan util__flex--column">
        <span>Find</span>
        <span>Yourself</span>
        <span>Here</span>
      </h1>
<!--      TODO: Add an iframe here-->
      <div></div>
    </div>
  </nav>
</template>
<script>
</script>
<style lang="scss" scoped>
  .header {
    &__container {
      width: 100%;
      height: 100vh;
      position: relative;
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        background: url("../../assets/images/background/Home/background-1.jpg") no-repeat center center fixed;
        background-size: cover;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        filter: blur(1.5px) opacity(0.9);
      }
    }
    &__slogan {
      color: #ffffff;
      z-index: 1;
      width: 250px;
      height: 300px;
      font-size: 4.5rem;
      font-weight: bold;
      transform: translate3d(50%, 50%, 0);
      & span {
        display: block;
        text-align: left;
        position: relative;
      }
    }
  }
</style>
