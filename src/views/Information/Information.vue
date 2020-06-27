<template>
  <main>
    <navbar/>
    <div class="information util__flex--column">
      <div>
        <router-view/>
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
  .information {
    padding: 10vh 2vw 2vh 2vw;
    align-items: center;
    &__lists {
      & ul {
        list-style-type: none;
        & a {
          text-decoration: none;
          padding: 5px 10px;
          font-weight: bold;
          font-size: 1.2rem;
          &:visited {
            color: #2c3e50;
          }
          &:active {
            color: red;
          }
        }
      }
    }
  }
</style>
