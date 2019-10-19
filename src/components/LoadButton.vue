<template lang="pug">
  .load-btn
    .field.columns.is-centered
      .file.is-info
        label.file-label
          input.file-input(type="file" name="tweetjs" @change="onFileChange")
          span.file-cta
            span.file-icon
              font-awesome-icon(:icon="['fas', 'file-upload']")
            span.file-label
              |tweet.js を読み込む
    .has-text-danger.columns.is-centered {{ errorMsg }}
</template>

<script>
export default {
  name: 'LoadButton',
  data() {
    return {
      errorMsg: "",
    };
  },
  methods: {
    onFileChange(e) {
      const files = (e.target.files || e.dataTransfer.files);
      if (!files || files.length === 0) {
        this.errorMsg = "ファイルを読み込めませんでした";
        return;
      }
      if (files[0].name !== "tweet.js") {
        this.errorMsg = "tweet.js を指定してください";
        return;
      }
      this.errorMsg = "";
      this.$emit('file-select', files[0]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
