<template lang="pug">
  #app.container
    LoadButton(@file-select="recvFileContent")
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
      fileContent: "",
      tweets: [],
    };
  },
  methods: {
    recvFileContent(e) {
      this.fileContent = e;
      this.parseTweets();
    },
    parseTweets() {
      this.tweets = JSON.parse(this.fileContent);
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
