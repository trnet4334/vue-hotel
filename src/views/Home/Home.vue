<template>
  <div class="home">
    <Navbar/>
    <Header/>
    <div class="home util__flex--column">
      <div class="home__slogan util__flex--column">
        <div class="home__slogan--icon"></div>
        <div class="util__flex--column" style="height: 125px; justify-content: space-around;">
          <div class="home__slogan--title">
            <span>Let Your Soul Follow the Nature</span>
          </div>
          <div class="home__slogan--subtitle">
            <span>Mii amo is fortunate to work with some of the most gifted, experienced and acclaimed therapists in the world. They will use their intuitive healing powers to refresh your mind, body and spirit in ways that are profound and personal.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="room util__flex--row">
      <div class="room--images"></div>
      <div class="room--type">
        <span>Stay with us</span>
        <h4>Beautifully set amidst the wonderful nature around.</h4>
        <ul>
          <li>Classic Guestroom</li>
          <li>Deluxe Guestroom</li>
          <li>The Spa Suite</li>
          <li>Luxury Suite</li>
        </ul>
        <button>VIEW DETAIL</button>
      </div>
    </div>
    <div class="carousel">
      <div class="carousel__container"></div>
    </div>
    <div class="dinning util__flex--row">
      <div class="dinning__content">
        <span>Dine with stunning view</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur beatae culpa facilis ipsum laudantium, nihil porro quam quod sapiente tenetur velit. Aliquam aliquid dolor enim est iste nisi quisquam!</p>
      </div>
      <div class="dinning__image"></div>
    </div>
    <div class="spa util__flex--column">
      <div class="spa__container util__flex--row">
        <div class="spa__container--slogan">
          <span>Recover and relax with rejuvenating spa treatment</span>
        </div>
        <div class="spa__container--content util__flex--column">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis harum tempore! Beatae dolores eaque impedit non obcaecati? Accusantium, aliquam dolore earum ipsam iusto quo recusandae similique ullam unde vero? Deleniti dolores eligendi, enim error est impedit in inventore ipsa iusto labore magnam minima officiis pariatur perferendis possimus, quidem reiciendis velit vero voluptas voluptates. Commodi doloribus natus perspiciatis quas saepe!</p>
          <button>VIEW MORE</button>
        </div>
      </div>
    </div>
    <div class="events">
      <div class="events__container util__flex--column">
        <div class="events__container--header util__flex--column">
          <span>Inspired Gatherings</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ipsum labore nobis provident similique. Aspernatur cupiditate debitis iste quidem rem.</p>
          <a href="javascript:;">MEETING & EVENTS</a>
        </div>
        <div class="events__container--images util__flex--row">
          <div style="background-color: grey; width: 500px; height: 500px;margin: 0 auto;"/>
          <div style="background-color: grey; width: 500px; height: 500px; margin: 0 auto;"/>
        </div>
      </div>
    </div>
    <div class="offers">
      <div class="offers__container util__flex--column">
        <div class="offers__container--header util__flex--column">
          <span>Special Offers & Packages</span>
          <a href="javascript:;">VIEW ALL OFFERS</a>
        </div>
        <div class="offers__container--images util__flex--row">
          <div>
<!--            <img src="" alt="">-->
            <div style="width: 400px; height: 400px; background-color: grey;"/>
            <div>
              <span>Title 1</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, aut autem consectetur delectus earum facere, laboriosam molestias numquam quaerat totam voluptate! Ad atque consequuntur eaque earum error mollitia totam?10</p>
            </div>
          </div>
          <div>
            <!--            <img src="" alt="">-->
            <div style="width: 400px; height: 400px; background-color: grey;"/>
            <div>
              <span>Title 2</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, aut autem consectetur delectus earum facere, laboriosam molestias numquam quaerat totam voluptate! Ad atque consequuntur eaque earum error mollitia totam?10</p>
            </div>
          </div>
          <div>
            <!--            <img src="" alt="">-->
            <div style="width: 400px; height: 400px; background-color: grey;"/>
            <div>
              <span>Title 2</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, aut autem consectetur delectus earum facere, laboriosam molestias numquam quaerat totam voluptate! Ad atque consequuntur eaque earum error mollitia totam?10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="signup-banner">
      <div>
        <span>Sign up for our latest news and promotions</span>
      </div>
      <div>
        <form>
          <div class="util__flex--row">
            <div class="util__flex--column">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" required>
            </div>
            <div class="util__flex--column">
              <label for="email">Email Address</label>
              <input type="text" id="email" required>
            </div>
            <div class="util__flex--column">
              <label for="address">Address</label>
              <input type="text" id="address" required>
            </div>
          </div>
          <div class="util__flex--row">
            <div class="util__flex--column">
              <label for="state">State / Province / Region</label>
              <input type="text" id="state" required>
            </div>
            <div class="util__flex--column">
              <label for="country">Country</label>
              <input type="text" id="country" required>
            </div>
            <div class="util__flex--column">
              <label for="zipCode">Zip Code</label>
              <input type="text" id="zipCode">
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    &__slogan {
      width: 65vw;
      height: 50vh;
      align-items: center;
      justify-content: center;
      &--icon {
        width: 50px;
        height: 50px;
        background-color: goldenrod;
        margin-bottom: 30px;
      }
      &--title span{
        font-size: 2rem;
        font-weight: bold;
      }
      &--subtitle span{
        font-size: 1rem;
        text-wrap: normal;
      }
    }
  }
  .room {
    width: 100%;
    height: 100vh;
    justify-content: center;
    &--images {
      width: 400px;
      height: 500px;
      background-color: grey;

    }
    &--type {
      padding-left: 60px;
      & span {
        font-size: 2.2rem;
        padding: 25px 0;
      }
      & ul {
        & li {
          list-style-type: none;
        }
      }
      & button {
        padding: 8px 10px;
        background-color: transparent;
        border-radius: 5px;
      }
    }
  }
  .carousel {
    width: 100%;
    height: 100vh;
    &__container {
      width: 90%;
      height: 90%;
      margin: 0 auto;
      background-color: grey;
    }
  }
  .dinning {
    width: 100%;
    height: 100vh;
    justify-content: center;
    &__content {
      width: 35vw;
      padding: 0 2.5vw;
      & span {
        font-size: 2.2rem;
        padding: 25px 0;
      }
      & p {
        text-wrap: normal;
      }
    }
    &__image {
      width: 400px;
      height: 500px;
      background-color: grey;
    }
  }
  .spa {
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 15vh 2vw 0 2vw;
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
      filter: blur(1.5px) opacity(0.95);
    }
    &__container {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      &--slogan {
        width: 35vw;
        height: 70%;
        padding: 0 1vw;
        & span {
          font-size: 3.3rem;
          font-weight: bold;
          color: #ffffff;
          width: 35vw;
          padding: 0 2.5vw;
          text-wrap: normal;
          text-align: start;
        }
      }
      &--content {
        width: 35vw;
        height: 70%;
        padding: 0 2.5vw;
        & p {
          font-size: 1.2rem;
          line-height: 1.5rem;
          color: #ffffff;
          text-wrap: normal;
          text-align: start;
          margin-bottom: 40px;
        }
        & button {
          color: #ffffff;
          padding: 8px 10px;
          background-color: transparent;
          border-radius: 5px;
        }
      }
    }
  }
  .events {
    width: 100%;
    height: 100vh;
  }
  .offers {
    width: 100%;
    height: 100vh;
  }
  .signup-banner {
    width: 100%;
    height: 20vh;
    background-color: grey;
  }
</style>
