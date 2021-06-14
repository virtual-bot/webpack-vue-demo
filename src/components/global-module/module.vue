
<template>
  <div id="demo">
    <div :style="{alignItems:'center'}">
      <div
          v-for="(item,index) in tests" :key="index" @click="item.fun()"
          :style="{height: 40,width: 130,alignItems: 'center',justifyContent: 'center',marginTop: 20,backgroundColor:item.color}">
        <p>{{item.name}}</p>
      </div>
    </div>

  </div>

</template>

<script>
import Vue from 'vue';
import { getApp } from '../../util';

export default {
  name: 'module-test',
  data() {
    return {
      styles: {
        itemBox: {
          height: 25,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
          backgroundColor: '#40b883',
        },
      },
      tests: [],
    };
  },
  created() {
    console.log(Vue.Native);
    this.tests = [
      {
        name: 'console',
        fun: this.consoleTest,
        color: '#40b883',
      },
      {
        name: 'storageSet',
        fun: this.storageSetItem,
        color: '#8ac3de',
      },
      {
        name: 'storageGet',
        fun: this.storageGetItem,
        color: '#8ac3de',
      },
      {
        name: 'storageRemove',
        fun: this.storageRemoveItem,
        color: '#8ac3de',
      },
      {
        name: 'storageGetAllKeys',
        fun: this.getAllKeys,
        color: '#8ac3de',
      },
      {
        name: 'setTimeout',
        fun: this.setTimeoutTest,
        color: '#aa8ade',
      },
      {
        name: 'clearTimeout',
        fun: this.clearTimeoutTest,
        color: '#aa8ade',
      },
      {
        name: 'setInterval',
        fun: this.setIntervalTest,
        color: '#aa8ade',
      },
      {
        name: 'clearInterval',
        fun: this.clearIntervalTest,
        color: '#aa8ade',
      },
      {
        name: 'fetch',
        fun: this.fetchTest,
        color: '#c4c77e',
      },
      {
        name: 'setCookie',
        fun: this.setCookieTest,
        color: '#c4c77e',
      },
      {
        name: 'getCookie',
        fun: this.getCookieTest,
        color: '#c4c77e',
      },
      {
        name: 'addListener',
        fun: this.addListenerTest,
        color: '#e7b081',
      },
      {
        name: 'removeListener',
        fun: this.removeListenerTest,
        color: '#e7b081',
      },
      {
        name: 'sendEvent',
        fun: this.sendEvent,
        color: '#e7b081',
      },
      {
        name: 'checkApi',
        fun: this.checkApi,
        color: '#cd35e9',
      },
    ];
  },
  methods: {
    consoleTest() {
      // console.log('我是log', '加参数');
      // console.warn('我是warn', '加参数');
      // console.info('我是info', '加参数');
      // console.error('我是error', '加参数');
      // console.debug('我是debug', '加参数');
      Vue.Native.callNative('ConsoleModule', 'log', '我是log');
      Vue.Native.callNative('ConsoleModule', 'warn', '我是warn');
      Vue.Native.callNative('ConsoleModule', 'info', '我是info');
      Vue.Native.callNative('ConsoleModule', 'error', '我是error');
    },
    storageSetItem() {
      const storage = localStorage;
      storage.setItem('hello', 'world');
    },
    storageGetItem() {
      const storage = localStorage;
      storage.getItem('hello').then((data) => {
        console.log('getItem test value:', data);
      });
    },
    storageRemoveItem() {
      const storage = localStorage;
      storage.removeItem('hello');
    },
    getAllKeys() {
      const storage = localStorage;
      storage.getAllKeys().then((data) => {
        console.log('getAllKeys', data);
      });
    },

    setTimeoutTest() {
      const time = 3000;
      this.timeoutId = setTimeout(() => {
        console.log(`timeout 过了${time}ms`);
      }, time);
    },
    clearTimeoutTest() {
      console.log('停止了 timeout');
      clearTimeout(this.timeoutId);
    },
    setIntervalTest() {
      const time = 3000;
      this.intervalId = setInterval(() => {
        console.log(`interval 过了${time}ms`);
      }, time);
    },
    clearIntervalTest() {
      console.log('停止了 interval');
      clearInterval(this.intervalId);
    },
    fetchTest() {
      fetch('https://static.gameplus.qq.com/business/qyg/animation/package.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(
        (result) => {
          console.log('fetch succuss', result, JSON.stringify(result));
        },
      ).catch((error) => {
        console.error('fetch error', error);
      });
    },
    setCookieTest() {
      Vue.Native.Cookie.set('https://static.gameplus.qq.com', 'name=someone;gender=female');
    },
    getCookieTest() {
      Vue.Native.Cookie.getAll('https://static.gameplus.qq.com').then((data) => {
        console.log('getCookie', data);
      });
    },
    addListenerTest() {
      getApp().$on('aevent', (event) => {
        console.log('接收到了事件', event);
      });
    },
    removeListenerTest() {
      getApp().$off('aevent');
    },
    sendEvent() {
      getApp().$emit('aevent');
    },
    checkApi() {
      // 用于检查哪些 module 或者 component 可用
      Vue.Native.callNativeWithPromise('UtilsModule', 'checkApi', {
        module: ['ConsoleModule', 'StorageModule', 'aaaaa'],
        component: ['View', 'SafeArea', 'Image', 'ListViewItem'],
      }).then((ret) => {
        console.log('--------->', ret);
      });
    },
  },
};
</script>

<style scoped>
  #demo {
    flex: 1;
    overflow-y: scroll;
  }
</style>
