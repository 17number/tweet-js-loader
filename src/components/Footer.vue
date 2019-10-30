<template lang="pug">
  footer.footer
    .container
      .columns.is-mobile.is-multiline
        .column.is-12-mobile.is-3-tablet
          | {{ version }}
        .column.is-12-mobile.is-3-tablet
          a(href="https://github.com/17number/tweet-js-loader" target="_blank" rel="noopener noreferrer")
            span.icon
              font-awesome-icon(:icon="['fab', 'github']")
            | Source code
        .column.is-12-mobile.is-3-tablet
          a(:href="`https://twitter.com/intent/tweet?text=${shareText()}`" target="_blank" rel="noopener noreferrer")
            span.icon
              font-awesome-icon(:icon="['fab', 'twitter']")
            | Share
        .column.is-12-mobile.is-3-tablet
          router-link(:to="`/privacy`")
            span.icon
              font-awesome-icon(:icon="['fas', 'info-circle']")
            | Privacy Policy
        .column.is-12-mobile.is-12
          p.powered
            span
              |Powered by
            a(href="https://pages.github.com" target="_blank" rel="noopener noreferrer")
              |GitHub pages
            span
              | +
            a(href="https://vuejs.org/index.html" target="_blank" rel="noopener noreferrer")
              |Vue.js
            span
              | +
            a(href="https://router.vuejs.org" target="_blank" rel="noopener noreferrer")
              |Vue Router
            span
              | +
            a(href="https://cli.vuejs.org" target="_blank" rel="noopener noreferrer")
              |Vue CLI
            span
              | +
            a(href="https://bulma.io" target="_blank" rel="noopener noreferrer")
              |Bulma
</template>

<script>
export default {
  name: 'Footer',
  props: [
    'version',
  ],
  methods: {
    shareText() {
      const title = document.title;
      const url = location.href;
      const description = [].slice.call(document.head.children).find(t => t.tagName === 'META' && t.name === 'description').content;
      return `${title}%0a${url}%0a${description}`;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer.footer {
  margin-top: 50px;
}
p.powered {
  span:first-child {
    margin-right: 0 5px;
  }
  span:nth-child(n+1) {
    margin: 0 5px;
  }
}
</style>
