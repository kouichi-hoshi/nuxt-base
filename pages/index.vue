<template>
  <div class="l-container">
    <carouselPanel :colors="colors" />
    <section class="container mt-12">
      <h2 class="text-center">Items</h2>
      <itemsView :items="items" />
    </section>
  </div>
</template>

<script>
import carouselPanel from '~/components/carouselPanel.vue'
import itemsView from '~/components/itemsView.vue'
import itemsSample from '~/models/itemsSample.js'

export default {
  name: 'IndexPage',
  components: {
    carouselPanel,
    itemsView,
  },
  layout: 'pageLayout',
  data: () => ({
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
    items: itemsSample,
  }),
  head() {
    return {
      titleTemplate: null,
      title: 'サイト名',
    }
  },
}
</script>

<style lang="scss">
.v-carousel__controls {
  bottom: 12px !important;
}
</style>
