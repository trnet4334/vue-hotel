<template>
  <main id="app">
    <router-view/>
  </main>
</template>
<style lang="scss">
  @import 'styles/app';
  #app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    font-family: 'Crimson Text', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3d405b;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    background-color: #f4f1de;
    /*background-color: #b8b08d;*/
  }
  a {
    color: #3d405b;
  }
</style>
