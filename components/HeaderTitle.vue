<template>
  <component :is="tagName" class="HeaderTitle" :class="titleClass">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'h2'
      },
    },
    titleClass: {
      type: String,
      default: () => {
        return ''
      },
    },
  },
}
</script>

<style lang="scss">
.HeaderTitle {
  @include HeaderTitle();
}
</style>
