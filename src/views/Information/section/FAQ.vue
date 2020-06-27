<template>
  <section class="faq">
    <div class="faq__container util__flex--row">
      <div class="faq__body util__flex--column">
        <div class="faq__header util__flex--column">
          <h4>FAQ</h4>
          <h1>Questions & Answers</h1>
          <p>You may find what you need here quickly before you send us any kind of request for help.
            Otherwise, we're always happy to help. Please feel free to contact us.</p>
        </div>
        <div class="faq__content">
          <div>
            <div v-for="item in main" :key="item.id">
              <collapse :faq="item"/>
            </div>
          </div>
          <div>
            <h4 class="faq__content--title">Transportation</h4>
            <div v-for="item in transportation" :key="item.id">
              <collapse :faq="item"/>
            </div>
          </div>
          <div>
            <h4 class="faq__content--title">Reservation</h4>
            <div v-for="item in reservation" :key="item.id">
              <collapse :faq="item"/>
            </div>
          </div>
          <div>
            <h4 class="faq__content--title">Accounting</h4>
            <div v-for="item in accounting" :key="item.id">
              <collapse :faq="item"/>
            </div>
          </div>
        </div>
      </div>
      <div class="faq__image">
        <img src="@/assets/images/information/faq-img.jpg" alt="information desk">
      </div>
    </div>
  </section>
</template>
<script>
import faq from '@/assets/data/faq'
import Collapse from '@/components/collapse/Collapse'
export default {
  components: {
    Collapse
  },
  data () {
    return {
      main: faq.slice(0, 8),
      transportation: faq.slice(8, 10),
      reservation: faq.slice(10, 13),
      accounting: faq.slice(13, 15)
    }
  }
}
</script>
<style lang="scss" scoped>
  .faq {
    &__container {
      width: 100%;
      padding: 0 5vw 10vh 5vw;
      margin-top: 10vh;
      justify-content: space-around;
      align-items: center;
      height: 100vh;
    }
    &__body {
      width: 40%;
      height: 100%;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      /* Hide scroll bar for IE browser */
      -ms-overflow-style: none;
      /* Hide scroll bar for firefox */
      scrollbar-width: none;
    }
    &__header {
      padding-bottom: 30px;
      text-align: start;
      & h4 {
        font-size: 1.5rem;
        font-weight: 600;
      }
      & h1 {
        font-size: 3rem;
        font-weight: 700;
      }
      & p {
        font-size: 1.2rem;
      }
    }
    &__content {
      width: 100%;
      height: 100%;
      &--title {
        font-size: 1.8rem;
        font-weight: 600;
        text-align: start;
        padding: 30px 0;
      }
    }
    &__image {
      width: 40%;
      & img {
        width: 540px;
        height: 360px;
        object-fit: contain;
      }
    }
  }
</style>
