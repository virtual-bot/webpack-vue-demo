<template>
  <div id="demo">
    <div :style="{ alignItems:'center' }">
      <div v-for="(item,index) in tests" :key="index" @click="item.fun()" :style="{height: 40,width: 130,alignItems: 'center',justifyContent: 'center',marginTop: 20,backgroundColor:item.color}">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue';

export default {
  name: 'dialog-test',
  data() {
    return {
      tests: [],
    };
  },
  methods: {
    handleToast() {
      Vue.Native.callNative('DialogModule', 'toast', {
        message: '哈哈哈哈Toast',
        gravity: 'bottom',
      });
    },
    handleAlert() {
      Vue.Native.callNativeWithPromise('DialogModule', 'alert', this.$root.$options.rootViewId, {
        message: '哈哈哈哈Alert',
      }).then(ret => {
        console.log('--------->', ret);
      });
    },
    handleConfirm() {
      Vue.Native.callNativeWithPromise('DialogModule', 'confirm', this.$root.$options.rootViewId, {
        message: '哈哈哈哈Confirm',
      }).then(ret => {
        console.log('--------->', ret);
      });
    },
    handlePrompt() {
      Vue.Native.callNativeWithPromise('DialogModule', 'prompt', this.$root.$options.rootViewId, {
        title: '哈哈哈哈Prompt',
      }).then(ret => {
        console.log('--------->', ret);
      });
    },
  },
  created() {
    this.tests = [
      {
        name: 'toast',
        fun: this.handleToast,
        color: '#40b883',
      },
      {
        name: 'alert',
        fun: this.handleAlert,
        color: '#40b883',
      },
      {
        name: 'confirm',
        fun: this.handleConfirm,
        color: '#40b883',
      },
      {
        name: 'prompt',
        fun: this.handlePrompt,
        color: '#40b883',
      },
    ];
  }
};
</script>

<style scoped>
#demo {
  flex: 1;
  overflow-y: scroll;
}
</style>
