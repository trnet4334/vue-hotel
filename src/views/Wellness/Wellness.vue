<template>
  <div>
    <navbar/>
    <section class="wellness">
      <div class="body util__flex--row">
        <div class="image">
          <img src="@/assets/images/wellness/wellness-img-1.jpg" alt="Wellness">
        </div>
        <div class="content">
          <h4 class="util__header--title">Spa & Wellness</h4>
          <h1 class="util__header--subtitle">Seeking Stillness</h1>
          <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam dolor eligendi eos, expedita explicabo facilis ipsam iusto laborum laudantium mollitia, nemo nihil obcaecati omnis quia similique, vero voluptate voluptatibus.</p>
          <br>
          <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda cumque distinctio ducimus earum error esse, fuga itaque maxime minima minus molestiae nisi nostrum porro, quo quod rem, repellat sequi temporibus ut velit voluptate!</p>
        </div>
      </div>
      <div class="body util__flex--row">
        <div class="image">
          <img src="@/assets/images/wellness/wellness-img-2.jpg" alt="Spa">
        </div>
        <div class="content">
          <h1 class="util__header--subtitle">Our Services</h1>
          <br>
          <ul>
            <li>Massage</li>
            <li>Body Treatments</li>
            <li>Skin Care</li>
            <li>Meditation</li>
            <li>Mindfulness</li>
            <li>Fitness Class</li>
          </ul>
          <br>
          <button><a href="javascript:;">MAKE APPOINTMENT</a></button>
        </div>
      </div>
      <div class="body util__flex--column notice">
        <div class="header">
          <h1 class="util__header--subtitle">What You Need to Know Before You Go</h1>
        </div>
        <br>
        <div class="content">
          <p class="util__header--description">To cancel without charge, please give us
            a twenty four hours notice. You will be charged the <u>full price</u> of your service if
            you cancel within <u>24 hours</u> of your scheduled time or fail to show up.</p>
          <br>
          <p class="util__header--description">If you would like to rescheduled your appointment,
            you have to finish it at least <u>12 hours</u> before your scheduled time. You will be charge <u>25%</u> of
           its value if your reschedule your service within 12 hours.</p>
          <br>
          <p class="util__header--description">Questions? Call us at <u>480.000.0015</u></p>
        </div>
      </div>
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
<style src="./Wellness.scss" lang="scss" scoped/>
