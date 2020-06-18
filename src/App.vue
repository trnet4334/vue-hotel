<template>
  <main id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/booking">Booking</router-link> |
      <router-link to="/checkout">Checkout</router-link> |
      <router-link to="/sitemap">Sitemap</router-link>
    </div>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: #f3eee7;
}
.util__flex--row {
  display: flex;
  flex-direction: row;
}
.util__flex--column {
  display: flex;
  flex-direction: column;
}
</style>
