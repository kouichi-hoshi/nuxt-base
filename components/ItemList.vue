<template>
  <div
    v-if="items"
    class="item-list"
    :class="[classOuter, { 'layout-default': layoutDefault }]"
  >
    <v-card
      v-for="(item, i) of items"
      :key="i"
      tile
      flat
      class="item-list__inner"
    >
      <a :href="item.href" :class="{ 'pointer-events-none': !item.href }">
        <img
          v-if="item.fileName"
          :src="item.fileName"
          :alt="item.title"
          class="item-list__img"
          :style="'aspect-ratio:' + aspectRatio"
        />
        <v-card-title
          v-if="item.title"
          :tag="itemTitleTag"
          :class="{ 'pointer-events-none': !item.href }"
        >
          {{ item.title }}
        </v-card-title>
      </a>
      <v-card-text v-if="item.text" :tag="itemTextTag" class="mt-n8">
        {{ item.text }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: {
      /* 商品や投稿などのデータを配列で受け取る */
      /**
       * @param {Array} items メディアの情報
       * @param {Object} items.title メディアのタイトル
       * @param {Object} items.src サムネイル画像URL
       */
      type: Array,
      default: () => {
        return []
      },
    },
    // falseを指定するとデフォルトのレイアウトを解除する
    layoutDefault: {
      type: Boolean,
      default: () => {
        return true
      },
    },
    // 最も外側の要素にclassを追加できる
    classOuter: {
      type: String,
      default: () => {
        return ''
      },
    },
    // タイトルをラップするhtmlタグを設定する
    itemTitleTag: {
      type: String,
      default: () => {
        return 'h2'
      },
    },
    // テキストをラップするhtmlタグを設定する
    itemTextTag: {
      type: String,
      default: () => {
        return 'p'
      },
    },
    // サムネイル画像のアスペクトレシオを設定する
    aspectRatio: {
      type: String,
      default: () => {
        return 'aspect-ratio: 4/3;'
      },
    },
  },
  data() {
    return {
      dialog: [],
    }
  },
  created() {
    // 個々のdialogに対してflagを設定する
    for (const i in this.items) {
      this.dialog[i] = false
    }
  },
  methods: {
    closeDialog(i) {
      this.dialog.splice(i, 1, false)
    },
  },
}
</script>

<style lang="scss" scoped>
.item-list {
  &__img {
    object-fit: cover;
  }
}

.layout-default {
  display: grid;
  grid-template-columns: repeat(auto-fill, max(320px));
  justify-content: center;
  @include mq-sm {
    grid-template-columns: repeat(auto-fill, minMax(320px, 380px));
    gap: var(--gap24);
  }
}
</style>
