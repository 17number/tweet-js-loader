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
@import 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
