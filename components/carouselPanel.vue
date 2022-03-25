<template>
  <div v-resize="onResize" class="carouselPanel" :class="classesOuter">
    <v-carousel
      v-model="model"
      cycle
      :height="height"
      :interval="carouselOptions.interval"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(carouselItem, i) of carouselOptions.carouselItems"
        :key="i"
      >
        <v-sheet tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-img
              :src="carouselItem"
              :aspect-ratio="carouselOptions.aspectRatio"
              cover
              alt=""
            />
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
    carouselOptions: {
      /**
       * carouselOptionsに格納するプロパティ
       * @param {Array} carouselItem 画像URL
       * @param {Number} height カルーセルパネルの高さ（ピクセル）
       * @param {Number} interval カルーセルパネルがスライドした後の待機時間（ミリ秒）
       * //TODO: パラメータを追加する  alt要素の値 class テキスト リンク  など
       */
      type: Object,
      default: () => {
        return {}
      },
    },
    classesOuter: {
      type: String,
      default: () => {
        return ''
      },
    },
  },
  data: () => ({
    model: 0,
    windowSize: {
      x: 0,
      y: 0,
    },
    height: null,
  }),
  mounted () {
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      this.height = this.windowSize.x / 2
    },
  }
}
</script>
