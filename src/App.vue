<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<style lang="scss">
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
  .util {
    /* General use for flexbox styling */
    &__flex--row {
      display: flex;
      flex-direction: row;
    }
    &__flex--column {
      display: flex;
      flex-direction: column;
    }
    &__flex--center {
      justify-content: center;
      align-items: center;
    }
    /* General use for header styling */
    &__header--title {
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: start;
      font-weight: 600;
    }
    &__header--subtitle {
      font-size: 3.2rem;
      line-height: 3.6rem;
      text-align: start;
      font-weight: 700;
    }
    &__header--description {
      font-size: 1.3rem;
      text-align: start;
    }
  }
</style>
