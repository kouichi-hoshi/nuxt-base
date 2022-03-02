<template>
  <v-toolbar-title :tag="logoOptions.tag" :class="logoOptions.class">
    <template v-if="logoOptions.logoStyle === 'text'">
      {{ logoOptions.logoText }}
    </template>
    <template v-if="logoOptions.logoStyle === 'image'">
      <v-img :src="logoOptions.logoImage" :alt="logoOptions.logoText" />
    </template>
  </v-toolbar-title>
</template>

<script>
export default {
  props: {
    logoOptions: {
      /**
       * logoOptionsに格納するプロパティ
       * @param {string} logoStyle  'text'または'image'を指定する  'text'→ロゴを文字列で表示 / 'image'→ロゴを画像で表示
       * @param {string} logoText  サイトの名称などを文字入力する  logoStyleでtextを指定している場合はサイトのロゴテキストとして表示する / logoStyleでimageを指定している場合はalt要素の値になる
       * @param {string} logoImage  サイトのロゴ画像のURLを入力する（logoStyleでimageを指定する）
       * @param {string} tag  入力したタグでwrapされる
       * @param {string} class  入力した任意のclassが適用される
       */
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
