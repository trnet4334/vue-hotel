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
<style src="./RoomCard.scss" lang="scss" scoped/>
