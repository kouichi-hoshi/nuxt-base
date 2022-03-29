<template>
  <article class="blog blogIndex container">
    <header class="mt-6">
      <HeaderTitle>blog/index</HeaderTitle>
    </header>
    <section>
      <h3 class="text-h3">blog list</h3>
      <ul class="mt-6">
        <li v-for="(val, key) in list" :key="key" class="mt-2">
          <a :href="val.path">
            {{ val.title }}
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import Vue from 'vue'
import HeaderTitle from '~/components/HeaderTitle.vue'

export default Vue.extend({
  name: 'BlogIndex',
  components: { HeaderTitle },
  layout: 'pageLayout',
  async asyncData({ $content }) {
    const list = await $content({ deep: true }).fetch()
    return { list }
  },
})
</script>

<style lang="scss">
.blog {
  @include headlineMargin();
  .HeaderTitle {
    @include HeaderTitle();
  }
}
</style>
