<template>
  <div :class="classesOuter">
    <component :is="tagName" :class="classesHeadline">
      <slot>headline</slot>
    </component>
  </div>
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
    classesOuter: {
      type: String,
      default: () => {
        return 'my-12, text-h2, text-center'
      },
    },
    classesHeadline: {
      type: String,
      default: () => {
        return 'text-h2'
      },
    },
  },
}
</script>
