<template>
  <article class="blog l-container">
    <MainHeader
      class="blog-main-header container text-center my-5 my-md-6"
      title-class="blog-main-header__title mt-6"
      text-class="blog-main-header__message mb-12"
    >
      <template #header>{{ content.title }}</template>
      <template #text>{{ content.description }}</template>
    </MainHeader>
    <section class="container pa-2">
      <time>{{ $moment(content.createdAt).format('YYYY-MM-DD') }}</time>
      <nuxt-content :document="content" />
      <LinkList
        :menu-options="[6]"
        outer-class="mt-12"
        inner-class="py-2 px-8"
      />
    </section>
  </article>
</template>

<script>
import Vue from 'vue'
import LinkList from '~/components/LinkList.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LinkList,
  },
  async asyncData({ $content, params }) {
    const content = await $content(`blog/${params.slug}`).fetch()
    return {
      content,
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: this.content.title,
    }
  },
})
</script>

<style lang="scss">
.blog {
  &.container {
    max-width: 960px;
  }

  .nuxt-content {
    @include headlineMargin(
      $start: 2,
      $end: 6,
      $position: top,
      $margin: $space * 3
    );
    @include headlineMargin(
      $start: 2,
      $end: 6,
      $position: bottom,
      $margin: $space
    );
    a {
      text-decoration: underline;
    }
    ul {
      padding-left: 0;
      margin-bottom: $space;
    }
    hr {
      margin: $space * 4 0;
    }
    pre {
      display: inline-block;
      code {
        display: inline-block;
        background-color: transparent !important;
      }
    }
  }
}
</style>
