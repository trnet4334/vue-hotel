<template>
  <section class="contact">
    <div class="util__flex--row">
      <div>
        <div class="contact__content">
          <div>
            <span>Contact Us</span>
            <h1>Get in touch</h1>
            <p>We're always happy to help, but you may find what you'd like to know here
              in the <router-link to="/information/faq">FAQ page</router-link>.</p>
          </div>
          <div>
            <span>A Hotel</span>
            <p>135 Bear Wallow Ln, Sedona, AZ 86336</p>
          </div>
          <div>
            <span>For Reservation:</span>
            <ul>
              <li>T. 480.000.0000</li>
              <li>T. 480.000.0001</li>
              <li>F. 480.000.0002</li>
            </ul>
          </div>
        </div>
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
            width="800"
            height="400"
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
    <div class="contact__form util__flex--column">
      <div class="contact__form--title">
        <h1>Contact Us, We're Happy to Hear from You.</h1>
      </div>
      <form class="util__flex--column">
        <div class="util__flex--row">
          <label for="fullName">Full Name*</label>
          <input type="text" id="fullName" v-model="contactForm.name" required>
        </div>
        <div class="util__flex--row">
          <label for="email">Email Address*</label>
          <input type="email" id="email" v-model="contactForm.email" required>
        </div>
        <div class="util__flex--row">
          <label for="phone">Phone Number*</label>
          <input type="text" id="phone" v-model="contactForm.phoneNum" required>
        </div>
        <div class="util__flex--row">
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
            <router-link to="/information/privacy-policy">privacy policy</router-link>.</span>
        </label>
        <button>SEND</button>
      </form>
    </div>
  </section>
</template>
<script>
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
  }
}
</script>
<style lang="scss" scoped>
  .contact {
    padding: 10vh 10vw 20vh 5vw;
    &__content {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      text-wrap: normal;
      text-align: start;
      & span {
        font-size: 1.4rem;
        padding: 30px 0;
        font-weight: bold;
      }
      & div:nth-of-type(1) {
        & span {
          padding-bottom: 10px;
        }
        & h1 {
          font-size: 2.6rem;
        }
        & p {
          font-size: 1.2rem;
          padding: 20px 0;
        }
      }
      & div:nth-of-type(2) {
        & p {
          padding: 20px 0;
          font-size: 1.2rem;
        }
      }
      & div:nth-of-type(3) {
        & ul {
          padding: 20px 0;
          list-style-type: none;
          & li {
            font-size: 1.2rem;
            line-height: 1.6rem;
          }
        }
      }
    }
    &__image {
      width: 640px;
      height: 450px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &__form {
      align-items: flex-start;
      padding: 0 5vw;
      &--title {
        font-size: 1.8rem;
      }
      & form {
        & label {
          font-size: 1.5rem;
          width: 200px;
          text-align: start;
          padding: 10px 0;
        }
        & input {
          border: none;
          border-bottom: 1px solid rgba(61, 64, 91, 0.3);
          background-color: transparent;
          width: 300px;
          font-size: 1.2rem;
          margin: 5px 0;
        }
        & select {
          display: block;
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.1;
          width: 300px;
          padding: 2px 15px;
          max-width: 100%;
          box-sizing: border-box;
          border: none;
          border-bottom: 1px solid rgba(61, 64, 91, 0.3);
          background-color: transparent;
        }
        & textarea {
          border: none;
          border-bottom: 1px solid rgba(61, 64, 91, 0.3);
          resize: none;
          width: 65%;
          background-color: transparent;
          font-size: 1.2rem;
        }
        & label[for="consent"] {
          width: 100%;
        }
        & input[type=checkbox] {
          width: 30px;
          margin: 0 auto;
        }
        & button {
          margin: 5px auto;
          padding: 10px 100px;
          background-color: transparent;
          border: 2px solid #3d405b;
          border-radius: 5px;
          font-family: inherit;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 3px;
          color: #3d405b;
          &:hover {
            background-color: #3d405b;
            cursor: pointer;
            color: #ffffff;
          }
        }
      }
    }
    &__map {
      padding: 2vh 5vw;
    }
  }
  .mapouter {
    position:relative;
    text-align:right;
    height:400px;
    width:800px;
    margin: 0 auto;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:400px;width:800px;
  }
</style>
