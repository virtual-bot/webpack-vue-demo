<template>
  <div id="root">
    <header-component
      :title="'Vue 示例'"
    ></header-component>
    <main-component></main-component>
  </div>
</template>

<script>
import Vue from 'vue';
import MainComponent from './page/demo/main.vue'
import HeaderComponent from './page/demo/header.vue'

console.log('global:', global);
console.log('Vue.Native:', Vue.Native);

let DEBUG_SUBTITLE = '';
if (Vue.Native) {
  DEBUG_SUBTITLE = '本地调试';
}

export default {
  components: {
    HeaderComponent,
    MainComponent,
  },
  name: 'App',
  watch: {
    $route(to) {
      if (to.name === undefined) {
        this.subtitle = DEBUG_SUBTITLE;
        return;
      }
      this.subtitle = to.name;
    },
  },
  data() {
    return {
      subtitle: DEBUG_SUBTITLE,
      DEBUG_SUBTITLE,
      statusBarHeight: 0,
    };
  },
  methods: {
    goToHome() {
      this.$router.back();
    },
  },
  created() {
    this.statusBarHeight = Vue.Native?.Dimensions?.window?.statusBarHeight ?? 0;
  },
};
</script>
<style lang="scss">
#root {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
}
</style>
