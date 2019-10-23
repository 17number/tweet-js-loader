<template lang="pug">
  .download-btn
    .field.columns.is-centered
      a(:href="contentURL" download="tweets.csv" @click="generateCSV")
        .file.is-primary
          label.file-label
            span.file-cta
              span.file-icon
                font-awesome-icon(:icon="['fas', 'file-download']")
              span.file-label
                |tweets.csv を出力
</template>

<script>
import * as CSV from 'csv-string';
import * as moment from 'moment-timezone';

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
      let contents = this.tweets.map(tweet => {
        return CSV.stringify([
          tweet.id_str,
          moment(tweet.created_at).tz("Asia/Tokyo").format("Y/MM/DD HH:mm:ss"),
          tweet.full_text
        ]);
      });
      contents = [["tweet_id", "timestamp", "text"]].concat(contents);
      const blob = new Blob([bom, contents.join("\n")], {type: "text/csv"});
      this.contentURL = window.URL.createObjectURL(blob);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.download-btn {
  margin-bottom: 20px;
}
</style>
