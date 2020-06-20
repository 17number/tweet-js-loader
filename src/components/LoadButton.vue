<template lang="pug">
  section.load-btn
    .field.columns.is-centered
      .file.is-info
        label.file-label
          input.file-input(type="file" name="tweetjs" @change="onFileChange" accept=".js")
          span.file-cta
            span.file-icon
              font-awesome-icon(:icon="['fas', 'file-upload']")
            span.file-label
              |tweet.js を読み込む / Load tweet.js
    .has-text-info.columns.is-centered {{ msg }}
    .has-text-danger.columns.is-centered {{ errorMsg }}
</template>

<script>
export default {
  name: 'LoadButton',
  data() {
    return {
      msg: "",
      errorMsg: "",
    };
  },
  methods: {
    async onFileChange(e) {
      const file = await this.readTweetjs(e).catch(err => console.error(err));
      this.$emit('file-select', file);
    },
    readTweetjs(e) {
      return new Promise((resolve, reject) => {
        const files = (e.target.files || e.dataTransfer.files);
        if (!files || files.length === 0) {
          this.errorMsg = "ファイルを読み込めませんでした";
          return reject(this.errorMsg);
        }
        if (files[0].name !== "tweet.js") {
          this.errorMsg = "tweet.js を指定してください";
          return reject(this.errorMsg);
        }
        const reader = new FileReader();
        reader.addEventListener("load", (e) =>{
          this.errorMsg = "";
          this.msg = "読み込み完了";
          return resolve(
            e.target.result.replace("window.YTD.tweet.part0 = ", "")
          );
        }, false);
        this.msg = "読み込み中";
        reader.readAsText(files[0]);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
