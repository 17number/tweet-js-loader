<template lang="pug">
  nav.pagination.is-centered(role="navigation" aria-label="pagination")
    ul.pagination-list
      li
        router-link.pagination-link(:to="`/?page=1`")
          |Top(1)
      li
        router-link.pagination-link(:to="`/?page=${prevPage}`")
          |{{ prevPage }}page
      li
        .pagination-link.is-current
          |{{ currentPage }}page
      li
        router-link.pagination-link(:to="`/?page=${nextPage}`")
          |{{ nextPage }}page
      li
        router-link.pagination-link(:to="`/?page=${maxPage}`")
          |Last({{ maxPage }})
</template>

<script>
export default {
  name: 'Nav',
  props: [
    'prevPage',
    'currentPage',
    'nextPage',
    'maxPage',
  ],
}
</script>
