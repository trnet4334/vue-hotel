<template>
  <section class="faq">
    <div class="page-container">
      <div class="page-wrapper flex--row">
        <div class="faq__body flex--column">
          <div class="faq__header flex--column page-content--header">
            <h4>FAQ</h4>
            <h1>Questions & Answers</h1>
            <p>You may find what you need here quickly before you send us any kind of request for help.
              Otherwise, we're always happy to help. Please feel free to contact us.</p>
          </div>
          <div class="faq__content page-content--header">
            <div>
              <div v-for="item in main" :key="item.id">
                <collapse :faq="item"/>
              </div>
            </div>
            <div>
              <h4>Transportation</h4>
              <br>
              <br>
              <div v-for="item in transportation" :key="item.id">
                <collapse :faq="item"/>
              </div>
            </div>
            <div>
              <h4>Reservation</h4>
              <br>
              <br>
              <div v-for="item in reservation" :key="item.id">
                <collapse :faq="item"/>
              </div>
            </div>
            <div>
              <h4 class="faq__content--title">Accounting</h4>
              <br>
              <br>
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
    </div>
  </section>
</template>
<script>
import faq from '@/assets/data/faq'
import Collapse from '@/components/collapse/Collapse'
import lozad from 'lozad'
export default {
  name: 'FAQ',
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
  },
  mounted () {
    const el = document.querySelectorAll('img')
    const observer = lozad(el, {
      rootMargin: '10px',
      threshold: 0.1,
      enableAutoReload: true
    })
    observer.observe()
  }
}
</script>
<style src="./FAQ.scss" lang="scss" scoped/>
