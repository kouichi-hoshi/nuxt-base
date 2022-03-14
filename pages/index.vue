<template>
  <div class="l-container">
    <CarouselPanel :carousel-options="carouselOptions" />
    <section class="mb-12 px-md-6">
      <Headline classes-outer="py-12 text-h2 text-center">Items</Headline>
      <ItemsView
        :items="itemsOptions.items"
        :item-image-aspect-ratio="itemsOptions.itemImageAspectRatio"
        :items-container="itemsOptions.itemsContainer"
        :item-name-tag="itemsOptions.itemNameTag"
        :item-text-tag="itemsOptions.itemTextTag"
      />
    </section>
    <section class="mb-12 px-md-6">
      <Headline tag-name="h3" classes-outer="py-12 text-h2 text-center" classes-headline="text-h3">Items2</Headline>
      <ItemsView
        :items="itemsOptions.items"
        :item-image-aspect-ratio="'ar16x8'"
        :items-container="'lg'"
        :item-name-tag="'h2'"
        :item-text-tag="'p'"
      />
    </section>
    <section class="mb-12 px-md-6">
      <Headline tag-name="h4" classes-outer="py-12 text-h2 text-center" classes-headline="text-h1">Items2</Headline>
      <ItemsView
        :items="itemsOptions.items"
        :item-image-aspect-ratio="'ar1x1'"
        :items-container="'md'"
        :item-name-tag="'h2'"
        :item-text-tag="'p'"
      />
    </section>
  </div>
</template>

<script>
import createPath from '~/functions/createPath.js'
import items from '~/models/itemsSample.js'
import carouselData from '~/models/carouselData.js'
import CarouselPanel from '~/components/CarouselPanel.vue'
import Headline from '~/components/Headline.vue'
import ItemsView from '~/components/ItemsView.vue'

export default {
  name: 'IndexPage',
  components: {
    CarouselPanel,
    Headline,
    ItemsView,
  },
  layout: 'pageLayout',
  data: () => ({
    itemsOptions: {
      items,
      itemsContainer: 'xl',
      itemNameTag: 'h3',
      itemTextTag: 'p',
      itemImageAspectRatio: 'ar3x2',
    },
    carouselOptions: {
      carouselItems: null,
      height: 640,
      interval: 8000,
      aspectRatio: 16 / 8,
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
