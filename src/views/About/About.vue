<template>
  <div>
    <navbar/>
    <section class="about">
      <div class="page-container">
        <div class="page-wrapper">
          <div class="body flex--row">
            <div class="image-fluid xl">
              <image-box :imageName="imageUrl[0]"/>
            </div>
            <div class="content">
              <h4 class="content__title">About</h4>
              <h1 class="page__title">A Place of Possibility</h1>
              <br>
              <p class="content__description">
                If you're looking for a place to escape from normal life, A Resort & Spa is
                whispering your name. Sedona is a celebration of culture and nature. It makes an
                intimate connection from oneself to each other that enrich lives and renew spirits.
              </p>
              <br>
              <p class="content__description">
                A Resort & Spa is at the center of it all, motivated by this stunning place and its
                power to create change. When you journey here, the possibilities are endless.
              </p>
            </div>
          </div>
          <div class="body flex--row">
            <div class="content flex--column flex--center">
              <h2 class="page__subtitle">Find out make us different</h2>
            </div>
            <div class="content list-group">
              <ul>
                <li class="content__description">Move and be moved with spectacular adventures at the nature surrounded us and
                  over a hundred activities weekly crafted with your experience in mind.</li>
                <li class="content__description">Blessed with the world's most talented and intuitive therapists to honor you.
                  Our therapists can bestow relaxation and release both mind and body.</li>
                <li class="content__description">Under the direction of our Executive Chef, our culinary approach is to use
                  fresh and high-quality ingredients, plus natural, imaginative flavors.</li>
                <li class="content__description">Cooperated with some of the most experienced hiking guides available
                  to enrich your knowledge of the trails, the native land.</li>
              </ul>
            </div>
          </div>
          <div class="body flex--row reverse">
            <div class="image-fluid xl">
              <image-box :imageName="imageUrl[1]"/>
            </div>
            <div class="content page-content--header">
              <h2 class="page__subtitle">A Destination Unlike Any Other</h2>
              <br>
              <p class="content__description">
                Located on 100 acres of wide natural terrain, A Resort & Spa in the spiritual heart of Sedona,
                surrounded by the towering rock walls of canyon. Here we combine the amazing southwest landscape and
                Native American culture.
              </p>
              <br>
              <p class="content__description">
                Featuring hundreds of guestrooms and suite, over a hundred unique activities,
                and fresh healthy dining options, our resort is a place to naturally feel alive.
              </p>
            </div>
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
import SignupBanner from '@/components/signupBanner/SignupBanner'
import Footer from '@/components/footer/Footer.vue'
import ImageBox from '@/components/imageBox/ImageBox'
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer,
    ImageBox
  },
  data () {
    return {
      imageUrl: [
        ['story/story-img-1.jpg', 'Story 1'],
        ['story/story-img-2.jpg', 'Story 2']
      ]
    }
  }
}
</script>
<style src="./About.scss" lang="scss" scoped/>
