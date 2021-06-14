// 组件
import componentDiv from './component-div.vue';
import componentP from './component-p.vue';
import componentSpan from './component-span.vue';
import componentImg from './component-img.vue';
import componentInput from './component-input.vue';
import componentTextarea from './component-textarea.vue';
import componentIframe from './component-iframe.vue';
import componentList from './component-list.vue';

const demos = {
  componentDiv: {
    name: 'div',
    component: componentDiv,
  },
  componentP: {
    name: 'p',
    component: componentP,
  },
  componentSpan: {
    name: 'span',
    component: componentSpan,
  },
  componentImg: {
    name: 'img',
    component: componentImg,
  },
  componentInput: {
    name: 'input',
    component: componentInput,
  },
  componentTextarea: {
    name: 'textarea',
    component: componentTextarea,
  },
  componentIframe: {
    name: 'iframe(暂不支持)',
    component: componentIframe,
  },
  componentList: {
    name: 'list',
    component: componentList,
  },
};

export default demos;
