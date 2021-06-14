<template>
  <div class="com-header" :style="{paddingTop: statusBarHeight, height: `${statusBarHeight + 60}px`}">
    <div class="com-header-left">
      <img
        v-if="backStatus"
        @click="onBackClick"
        :src="require('../../assets/back-icon.png')"
        class="icon-back"
      />
    </div>
    <p class="com-header-title">{{title}}</p>
    <div class="com-header-right"></div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    backStatus: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      statusBarHeight: 0,
    }
  },
  methods: {
    onBackClick () {
      this.$emit('back');
    }
  },
  created() {
    this.statusBarHeight = Vue.Native?.Dimensions?.window?.statusBarHeight ?? 0;
  },
}
</script>

<style lang="scss">
.com-header {
  height: 60px;
  background-color: #40b883;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  &-left,
  &-right {
    width: 40px;
    height: 40px;

    .icon-back {
      height: 24px;
      width: 24px;
      margin: 18px;
    }
  }

  &-title {
    height: 60px;
    font-size: 20px;
    line-height: 60px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
    background-color: #40b883;
    color: #ffffff;
  }
}
</style>
