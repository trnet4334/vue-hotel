<template>
  <div>
    <navbar/>
    <section class="about">
      <div class="page-container">
        <div class="page-wrapper">
          <div class="body flex--row">
            <div class="image">
              <img src="@/assets/images/story/story-img-1.jpg" alt="Story">
            </div>
            <div class="content page-content--header">
              <h4>About</h4>
              <h1>A Place of Possibility</h1>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet consequuntur dolore eos et facere fugiat laborum minima molestias nemo odio pariatur praesentium quia quidem quisquam rerum veritatis vitae. Deserunt dolorem necessitatibus obcaecati qui sunt!</p>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore est minima non perspiciatis quia quis ratione saepe, sit vero.</p>
            </div>
          </div>
          <div class="body flex--row">
            <div class="content flex--column flex--center page-content--header">
              <h1>Find out make us different</h1>
            </div>
            <div class="content list-group">
              <ul>
                <li>Move and be moved with spectacular adventures at the nature surrounded us and
                  over a hundred activities weekly crafted with your experience in mind.</li>
                <li>Blessed with the world's most talented and intuitive therapists to honor you.
                  Our therapists can bestow relaxation and release both mind and body.</li>
                <li>Under the direction of our Executive Chef, our culinary approach is to use
                  fresh and high-quality ingredients, plus natural, imaginative flavors.</li>
                <li>Cooperated with some of the most experienced hiking guides available
                  to enrich your knowledge of the trails, the native land.</li>
              </ul>
            </div>
          </div>
          <div class="body flex--row reverse">
            <div class="image">
              <img src="@/assets/images/story/story-img-2.jpg" alt="Story">
            </div>
            <div class="content page-content--header">
              <h1>A Destination Unlike Any Other</h1>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam at autem beatae cupiditate debitis deserunt, dicta distinctio dolor ducimus ea eos esse ex harum inventore ipsam iste iure labore minus, necessitatibus nemo perferendis quisquam quo rem, saepe sequi tempora tempore totam velit vero voluptatum.</p>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur dicta earum laboriosam possimus quam ut. Illum libero necessitatibus veritatis.</p>
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
export default {
  components: {
    Navbar,
    SignupBanner,
    Footer
  },
  data () {
    return {}
  }
}
</script>
<style src="./About.scss" lang="scss" scoped/>
