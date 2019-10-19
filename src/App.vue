<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'app',
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
}
</style>
