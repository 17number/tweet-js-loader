<template lang="pug">
  section.download-btn
    .field.columns.is-centered
      a(:href="contentURL" download="tweets.csv" @click="generateCSV")
        .file.is-primary
          label.file-label
            span.file-cta
              span.file-icon
                font-awesome-icon(:icon="['fas', 'file-download']")
              span.file-label
                |tweets.csv を出力 / export tweet.csv
</template>

<script>
import * as CSV from 'csv-string';

export default {
  name: 'DownloadButton',
  props: [
    'tweets'
  ],
  data() {
    return {
      contentURL: "",
    };
  },
  methods: {
    generateCSV() {
      const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
      const header = ["tweet_id", "timestamp", "text", "likes", "retweets"];
      const data = this.tweets.map(tweet => [
        tweet.id_str,
        tweet.created_at.format("Y/MM/DD HH:mm:ss"),
        tweet.full_text,
        tweet.favorite_count,
        tweet.retweet_count,
      ]);
      data.unshift(header);
      const contents = CSV.stringify(data);
      const blob = new Blob([bom, contents], {type: "text/csv"});
      this.contentURL = window.URL.createObjectURL(blob);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.download-btn {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
