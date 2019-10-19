<template lang="pug">
  #app.container
    img(alt="Vue logo" src="./assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
