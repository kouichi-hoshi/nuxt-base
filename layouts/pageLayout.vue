<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app disable-resize-watcher>
      <ListContainer :items="items" />
    </v-navigation-drawer>

    <v-app-bar flat :height="52" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <LogoComp :logo-options="logoOptions" />
      <v-spacer />
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
import menuItems from '~/models/menus.js'
import LogoComp from '~/components/LogoComp.vue'
import ListContainer from '~/components/ListContainer.vue'

export default {
  name: 'PageLayout',
  components: {
    LogoComp,
    ListContainer,
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      items: menuItems,
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
