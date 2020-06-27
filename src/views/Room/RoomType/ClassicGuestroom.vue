<template>
  <div>
    <navbar/>
    <section class="room-details">
      <div class="room-details__container">
        <div class="room-details__body--first util__flex--row">
          <div class="room-details__image">
            <img src="@/assets/images/room/classic-guestroom-img.jpg" alt="#">
          </div>
          <div class="room-details__content--first">
            <h4 class="util__header--title">Classic Guestroom</h4>
            <h1 class="util__header--subtitle">Mediterranean Inspired</h1>
            <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cupiditate, dignissimos dolore dolorem facilis fugit ipsa molestias nemo, non officia quam reiciendis repellendus rerum sed totam ullam veritatis! Ea?</p>
            <button>RESERVATION NOW</button>
          </div>
        </div>
        <div class="room-details__body--second">
          <div class="room-details__content--second">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>0</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>0</li>
            </ul>
          </div>
        </div>
        <div class="room-details__body--third">
          <div class="room-details__content--third">
            <el-carousel indicator-position="outside" style="width: 100%; height: 100%;">
              <el-carousel-item v-for="item in 5" :key="item">
                <h1>{{item}}</h1>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="room-details__body--fourth">
          <div class="room-details__content--fourth util__flex--column">
            <h1 class="util__header--subtitle">More rooms</h1>
            <div class="room-cards util__flex--row">
              <div class="room-card" v-for="room in rooms" :key="room.id">
                <room-card :room="room"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
import RoomCard from '@/components/productCard/roomCard/RoomCard'
import rooms from '@/assets/data/rooms'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    RoomCard
  },
  data () {
    return {
      rooms: rooms.slice(0, 2)
    }
  }
}
</script>
<style lang="scss" scoped>
  .room-details {
    width: 100%;
    position: relative;
    &__container {
      width: 100%;
      position: relative;
      padding: 20vh 5vw 5vh 5vw;
    }
    &__body {
      &--first, &--second, &--third, &--fourth {
        margin-bottom: 20vh;
        width: 100%;
      }
      &--first {
        justify-content: space-evenly;
      }
      &--third {
        height: 100vh;
      }
      &--fourth {
        padding: 0 5vw;
      }
    }
    &__content {
      &--first {
        width: 35%;
        & button {
          margin: 55px auto;
          padding: 10px 60px;
          background-color: transparent;
          border: 2px solid #3d405b;
          border-radius: 3px;
          font-family: inherit;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 3px;
          color: #3d405b;
          &:hover {
            background-color: #3d405b;
            cursor: pointer;
            color: #ffffff;
          }
        }
      }
      &--second {
        width: 80%;
        margin: 0 auto;
        & ul {
          columns: 3;
          text-align: start;
          & li {
            font-size: 1.2rem;
            line-height: 2rem;
          }
        }
      }
      &--third {
        padding: 2vh 0vw;
      }
      &--fourth {
        width: 100%;
        align-items: center;
      }
    }
    &__image {
      width: 450px;
      height: 450px;
      & img {
        width: 100%;
        height: 100%;
        object-position: 50% 50%;
        object-fit: cover;
      }
    }
  }
  .room-cards {
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
    .room-card {
      width: 50%;
    }
  }
</style>
