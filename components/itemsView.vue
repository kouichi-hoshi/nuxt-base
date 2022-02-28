<template>
  <div class="items-view">
    <v-card v-for="(item, i) of items" :key="i" tile flat>
      <a href="">
        <img class="items-view__img" :src="item.src" :alt="item.title" />
        <v-card-title class="px-0">
          <h3>{{ item.title }}</h3>
        </v-card-title>

        <v-card-text class="px-0">
          <p>{{ item.text }}.</p>
        </v-card-text>
      </a>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [
          {
            title: 'no item',
            text: 'no text',
            src: '',
          },
        ]
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.items-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--gridMinWidth), 1fr));
  gap: $space * 2;

  &__img {
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }
}
</style>
