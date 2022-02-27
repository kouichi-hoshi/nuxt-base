<template>
  <div class="l-container">
    <carouselPanel :colors="colors"/>
  </div>
</template>

<script>
import carouselPanel from '~/components/carouselPanel.vue'

export default {
  name: 'IndexPage',
  components: {
    carouselPanel
  },
  layout: 'pageLayout',
  data: () => ({
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
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
