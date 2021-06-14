import Vue from 'vue';
import componentSwiper from './component-swiper.vue';
import componentDialog from './component-dialog.vue';
import componentListRefresh from './component-list-refresh.vue';
import safeArea from './safe-area.vue';

const demos = {};

if (Vue.Native) {
  Object.assign(demos, {
    componentSwiper: {
      name: 'component-swiper',
      component: componentSwiper,
    },
    componentDialog: {
      name: 'component-dialog',
      component: componentDialog,
    },
    componentListRefresh: {
      name: 'component-list-refresh',
      component: componentListRefresh,
    },
    safeArea: {
      name: 'component-safe-area',
      component: safeArea,
    },
  });
}

export default demos;
