<template>
  <div>
    <navbar/>
    <section class="inquiry">
<!--      <events-inquiry/>-->
      <wedding-inquiry/>
    </section>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
// import EventsInquiry from '@/views/Events/Inquiry/components/EventsInquiry.vue'
import WeddingInquiry from '@/views/Events/Inquiry/components/WeddingInquiry.vue'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    // EventsInquiry,
    WeddingInquiry
  }
}
</script>
<style lang="scss" scoped>
  .inquiry {
    padding: 20vh 10vw;
  }
</style>
