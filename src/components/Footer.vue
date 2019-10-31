<template lang="pug">
  footer.footer
    .container
      .columns.is-mobile.is-multiline
        section.column.is-12-mobile.is-3-tablet
          a(href="https://github.com/17number/tweet-js-loader" target="_blank" rel="noopener noreferrer")
            span.icon
              font-awesome-icon(:icon="['fab', 'github']")
            | Source code
        section.column.is-12-mobile.is-3-tablet
          a(:href="`https://twitter.com/intent/tweet?text=${shareText()}`" target="_blank" rel="noopener noreferrer")
            span.icon
              font-awesome-icon(:icon="['fab', 'twitter']")
            | Share
        section.column.is-12-mobile.is-3-tablet
          span#copy.has-text-link(@click="copyToClipboard" data-tooltip="コピーしました" :class="tooltipClass")
            span.icon
              font-awesome-icon(:icon="['far', 'copy']")
            | Copy
        section.column.is-12-mobile.is-3-tablet
          router-link(:to="`/privacy`")
            span.icon
              font-awesome-icon(:icon="['fas', 'info-circle']")
            | Privacy Policy
        section.column.is-12-mobile.is-12
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
import copy from 'copy-to-clipboard';

export default {
  name: 'Footer',
  data() {
    return {
      tooltipClass: '',
    }
  },
  methods: {
    shareInfo() {
      const title = document.title;
      const url = location.href;
      const description = [].slice.call(document.head.children).find(t => t.tagName === 'META' && t.name === 'description').content;
      return `${title}\n${url}\n${description}`;
    },
    shareText() {
      return this.shareInfo().replace(/\n/g, '%0a');
    },
    copyToClipboard() {
      copy(this.shareInfo());
      this.tooltipClass = 'tooltip is-tooltip-active';
      setTimeout(() => {
        this.tooltipClass = '';
      }, 2000);
    },
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
#copy:hover {
  cursor: pointer;
  color: #363636;
}
</style>
