<template>
  <main>
    <navbar/>
    <div class="information flex--column">
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
    align-items: center;
  }
</style>
