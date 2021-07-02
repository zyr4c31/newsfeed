<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Newsfeed' }">Newsfeed</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
$base-font-size: 16px;
$base-font-family: 'Nunito', sans-serif;
$heading-font-family: 'Righteous', sans-serif;

$lightblue: #D7F7FE;
$darkblue: #1A577F;
$medblue: #1F729C;
$salmon: #FF6067;
$hellayellow: #F7EE1A;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkblue;
}

#nav {
  font: $heading-font-family;
  padding: 10px;
  background-color: $hellayellow;
  width: 100%;
  display: inline-table;

  a {
    font-weight: bold;
    color: $medblue;
    font: $heading-font-family;

    &.router-link-exact-active {
      color: $darkblue;
      font: $heading-font-family;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: .5;
}

body {
  background: $lightblue;
  font-family: $base-font-family;
  color: #222;
}

* {
  transition: all .65s ease;
  box-sizing: border-box;

}

h1 {
  font: $heading-font-family;
  margin: 4px;
  border: 4px;
  background: $salmon;
  color: white;
  padding: 8;
  font-family: $heading-font-family;
  border-radius: 10px;
}

h3 {
  font: $heading-font-family;
  width: auto;
  padding: 5px;
  display: inline-table;
  background: $salmon;
  color: white;
  font-family: $heading-font-family;
  border-radius: 10px;
}

textarea {
  width: 75%;
  height: auto;
  color: $hellayellow;
}

p {
  width: 25%;
  color: $darkblue;
}

input, textarea, a {
  font: $base-font-family;
  background: $salmon;
  display: inline-table;
  padding: 10px;
  text-align: center;
  font-size: em(13px);
  text-decoration: none;
  border-bottom: 1px solid;
  border-radius: 10px;
}

button{
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  background-color: $hellayellow;
  color: $darkblue;
  border-color: $salmon;
}

  h3, p {
    padding: em(25px);
    max-width: 47%;
    display: inline-table;
    background: lighten($medblue, 45%);
    color: $darkblue;
    border-bottom: 3px solid $hellayellow;
    margin-bottom: em(35px);
    position: relative;
    overflow: hidden;
    border-radius: 4px;
      color: darken($lightblue, 85%);
      font-size: 24px;
      margin: 0 0 5px 0;
      font-family: $heading-font-family;
  }
</style>
