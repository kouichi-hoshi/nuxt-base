<template>
  <component
    :is="tagName"
    :name="name"
    class="button-outer"
    :class="outerClass"
  >
    <template v-for="(val, key) in getMenu(menus)">
      <template v-if="val.type === 'external'">
        <a
          v-if="val.to"
          :key="key"
          class="button"
          :class="buttonClass"
          :href="val.to"
          target="_blank"
        >
          <span class="button__text">
            {{ val.title }}
          </span>
        </a>
      </template>

      <template v-if="val.type === 'internal'">
        <NuxtLink
          v-if="val.to"
          :key="key"
          class="button"
          :class="buttonClass"
          :to="val.to"
        >
          <span class="button__text">
            {{ val.title }}
          </span>
        </NuxtLink>
      </template>

      <template v-if="val.type === 'button'">
        <button
          :key="key"
          class="button"
          :class="buttonClass"
          @click="customEvent(val.id)"
        >
          <span class="button__text">
            {{ val.title }}
          </span>
        </button>
      </template>
    </template>
  </component>
</template>

<script>
import menus from '~/models/menus.js'

export default {
  name: 'CreateButtons',
  props: {
    name: {
      // コンポーネント呼び出し時に判別しやすくするための識別子 特に機能は無いので省略可
      type: String,
      default: () => {
        return ''
      },
    },
    tagName: {
      type: String,
      default: () => {
        return 'div'
      },
    },
    menuOptions: {
      // 使用したいボタンオブジェクトのidを渡す。記述した順にソートされる。例：<btnCommon :menu-option=[4, 3] />
      type: Array,
      default: () => {
        return []
      },
    },
    outerClass: {
      // .btn-outerクラスの要素に任意のclassを追加する。例：<btnCommon :outer-class="'d-md-flex md-2-column-center mx-auto'" />
      type: String,
      default: () => {
        return ''
      },
    },
    buttonClass: {
      // btnクラスの要素に任意のclassを追加する。例：<btnCommon :btn-class="'disable'" />
      type: String,
      default: () => {
        return ''
      },
    },
  },
  data() {
    return {
      menus,
    }
  },
  methods: {
    /**
     * 全メニューデータから使用するデータのみ取得する
     * @param {Array} menuOptions 使用したいメニューのid
     * @param {Object} menus 全メニューデータ
     */
    getMenu(menus) {
      const result = []
      for (const option of this.menuOptions) {
        this.menus.forEach((menu) => {
          if (option === menu.id) {
            result.push(menu)
          }
        })
      }
      return result
    },
    /**
     * カスタムイベントの呼び出しを親コンポーネントに通知する。
     */
    customEvent(id) {
      console.log('event-' + id) // eslint-disable-line no-console
      this.$emit('observeCustomEvent')
    },
  },
}
</script>

<style scooped lang="scss">
.button {
  width: fit-content;
  max-width: 15rem;
  border: 2px solid $cBlack;
  display: inline-block;
  line-height: 1.4;
  padding: 1em 4em;
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;
  // &__text {
  //   //カスタム用class
  // }
  &:hover {
    opacity: 0.4;
    text-decoration: none;
  }
  // ボタンを非活性化する場合、下記のclassを設置する。
  &.disable {
    * {
      pointer-events: none;
      opacity: 0.2;
    }
  }
}
</style>
