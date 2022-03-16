<template>
  <div
    v-if="items"
    class="items-view mx-auto"
    :class="[
      itemsContainer,
      itemsGap,
      classesOuter,
      { 'width-constant': widthConstant },
    ]"
  >
    <v-card
      v-for="(item, i) of items"
      :key="i"
      tile
      flat
      class="items-view__shingle"
    >
      <a :href="item.link" :class="{ 'pointer-events-none': !item.link }">
        <v-img
          v-if="item.src"
          :src="item.src"
          :class="itemImageAspectRatio"
          :alt="item.title"
          class="items-view__img"
        />
        <v-card-title
          v-if="item.title"
          :tag="itemTitleTag"
          :class="{ 'pointer-events-none': !item.link }"
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
    // コンテナのサイズを設定する（md, lg, xl, null)
    itemsContainer: {
      type: String,
      default: () => {
        return null
      },
    },
    // アイテム間のGapを設定する [gap-triple(36px), gap-double(24px), gap-shingle(12px), gap-normal(0px)]
    itemsGap: {
      type: String,
      default: () => {
        return 'gap-double'
      },
    },
    // サムネイル画像のアスペクトレシオを設定する [ar16x9, ar4x3, ar3x2, ar1x1]
    itemImageAspectRatio: {
      type: String,
      default: () => {
        return 'ar4x3'
      },
    },
    // 最も外側の要素にclassを追加できる
    classesOuter: {
      type: String,
      default: () => {
        return ''
      },
    },
    // カラム幅が160px〜200pxの範囲で固定になる
    widthConstant: {
      type: Boolean,
      default: () => {
        return false
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_mixins.scss'; //TODO: styleResourcesの不具合確認

.items-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100%);
  @include mq-md {
    grid-template-columns: repeat(auto-fit, minmax(var(--gridMinWidth), 1fr));
  }
  &.width-constant {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); //2列
    @include mq-sm {
      grid-template-columns: repeat(auto-fit, minmax(20%, 1fr)); //5列
    }
    @include mq-lg {
      grid-template-columns: repeat(auto-fit, minmax(12%, 1fr)); //8列
    }
  }
  &.gap-normal {
    gap: normal;
  }
  &.gap-shingle {
    gap: var(--gap12);
  }
  &.gap-double {
    gap: var(--gap24);
  }
  &.gap-triple {
    gap: var(--gap36);
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
  & .ar16x9 {
    aspect-ratio: 16 / 9;
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
  &__shingle {
    line-height: 0;
  }
}
</style>
