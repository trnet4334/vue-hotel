<template>
  <div class="wedding-inquiry">
    <form class="util__flex--column">
      <div class="header">
        <h4 class="util__header--title">Weddings</h4>
        <h1 class="util__header--subtitle">Request Proposal</h1>
        <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolor earum eveniet fuga laboriosam maiores ratione repellendus rerum temporibus? Amet aspernatur dolorem impedit ipsum maiores, officiis placeat qui totam.</p>
        <br>
        <p class="util__header--description">If you would like to contact us directly, please call 480.000.0008</p>
      </div>
      <div class="body">
        <div class="content util__flex--column">
          <div class="util__flex--column">
            <div class="util__flex--column">
              <label for="title">Title</label>
              <select name="title" id="title" v-model="requestWeddingInfo.title">
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
              </select>
            </div>
            <div class="util__flex--row">
              <div class="util__flex--column">
                <label for="firstName">First Name*</label>
                <input type="text" id="firstName" placeholder="First name" required v-model="requestWeddingInfo.firstName">
              </div>
              <div class="util__flex--column">
                <label for="lastName">Last Name*</label>
                <input type="text" id="lastName" placeholder="Last name" required v-model="requestWeddingInfo.lastName">
              </div>
            </div>
            <div class="util__flex--column">
              <label for="phoneNum">Phone Number*</label>
              <input type="text" id="phoneNum" placeholder="Phone Number" required v-model="requestWeddingInfo.phoneNum">
            </div>
            <div class="util__flex--column">
              <label for="email">Email Address*</label>
              <input type="text" id="email" placeholder="Email Address" required v-model="requestWeddingInfo.email">
            </div>
            <div class="util__flex--column">
              <label for="weddingDate">Wedding Date</label>
              <input type="date" id="weddingDate" required v-model="requestWeddingInfo.weddingDate">
            </div>
            <div class="util__flex--column">
              <label>Select all that apply</label>
              <label for="ceremony">
                <input type="checkbox" id="ceremony" v-model="requestWeddingInfo.serviceNeed">
                Ceremony / Reception
              </label>
              <label for="shower">
                <input type="checkbox" id="shower" v-model="requestWeddingInfo.serviceNeed">
                Wedding Shower
              </label>
              <label for="dinner">
                <input type="checkbox" id="dinner" v-model="requestWeddingInfo.serviceNeed">
                Rehersal Dinner
              </label>
              <label for="guestrooms">
                <input type="checkbox" id="guestrooms" v-model="requestWeddingInfo.serviceNeed">
                Guestrooms Only
              </label>
              <label for="reception">
                <input type="checkbox" id="reception" v-model="requestWeddingInfo.serviceNeed">
                Reception Only
              </label>
              <label for="brunch">
                <input type="checkbox" id="brunch" v-model="requestWeddingInfo.serviceNeed">
                Arrival / Departure Brunch
              </label>
            </div>
            <div class="util__flex--column">
              <label for="numberOfGuest">Number of Guests*</label>
              <input type="text" id="numberOfGuest" required v-model="requestWeddingInfo.numberOfGuest">
            </div>
            <div class="util__flex--column">
              <label for="consent">
                <input type="checkbox" id="consent" v-model="requestWeddingInfo.consent" required>
                I understand that this form collects my name, email and phone number so I can be contacted.
                For more information, please check our
                <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</router-link>.
              </label>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      requestWeddingInfo: {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        weddingDate: '',
        serviceNeed: [],
        numberOfGuest: '',
        consent: false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  form {
    width: 100%;
    align-items: flex-start;
    .header {
      padding-bottom: 25px;
      & h1 {
        margin-bottom: 20px;
      }
      & p {
        width: 70%;
      }
    }
    .body {
      width: 50%;
    }
    .content {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    & label {
      font-size: 1.4rem;
      font-weight: 600;
      text-align: start;
      padding: 5px 15px 5px 0;
      margin-top: 10px;
    }
    & input[type="text"], input[type="date"], select {
      width: 225px;
      margin-right: 15px;
      font-size: 1.2rem;
      padding: 10px;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #3d405b;
    }
    & input[id="phoneNum"], input[id="email"], input[id="numberOfGuest"] {
      width: 500px;
    }
    & a:visited {
      color: #3d405b;
    }
    & button {
      margin: 25px auto;
      padding: 10px 80px;
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
</style>
