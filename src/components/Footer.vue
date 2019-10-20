<template lang="pug">
  footer.footer
    .content.has-text-centered
      p {{ version }}
      p
        a(href="https://github.com/17number/tweet-js-loader" target="_blank" rel="noopener noreferrer")
          span.icon
            font-awesome-icon(:icon="['fab', 'github']")
          | Source code
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
  ]
}
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
