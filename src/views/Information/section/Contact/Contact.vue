<template>
  <section class="contact">
    <div class="page-container">
      <div class="page-wrapper">
        <div class="flex--row">
          <div class="contact__content list-group no-decoration">
            <h4 class="content__title">{{ $t('contact.title') }}</h4>
            <h1 class="page__title">{{ $t('contact.subtitle') }}</h1>
            <p class="content__description">{{ $t('contact.description') }}
              <router-link to="/information/faq" class="link">FAQ</router-link>.
            </p>
            <br>
            <h4 class="content__title">A Resort &amp; Spa</h4>
            <br>
            <p class="content__description">{{ $t('contact.address') }}</p>
            <br>
            <h4 class="content__title">{{ $t('contact.forReservation') }}</h4>
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
          <h2 class="page__subtitle">{{ $t('contact.formTitle') }}</h2>
          <form @submit.prevent="handleSubmit(onSubmit)" class="flex--column">
            <!-- Honeypot -->
            <input type="text" name="website" v-model="honeypot" style="display:none" tabindex="-1" autocomplete="off">

            <Field
              rules="required|alpha_spaces"
              name="fullName"
              v-model="contactForm.name"
              v-slot="{ field, errors }"
              class="flex--column input__text lg alert-message"
            >
              <label for="fullName">{{ $t('contact.fullName') }}</label>
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
              <label for="email">{{ $t('contact.email') }}</label>
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
              <label for="phone">{{ $t('contact.phone') }}</label>
              <input type="text" id="phone" v-bind="field">
              <span class="alert-message">{{ errors[0] }}</span>
            </Field>
            <Field
              rules="required"
              name="bookingNumber"
              v-model="contactForm.bookingNumber"
              v-slot="{ field, errors }"
              class="flex--column input__text lg alert-message"
            >
              <label for="bookingNumber">{{ $t('contact.bookingNumber') }}</label>
              <input
                type="text"
                id="bookingNumber"
                :placeholder="$t('contact.bookingNumberPlaceholder')"
                v-bind="field"
              >
              <span class="alert-message">{{ errors[0] || (errors[0] === undefined && !field.value ? $t('contact.bookingNumberRequired') : '') }}</span>
            </Field>
            <div class="flex--column input__select">
              <label for="purpose">{{ $t('contact.purpose') }}</label>
              <select name="purpose" v-model="contactForm.purpose" id="purpose">
                <option value="">----</option>
                <option value="Dining Reservation">{{ $t('contact.purposeOptions.dining') }}</option>
                <option value="Public Relations">{{ $t('contact.purposeOptions.pr') }}</option>
                <option value="Hotel Activities">{{ $t('contact.purposeOptions.activities') }}</option>
                <option value="Room Reservation">{{ $t('contact.purposeOptions.room') }}</option>
                <option value="Sales">{{ $t('contact.purposeOptions.sales') }}</option>
                <option value="Donation Request">{{ $t('contact.purposeOptions.donation') }}</option>
              </select>
            </div>
            <Field
              rules="required"
              name="comments"
              v-model="contactForm.comments"
              v-slot="{ field, errors }"
              class="flex--column input__textarea"
            >
              <label for="comments">{{ $t('contact.comments') }}</label>
              <textarea
                name="comments"
                id="comments"
                v-bind="field"
                :placeholder="$t('contact.commentsPlaceholder')"
                rows="8"
              />
              <span class="alert-message">{{ errors[0] }}</span>
            </Field>
            <label for="consent" class="input__checkbox">
              <input type="checkbox" id="consent" name="contact-consent" @click="checked = !checked">
              <span>
                {{ $t('contact.consent') }}
                <router-link to="/information/privacy-policy" target="_blank" rel="noreferrer noopener" class="link">{{ $t('contact.privacyPolicy') }}</router-link>.
              </span>
            </label>
            <button type="submit" :disabled="!checked || submitting" class="btn-outline-md">{{ $t('common.send') }}</button>
          </form>
        </Form>

        <div v-if="refId" class="contact__success">
          <p>{{ $t('contact.successMessage') }}</p>
          <p><strong>{{ $t('contact.refLabel') }}:</strong> {{ refId }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ImageBox from '@/components/imageBox/ImageBox'
import { Form, Field } from 'vee-validate'
import firebaseApi from '@/common/firebaseApi'
import { sendConfirmationEmail } from '@/common/emailService'
export default {
  components: {
    Form,
    Field,
    ImageBox
  },
  data () {
    return {
      checked: false,
      submitting: false,
      refId: null,
      honeypot: '',
      contactForm: {
        name: '',
        email: '',
        phoneNum: '',
        bookingNumber: '',
        purpose: '',
        comments: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      if (this.honeypot) return
      this.$confirm(this.$t('common.readyToSubmit'),
        {
          confirmButtonText: this.$t('common.yes'),
          cancelButtonText: this.$t('common.cancel'),
          customClass: 'notification-class',
          type: 'warning'
        }).then(async () => {
        this.submitting = true
        const result = await firebaseApi.submitContact({
          name: this.contactForm.name,
          email: this.contactForm.email,
          phoneNum: this.contactForm.phoneNum,
          bookingNumber: this.contactForm.bookingNumber,
          purpose: this.contactForm.purpose,
          comments: this.contactForm.comments
        })
        if (result.success) {
          this.refId = result.refId
          await sendConfirmationEmail(
            process.env.VUE_APP_EMAILJS_TEMPLATE_CONTACT,
            {
              guest_name: this.contactForm.name,
              email: this.contactForm.email,
              booking_number: this.contactForm.bookingNumber,
              contact_ref: result.refId
            }
          )
          this.contactForm = { name: '', email: '', phoneNum: '', bookingNumber: '', purpose: '', comments: '' }
          this.checked = false
        } else {
          this.$notify({
            type: 'error',
            customClass: 'notification-class',
            message: this.$t('common.error')
          })
        }
        this.submitting = false
      }).catch(() => {
        setTimeout(() => {
          this.$notify({
            type: 'info',
            customClass: 'notification-class',
            message: this.$t('common.requestCanceled')
          })
        }, 500)
      })
    }
  }
}
</script>
<style src="./Contact.scss" lang="scss" scoped/>
