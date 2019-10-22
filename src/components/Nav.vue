<template lang="pug">
  nav.pagination.is-centered(role="navigation" aria-label="pagination")
    ul.pagination-list
      li
        router-link.pagination-link(:to="`/?page=1`")
          |Top(1)
      li
        router-link.pagination-link(:to="`/?page=${pages.prev}`")
          |{{ pages.prev }}page
      li
        .pagination-link.is-current
          |{{ pages.current }}page
      li
        router-link.pagination-link(:to="`/?page=${pages.next}`")
          |{{ pages.next }}page
      li
        router-link.pagination-link(:to="`/?page=${pages.max}`")
          |Last({{ pages.max }})
</template>

<script>
export default {
  name: 'Nav',
  props: [
    'pages',
  ],
}
</script>
