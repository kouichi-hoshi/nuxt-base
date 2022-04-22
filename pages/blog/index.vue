<template>
  <article class="blog-index l-container">
    <MainHeader
      class="blog-index-main-header container text-center my-5 my-md-6"
      title-class="blog-index-main-header__title mt-6"
      text-class="blog-index-main-header__message mb-12"
      no-text
    >
      <template #header>Blog</template>
    </MainHeader>
    <section class="text-center container">
      <h3 class="text-h3">List</h3>
      <ul class="my-12 pl-0">
        <li v-for="(val, key) in list" :key="key" class="mt-6">
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
import MainHeader from '~/components/MainHeader.vue'

export default Vue.extend({
  name: 'BlogIndex',
  components: { MainHeader },
  async asyncData({ $content }) {
    const list = await $content({ deep: true }).fetch()
    return { list }
  },
})
</script>

<style lang="scss" scoped>
.blog-index {
}
</style>
