<template>
  <ul :class="outerClass">
    <li v-for="(link, i) in getLink(menuId)" :key="i" :class="innerClass">
      <component
        :is="isInternalLink(link.path) ? 'nuxt-link' : 'a'"
        :to="isInternalLink(link.path) ? link.path : ''"
        :href="isInternalLink(link.path) ? '' : link.path"
        :target="isInternalLink(link.path) ? '_self' : '_blank'"
      >
        {{ link.label }}
      </component>
    </li>
  </ul>
</template>

<script>
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
    }
  },
  methods: {
    getLink(menuId) {
      /**
       * リンクIDを指定してリンクリストを作成する。
       * @param {Array} menuId 使用したいメニューのid
       * @param {Object} links 全メニューデータ
       */
      const result = []
      for (const id of menuId) {
        this.links.forEach((links) => {
          if (id === links.id) {
            result.push(links)
          }
        })
      }
      return result
    },
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    },
  },
}
</script>
