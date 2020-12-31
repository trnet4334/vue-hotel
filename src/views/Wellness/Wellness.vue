<template>
  <div>
    <navbar/>
    <section class="wellness">
      <div class="page-container">
        <div class="page-wrapper">
          <div class="body flex--row">
            <div class="image-fluid xl">
              <image-box :imageName="['wellness/wellness-img-1.jpg', 'Wellness']"/>
            </div>
            <div class="content">
              <h4 class="content__title">Spa & Wellness</h4>
              <h1 class="page__title">Seeking Stillness</h1>
              <p class="content__description">As our honorable guest at A Resort & Spa, please enjoy the complimentary use of our resort pools, fitness center, bathrobes, slippers, and different kinds of herbal teas. With five private treatment rooms, there are several treatments you can choose as you wish. Our reserved spots are limited, please make reservations as soon as possible.</p>
            </div>
          </div>
          <div class="body flex--row">
            <div class="image-fluid xl">
              <image-box :imageName="['wellness/wellness-img-2.jpg', 'Spa']"/>
            </div>
            <div class="content list-group">
              <h2 class="page__subtitle">Our Services</h2>
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
              <button class="btn-outline-md" disabled>
                <a>MAKE APPOINTMENT</a>
              </button>
            </div>
          </div>
          <div class="body flex--column notice">
            <div>
              <h2 class="page__subtitle">What You Need to Know Before You Go</h2>
            </div>
            <br>
            <div class="content">
              <p class="content__description">To cancel without charge, please give us
                a twenty four hours notice. You will be charged the <u><b>full price</b></u> of your service if
                you cancel within <u><b>24 hours</b></u> of your scheduled time or fail to show up.</p>
              <br>
              <p class="content__description">If you would like to rescheduled your appointment,
                you have to finish it at least <u><b>12 hours</b></u> before your scheduled time. You will be charged <u><b>25%</b></u> of
                its value if your reschedule your service within 12 hours.</p>
              <br>
              <p class="content__description">Questions? Call us at <u><b>480.000.0015</b></u></p>
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
import ImageBox from '@/components/imageBox/ImageBox'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    ImageBox
  }
}
</script>
<style src="./Wellness.scss" lang="scss" scoped/>
