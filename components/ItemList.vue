<template>
  <div
    v-if="items"
    class="item-list mx-auto"
    :class="[
      itemsContainer,
      itemsGap,
      classesOuter,
      { 'width-constant': widthConstant },
    ]"
  >
    <template v-if="galleryMode">
      <!-- Gallery mode -->
      <div v-for="(item, i) of items" :key="i" class="item-list__shingle">
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
          <div class="item-list__container">
            <figure class="item-list__img">
              <v-img
                :aspect-ratio="4 / 3"
                :src="item.src"
                @click="closeDialog(i)"
              />
              <figcaption
                v-if="item.title"
                class="item-list__title pa-2 text-center body-1"
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
    </template>

    <template v-else>
      <!-- Normal mode -->
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
    </template>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    // trueを受け取ると、ギャラリーモードを有効化する（サムネイル画像を表示し、クリック／タップイベント発生時にモーダルウィンドウを開く）
    galleryMode: {
      type: Boolean,
      default: () => {
        return false
      },
    },
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
  display: grid;
  grid-template-columns: repeat(auto-fit, 100%);
  @include mq-sm {
    grid-template-columns: repeat(auto-fit, minmax(35%, 1fr)); //2列
  }
  @include mq-md {
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); //3列
  }
  @include mq-xl {
    grid-template-columns: repeat(
      auto-fit,
      minmax(22%, 1fr)
    ); //4列 TODO: カラム幅 検討
  }
  &.width-constant {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); //2列
    @include mq-sm {
      grid-template-columns: repeat(auto-fit, minmax(25%, 1fr)); //4列
    }
    @include mq-lg {
      grid-template-columns: repeat(auto-fit, minmax(10%, 1fr)); //10列
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
  &__container {
    position: relative;
    .close-btn {
      position: absolute;
      top: $space;
      right: $space;
      width: auto;
    }
  }
  &__shingle {
    line-height: 0;
    cursor: pointer;
  }
  &__img {
    object-fit: cover;
  }
  &__title {
    background: rgba($cWhite, 0.75);
  }
}
</style>
