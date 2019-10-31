<template lang="pug">
  section#privacy-policy.section
    .container
      header
        h2.title.is-5
          |プライバシーポリシー
        h3.title.is-6
          |Googleアナリティクスの利用について
      .content
        .columns.is-mobile
          .column.is-12-mobile.is-offset-2-tablet.is-8-tablet.is-offset-3-desktop.is-6-desktop.has-text-left
            p
              |当サイトでは、Googleによるアクセス解析ツール「
              a(href="https://marketingplatform.google.com/intl/ja/about/analytics/" target="_blank" rel="noopener noreferrer")
                | Googleアナリティクス
              |」を利用しています。
            p
              |Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
            p
              |このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            p
              |なお、Google社によるアクセス情報の収集方法および利用方法については、
              a(href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer")
                | Googleアナリティクス利用規約
              |および
              a(href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer")
                | Google社のプライバシーポリシー
              |によって定められています。
            p
              |この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
    router-link(:to="`/`" id="back" class="button is-link")
      span.icon
        font-awesome-icon(:icon="['fas', 'home']")
      span メインページに戻る

</template>

<script>
export default {
  name: 'PrivacyPolicy',
};
</script>

<style lang="scss">
#privacy-policy {
  header {
    margin-bottom: 20px;
  }
  #back {
    margin-top: 20px;
  }
}
</style>
