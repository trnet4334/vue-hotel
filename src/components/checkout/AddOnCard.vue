<template>
  <div class="addon-card util__flex--row">
    <div class="addon-card--image">
      <img :src="require(`@/assets/images/checkout/add-on-card/${addOn.id}.jpg`)" :alt="addOn.alt">
    </div>
    <div class="addon-card__content util__flex--column">
      <div class="util__flex--row">
        <div class="util__flex--column content--col-first">
          <h4>{{addOn.name}}</h4>
          <p>{{addOn.description}}</p>
        </div>
        <div class="util__flex--column content--col-second">
          <span>${{addOn.price}}</span>
          <p>Per Stay</p>
          <p>Including Taxes and Fee</p>
        </div>
      </div>
      <div class="util__flex--row content--button">
        <button>ADD TO MY STAY</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['addOn']
}
</script>
<style lang="scss" scoped>
  .addon-card {
    width: 100%;
    height: 25vh;
    border: 1px solid #3d405b;
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    &--image {
      padding: 10px;
      flex-basis: 30%;
      width: 100%;
      height: 100%;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
    &__content {
      flex-basis: 70%;
      justify-content: space-between;
      .content--col-first {
        flex-basis: 70%;
        & h4 {
          text-align: start;
        }
        & p {
          text-align: start;
        }
      }
      .content--col-second {
        flex-basis: 30%;
        align-items: flex-end;
        & span {
          font-size: 1.5rem;
          font-weight: 600;
        }
        & p:nth-of-type(2) {
          opacity: 0.7;
        }
      }
      .content--button {
        justify-content: flex-end;
        align-items: center;
      }
    }
    & button {
      padding: 6px 12px;
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
</style>
