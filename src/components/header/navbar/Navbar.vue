<template>
  <div class="navbar">
    <div class="navbar__container util__flex--row">
<!--      TODO: Replace logo and link style.-->
<!--      TODO: Add scroll event.-->
      <div class="navbar__container--logo">
        <span style="font-weight: bold; font-size: 2rem; color: white; text-align: center;">A Hotel</span>
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
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  .navbar {
    background-color: transparent;
    height: 120px;
    width: 100%;
    position: fixed;
    z-index: 1;
    &__container {
      padding: 15px 5vw;
      color: #ffffff;
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
          background-color: #ffffff;
        }
      }
    }
  }
</style>
