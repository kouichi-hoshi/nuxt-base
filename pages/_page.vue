<template>
  <div class="container">
    <h2>{{ page }}</h2>
  </div>
</template>

<script>
export default {
  layout: 'pageLayout',
  data() {
    return {
      page: this.$route.params.page,
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: this.page,
    }
  },
}
</script>
