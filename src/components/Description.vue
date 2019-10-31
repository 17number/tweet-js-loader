<template lang="pug">
  section.description
    .container
      p
        |以前は「全ツイート履歴」をダウンロードできたが、
        a(href="https://twitter.com/sugtao4423/status/1185464513945980928")
          |Twitter の UI 変更とともに廃止された模様。
      p
        |代わりに DL できる
        a(href="https://twitter.com/settings/your_twitter_data")
          |Twitter データ
        |内の tweet.js を読み込んで過去のツイートを表示できるようにしてみた。
      p
        |データは全てブラウザ上で処理されるだけで、サーバへの送信などは行っていない。
</template>

<script>
export default {
  name: 'Description',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.description {
  margin-bottom: 20px;
}
</style>
