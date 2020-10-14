<template>
  <div>
    <Navbar/>
    <section class="accessible-room">
      <div class="page-container">
        <div class="page-wrapper">
          <div class="accessible-room__body--first flex--row">
            <div class="accessible-room__image">
              <img src="@/assets/images/room/accessible-img-2.jpg" alt="Accessible">
            </div>
            <div class="accessible-room__content--first page-content--header">
              <h4>Accessible Accommodations</h4>
              <h1>For people with disabilities</h1>
              <p>We offer rooms for accommodate guests with disabilities.
                All details will be provided below, and you call book online or call our Reservation Specialist if
                you'd like to make a reservation or have any questions. We are really happy to help you everything as
                you request for.</p>
              <button :disabled="true">RESERVE NOW</button>
            </div>
          </div>
          <div class="accessible-room__body--second flex--row">
            <div class="accessible-room__content--second flex--column page-content--body page-content--title">
              <h2>Amenities</h2>
              <div>
                <h4>Communication/Hearing Room Features</h4>
                <ul>
                  <li>Strobed doorbell</li>
                  <li>Fire Alarm and Smoke Detector Strobe</li>
                  <li>Assistive listening devices are available</li>
                </ul>
              </div>
              <div>
                <h4>Mobility Room Features</h4>
                <ul>
                  <li>Grab Bars in Bathroom</li>
                  <li>Fold Down Shower Seat</li>
                  <li>Roll In Shower</li>
                  <li>Accessible Entry, Bathroom Doorways and Commode</li>
                  <li>Patio Access</li>
                </ul>
              </div>
            </div>
            <div class="accessible-room__image">
              <img src="@/assets/images/room/accessible-img-3.jpg" alt="Accessible">
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
<style src="./Accessible.scss" lang="scss" scoped/>
