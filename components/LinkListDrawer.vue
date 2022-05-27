<template>
  <v-list class="list-container" :tag="tagName">
    <v-list-item
      v-for="(link, i) in links"
      :key="i"
      :to="isInternalLink(link.path) ? link.path : ''"
      :href="isInternalLink(link.path) ? '' : link.path"
      :target="isInternalLink(link.path) ? '_self' : '_blank'"
    >
      <v-list-item-action>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="link.label" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import isInternalLink from '~/functions/isInternalLink.js'

export default {
  name: 'LinkListDrawer',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'div'
      },
    },
    links: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      isInternalLink,
    }
  },
}
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}
</style>
