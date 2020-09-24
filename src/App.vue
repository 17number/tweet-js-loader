<template lang="pug">
  #app
    Hero(:version="version")
    router-view
    Footer
</template>

<script>
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',
  components: {
    Hero,
    Footer,
  },
  data() {
    return {
      version: "v1.0.13"
    };
  },
}
</script>

<style lang="scss">
// Bulma
@import 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css';
// Bulma Extensions(tooltip)
@import 'https://cdn.jsdelivr.net/npm/bulma-extensions@6.2.7/bulma-tooltip/dist/css/bulma-tooltip.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
