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
        <ValidationObserver
          ref="form"
          v-slot="{ handleSubmit }"
          class="contact__form flex--column"
        >
          <div class="contact__form--title">
            <h1>Contact Us, We're Happy to Hear from You.</h1>
          </div>
          <form @submit.prevent="handleSubmit(onSubmit)" class="flex--column">
            <ValidationProvider
              rules="required|alpha_spaces"
              name="Your last name"
              v-slot="{ errors }"
              class="flex--row"
            >
              <label for="fullName">Full Name*</label>
              <input type="text" id="fullName" v-model="contactForm.name" required>
              <span class="alert-message">{{errors[0]}}</span>
            </ValidationProvider>
            <ValidationProvider
              rules="required|regexEmail"
              name="Your email address"
              v-slot="{ errors }"
              class="flex--row"
            >
              <label for="email">Email Address*</label>
              <input type="email" id="email" v-model="contactForm.email" required>
              <span class="alert-message">{{errors[0]}}</span>
            </ValidationProvider>
            <ValidationProvider
              rules="required|regexPhoneNum"
              name="Your phone number"
              v-slot="{ errors }"
              class="flex--row"
            >
              <label for="phone">Phone Number*</label>
              <input type="text" id="phone" v-model="contactForm.phoneNum" required>
              <span class="alert-message">{{errors[0]}}</span>
            </ValidationProvider>
            <div class="flex--row">
              <label for="purpose">Purpose*</label>
              <select name="purpose" v-model="contactForm.purpose" id="purpose">
                <option value="">----</option>
                <option value="Dinning">Dinning reservation</option>
                <option value="Public">Public Relations</option>
                <option value="Activities">Hotel Activities</option>
                <option value="Stay">Room Reservation</option>
                <option value="Sales">Sales</option>
                <option value="Donation">Donation Request</option>
              </select>
            </div>
            <ValidationProvider
              rules="required"
              name="Your description"
              v-slot="{ errors }"
              class="flex--column"
            >
              <label for="comments">Comments</label>
              <textarea
                name="comments"
                id="comments"
                v-model="contactForm.comments"
                placeholder="Let us know what we can help you"
                rows="8"
              />
              <span class="alert-message">{{errors[0]}}</span>
            </ValidationProvider>
            <label for="consent">
              <input type="checkbox" id="consent" name="contact-consent" @click="checked = !checked" required>
              <span>I understand that this form collects my name, email and phone number, so I
                can be contacted. For more information, please check our
                <router-link to="/information/privacy-policy" target="_blank" rel="noreferrer noopener">privacy policy</router-link>.
              </span>
            </label>
            <button type="submit" :disabled="!checked">SEND</button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>
<script>
import lozad from 'lozad'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import apiService from '@/common/api'
// import apiService from '@/common/api'
extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})
extend('regexPhoneNum', {
  validate (value) {
    const regex = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})/g
    return {
      required: true,
      valid: regex.test(value)
    }
  }
})
extend('regexEmail', {
  validate (value) {
    // eslint-disable-next-line no-control-regex
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
    return {
      required: true,
      valid: regex.test(value)
    }
  }
})
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      checked: false,
      contactForm: {
        id: '',
        name: '',
        email: '',
        phoneNum: '',
        purpose: '',
        comments: ''
      }
    }
  },
  methods: {
    onSubmit () {
      // Alert message for inquiry confirmation
      this.$confirm('Ready to submit?',
        'Confirmation',
        {
          confirmButtonText: 'YES',
          cancelButtonText: 'CANCEL',
          type: 'warning'
        }).then(() => {
        apiService.postData('/customerServiceRequest', this.contactForm)
        this.$message({
          type: 'success',
          message: 'Your request has been submitted successfully.'
        })
        // Reload current page to reset all data
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Request canceled'
        })
      })
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
