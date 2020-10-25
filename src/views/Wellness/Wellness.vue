<template>
  <div>
    <navbar/>
    <section class="wellness">
      <div class="page-container">
        <div class="page-wrapper">
          <div class="body flex--row">
            <div class="image">
              <img src="@/assets/images/wellness/wellness-img-1.jpg" alt="Wellness">
            </div>
            <div class="content page-content--header">
              <h4>Spa & Wellness</h4>
              <h1>Seeking Stillness</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam dolor eligendi eos, expedita explicabo facilis ipsam iusto laborum laudantium mollitia, nemo nihil obcaecati omnis quia similique, vero voluptate voluptatibus.</p>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda cumque distinctio ducimus earum error esse, fuga itaque maxime minima minus molestiae nisi nostrum porro, quo quod rem, repellat sequi temporibus ut velit voluptate!</p>
            </div>
          </div>
          <div class="body flex--row">
            <div class="image">
              <img src="@/assets/images/wellness/wellness-img-2.jpg" alt="Spa">
            </div>
            <div class="content page-content--header">
              <h1>Our Services</h1>
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
          <div class="body flex--column notice page-content--header">
            <div class="header">
              <h1>What You Need to Know Before You Go</h1>
            </div>
            <br>
            <div class="content">
              <p>To cancel without charge, please give us
                a twenty four hours notice. You will be charged the <u>full price</u> of your service if
                you cancel within <u>24 hours</u> of your scheduled time or fail to show up.</p>
              <br>
              <p>If you would like to rescheduled your appointment,
                you have to finish it at least <u>12 hours</u> before your scheduled time. You will be charge <u>25%</u> of
                its value if your reschedule your service within 12 hours.</p>
              <br>
              <p>Questions? Call us at <u>480.000.0015</u></p>
            </div>
          </div>
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
import lozad from 'lozad'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  },
  mounted () {
    const el = document.querySelectorAll('img')
    const observer = lozad(el, {
      rootMargin: '10px',
      threshold: 0.1,
      enableAutoReload: true
    })
    observer.observe()
  }
}
</script>
<style src="./Wellness.scss" lang="scss" scoped/>
