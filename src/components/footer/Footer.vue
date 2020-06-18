<template>
  <footer>
    <div class="footer__container util__flex--row">
      <div class="footer__main--logo">
        <div/>
      </div>
      <div class="footer__main--hotels util__flex--column">
        <span>Hotel A</span>
        <ul class="util__flex--column">
          <li>Address</li>
          <li>T. 480.000.0000</li>
          <li>T. 480.000.0001</li>
          <li>F. 480.000.0002</li>
        </ul>
      </div>
      <div class="footer__main--info util__flex--column">
        <span>Information</span>
        <ul class="util__flex--column">
          <li><a href="javascript:;">Contact us</a></li>
          <li><a href="javascript:;">Manage booking</a></li>
          <li><a href="javascript:;">Careers</a></li>
          <li><a href="javascript:;">Privacy Policy</a></li>
          <li><a href="javascript:;">Sitemap</a></li>
          <li><a href="javascript:;">FAQ</a></li>
        </ul>
      </div>
      <div class="footer__main--connection util--flex__column">
        <span>Connect with us</span>
        <div class="connection__icons util__flex--row">
          <div style="width: 25px; height: 25px; background-color: black;"></div>
          <div style="width: 25px; height: 25px; background-color: black;"></div>
          <div style="width: 25px; height: 25px; background-color: black;"></div>
        </div>
        <span>© Hotel All right reserved</span>
      </div>
    </div>
  </footer>
</template>
<script></script>
<style lang="scss" scoped>
  footer {
    padding: 0 3vw;
  }
  .footer__container {
    width: 100%;
    padding-top: 30px;
  }
  .footer__main {
    &--logo, &--hotels, &--info, &--connection {
      width: 20%;
      margin: 0;
      & ul {
        list-style-type: none;
      }
    }
    &--logo {
      width: 150px;
      height: 75px;
      background-color: grey;
    }
    &--hotels, &--info, &--connection {
      & span {
        text-align: left;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 10px;
      }
      & ul {
        align-items: flex-start;
        padding-left: 0;
        margin-top: 10px;
        & a {
          text-decoration: none;
          color: #000000;
        }
      }
    }
  }
  .util__flex--row {
    display: flex;
    justify-content: space-around;
  }
  .util__flex--column {
    display: flex;
    flex-direction: column;
  }
</style>
