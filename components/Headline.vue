<template>
  <component :is="tagName" :class="classHeadline" class="headline">
    <slot>headline</slot>
  </component>
</template>

<script>
export default {
  name: 'HeadLine',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'h2'
      },
    },
    classHeadline: {
      type: String,
      default: () => {
        return 'text-h2'
      },
    },
  },
}
</script>
