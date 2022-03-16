<template>
  <div class="l-container">
    <CarouselPanel :carousel-options="carouselOptions" classes-outer="mb-12" />

    <section class="mb-12">
      <Headline classes-outer="py-12 text-h2 text-center">Items</Headline>
      <ItemsView :items="itemsOptions.items" />
    </section>

    <section class="mb-12">
      <Headline
        tag-name="h3"
        classes-outer="py-12 text-center"
        classes-headline="text-h3"
      >
        Items2
      </Headline>
      <ItemsView
        :items="itemsOptions.items"
        items-gap="gap-shingle"
        item-image-aspect-ratio="ar1x1"
        items-container="lg"
      />
    </section>

    <section class="mb-12">
      <Headline
        tag-name="h4"
        classes-outer="py-12 text-center"
        classes-headline="text-h4"
      >
        Items3
      </Headline>
      <ItemsView
        :items="itemsOptions.items"
        items-gap="gap-triple"
        item-image-aspect-ratio="ar16x9"
        items-container="lg"
        item-title-tag="h3"
        item-text-tag="div"
      />
    </section>

    <section class="mb-12">
      <Headline
        tag-name="h4"
        classes-outer="py-12 text-center"
        classes-headline="text-h4"
      >
        Items Square
      </Headline>
      <ItemsView
        :items="itemsOptions.itemsSquare"
        classes-outer="start-two-column mx-auto"
        items-gap="gap-double"
        item-image-aspect-ratio="ar1x1"
        items-container="md"
        item-text-tag="div"
      />
    </section>

    <section class="mb-12">
      <Headline
        tag-name="h4"
        classes-outer="py-12 text-center"
        classes-headline="text-h4"
      >
        MediaGallery
      </Headline>
      <MediaGallery
        :items="itemsOptions.itemsSquare"
        classes-outer="mx-auto"
        items-gap="gap-normal"
        item-image-aspect-ratio="ar1x1"
        width-constant
      />
    </section>
  </div>
</template>

<script>
import createPath from '~/functions/createPath.js'
import items from '~/models/itemsSample.js'
import itemsSquare from '~/models/itemsSquare.js'
import carouselData from '~/models/carouselData.js'
import CarouselPanel from '~/components/CarouselPanel.vue'
import Headline from '~/components/Headline.vue'
import ItemsView from '~/components/ItemsView.vue'
import MediaGallery from '~/components/MediaGallery.vue'

export default {
  name: 'IndexPage',
  components: {
    CarouselPanel,
    Headline,
    ItemsView,
    MediaGallery,
  },
  layout: 'pageLayout',
  data: () => ({
    itemsOptions: {
      items,
      itemsSquare,
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
