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

            <template v-slot:controls>
              <flux-controls />
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
              <p class="image-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur ducimus facilis molestiae necessitatibus quo?</p>
            </div>
          </div>
          <div class="flex--column flex--center content">
            <div class="image-fluid lg">
              <image-box :imageName="imageUrl[3]"/>
            </div>
            <div>
              <h5 class="image-label">Group Rate for Wedding</h5>
              <br>
              <p class="image-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum mollitia odit quia voluptatem. Deserunt.</p>
            </div>
          </div>
        </div>
        <div class="wedding__body--sixth flex--center flex--column">
          <h2 class="page__subtitle">Pre-planning Your Most Important Day</h2>
          <br>
          <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aut blanditiis, consectetur delectus dignissimos earum fugiat harum in inventore iste libero nemo numquam odit officia porro similique tempora ut? Voluptate.</p>
          <br>
          <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus dolorem ducimus error explicabo fugit in ipsa natus perferendis quam quas quasi, quibusdam, reiciendis sapiente voluptate. Adipisci illo neque quibusdam.</p>
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
        autoplay: false,
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
