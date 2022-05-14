<template>
  <article class="page l-container">
    <MainHeader
      class="page-main-header container text-center my-5 my-md-6"
      title-class="page-main-header__title mt-6"
      text-class="page-main-header__message mb-12"
    >
      <template #header>{{ page }}</template>
      <template #text>{{ $route.params }}</template>
    </MainHeader>
  </article>
</template>

<script>
export default {
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
