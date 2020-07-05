<template>
  <div class="events-inquiry">
    <form class="util__flex--column">
      <div class="header">
        <h4 class="util__header--title">Meetings & Events</h4>
        <h1 class="util__header--subtitle">Request Proposal</h1>
        <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolor earum eveniet fuga laboriosam maiores ratione repellendus rerum temporibus? Amet aspernatur dolorem impedit ipsum maiores, officiis placeat qui totam.</p>
        <br>
        <p class="util__header--description">If you would like to contact us directly, please call 480.000.0008</p>
      </div>
      <div class="body">
        <div class="content--first util__flex--column">
          <h2>Contact Information</h2>
          <div class="util__flex--column">
            <div class="util__flex--column">
              <label for="title">Title</label>
              <select name="title" id="title" v-model="requestInfo.title">
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
              </select>
            </div>
            <div class="util__flex--row">
              <div class="util__flex--column">
                <label for="firstName">First Name*</label>
                <input type="text" id="firstName" placeholder="First name" required v-model="requestInfo.firstName">
              </div>
              <div class="util__flex--column">
                <label for="lastName">Last Name*</label>
                <input type="text" id="lastName" placeholder="Last name" required v-model="requestInfo.lastName">
              </div>
            </div>
          </div>
          <div class="content--second util__flex--column">
            <label for="address">Address*</label>
            <input type="text" id="address" placeholder="Address" v-model="requestInfo.address" required>
          </div>
          <div class="util__flex--column">
            <div class="util__flex--row">
              <div class="util__flex--column">
                <label for="company">Company*</label>
                <input type="text" id="company" placeholder="Company" v-model="requestInfo.company" required>
              </div>
              <div class="util__flex--column">
                <label for="email">Email*</label>
                <input type="text" id="email" placeholder="email" v-model="requestInfo.email" required>
              </div>
            </div>
            <div class="util__flex--column">
              <label for="phoneNum">Phone Number*</label>
              <input type="text" id="phoneNum" placeholder="Phone Number" v-model="requestInfo.phoneNum" required>
            </div>
          </div>
        </div>
        <div class="content--third util__flex--column">
          <h2>Guestroom Information</h2>
          <div class="util__flex--row" style="align-items: center;">
            <label>Guest Rooms Required?</label>
            <input type="radio" value="yes" id="needGuestrooms" v-model="requestInfo.guestroomRequirement">
            <label for="needGuestrooms">Yes</label>
            <input type="radio" value="no" id="noNeedGuestrooms" v-model="requestInfo.guestroomRequirement">
            <label for="noNeedGuestrooms">No</label>
          </div>
          <div class="util__flex--column">
            <label for="numberOfGuestroom">If yes, how many guest rooms do you need?</label>
            <input type="text" id="numberOfGuestroom" placeholder="Guest Rooms required" v-model="requestInfo.numberOfGuestroom">
          </div>
        </div>
        <div class="content--fourth util__flex--column">
          <h2>Meeting/Event Information</h2>
          <div class="util__flex--column">
            <div class="util__flex--column">
              <label for="eventName">Meeting/Event Name*</label>
              <input type="text" placeholder="Enter meeting / event name" id="eventName" v-model="requestInfo.eventName" required>
            </div>
            <div class="util__flex--column">
              <label for="attendeesNum">Number of Attendees</label>
              <input type="text" placeholder="Enter number" id="attendeesNum" v-model="requestInfo.attendeesNum" required>
            </div>
          </div>
          <div class="util__flex--row" style="align-items: center;">
            <label>Food Service Requirements?</label>
            <input type="radio" value="yes" id="foodRequired" v-model="requestInfo.foodRequirement">
            <label for="foodRequired">Yes</label>
            <input type="radio" value="no" id="noFoodRequired" v-model="requestInfo.foodRequirement">
            <label for="noFoodRequired">No</label>
          </div>
          <div class="util__flex--row" style="align-items: center;">
            <label>Any AV Requirements for the meeting/event?</label>
            <input type="radio" value="yes" id="AvRequired" v-model="requestInfo.avRequirement">
            <label for="AvRequired">Yes</label>
            <input type="radio" value="no" id="noAvRequired" v-model="requestInfo.avRequirement">
            <label for="noAvRequired">No</label>
          </div>
          <div class="util__flex--column">
            <label for="budget">Total Budget*</label>
            <input type="text" id="budget" v-model="requestInfo.budget" required>
          </div>
          <div class="util__flex--column">
            <label for="comments">Comments</label>
            <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments" v-model="requestInfo.comments"/>
          </div>
        </div>
        <div class="content--fourth util__flex--column">
          <h2>Dates</h2>
          <div class="util__flex--row">
            <div class="util__flex--column">
              <label for="arrivalDate">Arrival Date</label>
              <input type="date" id="arrivalDate" v-model="requestInfo.arrivalDate" required>
            </div>
            <div class="util__flex--column">
              <label for="departureDate">Departure Date</label>
              <input type="date" id="departureDate" v-model="requestInfo.departureDate" required>
            </div>
          </div>
          <h2>Alternative Dates</h2>
          <div class="util__flex--row">
            <div class="util__flex--column">
              <label for="alternateArrivalDate">Alternate Arrival Date</label>
              <input type="date" id="alternateArrivalDate" v-model="requestInfo.alternateArrivalDate" required>
            </div>
            <div class="util__flex--column">
              <label for="alternateDepartureDate">Alternate Departure Date</label>
              <input type="date" id="alternateDepartureDate" v-model="requestInfo.alternateDepartureDate" required>
            </div>
          </div>
        </div>
        <div class="content--fifth util__flex--column">
          <h2>Additional Information</h2>
          <textarea name="additionInfo" placeholder="Program Agenda etc." cols="30" rows="10" v-model="requestInfo.additionalInfo"/>
        </div>
        <div class="content--sixth util__flex--column">
          <label for="consent">
            <input type="checkbox" id="consent" v-model="requestInfo.consent" required>
            I understand that this form collects my name, email and phone number so I can be contacted.
            For more information, please check our
            <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</router-link>.
          </label>
          <button>SUBMIT</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      requestInfo: {
        title: '',
        firstName: '',
        lastName: '',
        address: '',
        company: '',
        email: '',
        phoneNum: '',
        guestroomRequirement: false,
        numberOfGuestroom: '',
        eventName: '',
        attendeesNum: '',
        foodRequirement: false,
        avRequirement: false,
        budget: '',
        comments: '',
        arrivalDate: '',
        departureDate: '',
        alternateArrivalDate: '',
        alternateDepartureDate: '',
        additionalInfo: '',
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
      &--first, &--second, &--third, &--fourth, &--fifth, &--sixth {
        margin-top: 20px;
        margin-bottom: 10px;
      }
    }
    & h2 {
      font-size: 1.8rem;
      text-align: start;
    }
    & label {
      font-size: 1.4rem;
      font-weight: 600;
      text-align: start;
      padding: 5px 15px 5px 0;
      margin-top: 10px;
    }
    & input[type="radio"] {
      margin-top: 10px;
      margin-right: 5px;
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
    & input[id="address"], input[id="numberOfGuestroom"], input[id="eventName"], input[id="attendeesNum"] {
      width: 500px;
    }
    & textarea {
      padding: 10px;
      font-size: 1.2rem;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #3d405b;
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
