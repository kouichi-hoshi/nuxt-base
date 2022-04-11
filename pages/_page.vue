<template>
  <article class="page">
    <HeaderTitle
      outer-class="container my-12 text-center"
      title-class="text-h2"
      text-class="mt-12"
    >
      <template #header>{{ page }}</template>
      <template #text>
        {{ $route.params }}
      </template>
    </HeaderTitle>
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
