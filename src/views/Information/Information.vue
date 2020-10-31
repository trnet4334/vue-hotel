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
    {{test()}}
  </main>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
import dayjs from 'dayjs'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  },
  methods: {
    test () {
      const today = dayjs()
      const date2 = dayjs('2020-05-01').unix()
      const date3 = dayjs.unix(date2)
      console.log(today.diff(date3, 'day'))
    }
  }
}
</script>
<style lang="scss" scoped>
  .information {
    align-items: center;
  }
</style>
