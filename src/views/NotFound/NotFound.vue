<template>
  <main>
    <navbar/>
    <div class="main util__flex--column">
      <div class="util__flex--center util__flex--column">
        <div class="util__flex--center util__flex--column">
          <div class="logo">
            <img src="@/assets/images/icons/Sonny-See.svg" alt="logo">
          </div>
          <div class="content util__flex--column">
            <h1 class="util__header--subtitle">Page Not Found</h1>
            <p class="util__header--description">This could be because of a typo, an out of date link,
              or that the page you requested doesn't exist.</p>
          </div>
        </div>
        <button>
          <router-link to="/">Return Home</router-link>
        </button>
      </div>
    </div>
    <signup-banner/>
    <Footer/>
  </main>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    & button {
      margin: 5px auto;
      padding: 10px 80px;
      background-color: transparent;
      border: 2px solid #3d405b;
      border-radius: 5px;
      &:hover {
        background-color: #3d405b;
        cursor: pointer;
        & a {
          color: #ffffff;
        }
      }
      & a {
        font-family: 'Crimson Text', serif;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 3px;
        color: #3d405b;
        text-decoration: none;
      }
    }
  }
  .content {
    padding: 5vh 5vw;
    & h1 {
      text-align: center;
    }
    & p {
      width: 450px;
      text-wrap: normal;
      text-align: center;
      font-size: 1.2rem;
      padding: 10px 0;
    }
  }
  .logo {
    width: 80px;
    height: 80px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
</style>
