<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/newsfeed/">Newsfeed</router-link>
  </div>
  <router-view />
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
  padding: 20px;

  a {
    font-weight: bold;
    color: #9fb2c5;

    &.router-link-exact-active {
      color: #6832af;
    }
  }
}
</style>
