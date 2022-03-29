<template>
  <article class="page container">
    <header class="mt-6">
      <HeaderTitle>{{ page }}</HeaderTitle>
    </header>
  </article>
</template>

<script>
import HeaderTitle from '~/components/HeaderTitle.vue'

export default {
  components: { HeaderTitle },
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

<style lang="scss">
.page {
  @include headlineMargin();
  .HeaderTitle {
    @include HeaderTitle();
  }
}
</style>
