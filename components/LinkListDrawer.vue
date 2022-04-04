<template>
  <v-list class="list-container">
    <v-list-item
      v-for="(menu, i) in menus"
      :key="i"
      :to="menu.path"
      router
      exact
    >
      <v-list-item-action>
        <v-icon>{{ menu.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="menu.label" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import isInternalLink from '~/functions/isInternalLink.js'
import links from '~/models/links.js'

export default {
  name: 'LinkListDrawer',
  data() {
    return {
      links,
      isInternalLink,
      menus: [],
    }
  },
  created() {
    const result = {}
    this.links.forEach((link, key) => {
      if (isInternalLink(link.path)) {
        result[key] = link
      }
    })
    this.menus = result
  },
}
</script>

<style lang="scss">
a:hover {
  text-decoration: none;
}
</style>
