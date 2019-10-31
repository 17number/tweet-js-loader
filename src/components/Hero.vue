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
</template>

<script>
export default {
  name: 'Hero',
  props: [
    'version',
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  margin-bottom: 10px;
}
</style>
