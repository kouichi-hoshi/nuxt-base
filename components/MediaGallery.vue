<template>
  <div
    v-if="items"
    class="media-gallery mx-auto"
    :class="[
      itemsContainer,
      itemsGap,
      classesOuter,
      { 'width-constant': widthConstant },
    ]"
  >
    <div v-for="(item, i) of items" :key="i" class="media-gallery__shingle">
      <v-dialog v-model="dialog[i]" width="800">
        <template #activator="{ on, attrs }">
          <v-img
            v-if="item.src"
            :src="item.src"
            :class="itemImageAspectRatio"
            :alt="item.title"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <div class="media-gallery__container">
          <figure class="media-gallery__img">
            <v-img
              :aspect-ratio="4 / 3"
              :src="item.src"
              @click="closeDialog(i)"
            />
            <figcaption
              v-if="item.title"
              class="media-gallery__title pa-2 text-center body-1"
            >
              {{ item.title }}
            </figcaption>
          </figure>
          <v-icon
            right
            large
            class="close-btn"
            color="white"
            @click="closeDialog(i)"
          >
            mdi-close-thick
          </v-icon>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
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
        return 'ar3x2'
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
@import '~/assets/sass/_mixins.scss'; //TODO: styleResourcesの不具合確認

.media-gallery {
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
    cursor: pointer;
  }
  &__title {
    background: rgba($cWhite, 0.75);
  }
  &__container {
    position: relative;
    .close-btn {
      position: absolute;
      top: $space;
      right: $space;
      width: auto;
    }
  }
}
</style>
