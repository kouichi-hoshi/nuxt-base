<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app disable-resize-watcher>
      <LinkListDrawer :links="links" />
    </v-navigation-drawer>

    <v-app-bar flat :height="52" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <SiteLogo :logo-options="logoOptions" />
      <v-spacer />
      <LinkList
        :menu-id="LinkListOptions.menuId"
        :outer-class="LinkListOptions.outerClass"
        :inner-class="LinkListOptions.innerClass"
      />
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import links from '~/models/links.js'
import SiteLogo from '~/components/SiteLogo.vue'
import LinkListDrawer from '~/components/LinkListDrawer.vue'
import LinkList from '~/components/LinkList.vue'

export default {
  name: 'PageLayout',
  components: {
    SiteLogo,
    LinkListDrawer,
    LinkList,
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      links,
      LinkListOptions: {
        menuId: [1, 2, 7],
        outerClass: 'd-flex pa-0',
        innerClass: 'ml-4',
      },
      logoOptions: {
        logoStyle: 'text',
        logoText: 'Nuxt-Base',
        logoImage: '/images/breakslow-UMUCQcDdLws-unsplash.jpg',
        tag: 'h1',
        class: '',
      },
    }
  },
}
</script>
