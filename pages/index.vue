<template>
  <div class="l-container">
    <CarouselPanel class="container" :carousel-options="carouselOptions" />
    <section class="container mt-12">
      <h2 class="text-center">Items</h2>
      <ItemsView :items="items" />
    </section>
  </div>
</template>

<script>
import createPath from '~/functions/createPath.js'
import itemsSample from '~/models/itemsSample.js'
import carouselData from '~/models/carouselData.js'
import CarouselPanel from '~/components/CarouselPanel.vue'
import ItemsView from '~/components/ItemsView.vue'

export default {
  name: 'IndexPage',
  components: {
    CarouselPanel,
    ItemsView,
  },
  layout: 'pageLayout',
  data: () => ({
    items: itemsSample,
    carouselOptions: {
      carouselItems: null,
      height: 300,
      interval: 8000,
      aspectRatio: 2.5,
    },
  }),
  head() {
    return {
      titleTemplate: null,
      title: 'サイト名',
    }
  },
  created() {
    this.carouselOptions.carouselItems = createPath(carouselData, '/images/')
  },
}
</script>

<style lang="scss">
.v-carousel__controls {
  bottom: 12px !important;
}
</style>
