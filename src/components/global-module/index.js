import Vue from 'vue';
import nativeProperties from './native.vue';
import moduleManager from './module.vue';
import dialogManager from './dialog.vue';
import websocketManager from './websocket.vue';

const demos = {};

if (Vue.Native) {
  Object.assign(demos, {
    nativeProperties: {
      name: '全局变量属性测试',
      component: nativeProperties,
    },
    moduleManager: {
      name: 'module测试',
      component: moduleManager,
    },
    dialogManager: {
      name: 'dialog测试',
      component: dialogManager,
    },
    webocketManager: {
      name: 'websocket测试',
      component: websocketManager,
    },
  });
}

export default demos;
