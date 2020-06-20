<template lang="pug">
  #home
    Description(v-if="tweets.all.length === 0")
    LoadButton(@file-select="recvFileContent" v-if="!fileContent")
    DownloadButton(:tweets="tweets.all" v-if="tweets.all.length > 0")
    aside.filter-form.container(v-if="tweets.all.length > 0")
      .columns.is-mobile.is-multiline
        .column.is-12-mobile.is-8-tablet.is-offset-1-desktop.is-7-desktop.is-offset-2-widescreen.is-6-widescreen
          .field
            p.control.has-icons-left(:class="filteringTimer > 0 ? 'is-loading' : ''")
              input.input(type="text" @input="filtering" v-model="keywords" placeholder="キーワードを入力 / Input keywords")
              span.icon.is-small.is-left
                font-awesome-icon(:icon="['fas', 'search']")
        .column.is-12-mobile.is-4-tablet
          .field
            .control.has-icons-left
              .select
                select(v-model="selected" @change="sort")
                  option(value="1") 日付が新しい順 / Date DESC
                  option(value="2") 日付が古い順 / Date ASC
                  option(value="3") いいね数が多い順 / Like DESC
                  option(value="4") RT数が多い順 / RT DESC
                  option(value="5") いいね数 + RT数 順 / LIKE+RT DESC
              .icon.is-small.is-left
                font-awesome-icon(:icon="['fas', 'filter']")
    //- フィルタ(写真/動画/リンク/ハッシュタグ)
    .columns.is-mobile.is-multiline.is-centered(v-if="tweets.all.length > 0")
      .column.is-2-mobile.is-1-tablet
        .button.is-light.is-small.is-rounded(title="写真" :class="{'is-active is-primary': flags.photo}" @click="changeFlag('photo')")
          font-awesome-icon(:icon="['far', 'image']" class="is-size-5")
      .column.is-2-mobile.is-1-tablet
        .button.is-light.is-small.is-rounded(title="動画" :class="{'is-active is-primary': flags.video}" @click="changeFlag('video')")
          font-awesome-icon(:icon="['fas', 'video']" class="is-size-5")
      .column.is-2-mobile.is-1-tablet
        .button.is-light.is-small.is-rounded(title="リンク/URL" :class="{'is-active is-primary': flags.link}" @click="changeFlag('link')")
          font-awesome-icon(:icon="['fas', 'link']" class="is-size-5")
      .column.is-2-mobile.is-1-tablet
        .button.is-light.is-small.is-rounded(title="ハッシュタグ" :class="{'is-active is-primary': flags.hashtag}" @click="changeFlag('hashtag')")
          font-awesome-icon(:icon="['fas', 'hashtag']" class="is-size-5")
    //- ナビゲーション
    Nav(:pages="pages" v-if="forRender.length > 0")
    .columns.is-mobile.is-multiline.is-centered(v-if="forRender.length > 0")
      .column.is-3-mobile.is-2-tablet
        p.control.has-icons-left
          input.input.is-small(type="number" v-model="pages.userInput" min="1" :max="pages.max" @input="changePage" placeholder="ページ番号を入力 / Input page no")
          span.icon.is-left
            font-awesome-icon(:icon="['far', 'arrow-alt-circle-right']" class="is-3")
    .container
      section.tweets.columns.is-mobile.is-multiline
        .column.is-12-mobile.is-6-tablet.is-4-widescreen.is-3-fullhd(v-for="(tweet, index) in forRender")
          Tweet(:tweet="tweet")
    Nav(:pages="pages" v-if="forRender.length > 0")
</template>

<script>
import * as moment from 'moment-timezone';

import LoadButton from '@/components/LoadButton.vue';
import DownloadButton from '@/components/DownloadButton.vue';
import Tweet from '@/components/Tweet.vue';
import Description from '@/components/Description.vue';
import Nav from '@/components/Nav.vue';

const SortValues = {
  1: "DATE_DESC",
  2: "DATE_ASC",
  3: "LIKE_DESC",
  4: "RT_DESC",
  5: "LIKE_RT_DESC",
  "DATE_DESC": "1",
  "DATE_ASC": "2",
  "LIKE_DESC": "3",
  "RT_DESC": "4",
  "LIKE_RT_DESC": "5",
}

