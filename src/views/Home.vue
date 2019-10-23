<template lang="pug">
  #home
    Hero
    Description
    LoadButton(@file-select="recvFileContent" v-if="!fileContent")
    DownloadButton(:tweets="tweets.all" v-if="tweets.all.length > 0")
    Nav(:pages="pages" v-if="tweets.forRender.length > 0")
    .container
      .tweets.columns.is-mobile.is-multiline
        .column.is-12-mobile.is-6-tablet.is-4-widescreen.is-3-fullhd(v-for="(tweet, index) in tweets.forRender")
          Tweet(:tweet="tweet")
    Nav(:pages="pages" v-if="tweets.forRender.length > 0")
    Footer(:version="version")
</template>

<script>
import LoadButton from '@/components/LoadButton.vue';
import DownloadButton from '@/components/DownloadButton.vue';
import Tweet from '@/components/Tweet.vue';
import Description from '@/components/Description.vue';
import Hero from '@/components/Hero.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    LoadButton,
    DownloadButton,
    Tweet,
    Description,
    Hero,
    Nav,
    Footer,
  },
  data() {
    return {
      fileContent: "",
      tweets: {
        all: [],
        forRender: [],
      },
      pages: {
        prev: 1,
        current: 1,
        next: 2,
        max: 1,
        per: 60,
      },
      version: "v1.0.3"
    };
  },
  methods: {
    recvFileContent(e) {
      this.fileContent = e;
      this.parseTweets();
      this.pages.max = Math.ceil(this.tweets.all.length / this.pages.per);
      this.sliceTweets(this.pages.current);
    },
    async parseTweets() {
      this.tweets.all = JSON.parse(this.fileContent);
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
      this.tweets.forRender = this.tweets.all.slice(
        (page - 1) * this.pages.per,
        page * this.pages.per
      );
    },
    setPageNumber() {
      const currentPage = parseInt(this.$route.query.page || 1);
      this.pages.prev = Math.max(1, currentPage - 1);
      this.pages.current = currentPage;
      this.pages.next = currentPage + 1;
    },
    updatePageNumber(nextPage) {
      this.pages.prev = Math.max(1, nextPage - 1);
      this.pages.current = nextPage;
      this.pages.next = Math.min(nextPage + 1, this.pages.max);
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
    this.tweets.forRender = [];
    this.updatePageNumber(parseInt(to.query.page));
    this.sliceTweets(to.query.page);
    this.removeTwitterWidgetScript();
    next();
  },
}
</script>
