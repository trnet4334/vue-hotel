<template>
  <div>
    <navbar/>
    <section class="wedding">
      <div class="page-wrapper">
        <div class="wedding__body--first flex--row">
          <div class="flex--column content">
            <h4 class="content__title">Wedding</h4>
            <h1 class="page__title">Lasting Memories Begin Here</h1>
            <br>
            <p class="content__description">We recognize it has bee difficult to plan your special day in
            times of such uncertainty. Our dedicated team will help ensure your big day is
            everything you ever imagined it would be. We offer bunch of spectacular venues onsite
            for you to choose from. We know that every tiny detail counts, and here's our
            promise to you: The happiest day of your life will be a seamless one as well.</p>
            <br>
            <button class="btn-outline-md">
              <router-link to="/wedding/inquiry">MAKE AN INQUIRY</router-link>
            </button>
          </div>
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl[0]"/>
          </div>
        </div>
        <div class="wedding__body--second flex--row">
          <div class="flex--column content page-content--header">
            <h2 class="page__subtitle">Culinary Talent</h2>
            <br>
            <p class="content__description">Our Executive Chef is the most talented and
            highly skilled at producing customized banquet menus which utilize the freshest
              seasonal ingredients available. </p>
            <br>
            <p class="content__description">As part of our responsibility, we also provide customize
            menus service to feature traditional fare from many different cultures and regions. Otherwise,
            we also provide vegetarian, vegan and gluten-friendly menus.</p>
            <br>
            <button class="btn-outline-md">
              <router-link to="/wedding/inquiry">MAKE AN INQUIRY</router-link>
            </button>
          </div>
          <div class="image-fluid xl">
            <image-box :imageName="imageUrl[1]"/>
          </div>
        </div>
        <div class="wedding__body--third">
          <vue-flux
            :options="options"
            :images="images"
            :transitions="transitions"
          >
            <template v-slot:preloader>
              <flux-preloader />
            </template>
          </vue-flux>
        </div>
        <div class="wedding__body--fourth flex--column flex--center">
          <div class="lists">
            <h2 class="page__subtitle">What We Provide for You</h2>
            <ul>
              <li>Wedding specialist</li>
              <li>Banquet staff</li>
              <li>Set-up & tear-down</li>
              <li>Gift tables</li>
              <li>Wedding cake</li>
              <li>Customized dining menu</li>
              <li>Event function space</li>
              <li>Guest shuttle</li>
              <li>Dance floors</li>
              <li>Centerpieces & chairs</li>
              <li>Specialty linens</li>
              <li>Flatware & glassware</li>
            </ul>
          </div>
        </div>
        <div class="wedding__body--fifth flex--row">
          <div class="flex--column flex--center content">
            <div class="image-fluid lg">
              <image-box :imageName="imageUrl[2]"/>
            </div>
            <div>
              <h5 class="image-label">Wedding Weekend</h5>
              <br>
              <p class="image-description">We take care of your pleasure journey from the rehearsal dinner to the
               post wedding brunch. A Resort & Spa can host your wonderful wedding weekend.</p>
            </div>
          </div>
          <div class="flex--column flex--center content">
            <div class="image-fluid lg">
              <image-box :imageName="imageUrl[3]"/>
            </div>
            <div>
              <h5 class="image-label">Group Rate for Wedding</h5>
              <br>
              <p class="image-description">A Resort & Spa offers group rates of various guestrooms for your
              wedding parties and guests.</p>
            </div>
          </div>
        </div>
        <div class="wedding__body--sixth flex--center flex--column">
          <h2 class="page__subtitle">Pre-planning Your Most Important Day</h2>
          <br>
          <p class="content__description">As you begin to plan the most important event in your life with us, it's imperative to note that
          we require that you should fill out the wedding registration form and also send us wedding event plan. Your wedding
          plan will help us manage the organization of each event, assisting with protocol, structuring schedules, wedding parties and so on, which we want to
          make sure everything meet your wish.</p>
          <br>
          <p class="content__description">
            Your wedding specialist will contact you and work hand-in-hand with your wedding planner. Our team can help you schedule the plan and
            recommend numbers of different vendors, including wedding planners, florists, wedding photographers and even music band.
          </p>
          <br>
          <br>
          <div class="links flex--row">
            <router-link to="/wedding/inquiry" class="link colored no-underline">REQUEST PROPOSAL</router-link>
            <a class="link colored no-underline">WEDDING GUIDE</a>
            <a class="link colored no-underline">WEDDING EXCLUSIVE</a>
          </div>
        </div>
      </div>
    </section>
    <signup-banner/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar.vue'
import SignupBanner from '@/components/signupBanner/SignupBanner.vue'
import Footer from '@/components/footer/Footer.vue'
import ImageBox from '@/components/imageBox/ImageBox'
import {
  VueFlux,
  FluxControls,
  FluxPreloader
} from 'vue-flux'
export default {
  components: {
    VueFlux,
    FluxControls,
    FluxPreloader,
    Navbar,
    SignupBanner,
    Footer,
    ImageBox
  },
  data () {
    return {
      imageUrl: [
        ['wedding/wedding-img-1.jpg', 'Wedding 1'],
        ['wedding/wedding-img-2.jpg', 'Wedding 2'],
        ['wedding/wedding-img-3.jpg', 'Wedding 3'],
        ['wedding/wedding-img-4.jpg', 'Wedding 4']
      ],
      options: {
        allowFullscreen: false,
        allowToSkipTransition: true,
        autohideTime: 2500,
        autoplay: true,
        bindKeys: false,
        delay: 5000,
        enableGestures: false,
        infinite: true,
        lazyLoad: true,
        lazyLoadAfter: 3
      },
      images: [
        require('@/assets/images/wedding/carousel/wedding-carousel-1.jpg'),
        require('@/assets/images/wedding/carousel/wedding-carousel-2.jpg'),
        require('@/assets/images/wedding/carousel/wedding-carousel-3.jpg'),
        require('@/assets/images/wedding/carousel/wedding-carousel-4.jpg'),
        require('@/assets/images/wedding/carousel/wedding-carousel-5.jpg')
      ],
      transitions: [
        'blocks2',
        'cube',
        'round2',
        'swipe'
      ]
    }
  }
}
</script>
<style src="./Wedding.scss" lang="scss" scoped/>
