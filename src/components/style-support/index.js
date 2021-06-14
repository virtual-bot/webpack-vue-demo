// 样式
import demoFlex from './style-flex.vue';
import demoBox from './style-box.vue';
import demoPosition from './style-position.vue';
import demoTransform from './style-transform.vue';
import demoTransition from './style-transition.vue';
import demoAnimation from './style-animation.vue';
import demoBackground from './style-background.vue';
import demoBoxShadow from './style-box-shadow.vue';
import demoText from './style-text.vue';
import demoStyle from './style-style.vue';
// 组件

const demos = {
  demoFlex: {
    name: 'css-flexbox',
    component: demoFlex,
  },
  demoBox: {
    name: 'css-盒模型',
    component: demoBox,
  },
  demoPosition: {
    name: 'css-定位',
    component: demoPosition,
  },
  demoTransform: {
    name: 'css-transform',
    component: demoTransform,
  },
  demoTransition: {
    name: 'css-transition',
    component: demoTransition,
  },
  demoAnimation: {
    name: 'css-animation',
    component: demoAnimation,
  },
  demoBackground: {
    name: 'css-background',
    component: demoBackground,
  },
  demoBoxShadow: {
    name: 'css-box-shadow',
    component: demoBoxShadow,
  },
  demoStyle: {
    name: 'css-style',
    component: demoStyle,
  },
  demoText: {
    name: 'css-text',
    component: demoText,
  },
};

export default demos;
