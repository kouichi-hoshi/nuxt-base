<template>
  <div class="CarouselPanel">
    <v-carousel
      v-model="model"
      cycle
      height="600"
      interval="8000"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(color, i) of colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
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
    colors: {
      type: Array,
      default: () => {
        return [ 'gray']
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