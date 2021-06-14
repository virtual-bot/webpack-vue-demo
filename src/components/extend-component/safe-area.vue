<template>
  <div class="safe-area-wrap">
    <div class="safe-area-content">
      <f-safe-area :bottom="true">
        <div class="safe-area-text">
          <span>xxxx</span>
          <span>123</span>
        </div>
      </f-safe-area>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

if (Vue.Native?.Platform !== 'browser' && Vue.registerElement) {
  Vue.registerElement('f-safe-area', {
    component: {
      name: 'View',
      defaultNativeStyle: {
        flex: 1,
      },
      renderEndCallback(nativeNode) {
        const node = nativeNode;
        if (node.props.top) {
          node.props.style.paddingTop = Vue.Native.Dimensions.window.statusBarHeight;
        }
        if (node.props.bottom) {
          node.props.style.paddingBottom = Vue.Native.Dimensions.window.bottomBarHeight;
        }
        return node;
      },
    },
  });
}

export default {
  name: 'safeArea',
};
</script>

<style scoped>
.safe-area-content {
  padding-top: 10px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.safe-area-text {
  height: 40px;
  background-color: blue;
}
</style>
