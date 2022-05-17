<template>
  <article class="home l-container">
    <MainHeader
      class="main-header container text-center my-5 my-md-6"
      title-class="main-header__title mt-6"
      text-class="main-header__message mb-12"
    >
      <template #header>{{ $config.siteTitle }}</template>
      <template #text>Nuxt.js template</template>
    </MainHeader>

    <CarouselPanel :carousel-options="carouselOptions" class-outer="mb-12" />

    <section class="mb-12">
      <Headline class-headline="container py-12 text-h2 text-center">
        Items
      </Headline>
      <ItemsList :items="itemsOptions.items" aspect-ratio="3/2;" />
      <div class="mt-6 d-md-flex justify-center">
        <LinkList
          tag-name="p"
          :menu-id="[1]"
          outer-class="text-center"
          inner-class="button mx-1 mt-2"
        >
          HOME
        </LinkList>
        <LinkList
          tag-name="p"
          :menu-id="[2]"
          outer-class="text-center"
          inner-class="button mx-1 mt-2"
        >
          PAGE1
        </LinkList>
      </div>
    </section>
  </article>
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
      title: process.env.SITE_TITLE,
    }
  },
  created() {
    this.carouselOptions.carouselItems = createPath(carouselData, '/images/')
  },
}
</script>

<style lang="scss" scoped>
.v-carousel__controls {
  bottom: 12px !important;
}
</style>
