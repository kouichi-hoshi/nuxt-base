<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app disable-resize-watcher>
      <div class="drawer-inner d-flex justify-end">
        <HamburgerButton
          btn-id="btn06"
          :check-hamburger="checkDrawer"
          @observeHamburger="changeDrawer"
        />
      </div>
      <LinkListDrawer :links="links" tag-name="nav" />
    </v-navigation-drawer>
    <v-app-bar flat :height="52">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/">
        <SiteLogo :logo-options="logoOptions" />
      </nuxt-link>
      <v-spacer />
      <LinkList
        :menu-id="LinkListOptions.menuId"
        :outer-class="LinkListOptions.outerClass"
        :inner-class="LinkListOptions.innerClass"
      />
    </v-app-bar>
    <v-main>
      <div
        v-intersect="{
          handler: onIntersect,
          options: {
            rootMargin: '300px',
          },
        }"
      />
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <div
      class="btn-trigger-outer"
      :class="isIntersecting ? 'beforeScroll' : 'afterScroll'"
    >
      <HamburgerButton
        btn-id="btn06"
        :check-hamburger="checkDrawer"
        @observeHamburger="changeDrawer"
      />
    </div>
  </v-app>
</template>

<script>
import links from '~/models/links.js'
import SiteLogo from '~/components/SiteLogo.vue'
import LinkListDrawer from '~/components/LinkListDrawer.vue'
import LinkList from '~/components/LinkList.vue'
import HamburgerButton from '~/components/HamburgerButton.vue'

export default {
  name: 'DefaultLayout',
  components: {
    SiteLogo,
    LinkListDrawer,
    LinkList,
    HamburgerButton,
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      isIntersecting: true,
      links,
      LinkListOptions: {
        menuId: [1, 2, 7],
        outerClass: 'd-flex pa-0',
        innerClass: 'ml-4',
      },
      logoOptions: {
        logoStyle: 'text',
        logoText: this.$config.siteTitle,
        logoImage: '/images/breakslow-UMUCQcDdLws-unsplash.jpg',
        tag: 'h1',
        class: '',
      },
    }
  },
  computed: {
    checkDrawer() {
      return this.drawer
    },
  },
  methods: {
    changeDrawer() {
      if (this.drawer === true) {
        this.drawer = false
      } else {
        this.drawer = true
      }
    },
    onIntersect(entries, observer) {
      this.isIntersecting = entries[0].isIntersecting
    },
  },
  // watch: {
  //   drawer(value) {
  //     console.log(value)// eslint-disable-line no-console
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.drawer-inner {
  background: rgba(0, 0, 0, 0.7);
  > * {
    background: transparent;
  }
}
.btn-trigger-outer {
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.5s linear;
  &.beforeScroll {
    opacity: 0;
  }
  &.afterScroll {
    opacity: 1;
  }
}
</style>
