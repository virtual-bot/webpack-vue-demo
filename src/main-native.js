import Vue from 'vue';
import VueNativeComponents from '@voltron/vue-native-components';
import App from './page/demo/index.vue';
import { setApp } from './util';

// 禁止终端调试信息输出，取消注释即可使用。
// Vue.config.silent = true;

Vue.config.productionTip = false;

// Voltron 终端组件扩展中间件，可以使用 modal、view-pager、tab-host、ul-refresh 等原生组件了。
Vue.use(VueNativeComponents);

/**
 * 声明一个 app，这是同步生成的
 */
const app = new Vue({
  // 终端指定的 App 名称
  appName: 'Demo',
  // 根节点，必须是 Id，当根节点挂载时才会触发上屏
  rootView: '#root',
  // 渲染自己
  render: h => h(App),
});

/**
 * $start 是 Voltron 启动完以后触发的回调
 * Vue 会在 Voltron 启动之前完成首屏 VDOM 的渲染，所以首屏性能非常高
 * 在 $start 里可以通知终端说已经启动完成，可以开始给前端发消息了。
 */
app.$start((/* app */) => {
  // 这里干一点 Voltron 启动后的需要干的事情，比如通知终端前端已经准备完毕，可以开始发消息了。
  // setApp(app);
});

/**
 * 保存 app 供后面通过 app 接受来自终端的事件。
 *
 * 之前是放到 $start 里的，但是有个问题时因为 $start 执行太慢，如果首页就 getApp() 的话可能会
 * 导致获得了 undefined，然后监听失败。所以挪出来了。
 *
 * 但是终端事件依然要等到 $start 也就是 Voltron 启动之后再发，因为之前桥尚未建立，终端发消息前端也
 * 接受不到。
 */
setApp(app);
