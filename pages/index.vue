<template>
  <div class="l-container">
    <CarouselPanel :colors="colors" />
    <section class="container mt-12">
      <h2 class="text-center">Items</h2>
      <ItemsView :items="items" />
    </section>
  </div>
</template>

<script>
import CarouselPanel from '~/components/CarouselPanel.vue'
import ItemsView from '~/components/ItemsView.vue'
import itemsSample from '~/models/itemsSample.js'

export default {
  name: 'IndexPage',
  components: {
    CarouselPanel,
    ItemsView,
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
