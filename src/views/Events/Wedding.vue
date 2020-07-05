<template>
  <div>
    <navbar/>
    <section class="wedding">
      <div class="wedding__container">
        <div class="wedding__body--first util__flex--row">
          <div class="util__flex--column content">
            <h4 class="util__header--title">Wedding</h4>
            <h1 class="util__header--subtitle">Lasting Memories Begin Here</h1>
            <br>
            <p class="util__header--description">We recognize it has bee difficult to plan your special day in
            times of such uncertainty. Our dedicated team will help ensure your big day is
            everything you ever imagined it would be. We offer bunch of spectacular venues onsite
            for you to choose from. We know that every tiny detail counts, and here's our
            promise to you: The happiest day of your life will be a seamless one as well.</p>
            <br>
            <button><router-link to="/inquiry">MAKE AN INQUIRY</router-link></button>
          </div>
          <div class="wedding--image">
            <img src="@/assets/images/wedding/wedding-img-1.jpg" alt="Wedding">
          </div>
        </div>
        <div class="wedding__body--second util__flex--row">
          <div class="wedding--image">
            <img src="@/assets/images/wedding/wedding-img-2.jpg" alt="Wedding">
          </div>
          <div class="util__flex--column content">
            <h1 class="util__header--subtitle">Culinary Talent</h1>
            <br>
            <p class="util__header--description">Our Executive Chef is the most talented and
            highly skilled at producing customized banquet menus which utilize the freshest
              seasonal ingredients available. </p>
            <br>
            <p class="util__header--description">As part of our responsibility, we also provide customize
            menus service to feature traditional fare from many different cultures and regions. Otherwise,
            we also provide vegetarian, vegan and gluten-friendly menus.</p>
            <br>
            <button><router-link to="/inquiry">MAKE AN INQUIRY</router-link></button>
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
        <div class="wedding__body--fourth util__flex--column util__flex--center">
          <div class="content">
            <h2>What We Provide for You</h2>
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
        <div class="wedding__body--fifth util__flex--row">
          <div class="util__flex--column content">
            <div class="wedding--image">
              <img src="@/assets/images/wedding/wedding-img-3.jpg" alt="Wedding">
            </div>
            <h4>Wedding Weekend</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur ducimus facilis molestiae necessitatibus quo?</p>
          </div>
          <div class="util__flex--column content">
            <div class="wedding--image">
              <img src="@/assets/images/wedding/wedding-img-4.jpg" alt="Wedding">
            </div>
            <h4>Group Rate for Wedding</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum mollitia odit quia voluptatem. Deserunt.</p>
          </div>
        </div>
        <div class="wedding__body--sixth util__flex--center util__flex--column">
          <h1 class="util__header--subtitle">Pre-planning Your Most Important Day</h1>
          <br>
          <el-divider/>
          <br>
          <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aut blanditiis, consectetur delectus dignissimos earum fugiat harum in inventore iste libero nemo numquam odit officia porro similique tempora ut? Voluptate.</p>
          <br>
          <p class="util__header--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus dolorem ducimus error explicabo fugit in ipsa natus perferendis quam quas quasi, quibusdam, reiciendis sapiente voluptate. Adipisci illo neque quibusdam.</p>
          <br>
          <br>
          <div class="util__flex--row">
            <router-link to="/inquiry">REQUEST PROPOSAL</router-link>
            <a href="javascript:;">WEDDING GUIDE</a>
            <a href="javascript:;">WEDDING EXCLUSIVE</a>
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
    Footer
  },
  data () {
    return {
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
      images: ['', '', ''],
      transitions: [
        'blinds3d',
        'blocks2',
        'book',
        'cube',
        'round2',
        'swipe',
        'warp',
        'wave'
      ]
    }
  }
}
</script>
<style src="./Wedding.scss" lang="scss" scoped/>
