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
              <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet consequuntur dolore eos et facere fugiat laborum minima molestias nemo odio pariatur praesentium quia quidem quisquam rerum veritatis vitae. Deserunt dolorem necessitatibus obcaecati qui sunt!</p>
              <br>
              <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore est minima non perspiciatis quia quis ratione saepe, sit vero.</p>
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
              <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam at autem beatae cupiditate debitis deserunt, dicta distinctio dolor ducimus ea eos esse ex harum inventore ipsam iste iure labore minus, necessitatibus nemo perferendis quisquam quo rem, saepe sequi tempora tempore totam velit vero voluptatum.</p>
              <br>
              <p class="content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur dicta earum laboriosam possimus quam ut. Illum libero necessitatibus veritatis.</p>
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
import lozad from 'lozad'
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
<style src="./About.scss" lang="scss" scoped/>
