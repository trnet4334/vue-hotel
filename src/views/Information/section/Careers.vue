<template>
  <section class="careers">
    <div class="careers__container">
      <div class="careers__content util__flex--column">
        <div class="careers__header util__flex--column">
          <h4 class="util__header--title">CAREERS</h4>
          <h1 class="util__header--subtitle">LEAVE YOU MARK WITH US</h1>
          <p class="util__header--description">Embark on a professional journey with us, where our team members are encouraged to find
            balance, inspiration and connection through a thriving and fulfilling career. We provide our
            guests a full-service luxury and exceptional experiences. Join our team today and see what
            makes here to be an incredible place to work for.</p>
          <br>
          <router-link to="/jobs" target="_blank" rel="noopener noreferrer">
            VIEW OPEN POSITIONS
          </router-link>
        </div>
        <el-divider/>
        <div class="careers__context">
          <div class="careers__context--first util__flex--row">
            <div>
              <h4>Our duty</h4>
              <p>We pride ourselves in providing the very best and memorable experiences for our guests.
              Our team is genuine and positive, and we support each other in our efforts to exceed guest expectations.
              Here, you'll be encouraged to grow and develop your talents. For every team members, these aren't
               just jobs but opportunities to produce unforgettable experiences everyday.</p>
            </div>
            <div class="careers__context--image">
              <img src="@/assets/images/information/careers-img-1.jpg" alt="duty">
            </div>
          </div>
          <el-divider/>
          <div class="careers__context--second util__flex--row">
            <div class="careers__context--image">
              <img src="@/assets/images/information/careers-img-2.jpg" alt="team">
            </div>
            <div>
              <h4>Our team</h4>
              <p>As an employee, you'll be empowered to deliver exceptional service for our guests. Immersed
                in an approachable and collaborative environment, everybody will be supported and encouraged
                to learn and grow within the organization. Additionally, every team members receive benefits
                and services discount at all our properties as part of our commitment to relax and rest.</p>
            </div>
          </div>
          <el-divider/>
          <div class="careers__context--third util__flex--column">
            <h4>Service with Heart</h4>
            <div>
              <p>As a an honorable business, our goal is to deliver a truly tailored
                experience to every guest. Our work is surrounded on our spa treatments,
                but we also offer organic menu, various fitness activities, and opportunities
                to explore the nature.</p>
              <br>
              <p>Much of the cuisine at our restaurant originates in our local organic farm.
                As part of our commitment to conservation, we offer garden and composting classes
                every weeks, provided guests to experience sustainable horticulture and healthful
                eating practices. We also provide photography and watercolor painting activities
                for every guests. For outdoor activity enthusiast, nature walks and scenic hikes
                are also great ways to explore nature.</p>
            </div>
            <br><br>
            <router-link to="/jobs" target="_blank" rel="noopener noreferrer">
              VIEW OPEN POSITIONS
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      image1: '@/assets/images/information/careers-img-1.jpg',
      image2: '@/assets/images/information/careers-img-2.jpg',
      fit: 'contain'
    }
  }
}
</script>
<style lang="scss" scoped>
  .careers {
    width: 100%;
    position: relative;
    &__container {
      width: 100%;
      padding: 10vh 5vw;
    }
    &__header {
      width: 65%;
      margin: 0 auto;
      text-wrap: normal;
      text-align: start;
      align-items: center;
      & a {
        font-size: 1.2rem;
        font-weight: bold;
        padding: 3px 0;
        text-decoration: none;
        position: relative;
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: #2c3e50;
        }
        &:visited {
          color: #2c3e50;
        }
        &:hover {
          transform: scale(1.2);
        }
      }
      & p {
        font-size: 1.2rem;
        margin: 25px 0;
      }
    }
    &__content {
      width: 100%;
    }
    &__context {
      &--first, &--second {
        justify-content: space-around;
        padding: 1vh 7vw;
        text-wrap: normal;
        text-align: center;
        & h4 {
          text-align: center;
          font-weight: bold;
          font-size: 1.8rem;
          padding: 16px 0;
        }
        & p {
          font-size: 1.2rem;
          line-height: 1.7rem;
        }
      }
      &--first div:nth-of-type(1) {
        width: 40%;
      }
      &--second div:nth-of-type(2) {
        width: 40%;
      }
      &--third {
        align-items: center;
        padding: 1vh 7vw;
        text-wrap: normal;
        & h4 {
          text-align: center;
          font-weight: bold;
          font-size: 2rem;
          padding: 16px 0;
        }
        & p {
          font-size: 1.1rem;
          line-height: 1.7rem;
          text-align: start;
        }
        & a {
          font-size: 1.2rem;
          font-weight: bold;
          padding: 3px 0;
          text-decoration: none;
          position: relative;
          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #2c3e50;
          }
          &:visited {
            color: #2c3e50;
          }
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
    &__context--image {
      width: 450px;
      height: 300px;
      max-width: 40%;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
