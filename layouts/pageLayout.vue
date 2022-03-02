<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app disable-resize-watcher>
      <ItemsContainer :items="items" />
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
import ItemsContainer from '~/components/ItemsContainer.vue'

export default {
  name: 'PageLayout',
  components: {
    LogoComp,
    ItemsContainer,
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
