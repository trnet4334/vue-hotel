<template>
  <div>
    <Navbar/>
    <section class="accessible-room">
      <div class="page-container">
        <div class="page-wrapper">
          <div class="accessible-room__body--first flex--row">
            <div class="image-fluid xl">
              <image-box :imageName="imageUrl[0]"/>
            </div>
            <div class="accessible-room__content--first">
              <h4 class="content__title">Accessible Accommodations</h4>
              <h1 class="page__title">For people with disabilities</h1>
              <p class="content__description">We offer rooms for accommodate guests with disabilities.
                All details will be provided below, and you call book online or call our Reservation Specialist if
                you'd like to make a reservation or have any questions. We are really happy to help you everything as
                you request for.</p>
              <button disabled class="btn-outline-md">RESERVE NOW</button>
            </div>
          </div>
          <div class="accessible-room__body--second flex--row">
            <div class="accessible-room__content--second flex--column">
              <h2 class="page__subtitle">Amenities</h2>
              <div class="list-group">
                <h4 class="content__title">Communication/Hearing Room Features</h4>
                <ul>
                  <li v-for="(item, index) in roomFeatures1" :key="index">
                    {{item}}
                  </li>
                </ul>
              </div>
              <div class="list-group">
                <h4 class="content__title">Mobility Room Features</h4>
                <ul>
                  <li v-for="(item, index) in roomFeatures2" :key="index">
                    {{item}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="image-fluid xl">
              <image-box :imageName="imageUrl[1]"/>
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
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
import ImageBox from '@/components/imageBox/ImageBox'
import lozad from 'lozad'
export default {
  data () {
    return {
      imageUrl: [
        ['room/accessible-img-2.jpg', 'Accessible 1'],
        ['room/accessible-img-3.jpg', 'Accessible 2']
      ],
      roomFeatures1: [
        'Strobed doorbell',
        'Fire Alarm and Smoke Detector Strobe',
        'Assistive listening devices are available'
      ],
      roomFeatures2: [
        'Grab Bars in Bathroom',
        'Fold Down Shower Seat',
        'Roll In Shower',
        'Accessible Entry, Bathroom Doorways and Commode',
        'Patio Access'
      ]
    }
  },
  components: {
    Navbar,
    SignupBanner,
    Footer,
    ImageBox
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
<style src="./Accessible.scss" lang="scss" scoped/>
