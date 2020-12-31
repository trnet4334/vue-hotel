<template>
  <section class="careers">
    <div class="page-container">
      <div class="page-wrapper flex--column">
        <div class="careers__header flex--column">
          <h4 class="content__title">CAREERS</h4>
          <h1 class="page__title">LEAVE YOU MARK WITH US</h1>
          <br>
          <p class="content__description">Embark on a professional journey with us, where our team members are encouraged to find
            balance, inspiration and connection through a thriving and fulfilling career. We provide our
            guests a full-service luxury and exceptional experiences. Join our team today and see what
            makes here to be an incredible place to work for.</p>
          <br>
          <router-link to="/careers/jobs" target="_blank" rel="noopener noreferrer" class="link colored no-underline">
            VIEW OPEN POSITIONS
          </router-link>
        </div>
        <el-divider/>
        <div class="careers__context">
          <div class="careers__context--first flex--row">
            <div class="image-fluid xl">
              <image-box :imageName="imageUrl[0]"/>
            </div>
            <div>
              <h2 class="page__subtitle">Our duty</h2>
              <br>
              <p class="content__description">We pride ourselves in providing the very best and memorable experiences for our guests.
              Our team is genuine and positive, and we support each other in our efforts to exceed guest expectations.
              Here, you'll be encouraged to grow and develop your talents. For every team members, these aren't
               just jobs but opportunities to produce unforgettable experiences everyday.</p>
            </div>
          </div>
          <el-divider/>
          <div class="careers__context--second flex--row">
            <div class="image-fluid xl">
              <image-box :imageName="imageUrl[1]"/>
            </div>
            <div>
              <h2 class="page__subtitle">Our team</h2>
              <br>
              <p class="content__description">As an employee, you'll be empowered to deliver exceptional service for our guests. Immersed
                in an approachable and collaborative environment, everybody will be supported and encouraged
                to learn and grow within the organization. Additionally, every team members receive benefits
                and services discount at all our properties as part of our commitment to relax and rest.</p>
            </div>
          </div>
          <el-divider/>
          <div class="careers__context--third flex--column">
            <h2 class="page__subtitle">Service with Heart</h2>
            <br>
            <div>
              <p class="content__description">As a an honorable business, our goal is to deliver a truly tailored
                experience to every guest. Our work is surrounded on our spa treatments,
                but we also offer organic menu, various fitness activities, and opportunities
                to explore the nature.</p>
              <br>
              <p class="content__description">Much of the cuisine at our restaurant originates in our local organic farm.
                As part of our commitment to conservation, we offer garden and composting classes
                every weeks, provided guests to experience sustainable horticulture and healthful
                eating practices. We also provide photography and watercolor painting activities
                for every guests. For outdoor activity enthusiast, nature walks and scenic hikes
                are also great ways to explore nature.</p>
            </div>
            <br><br>
            <router-link to="/careers/jobs" target="_blank" rel="noopener noreferrer" class="link colored no-underline">
              VIEW OPEN POSITIONS
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ImageBox from '@/components/imageBox/ImageBox'
export default {
  components: {
    ImageBox
  },
  data () {
    return {
      fit: 'contain',
      imageUrl: [
        ['information/careers-img-1.jpg', 'Duty'],
        ['information/careers-img-2.jpg', 'Team']
      ]
    }
  }
}
</script>
<style src="./Careers.scss" lang="scss" scoped/>
