<template lang="pug">
  section.tweet(:data-tweet-id="tweet.id_str")
    blockquote.twitter-tweet
      p(lang="ja" dir="ltr")
      a(:href="'https://twitter.com/i/status/' + tweet.id_str")
</template>

<script>
export default {
  name: 'Tweet',
  props: [
    'tweet'
  ],
  beforeUpdate() {
    const selector = `[data-tweet-id]:not([data-tweet-id="${this.tweet.id_str}"]), blockquote.twitter-tweet.twitter-tweet-error`;
    const toRemove = this.$el.querySelector(selector);
    if (toRemove) {
      toRemove.remove();
    }
  },
  updated() {
    const tweetEle = document.querySelector(`section[data-tweet-id="${this.tweet.id_str}"`);
    if (tweetEle.getElementsByTagName("blockquote").length === 0) {
      tweetEle.insertAdjacentHTML(
        "afterBegin",
        `
        <blockquote class="twitter-tweet">
          <p lang="ja" dir="ltr"></p>
          <a href="https://twitter.com/i/status/${this.tweet.id_str}"></a>
        </blockquote>
        `
      );
    }
  },
}
</script>

<style lang="scss"></style>
