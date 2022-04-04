<template>
  <article class="blog container">
    <header class="mt-6">
      <HeaderTitle>{{ content.title }}</HeaderTitle>
      <p>{{ content.description }}</p>
    </header>
    <section class="mt-6">
      <nuxt-content :document="content" />
      <LinkList
        :menu-options="[6]"
        :outer-class="'mt-12'"
        :inner-class="'py-2 px-8'"
      />
    </section>
  </article>
</template>

<script>
import Vue from 'vue'
import LinkList from '~/components/LinkList.vue'
import HeaderTitle from '~/components/HeaderTitle.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LinkList,
    HeaderTitle,
  },
  layout: 'pageLayout',
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
  @include headlineMargin();
  .HeaderTitle {
    @include HeaderTitle();
  }
  pre {
    display: inline-block;
    code {
      display: inline-block;
      background-color: transparent !important;
    }
  }
}
</style>
