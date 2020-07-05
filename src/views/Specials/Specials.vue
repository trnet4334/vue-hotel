<template>
  <div>
    <navbar/>
    <section class="specials">
    </section>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  }
}
</script>
<style src="./Specials.scss" lang="scss" scoped/>
