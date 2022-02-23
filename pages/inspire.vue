<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import Meta from '~/assets/mixins/meta'

export default {
  name: 'InspirePage',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Test-Page!',
        description: 'ページ個別のディスクリプション',
        type: 'article',
        url: 'https://example.com/test',
        image: 'https://example.com/img/ogp/test.jpg',
      },
    }
  },
}
</script>
