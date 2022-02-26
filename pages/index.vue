<template>
  <div>
    <v-carousel
      v-model="model"
      cycle
      height="600"
      interval="7000"
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
  name: 'IndexPage',
  layout: 'pageLayout',
  data: () => ({
    model: 0,
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