<template>
  <div class="room">
    <div class="util__flex--row">
      <div class="util__flex--column col-1">
        <img src="@/assets/images/room/classic-guestroom-img.jpg" alt="">
      </div>
      <div class="util__flex--column col-2">
        <div class="util__flex--column room--introduction">
          <h4 class="util__header--title">Classic Guestroom</h4>
          <h5>Sleep 2 | 1 King | 610 square ft</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem beatae culpa enim, maiores ratione sint suscipit veniam! Dicta rerum, sunt tenetur ullam velit vero.</p>
          <span>Room details</span>
        </div>
        <el-divider/>
        <div class="util__flex--row room--best-rate">
          <div>
            <span>Best Available Rate</span>
            <p>Best rate guaranteed with fully flexible cancellation policy</p>
          </div>
          <div>
            <span>$300</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
        <el-divider/>
        <div class="util__flex--row room--breakfast-package">
          <div>
            <span>Bed & Breakfast Package</span>
            <p>Enjoy our continental breakfast daily in our restaurant.</p>
          </div>
          <div>
            <span>$500</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  .room {
    width: 100%;
    .col-1 {
      flex-basis: 30%;
      & img {
        width: 100%;
      }
    }
    .col-2 {
      flex-basis: 70%;
      padding: 0 10px;
    }
    &--introduction {
      text-align: start;
      & h5 {
        font-size: 1rem;
        padding: 5px 0;
      }
      & span {
        padding-top: 10px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    &--best-rate, &--breakfast-package {
      justify-content: space-between;
      & div:nth-of-type(1) {
        text-align: start;
        & span {
          font-size: 1.3rem;
        }
      }
      & div:nth-of-type(2) {
        text-align: right;
        & span {
          font-size: 1.5rem;
          font-weight: 600;
        }
        & p {
          font-size: 0.9rem;
        }
        & button {
          margin-top: 12px;
          padding: 7px 10px;
          font-size: 1.1rem;
          border: none;
          background-color: #283845;
          color: #ffffff;
          border-radius: 5px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    & span {
      font-size: 1.2rem;
    }
    & p {
      font-size: 1.1rem;
    }
  }
</style>
