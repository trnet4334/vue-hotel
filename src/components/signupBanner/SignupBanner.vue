<template>
  <section class="signup-banner">
    <div class="flex--column flex--center">
      <div v-if="!displaySignupCollapse && !signupSuccess" class="signup-banner__header flex--row" @click="toggleSignupForm">
        <span>{{ $t('newsletter.title') }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 24 24" style="fill: #ffffff; width: 24px; height: 24px; margin-left: 10px;" xml:space="preserve">
          <path d="M12,0.5C5.659,0.5,0.5,5.659,0.5,12S5.659,23.5,12,23.5S23.5,18.341,23.5,12S18.341,0.5,12,0.5z M18.604,14.104l-5.543,5.543c-0.292,0.292-0.677,0.438-1.061,0.438s-0.769-0.146-1.061-0.438l-5.543-5.543c-0.429-0.428-0.664-0.998-0.664-1.604s0.235-1.175,0.664-1.604c0.857-0.856,2.35-0.856,3.207,0L9.5,11.793V6c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5v5.793l0.896-0.896c0.857-0.856,2.35-0.856,3.207,0c0.429,0.428,0.664,0.998,0.664,1.604S19.032,13.675,18.604,14.104z"/>
        </svg>
      </div>
    </div>
    <Form
      ref="form"
      as="div"
      v-if="displaySignupCollapse && !signupSuccess"
      class="signup-banner__form flex--column flex--center"
      v-slot="{ handleSubmit, meta }"
    >
      <!-- Honeypot -->
      <input type="text" name="website" v-model="honeypot" style="display:none" tabindex="-1" autocomplete="off">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="row flex--row">
          <Field
            rules="required|alpha_spaces"
            v-model="signupDetail.name"
            name="Your name"
            class="column flex--column"
            v-slot="{ field, errors }"
          >
            <label for="fullName">{{ $t('newsletter.fullName') }}</label>
            <input type="text" id="fullName" :placeholder="$t('newsletter.fullNamePlaceholder')" v-bind="field">
            <span class="alert-message">{{errors[0]}}</span>
          </Field>
          <Field
            rules="required|regexEmail"
            v-model="signupDetail.email"
            name="Your email address"
            class="column flex--column"
            v-slot="{ field, errors }"
          >
            <label for="email">{{ $t('newsletter.email') }}</label>
            <input type="text" id="email" :placeholder="$t('newsletter.emailPlaceholder')" v-bind="field">
            <span>{{errors[0]}}</span>
          </Field>
          <Field
            rules="required|regexAddress"
            class="column flex--column"
            v-model="signupDetail.address"
            name="Your address"
            v-slot="{ field, errors }"
          >
            <label for="address">{{ $t('newsletter.address') }}</label>
            <input type="text" id="address" :placeholder="$t('newsletter.addressPlaceholder')" v-bind="field">
            <span class="alert-message">{{errors[0]}}</span>
          </Field>
          <Field
            rules="required|alpha_spaces"
            class="column flex--column"
            v-model="signupDetail.state"
            name="Your state or region"
            v-slot="{ field, errors }"
          >
            <label for="state">{{ $t('newsletter.stateRegion') }}</label>
            <input type="text" id="state" :placeholder="$t('newsletter.stateRegionPlaceholder')" v-bind="field">
            <span class="alert-message">{{errors[0]}}</span>
          </Field>
          <Field
            rules="required"
            class="column flex--column"
            v-model="signupDetail.country"
            name="Your country name"
            v-slot="{ field, errors }"
          >
            <label for="country">{{ $t('newsletter.country') }}</label>
            <input type="text" id="country" :placeholder="$t('newsletter.countryPlaceholder')" v-bind="field">
            <span class="alert-message">{{errors[0]}}</span>
          </Field>
          <div class="column flex--column">
            <label for="zipCode">{{ $t('newsletter.zipCode') }}</label>
            <input type="text" id="zipCode" placeholder="Zip Code" v-model="signupDetail.zipCode">
          </div>
        </div>
        <div class="row">
          <button type="submit" :disabled="!meta.valid || submitting">
            <span>{{ $t('newsletter.signUp') }}</span>
          </button>
        </div>
      </form>
    </Form>
    <div v-if="displaySignupCollapse && signupSuccess" class="signup-banner__sent flex--column flex--center">
      <h2>{{ $t('newsletter.thankYou') }}</h2>
      <br>
      <h4>{{ $t('newsletter.thankYouSub') }}</h4>
    </div>
    <div v-if="displaySignupCollapse || signupSuccess" @click="closeSignupForm" class="signup-banner--close-icon">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 24 24" style="fill: #ffffff;" xml:space="preserve">
        <path d="M12.707,12l8.146-8.146c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0L12,11.293L3.854,3.146c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L11.293,12l-8.146,8.146c-0.195,0.195-0.195,0.512,0,0.707C3.244,20.951,3.372,21,3.5,21s0.256-0.049,0.354-0.146L12,12.707l8.146,8.146C20.244,20.951,20.372,21,20.5,21s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L12.707,12z"/>
      </svg>
    </div>
  </section>
</template>
<script>
import { Form, Field } from 'vee-validate'
import firebaseApi from '@/common/firebaseApi'
import { sendConfirmationEmail } from '@/common/emailService'
export default {
  components: {
    Form,
    Field
  },
  data () {
    return {
      displaySignupCollapse: false,
      signupSuccess: false,
      submitting: false,
      honeypot: '',
      signupDetail: {
        name: '',
        email: '',
        address: '',
        state: '',
        country: '',
        zipCode: ''
      }
    }
  },
  methods: {
    toggleSignupForm () {
      this.displaySignupCollapse = !this.displaySignupCollapse
    },
    closeSignupForm () {
      this.displaySignupCollapse = !this.displaySignupCollapse
      this.signupSuccess = false
    },
    async onSubmit () {
      if (this.honeypot) return
      this.submitting = true
      const result = await firebaseApi.subscribeNewsletter(this.signupDetail.email)

      if (result.duplicate) {
        await this.$alert(this.$t('newsletter.alreadySubscribed'),
          {
            confirmButtonClass: 'OK',
            customClass: 'notification-class',
            type: 'info'
          })
        this.submitting = false
        return
      }

      if (result.success) {
        await sendConfirmationEmail(
          process.env.VUE_APP_EMAILJS_TEMPLATE_NEWSLETTER,
          { email: this.signupDetail.email, name: this.signupDetail.name }
        )
        this.signupSuccess = true
        this.signupDetail = { name: '', email: '', address: '', state: '', country: '', zipCode: '' }
        setTimeout(() => {
          this.$router.go(0)
        }, 3500)
      } else {
        this.$notify({
          type: 'error',
          customClass: 'notification-class',
          message: this.$t('common.error')
        })
      }
      this.submitting = false
    }
  }
}
</script>
<style src="./SignupBanner.scss" lang="scss" scoped/>
