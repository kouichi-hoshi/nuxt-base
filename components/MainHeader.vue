<template>
  <component :is="outerTagName" :class="outerClass">
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
  name: 'MainHeader',
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
        return 'h1'
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

<style lang="scss" scoped>
.main-header {
  &__title {
    @include text();
  }
  &__message {
    @include text($fontSize: 1rem, $fontSizeMd: 1.4rem, $fw: 400);
  }
}

.page-main-header {
  &__title {
    @include text($fontSize: 1rem, $fontSizeMd: 4rem);
  }
  &__message {
    @include text($fontSize: 1rem, $fontSizeMd: 1.4rem, $fw: 400);
  }
}

.blog-index-main-header {
  &__title {
    @include text($fontSize: 1rem, $fontSizeMd: 4rem);
  }
  &__message {
    @include text($fontSize: 1rem, $fontSizeMd: 1.4rem, $fw: 400);
  }
}

.blog-main-header {
  &__title {
    @include text($fontSize: 1rem, $fontSizeMd: 2rem);
  }
  &__message {
    @include text($fontSize: 1rem, $fontSizeMd: 1.4rem, $fw: 400);
  }
}
</style>
