<template>
  <main id="app">
    <router-view/>
  </main>
</template>
<script>
import lozad from 'lozad'
export default {
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
</style>
