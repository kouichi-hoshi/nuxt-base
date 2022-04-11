<template>
  <div class="l-container">
    <CarouselPanel :carousel-options="carouselOptions" class-outer="mb-12" />

    <section class="mb-12">
      <Headline class-headline="container py-12 text-h2 text-center">
        Items
      </Headline>
      <ItemsList :items="itemsOptions.items" item-image-aspect-ratio="ar16x9" />
      <div class="mt-6 d-md-flex justify-center">
        <LinkList
          tag-name="p"
          :menu-id="[1]"
          :outer-class="'text-center'"
          :inner-class="'button mx-1 mt-2 min-width-220px'"
        >
          HOME
        </LinkList>
        <LinkList
          tag-name="p"
          :menu-id="[2]"
          :outer-class="'text-center'"
          :inner-class="'button mx-1 mt-2 min-width-220px'"
        >
          PAGE1
        </LinkList>
        <LinkList
          tag-name="p"
          :menu-id="[3]"
          :outer-class="'text-center'"
          :inner-class="'button mx-1 mt-2 min-width-220px'"
        >
          PAGE2
        </LinkList>
      </div>
      <LinkList
        :menu-id="[1, 2, 3]"
        :outer-class="'mt-6 text-center'"
        :inner-class="'button mx-1 mt-2 min-width-220px'"
      />
    </section>

    <section class="mb-12">
      <Headline
        tag-name="h3"
        class-headline="container py-12 text-center text-h3"
      >
        Items2
      </Headline>
      <ItemsList
        :items="itemsOptions.items"
        items-gap="gap-shingle"
        item-image-aspect-ratio="ar4x3"
        items-container="lg"
      />
    </section>

    <section class="mb-12">
      <Headline tag-name="h4" class-headline="py-12 text-center text-h4">
        Items3
      </Headline>
      <ItemsList
        :items="itemsOptions.items"
        items-gap="gap-triple"
        item-image-aspect-ratio="ar3x2"
        items-container="lg"
        item-title-tag="h3"
        item-text-tag="div"
      />
    </section>

    <section class="mb-12">
      <Headline
        tag-name="h4"
        class-outer="py-12 text-center"
        class-headline="text-h4"
      >
        Items Square
      </Headline>
      <ItemsList
        :items="itemsOptions.itemsSquare"
        class-outer="start-two-column mx-auto"
        items-gap="gap-double"
        item-image-aspect-ratio="ar1x1"
        items-container="md"
        item-text-tag="div"
      />
    </section>

    <section class="mb-12">
      <Headline
        tag-name="h4"
        class-headline="container py-12 text-center text-h4"
      >
        MediaGallery
      </Headline>
      <ItemsList
        gallery-mode
        :items="itemsOptions.itemsSquare"
        class-outer="mx-auto"
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
import ItemsList from '~/components/ItemList.vue'
import LinkList from '~/components/LinkList.vue'

export default {
  name: 'IndexPage',
  components: {
    CarouselPanel,
    Headline,
    ItemsList,
    LinkList,
  },
  layout: 'pageLayout',
  data: () => ({
    itemsOptions: {
      items,
      itemsSquare,
    },
    carouselOptions: {
      carouselItems: null,
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
.min-width-220px {
  min-width: 220px;
}
</style>
