<template>
  <section class="careers">
    <div class="page-container">
      <div class="page-wrapper flex--column">
        <div class="careers__header flex--column page-content--header">
          <h4>CAREERS</h4>
          <h1>LEAVE YOU MARK WITH US</h1>
          <br>
          <p>Embark on a professional journey with us, where our team members are encouraged to find
            balance, inspiration and connection through a thriving and fulfilling career. We provide our
            guests a full-service luxury and exceptional experiences. Join our team today and see what
            makes here to be an incredible place to work for.</p>
          <br>
          <router-link to="/careers/jobs" target="_blank" rel="noopener noreferrer">
            VIEW OPEN POSITIONS
          </router-link>
        </div>
        <el-divider/>
        <div class="careers__context">
          <div class="careers__context--first flex--row">
            <div class="careers__context--image">
              <img src="@/assets/images/information/careers-img-1.jpg" alt="duty">
            </div>
            <div class="page-content--body">
              <h4>Our duty</h4>
              <br>
              <p>We pride ourselves in providing the very best and memorable experiences for our guests.
              Our team is genuine and positive, and we support each other in our efforts to exceed guest expectations.
              Here, you'll be encouraged to grow and develop your talents. For every team members, these aren't
               just jobs but opportunities to produce unforgettable experiences everyday.</p>
            </div>
          </div>
          <el-divider/>
          <div class="careers__context--second flex--row">
            <div class="careers__context--image">
              <img src="@/assets/images/information/careers-img-2.jpg" alt="team">
            </div>
            <div class="page-content--body">
              <h4>Our team</h4>
              <br>
              <p>As an employee, you'll be empowered to deliver exceptional service for our guests. Immersed
                in an approachable and collaborative environment, everybody will be supported and encouraged
                to learn and grow within the organization. Additionally, every team members receive benefits
                and services discount at all our properties as part of our commitment to relax and rest.</p>
            </div>
          </div>
          <el-divider/>
          <div class="careers__context--third flex--column page-content--body">
            <h4>Service with Heart</h4>
            <br>
            <div>
              <p>As a an honorable business, our goal is to deliver a truly tailored
                experience to every guest. Our work is surrounded on our spa treatments,
                but we also offer organic menu, various fitness activities, and opportunities
                to explore the nature.</p>
              <br>
              <p>Much of the cuisine at our restaurant originates in our local organic farm.
                As part of our commitment to conservation, we offer garden and composting classes
                every weeks, provided guests to experience sustainable horticulture and healthful
                eating practices. We also provide photography and watercolor painting activities
                for every guests. For outdoor activity enthusiast, nature walks and scenic hikes
                are also great ways to explore nature.</p>
            </div>
            <br><br>
            <router-link to="/careers/jobs" target="_blank" rel="noopener noreferrer">
              VIEW OPEN POSITIONS
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      image1: '@/assets/images/information/careers-img-1.jpg',
      image2: '@/assets/images/information/careers-img-2.jpg',
      fit: 'contain'
    }
  }
}
</script>
<style src="./Careers.scss" lang="scss" scoped/>
