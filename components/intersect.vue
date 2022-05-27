<template>
  <component
    :is="outerTagName"
    v-intersect.once="{
      handler: onIntersect,
      options: {
        threshold: [0.2],
      },
    }"
    class="intersect"
    :class="outerClass"
  >
    <component
      :is="innerTagName"
      class="mask mask-1"
      :class="[innerClass, isIntersecting ? 'show' : '']"
    >
      <slot></slot>
    </component>
  </component>
</template>

<script>
export default {
  name: 'IntersectDirective',
  props: {
    outerTagName: {
      type: String,
      default: () => {
        return 'div'
      },
    },
    innerTagName: {
      type: String,
      default: () => {
        return 'div'
      },
    },
    outerClass: {
      type: String,
      default: () => {
        return ''
      },
    },
    innerClass: {
      type: String,
      default: () => {
        return ''
      },
    },
  },
  data: () => ({
    isIntersecting: false,
  }),
  methods: {
    onIntersect(entries, observer) {
      this.isIntersecting = entries[0].isIntersecting
    },
  },
}
</script>
