<template>
  <component :is="outerTagName" :class="outerClass" class="header-title">
    <component :is="titleTagName" :class="titleClass">
      <slot name="header" />
    </component>
    <component :is="textTagName" v-if="!noText" :class="textClass">
      <slot name="text" />
    </component>
  </component>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    outerTagName: {
      type: String,
      default: () => {
        return 'header'
      },
    },
    titleTagName: {
      type: String,
      default: () => {
        return 'h2'
      },
    },
    textTagName: {
      type: String,
      default: () => {
        return 'p'
      },
    },
    noText: {
      // このプロパティをtrueで受け取ると文字列を出力しない
      type: Boolean,
      default: () => {
        return false
      },
    },
    outerClass: {
      type: String,
      default: () => {
        return ''
      },
    },
    titleClass: {
      type: String,
      default: () => {
        return ''
      },
    },
    textClass: {
      type: String,
      default: () => {
        return ''
      },
    },
    // data: () => ({
    //   text,
    // }),
    // created(){
    //   console.log(text)// eslint-disable-line no-console
    // }
  },
}
</script>

<style lang="scss">
.HeaderTitle {
  @include HeaderTitle();
}
</style>
