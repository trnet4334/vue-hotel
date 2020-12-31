<template>
  <section class="faq">
    <div class="page-container">
      <div class="page-wrapper flex--row">
        <div class="faq__body flex--column">
          <div class="faq__header flex--column">
            <h4 class="content__title">FAQ</h4>
            <h1 class="page__title">Questions & Answers</h1>
            <p class="content__description">You may find what you need here quickly before you send us any kind of request for help.
              Otherwise, we're always happy to help. Please feel free to contact us.</p>
          </div>
          <div class="faq__content">
            <div>
              <div v-for="item in main" :key="item.id">
                <collapse :faq="item"/>
              </div>
            </div>
            <div>
              <h4 class="content__title">Transportation</h4>
              <br>
              <br>
              <div v-for="item in transportation" :key="item.id">
                <collapse :faq="item"/>
              </div>
            </div>
            <div>
              <h4 class="content__title">Reservation</h4>
              <br>
              <br>
              <div v-for="item in reservation" :key="item.id">
                <collapse :faq="item"/>
              </div>
            </div>
            <div>
              <h4 class="content__title">Accounting</h4>
              <br>
              <br>
              <div v-for="item in accounting" :key="item.id">
                <collapse :faq="item"/>
              </div>
            </div>
          </div>
        </div>
        <div class="image-fluid xl">
          <image-box :imageName="['information/faq-img.jpg', 'Information Desk']"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import faq from '@/assets/data/faq'
import Collapse from '@/components/collapse/Collapse'
import ImageBox from '@/components/imageBox/ImageBox'
export default {
  name: 'FAQ',
  components: {
    Collapse,
    ImageBox
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
<style src="./FAQ.scss" lang="scss" scoped/>
