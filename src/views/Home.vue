<template lang="pug">
  #home
    Hero
    Description
    LoadButton(@file-select="recvFileContent" v-if="!fileContent")
    Nav(:prevPage="prevPage" :currentPage="currentPage" :nextPage="nextPage" :maxPage="maxPage" v-if="tweetsForReder.length > 0")
    .container
      .tweets.columns.is-mobile.is-multiline
        .column.is-12-mobile.is-6-tablet.is-4-widescreen.is-3-fullhd(v-for="(tweet, index) in tweetsForReder")
          Tweet(:tweet="tweet")
    Nav(:prevPage="prevPage" :currentPage="currentPage" :nextPage="nextPage" :maxPage="maxPage" v-if="tweetsForReder.length > 0")
</template>

<script>
import LoadButton from '@/components/LoadButton.vue';
import Tweet from '@/components/Tweet.vue';
import Description from '@/components/Description.vue';
import Hero from '@/components/Hero.vue';
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    LoadButton,
    Tweet,
    Description,
    Hero,
    Nav,
  },
  data() {
    return {
      fileContent: "",
      tweets: [],
      tweetsForReder: [],
      prevPage: 1,
      currentPage: 1,
      nextPage: 2,
      maxPage: 1,
      countPerPage: 60,
    };
  },
  methods: {
    recvFileContent(e) {
      this.fileContent = e;
      this.parseTweets();
      this.maxPage = Math.ceil(this.tweets.length / this.countPerPage);
      this.sliceTweets(this.currentPage);
    },
    async parseTweets() {
      this.tweets = JSON.parse(this.fileContent);
    },
    loadTwitterWidgetScript() {
      let twitterWidgetScript = document.createElement("script");
      twitterWidgetScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
      twitterWidgetScript.setAttribute("async", true);
      twitterWidgetScript.setAttribute("charset", "utf-8");
      twitterWidgetScript.setAttribute("id", "twitter-widget-script");
      document.head.appendChild(twitterWidgetScript);
    },
    removeTwitterWidgetScript() {
      const twitterWidgetScriptTag = document.getElementById("twitter-widget-script");
      if(twitterWidgetScriptTag) {
        twitterWidgetScriptTag.remove();
      }
    },
    sliceTweets(page = 1) {
      this.tweetsForReder = this.tweets.slice(
        (page - 1) * this.countPerPage,
        page * this.countPerPage
      );
    },
    setPageNumber() {
      const currentPage = parseInt(this.$route.query.page || 1);
      this.prevPage = Math.max(1, currentPage - 1);
      this.currentPage = currentPage;
      this.nextPage = currentPage + 1;
    },
    updatePageNumber(nextPage) {
      this.prevPage = Math.max(1, nextPage - 1);
      this.currentPage = nextPage;
      this.nextPage = Math.min(nextPage + 1, this.maxPage);
    },
  },
  created() {
    this.setPageNumber();
  },
  updated() {
    this.loadTwitterWidgetScript();
  },
  beforeRouteUpdate(to, from, next) {
    document.querySelectorAll("twitter-widget").forEach(e => e.remove());
    this.tweetsForReder = [];
    this.updatePageNumber(parseInt(to.query.page));
    this.sliceTweets(to.query.page);
    this.removeTwitterWidgetScript();
    next();
  },
}
</script>
