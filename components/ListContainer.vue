<template>
  <v-list class="list-container">
    <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'ItemsContainer',
  props: {
    items: {
      type: Array,
      default: () => {
        return [
          {
            icon: 'mdi-apps',
            title: 'home',
            to: '/',
          },
        ]
      },
    },
  },
}
</script>
