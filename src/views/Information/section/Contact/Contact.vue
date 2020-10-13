<template>
  <section class="contact">
    <div class="page-container">
      <div class="page-wrapper">
        <div class="flex--row">
          <div class="contact__content page-content--header">
            <h4>Contact Us</h4>
            <h1>Get in touch</h1>
            <p>We're always happy to help, but you may find what you'd like to know here
              in the <router-link to="/information/faq">FAQ page</router-link>.</p>
            <br>
            <h4>A Hotel</h4>
            <br>
            <p>135 Bear Wallow Ln, Sedona, AZ 86336</p>
            <br>
            <h4>For Reservation:</h4>
            <br>
            <ul class="list-group">
              <li>T. 480.000.0000</li>
              <li>T. 480.000.0001</li>
              <li>F. 480.000.0002</li>
            </ul>
          </div>
          <div class="contact__image">
            <img src="@/assets/images/information/contact-img.jpg"/>
          </div>
        </div>
        <br>
        <el-divider/>
        <br>
        <div class="contact__map">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=135%20Bear%20Wallow%20Ln%2C%20Sedona%2C%20AZ%2086336%2C%20United%20States&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <br>
        <el-divider/>
        <br>
        <div class="contact__form flex--column">
          <div class="contact__form--title">
            <h1>Contact Us, We're Happy to Hear from You.</h1>
          </div>
          <form class="flex--column">
            <div class="flex--row">
              <label for="fullName">Full Name*</label>
              <input type="text" id="fullName" v-model="contactForm.name" required>
            </div>
            <div class="flex--row">
              <label for="email">Email Address*</label>
              <input type="email" id="email" v-model="contactForm.email" required>
            </div>
            <div class="flex--row">
              <label for="phone">Phone Number*</label>
              <input type="text" id="phone" v-model="contactForm.phoneNum" required>
            </div>
            <div class="flex--row">
              <label for="purpose">Purpose*</label>
              <select name="purpose" v-model="contactForm.purpose" id="purpose">
                <option value="">----</option>
                <option value="dinning">Dinning reservation</option>
                <option value="public">Public Relations</option>
                <option value="activities">Hotel Activities</option>
                <option value="rooms">Room Reservation</option>
                <option value="sales">Sales</option>
                <option value="donation">Donation Request</option>
              </select>
            </div>
            <label for="comments">Comments</label>
            <textarea
              name="comments"
              id="comments"
              v-model="contactForm.comments"
              placeholder="Let us know what we can help you"
              rows="8"
            />
            <label for="consent">
              <input type="checkbox" id="consent" name="contact-consent" v-model="contactForm.consent" required>
              <span>I understand that this form collects my name, email and phone number, so I
            can be contacted. For more information, please check our
            <router-link to="/information/privacy-policy" target="_blank" rel="noreferrer noopener">privacy policy</router-link>.</span>
            </label>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import lozad from 'lozad'
export default {
  data () {
    return {
      contactForm: {
        name: '',
        email: '',
        phoneNum: '',
        purpose: '',
        comments: '',
        consent: false
      }
    }
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
<style src="./Contact.scss" lang="scss" scoped/>
