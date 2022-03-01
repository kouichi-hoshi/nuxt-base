<template>
  <h1 class="v-toolbar__title py-0 flex-center">
    <template v-if="logoOptions.logoStyle === 'text'">
      {{ logoOptions.logoText }}
    </template>
    <template v-if="logoOptions.logoStyle === 'image'">
      <v-img :src="logoOptions.logoImage" :alt="logoOptions.logoText" />
    </template>
  </h1>
</template>

<script>
/**
 *
 *
 */
export default {
  props: {
    logoOptions: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
