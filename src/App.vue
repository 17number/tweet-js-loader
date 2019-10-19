<template lang="pug">
  #app.container
    LoadButton(@file-select="recvFilePath")
</template>

<script>
import LoadButton from './components/LoadButton.vue'

export default {
  name: 'app',
  components: {
    LoadButton,
  },
  data() {
    return {
      file: ""
    };
  },
  methods: {
    recvFilePath(e) {
      this.file = e;
    }
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
