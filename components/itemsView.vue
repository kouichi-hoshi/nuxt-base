<template>
  <div v-if="items" class="items-view mx-auto" :class="itemsContainer">
    <v-card v-for="(item, i) of items" :key="i" tile flat>
      <a :href="item.link" :class="{ 'pointer-events-none': !item.link }">
        <img
          v-if="item.src"
          :src="item.src"
          :class="itemImageAspectRatio"
          :alt="item.title"
          class="items-view__img"
        />
        <v-card-title
          :tag="itemNameTag"
          :class="{ 'pointer-events-none': !item.link }"
        >
          {{ item.title }}
        </v-card-title>
      </a>
      <v-card-text :tag="itemTextTag" class="mt-n8">
        {{ item.text }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      /* 商品や投稿などのデータを配列で受け取る */
      /**
       * @param {Array} items コンテンツの情報
       * @param {Object} items.title コンテンツのタイトル
       * @param {Object} items.text コンテンツの説明文
       * @param {Object} items.src サムネイル画像URL
       * @param {Object} items.link リンク先URL
       */
      type: Array,
      default: () => {
        return []
      },
    },
    // コンテナのサイズを設定する（xl, lg, md)
    itemsContainer: {
      type: String,
      default: () => {
        return 'lg'
      },
    },
    // サムネイル画像のアスペクトレシオを設定する [ar16x8, ar4x3, ar3x2, ar1x1]
    itemImageAspectRatio: {
      type: String,
      default: () => {
        return 'ar3x2'
      },
    },
    // タイトルをラップするhtmlタグを設定する
    itemNameTag: {
      type: String,
      default: () => {
        return 'div'
      },
    },
    // テキストをラップするhtmlタグを設定する
    itemTextTag: {
      type: String,
      default: () => {
        return 'div'
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_mixins.scss'; //TODO: styleResourcesの不具合確認

.items-view {
  @include mq-sm {
    grid-template-columns: repeat(
      auto-fit,
      minmax(var(--gridMinWidth), 1fr)
    ); //TODO: GAPオプション化するか検討
    display: grid;
    gap: var(--gap24); //TODO: GAPオプション化するか検討
  }
  &__img {
    object-fit: cover;
  }
  &.xl {
    max-width: $screenXl;
  }
  &.lg {
    max-width: $screenLg;
  }
  &.md {
    max-width: $screenMd;
  }
  & .ar16x8 {
    aspect-ratio: 16 / 8;
  }
  & .ar4x3 {
    aspect-ratio: 4 / 3;
  }
  & .ar3x2 {
    aspect-ratio: 3 / 2;
  }
  & .ar1x1 {
    aspect-ratio: 1 / 1;
  }
}
</style>
