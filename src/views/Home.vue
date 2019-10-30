<template lang="pug">
  #home
    Description
    LoadButton(@file-select="recvFileContent" v-if="!fileContent")
    DownloadButton(:tweets="tweets.all" v-if="tweets.all.length > 0")
    .search-form.container(v-if="tweets.all.length > 0")
      .columns.is-mobile
        .column.is-12-mobile.is-offset-1-tablet.is-10-tablet.is-offset-2-desktop.is-8-desktop
          .field
            p.control.has-icons-left(:class="filteringTimer > 0 ? 'is-loading' : ''")
              input.input(type="text" @input="filtering" v-model="keywords" placeholder="キーワードを入力")
              span.icon.is-small.is-left
                font-awesome-icon(:icon="['fas', 'search']")
    Nav(:pages="pages" v-if="tweets.forRender.length > 0")
    .container
      .tweets.columns.is-mobile.is-multiline
        .column.is-12-mobile.is-6-tablet.is-4-widescreen.is-3-fullhd(v-for="(tweet, index) in tweets.forRender")
          Tweet(:tweet="tweet")
    Nav(:pages="pages" v-if="tweets.forRender.length > 0")
</template>

<script>
import LoadButton from '@/components/LoadButton.vue';
import DownloadButton from '@/components/DownloadButton.vue';
import Tweet from '@/components/Tweet.vue';
import Description from '@/components/Description.vue';
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    LoadButton,
    DownloadButton,
    Tweet,
    Description,
    Nav,
  },
  data() {
    return {
      fileContent: "",
      tweets: {
        all: [],
        filtered: [],
        forRender: [],
      },
      pages: {
        prev: 1,
        current: 1,
        next: 2,
        max: 1,
        per: 60,
      },
      keywords: "",
      filteringTimer: 0,
    };
  },
  methods: {
    recvFileContent(e) {
      this.fileContent = e;
      this.parseTweets();
      this.pages.max = Math.ceil(this.tweets.filtered.length / this.pages.per);
      this.sliceTweets(this.pages.current);
    },
    async parseTweets() {
      this.tweets.all = JSON.parse(this.fileContent);
      this.tweets.all.forEach(tweet => {
        tweet.favorite_count = Number(tweet.favorite_count);
        tweet.retweet_count = Number(tweet.retweet_count);
      });
      this.tweets.filtered = this.tweets.all;
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
      this.tweets.forRender = this.tweets.filtered.slice(
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
      if (isNaN(nextPage)) {
        this.pages.prev = 1;
        this.pages.current = 1;
        this.pages.next = Math.min(2, this.pages.max);
      } else {
        this.pages.prev = Math.max(1, nextPage - 1);
        this.pages.current = nextPage;
        this.pages.next = Math.min(nextPage + 1, this.pages.max);
      }
    },
    filtering() {
      if (this.filteringTimer !== 0) {
        clearTimeout(this.filteringTimer);
        this.filteringTimer = 0;
      }
      if (this.keywords.trim() === "") {
        document.querySelectorAll("twitter-widget").forEach(e => e.remove());
        this.removeTwitterWidgetScript();
        this.tweets.filtered = this.tweets.all;
        this.updateAfterFilter();
        return;
      }
      this.filteringTimer = setTimeout(() => {
        document.querySelectorAll("twitter-widget").forEach(e => e.remove());
        this.removeTwitterWidgetScript();
        this.tweets.filtered = this.tweets.all.filter(tweet => {
          return this.keywords.trim().split(/[\s\t]/).every(keyword => {
            return tweet.full_text.indexOf(keyword) >= 0;
          })
        });
        this.updateAfterFilter();
      }, 1000);
    },
    updateAfterFilter() {
      this.sliceTweets();
      this.pages.max = Math.ceil(this.tweets.filtered.length / this.pages.per);
      this.updatePageNumber();
      history.pushState(null, null, "/tweet-js-loader/");
      this.filteringTimer = 0;
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
