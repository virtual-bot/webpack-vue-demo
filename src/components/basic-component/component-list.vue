<template>
  <div id="component-list">
    <div class="console">
      <div class="event-list">
        <div class="event-list-container">
          <p v-for="(item, index) in eventList" :key="index">{{item.eventName}}</p>
        </div>
      </div>
    </div>
    <p class="toolbar-text">当前列表元素数量：{{ dataSource.length }}</p>
    <div class="toolbar">
      <button class="toolbar-btn" @click="scrollToNextPage">
        <span>下一页</span>
      </button>
      <button class="toolbar-btn" @click="scrollToBottom">
        <span>到底部</span>
      </button>
      <button class="toolbar-btn" @click="showScrollIndicator = !showScrollIndicator">
        <span>切换显示滚动条</span>
      </button>
      <button class="toolbar-btn" @click="scrollEventThrottle = scrollEventThrottle === 32 ? 1000 : 32">
        <span>滚动频率 {{scrollEventThrottle}} -> {{scrollEventThrottle === 32 ? 1000 : 32}}</span>
      </button>
    </div>
    <!--
numberOfRows 不再需要
preloadItemNumber 未实现 暂时忽略
scrollEnable 未实现 暂时忽略
layout 实现有误 暂时忽略
    -->
    <ul
        id="list"
        ref="list"
        :showScrollIndicator="showScrollIndicator"
        :initialContentOffset="100"
        :numberOfRows="dataSource.length + 1"
        :scrollEventThrottle="scrollEventThrottle"
        :rowShouldSticky="true"
        :preloadItemNumber="3"
        @endReached="onEndReached"
        @scroll="onScroll"
        @scrollBeginDrag="onEvent('scrollBeginDrag', $event)"
        @scrollEndDrag="onEvent('scrollEndDrag', $event)"
        @momentumScrollBegin="onEvent('momentumScrollBegin', $event)"
        @momentumScrollEnd="onEvent('momentumScrollEnd', $event)"
        @scrollEnable="onEvent('scrollEnable', $event)"
    >
      <!--
        key 是用于标示数据唯一性的，数据不发生改动，key 就不能变，这牵扯到 Vue 的 diff 算法，加上 key 后能避免节点重新渲染，对业务性能会有帮助。
            这里用 index 做 key 是个坏例子，因为 demo 数据都是重复的，业务开发时不能用 index 做 key。
            详情：https://cn.vuejs.org/v2/guide/list.html#key
      -->
      <li
          v-for="(ui, index) in dataSource"
          :key="index"
          :type="'row-' + ui.style"
          :sticky="index === 1"
          @layout="onItemLayout"
      >
        <style-one v-if="ui.style === 1" :itemBean="ui.itemBean" />
        <style-two v-if="ui.style === 2" :itemBean="ui.itemBean" />
        <style-five v-if="ui.style === 5" :itemBean="ui.itemBean" />
      </li>
      <li :style="{height: 20,}">
        <p id="loading" v-show="loadingState">{{ loadingState }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import mockData from '../../util/mock-list';
import '../list-items';

const STYLE_LOADING = 100;
const MAX_FETCH_TIMES = 50;

const heightOfComponents = {};

export default {
  data() {
    return {
      loadingState: '',
      dataSource: [],
      scrollPos: {
        top: 0,
        left: 0,
      },
      Vue,
      STYLE_LOADING,
      eventList: [],
      showScrollIndicator: false,
      scrollEventThrottle: 32,
    };
  },
  mounted() {
    // *** isLoading 是加载锁，业务请照抄 ***
    // 因为 onEndReach 位于屏幕底部时会多次触发，
    // 所以需要加一个锁，当未加载完成时不进行二次加载
    this.isLoading = false;
    this.dataSource = [...mockData];

    // 启动时保存一下屏幕高度，一会儿算曝光时会用到
    if (Vue.Native) {
      this.$windowHeight = Vue.Native.Dimensions.window.height;
    } else {
      this.$windowHeight = window.innerHeight;
    }

    // 初始化时曝光，因为子元素加载需要时间，建议延迟 500 毫秒后执行
    setTimeout(() => this.exposureReport(0), 500);
  },
  methods: {
    mockFetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.fetchTimes += 1;
          if (this.fetchTimes >= MAX_FETCH_TIMES) {
            return resolve(null);
          }
          return resolve(mockData);
        }, 300);
      });
    },
    async onEndReached() {
      this.onEvent('endReached');
      console.log('listView event onEndReached');
      const { dataSource } = this;

      // 检查锁，如果在加载中，则直接返回，防止二次加载数据
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      this.loadingState = '正在加载...';

      const newData = await this.mockFetchData();
      if (!newData) {
        this.loadingState = '没有更多数据';
        this.isLoading = false;
        return;
      }

      this.loadingState = '';
      this.dataSource = [...dataSource, ...newData];
      this.isLoading = false;
    },
    onEvent(type) {
      console.log('listView event ', type);
      this.eventList.push({
        eventName: type,
      });
      this.eventList = this.eventList.slice(-10);
    },
    // 需要说明的是，Web 端的 overflow: scroll，滚屏时并不会触发 scroll 消息，这个方法仅针对 Native.
    onScroll(evt) {
      this.onEvent('scroll');
      console.log('onScroll', Date.now());
      evt.stopPropagation(); // 这个事件触发比较频繁，最好阻止一下冒泡。
      this.scrollPos = {
        top: evt.offsetY,
        left: evt.offsetX,
      };
      // 初始化时曝光上报
      this.exposureReport(evt.offsetY);
    },
    onItemLayout(evt) {
      // 保存一下 ListItemView 尺寸的高度
      heightOfComponents[evt.target.index] = evt.top;
    },
    /**
     * 曝光上报
     * @param {number} screenTop 屏幕高度
     */
    exposureReport(screenTop) {
      // 获取可视范围内的组件
      const componentsInWindow = Object.keys(heightOfComponents).filter((index) => {
        const height = heightOfComponents[index];
        return screenTop <= height && screenTop + this.$windowHeight >= height;
      });
      // 其实没有上报，只是把界面上正在曝光的组件列出来了。
      // 同时曝光锁还得业务自己做。
      console.log('Exposuring components:', componentsInWindow);
    },
    /**
     * 翻到下一页
     */
    scrollToNextPage() {
      // 因为布局问题，浏览器内 flex: 1 后也会超出窗口尺寸高度，所以这么滚是不行的。
      if (!Vue.Native) {
        /* eslint-disable-next-line no-alert */
        alert('This method is only supported in Native environment.');
        return;
      }

      const { list } = this.$refs;
      const { scrollPos } = this;
      const top = scrollPos.top + this.$windowHeight - 200; // 偷懒假定内容区域为屏幕高度 - 200
      // CSSOM View standard - ScrollToOptions
      // https://www.w3.org/TR/cssom-view-1/#extensions-to-the-window-interface
      console.log(`scroll to next page, left:${scrollPos.left}, top:${top}`);
      list.scrollTo({
        left: scrollPos.left,
        top,
      }); // 其实 scrollPost.left 写 0 也可以。
    },
    /**
     * 滚动到底部
     */
    scrollToBottom() {
      if (!Vue.Native) {
        /* eslint-disable-next-line no-alert */
        alert('This method is only supported in Native environment.');
        return;
      }
      const { list } = this.$refs;
      list.scrollToIndex(0, list.childNodes.length - 1);
    },
  },
};
</script>

