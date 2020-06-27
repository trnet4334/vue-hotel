<template>
  <main>
    <navbar/>
    <div class="main util__flex--column">
      <div class="util__flex--center util__flex--column">
        <div class="util__flex--center util__flex--column">
          <div style="width: 50px; height: 50px; background-color: goldenrod;"/>
          <div class="content util__flex--column">
            <span>Page Not Found</span>
            <span>This could be because of a typo, an out of date link, or that the page you requested doesn't exist.</span>
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
  }
  .content {
    padding: 5vh 5vw;
    & span:nth-of-type(1) {
      font-size: 2.2rem;
      font-weight: bold;
    }
    & span:nth-of-type(2) {
      width: 450px;
      text-wrap: normal;
      text-align: start;
      font-size: 1.2rem;
      padding-top: 10px;
      padding-bottom: 40px;
    }
  }
</style>
