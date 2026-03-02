<template>
  <main id="app">
    <router-view/>
  </main>
</template>
<script>
export default {
  mounted () {
    const imgs = document.querySelectorAll('img')
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) img.src = img.dataset.src
          observer.unobserve(img)
        }
      }),
      { rootMargin: '10px', threshold: 0.1 }
    )
    imgs.forEach(img => observer.observe(img))
  }
}
</script>
<style lang="scss">
  @import 'styles/app';
  #app {
    text-align: center;
    color: #3d405b;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
  }
  *::before, *::after {
    box-sizing: border-box;
  }
</style>