<style>
#component-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 12px 0 12px;
}

#component-list .toolbar-text {
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e4e4e4;
}

#component-list .event-list {
  height: 160px;
}

#component-list .event-list-container {
  height: 160px;
  display: flex;
  flex-direction: column;
}

#component-list .event-list p {
  font-size: 14px;
  line-height: 16px;
  color: #fff;
}

#component-list .console {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  right: 0;
  width: 200px;
  height: 160px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
}

#component-list .toolbar {
  /*height: 40px;*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#component-list .toolbar .toolbar-btn {
  display: flex;
  flex-direction: column;
  margin-right: 3px;
  margin-bottom: 10px;
  padding: 0 3px;
  /*width: 80px;*/
  height: 30px;
  border-width: 1px;
  border-style: solid;
  border-color: #000;
}
#component-list .toolbar .toolbar-btn span {
  line-height: 30px;
  text-align: center;
}

#component-list #list {
  /*flex: 1;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: stretch;*/
  /*padding-top: 30px;*/
}

#component-list li {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: stretch;*/
  /*background-color: #fff;*/
}

#component-list #loading {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #aaa;
  align-self: center;
}

#component-list .article-title {
  font-size: 17px;
  line-height: 24px;
  color: #242424;
}

#component-list .tag-line {
  height: 24px;
}

#component-list .normal-text {
  line-height: 24px;
  font-size: 12px;
  color: #aaa;
  align-self: center;
}

#component-list .style-one {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  /*background-color: #ac5151;*/
}

#component-list .style-one-image-container {
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin-top: 8px;
  /*background-color: #ac5151;*/
}

#component-list .style-one-image {
  flex: 1;
  height: 160px;
  resize-mode: cover;
}

#component-list .style-two {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  /*background-color: #ffb400;*/
}

#component-list .style-two-left-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 8px;
}

#component-list .style-two-image-container {
  flex: 1;
}

#component-list .style-two-image {
  flex: 1;
  height: 140px;
  resize-mode: cover;
}

#component-list .style-five {
  display: flex;
  flex-direction: column;
  /*background-color: #42b983;*/
}

#component-list .style-five-image-container {
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
}

#component-list .style-five-image {
  flex: 1;
  height: 160px;
  resize-mode: cover;
}
</style>
