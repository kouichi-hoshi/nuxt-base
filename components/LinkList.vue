<template>
  <ul :class="outerClass" class="pa-0">
    <li v-for="(link, i) in getLink(menuId)" :key="i" :class="innerClass">
      <component
        :is="isInternalLink(link.path) ? 'nuxt-link' : 'a'"
        :to="isInternalLink(link.path) ? link.path : ''"
        :href="isInternalLink(link.path) ? '' : link.path"
        :target="isInternalLink(link.path) ? '_self' : '_blank'"
      >
        <slot>{{ link.label }}</slot>
      </component>
    </li>
  </ul>
</template>

<script>
import getLink from '~/functions/getLink.js'
import isInternalLink from '~/functions/isInternalLink.js'
import links from '~/models/links.js'

export default {
  name: 'LinkList',
  props: {
    menuId: {
      // 使用したいリンクのidを渡す。記述した順にソートされる。
      type: Array,
      default: () => {
        return []
      },
    },
    outerClass: {
      // アウター要素に任意のclassを追加する。
      type: String,
      default: () => {
        return ''
      },
    },
    innerClass: {
      // インナー要素に任意のclassを追加する。
      type: String,
      default: () => {
        return ''
      },
    },
  },
  data() {
    return {
      links,
      getLink,
      isInternalLink,
    }
  },
}
</script>
