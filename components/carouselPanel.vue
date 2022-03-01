<template>
  <div class="carouselPanel">
    <v-carousel
      v-model="model"
      cycle
      height="500"
      interval="8000"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(carouselItem, i) of carouselData" :key="i">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="carouselItem" cover aspect-ratio="2.5" alt="" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselPanel',
  props: {
    carouselData: {
      type: Array,
      default: () => {
        return ['']
      },
    },
  },
  data: () => ({
    model: 0,
  }),
}
</script>

<style lang="scss">
.v-carousel__controls {
  bottom: 12px !important;
}
</style>
