<template lang="pug">
  section.hero
    router-link(:to="`/`")
      section.hero.is-primary.is-bold
        .hero-body
          .container
            h1.title.is-size-4
              |tweet.js loader
            h2.subtitle.is-size-5
              |{{ version }}
            span.is-size-7.has-text-weight-medium
              |{{ ` (Updated at ${lastUpdatedAt})` }}
</template>

<script>
export default {
  name: 'Hero',
  props: [
    'version',
    'lastUpdatedAt',
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  margin-bottom: 10px;
}
h2.subtitle {
  margin-bottom: 0;
}
</style>
