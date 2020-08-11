<template>
  <section class="confirmation">
    <div class="confirmation__container">
      <div class="content--info page-content--header">
        <h4>Reservation Details</h4>
        <el-divider/>
        <div class="flex--column">
          <div class="flex--row row">
            <span>Guest Name</span>
            <p>test</p>
          </div>
          <div class="flex--row row">
            <span>Check-in Date</span>
            <p>test</p>
          </div>
          <div class="flex--row row">
            <span>Check-out Date</span>
            <p>test</p>
          </div>
          <div class="flex--row row">
            <span>Room Type</span>
            <p>2 Classic Guestrooms</p>
          </div>
          <div class="flex--row row">
            <span>Email Address</span>
            <p>test@test.com</p>
          </div>
          <div class="flex--row row">
            <span>Phone Number</span>
            <p>xxx-xxx-xxxx</p>
          </div>
          <div class="flex--row row">
            <span>Address</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="flex--row row">
            <span>Payment Method</span>
            <p>Pay at Check-in</p>
          </div>
          <div class="flex--row row">
            <span>Special Request</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium aspernatur culpa minima non nostrum perspiciatis soluta. Eveniet, quidem sed!</p>
          </div>
        </div>
      </div>
      <div class="content--policies flex--column page-content--header">
        <h4>Policies</h4>
        <el-divider/>
        <div class="flex--row">
          <div class="flex--column col">
            <span>Check-in</span>
            <p>After 2 PM</p>
          </div>
          <div class="flex--column col">
            <span>Check-out</span>
            <p>Before 11 AM</p>
          </div>
        </div>
        <div class="flex--column row">
          <div class="flex--column page-content--body">
            <p style="font-weight: 600;">Guarantee Policy</p>
            <p>One night room/tax deposit required at time of booking.</p>
          </div>
          <div class="flex--column row page-content--body">
            <p style="font-weight: 600;">Cancellation Policy</p>
            <p>Please contact us to cancel your reservation <u>at least 72-hour</u>
              prior to arrival date to avoid a cancellation fee of one night room and tax charge.</p>
          </div>
        </div>
      </div>
      <div class="content--consent flex--column page-content--header">
        <h4>Acknowledgement</h4>
        <el-divider/>
        <label for="subscription">
          <input type="checkbox" id="subscription">
          Please email me promotions and latest news.
        </label>
        <label for="consent">
          <input type="checkbox" id="consent">
          By checking the box, you agree to our Privacy Policy and T&C for use of this website, along with
          the charges accompanied with the rate you have selected. Please read our Privacy Policy for information
          on our data collection and usage practices.
          <router-link to="/information/privacy-policy" target="_blank" rel="noopener noreferrer">View Privacy Policy</router-link>
        </label>
      </div>
    </div>
  </section>
</template>
<script></script>
<style lang="scss" scoped>
  .confirmation {
    width: 100%;
    position: relative;
    &__container {
      width: 100%;
      .content {
        &--info, &--policies, &--consent {
          width: 100%;
          border-radius: 5px;
          border: 1px solid #3d405b;
          background-color: #ffffff;
          margin: 10px 0;
          padding: 15px 20px;
        }
        &--info {
          & span {
            font-size: 1.3rem;
            font-weight: 600;
          }
          .row {
            padding: 5px 0;
            align-items: center;
            & span {
              flex-basis: 25%;
              text-align: start;
            }
            & p {
              flex-basis: 70%;
            }
          }
        }
        &--policies {
          & span {
            font-size: 1.3rem;
            font-weight: 700;
          }
          .col {
            margin-right: 20px;
          }
          .row {
            margin-top: 20px;
          }
        }
        &--consent {
          align-items: flex-start;
          & label {
            font-size: 1.3rem;
            text-align: start;
          }
          & a {
            &:visited {
              color: #3d405b;
            }
          }
        }
      }
    }
  }
  /deep/ .el-divider--horizontal {
    margin: 10px 0;
  }
</style>