export default {
  name: 'Home',
  components: {
    LoadButton,
    DownloadButton,
    Tweet,
    Description,
    Nav,
  },
  computed: {
    forRender() {
      return this.tweets.filtered.slice(
        (this.pages.current - 1) * this.pages.per,
        this.pages.current * this.pages.per
      );
    },
  },
  data() {
    return {
      fileContent: "",
      tweets: {
        all: [],
        filtered: [],
      },
      pages: {
        prev: 1,
        current: 1,
        next: 2,
        max: 1,
        per: 60,
        userInput: '',
      },
      flags: {
        photo: false,
        video: false,
        link: false,
        hashtag: false,
      },
      changePageTimer: 0,
      keywords: "",
      filteringTimer: 0,
      selected: "1",
    };
  },
  methods: {
    recvFileContent(e) {
      this.fileContent = e;
      this.parseTweets();
      this.pages.max = Math.ceil(this.tweets.filtered.length / this.pages.per);
      if (this.pages.current > this.pages.max) {
        this.pages.current = this.pages.max;
        this.$router.push({ query: { page: this.pages.max } });
      } else if (this.pages.current < 1) {
        this.pages.current = 1;
        this.$router.push({ query: { page: 1 } });
      }
    },
    async parseTweets() {
      const tweets = JSON.parse(this.fileContent);
      this.tweets.all = tweets.map(tweet => {
        tweet = tweet.tweet ? tweet.tweet : tweet;
        return {
          id_str: tweet.id_str,
          full_text: tweet.full_text,
          entities: tweet.entities || {},
          favorite_count: Number(tweet.favorite_count) || 0,
          retweet_count: Number(tweet.retweet_count) || 0,
          created_at: tweet.created_at,
        };
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
      if (twitterWidgetScriptTag) {
        twitterWidgetScriptTag.remove();
      }
    },
    setPageNumber() {
      const currentPage = parseInt(this.$route.query.page || 1);
      this.pages.prev = Math.max(1, currentPage - 1);
      this.pages.current = Math.min(1, currentPage);
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
      this.pages.userInput = this.pages.current;
    },
    changePage() {
      if (this.changePageTimer !== 0) {
        clearTimeout(this.changePageTimer);
        this.changePageTimer = 0;
      }
      if (this.isValidPage()) {
        this.changePageTimer = setTimeout(() => {
          this.$router.push({ query: { page: parseInt(this.pages.userInput) } });
        }, 1000);
      } else if (this.pages.userInput.trim() === '') {
        this.changePageTimer = setTimeout(() => {
          this.$router.push({ query: { page: 1 } });
        }, 1000);
      }
    },
    changeFlag(key) {
      this.flags[key] = !this.flags[key];
      this.filtering();
    },
    isValidPage() {
      return parseInt(this.pages.userInput) > 0
        && this.pages.userInput <= this.pages.max
        && this.pages.userInput !== this.pages.current;
    },
    filtering() {
      if (this.filteringTimer !== 0) {
        clearTimeout(this.filteringTimer);
        this.filteringTimer = 0;
      }
      let filtered = this.tweets.all;

      // キーワードフィルタ
      filtered = this.filteringByKeywords(filtered);

      // 各種フラグによるフィルタ
      filtered = this.filteringByMedias(filtered);

      // 適用(delay 1000ms)
      this.filteringTimer = setTimeout(() => {
        this.tweets.filtered = filtered;
        this.sort();
      }, 1000);
    },
    filteringByKeywords(filtered) {
      if (this.keywords.trim() !== "") {
        filtered = filtered.filter(tweet => {
          return this.keywords.trim().split(/[\s\t]/).every(keyword => {
            return tweet.full_text.toLowerCase().indexOf(keyword.toLowerCase()) >= 0;
          });
        });
      }
      return filtered;
    },
    filteringByMedias(filtered) {
      if (this.flags.photo || this.flags.video || this.flags.link || this.flags.hashtag) {
        filtered = filtered.filter(tweet => {
          let result = false;

          // 写真
          if (this.flags.photo && tweet.entities.media && tweet.entities.media.length > 0) {
            result = result || tweet.entities.media[0].expanded_url.includes('/photo/');
          }

          // 動画
          if (this.flags.video && tweet.entities.media && tweet.entities.media.length > 0) {
            result = result || tweet.entities.media[0].expanded_url.includes('/video/');
          }

          // リンク
          if (this.flags.link && tweet.entities.urls) {
            result = result || tweet.entities.urls.length > 0;
          }

          // ハッシュタグ
          if (this.flags.hashtag && tweet.entities.hashtags) {
            result = result || tweet.entities.hashtags.length > 0;
          }

          return result;
        });
      }
      return filtered;
    },
    updateBeforeFilter() {
      document
        .querySelectorAll("twitter-widget, section[data-tweet-id] blockquote.twitter-tweet.twitter-tweet-error")
        .forEach(e => e.remove());
      this.removeTwitterWidgetScript();
    },
    updateAfterFilter() {
      this.pages.max = Math.ceil(this.tweets.filtered.length / this.pages.per);
      this.updatePageNumber();
      history.pushState(null, null, "/tweet-js-loader/");
      this.filteringTimer = 0;
    },
    sort() {
      this.updateBeforeFilter();
      switch(this.selected) {
        case SortValues.DATE_DESC:
          this.tweets.filtered = this.tweets.filtered.sort((a, b) => {
            return moment(a.created_at).tz("Asia/Tokyo").unix() < moment(b.created_at).tz("Asia/Tokyo").unix() ? 1 : -1;
          });
          break;
        case SortValues.DATE_ASC:
          this.tweets.filtered = this.tweets.filtered.sort((a, b) => {
            return moment(a.created_at).tz("Asia/Tokyo").unix() > moment(b.created_at).tz("Asia/Tokyo").unix() ? 1 : -1;
          });
          break;
        case SortValues.LIKE_DESC:
          this.tweets.filtered = this.tweets.filtered.sort((a, b) => {
            return a.favorite_count < b.favorite_count ? 1 : -1;
          });
          break;
        case SortValues.RT_DESC:
          this.tweets.filtered = this.tweets.filtered.sort((a, b) => {
            return a.retweet_count < b.retweet_count ? 1 : -1;
          });
          break;
        case SortValues.LIKE_RT_DESC:
          this.tweets.filtered = this.tweets.filtered.sort((a, b) => {
            return (a.favorite_count + a.retweet_count) < (b.favorite_count + b.retweet_count) ? 1 : -1;
          });
          break;
      }
      this.updateAfterFilter();
    }
  },
  created() {
    this.setPageNumber();
  },
  updated() {
    this.loadTwitterWidgetScript();
  },
  beforeRouteUpdate(to, from, next) {
    this.updateBeforeFilter();
    this.updatePageNumber(parseInt(to.query.page));
    next();
  },
}
</script>
