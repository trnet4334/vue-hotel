<template>
  <div class="card util__flex--column">
    <div class="card__carousel">
<!--      TODO: Finish carousel images and styling-->
      <el-carousel trigger="click" height="360px" :autoplay="false">
        <el-carousel-item v-for="item in 5" :key="item">
          <h1>{{item}}</h1>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="card__body util__flex--column">
      <div class="card__body--content">
        <h3>{{room.name}}</h3>
        <p>{{room.description}}</p>
      </div>
      <div class="card__body--link">
        <router-link :to="{name: room.routeName}">ROOM DETAILS</router-link>
        <router-link to="/">RESERVE</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['room']
}
</script>
<style lang="scss" scoped>
  .card {
    padding: 2vh 5vw;
    align-items: center;
    width: 100%;
    &__carousel {
      width: 100%;
    }
    &__body {
      width: 100%;
      &--content {
        padding: 0 5%;
        margin: 0 auto;
        text-align: start;
        & h3 {
          font-size: 1.8rem;
          font-weight: 600;
        }
        & p {
          padding: 15px 0;
          font-size: 1.2rem;
        }
      }
      &--link {
        padding: 1vh 5%;
        align-self: flex-start;
        & a {
          font-size: 1.3rem;
          font-weight: 700;
          margin-right: 20px;
          text-decoration: none;
          position: relative;
          &:visited {
            color: #e07a5f;
          }
          &:hover:after {
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            position: absolute;
            left: 0;
            bottom: -1px;
            background-color: #e07a5f;
          }
        }
      }
    }
  }
</style>
