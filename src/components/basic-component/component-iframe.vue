<template>
  <div ref="inputDemo" class="demo-iframe">
    <label>地址栏：</label>
    <input
      id="address"
      name="url"
      ref="input"
      returnKeyType="go"
      :value="displayUrl"
      @endEditing="goToUrl"
    />
    <iframe
      ref="iframe"
      :src="url"
      @load="onEvent($event, 'load')"
      @loadStart="onEvent($event, 'loadStart')"
      @loadEnd="onEvent($event, 'loadEnd')"
      @error="onEvent($event, 'error')"
    ></iframe>
    <div class="event-list">
      <div class="event-list-container">
        <p v-for="(item, index) in eventList" :key="index">{{item.eventName}}</p>
      </div>
    </div>
    <div class="input-button" @click="forward">
      <span>前进</span>
    </div>
    <div class="input-button" @click="back">
      <span>后退</span>
    </div>
    <div class="input-button" @click="reload">
      <span>刷新</span>
    </div>
  </div>
</template>

<script>
/**
   * 这个 Demo 里有直接操作 DOM 的章节
   */
export default {
  /**
     * 组件加载时自动 focus 第一个输入框
     */
  data() {
    return {
      url: 'https://v.qq.com',
      displayUrl: 'https://v.qq.com',
      eventList: [],
    };
  },
  mounted() {
  },
  methods: {
    onEvent(evt, name) {
      this.eventList.push({
        eventName: name,
        event: evt,
      });
      this.eventList = this.eventList.slice(-10);
    },
    goToUrl(evt) {
      this.url = evt.value;
    },
    forward() {
      this.$refs.iframe.forward();
    },
    back() {
      this.$refs.iframe.back();
    },
    reload() {
      this.$refs.iframe.reload();
    },
  },
};
</script>

<style scope>

  .demo-iframe {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    flex: 1;
  }
  .demo-iframe #address {
    display: flex;
    flex-direction: column;
    height: 40px;
    border-color: #ccc;
    border-width: 1px;
  }

  .demo-iframe iframe {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: stretch;
    height: 300px;
  }

  .demo-iframe .event-list {
    height: 160px;
  }

  .demo-iframe .event-list .event-list-container {
    display: flex;
    flex-direction: column;
  }

  .demo-iframe .event-list p {
    font-size: 14px;
    line-height: 16px;
  }

  .demo-iframe .input-button {
    border-color: #4c9afa;
    border-width: 1px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 200px;
    height: 30px;
  }

  .demo-iframe .input-button span {
    line-height: 30px;
    text-align: center;
  }
</style>
