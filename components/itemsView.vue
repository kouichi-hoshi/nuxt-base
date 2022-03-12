<template>
  <div v-if="items" class="items-view" :class="itemsContainer">
    <v-card v-for="(item, i) of items" :key="i" tile flat>
      <a
        :href="item.link"
        :class="{ 'pointer-events-none': !item.link }"
      >
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
          class="px-0"
        >
          {{ item.title }}
        </v-card-title>
      </a>
      <v-card-text
        :tag="itemTextTag"
        class="px-0 mt-n8"
      >
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
       * @param {Object} items.title コンテンツののタイトル
       * @param {Object} items.text コンテンツの説明文
       * @param {Object} items.src サムネイル画像URL
       * @param {Object} items.link リンク先URL
       */
      type: Array,
      default: () => {
        return []
      },
    },
    itemsContainer:{
      /* CSSセレクタでコンテナのサイズとレイアウトを設定する（左寄せ/右寄せ/センター） */
      type: String,
      default: () => {
        return ""
      },
    },
    itemImageAspectRatio: {
      /* CSSセレクタでアスペクトレシオを設定する */
      type: String,
      default: () => {
        return "aspectRatio__3-2"
      },
    },
    itemNameTag: {
      /* タイトルをラップするhtmlタグを設定する */
      type: String,
      default: () => {
        return "div"
      },
    },
    itemTextTag: {
      /* テキストをラップするhtmlタグを設定する */
      type: String,
      default: () => {
        return "div"
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.items-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--gridMinWidth), 1fr));
  gap: $space * 2;

  &__img {
    object-fit: cover;
  }
}
</style>