<template>
  <section class="contact">
    <div class="page-container">
      <div class="page-wrapper">
        <div class="flex--row">
          <div class="contact__content list-group no-decoration">
            <h4 class="content__title">Contact Us</h4>
            <h1 class="page__title">Get in touch</h1>
            <p class="content__description">We're always happy to help, but you may find what you'd like to know here
              in the <router-link to="/information/faq" class="link">FAQ page</router-link>.</p>
            <br>
            <h4 class="content__title">A Resort & Spa</h4>
            <br>
            <p class="content__description">135 Bear Wallow Ln, Sedona, AZ 86336</p>
            <br>
            <h4 class="content__title">For Reservation:</h4>
            <br>
            <ul>
              <li>T. 480.000.0000</li>
              <li>T. 480.000.0001</li>
              <li>F. 480.000.0002</li>
            </ul>
          </div>
          <div class="image-fluid xl">
            <image-box :imageName="['information/contact-img.jpg', 'Front desk']"/>
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
        <Form
          ref="form"
          as="div"
          v-slot="{ handleSubmit }"
          class="contact__form flex--column"
        >
          <h2 class="page__subtitle">Contact Us, We're Happy to Hear from You.</h2>
          <form @submit.prevent="handleSubmit(onSubmit)" class="flex--column">
            <Field
              rules="required|alpha_spaces"
              name="fullName"
              v-model="contactForm.name"
              v-slot="{ field, errors }"
              class="flex--column input__text lg alert-message"
            >
              <label for="fullName">Full Name*</label>
              <input type="text" id="fullName" v-bind="field">
              <span class="alert-message">{{ errors[0] }}</span>
            </Field>
            <Field
              rules="required|regexEmail"
              name="email"
              v-model="contactForm.email"
              v-slot="{ field, errors }"
              class="flex--column input__text lg alert-message"
            >
              <label for="email">Email Address*</label>
              <input type="email" id="email" v-bind="field">
              <span class="alert-message">{{ errors[0] }}</span>
            </Field>
            <Field
              rules="required|regexPhoneNum"
              name="phone"
              v-model="contactForm.phoneNum"
              v-slot="{ field, errors }"
              class="flex--column input__text lg alert-message"
            >
              <label for="phone">Phone Number*</label>
              <input type="text" id="phone" v-bind="field">
              <span class="alert-message">{{ errors[0] }}</span>
            </Field>
            <div class="flex--column input__select">
              <label for="purpose">Purpose*</label>
              <select name="purpose" v-model="contactForm.purpose" id="purpose">
                <option value="">----</option>
                <option value="Dinning Reservation">Dinning Reservation</option>
                <option value="Public Relations">Public Relations</option>
                <option value="Hotel Activities">Hotel Activities</option>
                <option value="Room Reservation">Room Reservation</option>
                <option value="Sales">Sales</option>
                <option value="Donation Request">Donation Request</option>
              </select>
            </div>
            <Field
              rules="required"
              name="comments"
              v-model="contactForm.comments"
              v-slot="{ field, errors }"
              class="flex--column input__textarea"
            >
              <label for="comments">Comments</label>
              <textarea
                name="comments"
                id="comments"
                v-bind="field"
                placeholder="Let us know what we can help you"
                rows="8"
              />
              <span class="alert-message">{{ errors[0] }}</span>
            </Field>
            <label for="consent" class="input__checkbox">
              <input type="checkbox" id="consent" name="contact-consent" @click="checked = !checked">
              <span>
                I understand that this form collects my name, email and phone number, so I can be contacted. For more information, please check our <router-link to="/information/privacy-policy" target="_blank" rel="noreferrer noopener" class="link">privacy policy</router-link>.
              </span>
            </label>
            <button type="submit" :disabled="!checked" class="btn-outline-md">SEND</button>
          </form>
        </Form>
      </div>
    </div>
  </section>
</template>
<script>
import ImageBox from '@/components/imageBox/ImageBox'
import { Form, Field } from 'vee-validate'
import firebaseApi from '@/common/firebaseApi'
export default {
  components: {
    Form,
    Field,
    ImageBox
  },
  data () {
    return {
      checked: false,
      contactForm: {
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
        {
          confirmButtonText: 'YES',
          cancelButtonText: 'CANCEL',
          customClass: 'notification-class',
          type: 'warning'
        }).then(() => {
        firebaseApi.postData('customerServiceRequest', this.contactForm).then(() => {
          this.$notify({
            type: 'success',
            customClass: 'notification-class',
            message: 'Your request has been submitted successfully.'
          })
        }).then(() => {
          // Reload current page to reset all data
          setTimeout(() => {
            this.$router.go(0)
          }, 2000)
        })
      }).catch(() => {
        setTimeout(() => {
          this.$notify({
            type: 'info',
            customClass: 'notification-class',
            message: 'Request canceled'
          })
        }, 500)
      })
    }
  }
}
</script>
<style src="./Contact.scss" lang="scss" scoped/>
