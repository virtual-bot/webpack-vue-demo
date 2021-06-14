<template>
  <div id="component-div">
    <div class="scroll-container">
      <div class="module-item">
        <p class="module-item-title">事件列表</p>
        <div class="module-item-content">
          <div
            class="module-item-content-div"
            @touchstart="onEvent($event, 'touchstart')"
            @touchend="onEvent($event, 'touchend')"
            @touchmove="onEvent($event, 'touchmove')"
            @touchcancel="onEvent($event, 'touchcancel')"
            @click="onEvent($event, 'click')"
            @longClick="onEvent($event, 'longClick')"
            @pressIn="onEvent($event, 'pressIn')"
            @pressOut="onEvent($event, 'pressOut')"
            @layout="onEvent($event, 'layout')"
            @attachedToWindow="onEvent($event, 'attachedToWindow')"
            @detachedFromWindow="onEvent($event, 'detachedFromWindow')"
          ></div>
        </div>
        <div class="module-item-extra">
          <div class="event-list">
            <div class="event-list-container">
              <p v-for="(item, index) in eventList" :key="index">{{item.eventName}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">overflowX: scroll</p>
        <div class="module-item-content overflowXScroll" ref="scrollerX">
          <div class="scroll-x-container">
            <div class="module-item-content-div"></div>
            <div class="module-item-content-div"></div>
            <div class="module-item-content-div"></div>
            <div class="module-item-content-div"></div>
            <div class="module-item-content-div"></div>
          </div>
        </div>
        <div class="toolbar">
          <div class="toolbar-btn" @click="scrollToX">
            <span>点击横向滚动到600</span>
          </div>
          <div class="toolbar-btn" @click="switchXAnimation">
            <span>{{scrollXSwitchAnimation ? '关闭动画' : '打开300ms动画'}}</span>
          </div>
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">overflowY: scroll</p>
        <div class="module-item-content overflowYScroll" ref="scrollerY">
          <div class="scroll-y-container">
            <div class="module-item-content-div"></div>
            <div class="module-item-content-div"></div>
            <div class="module-item-content-div"></div>
            <div class="module-item-content-div"></div>
            <div class="module-item-content-div"></div>
          </div>
        </div>
        <div class="toolbar">
          <div class="toolbar-btn" @click="scrollToY">
            <span>点击纵向滚动到600</span>
          </div>
          <div class="toolbar-btn" @click="switchYAnimation">
            <span>{{scrollXSwitchAnimation ? '关闭动画' : '打开300ms动画'}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      eventList: [],
      scrollXSwitchAnimation: true,
      scrollYSwitchAnimation: true,
    };
  },
  methods: {
    onEvent(e, n) {
      this.eventList.push({
        eventName: n,
        event: e,
      });
    },
    scrollToX () {
      this.$refs.scrollerX.scrollTo(600, 0, this.scrollXSwitchAnimation ? 300 : 0);
    },
    scrollToY () {
      this.$refs.scrollerY.scrollTo(0, 600, this.scrollYSwitchAnimation ? 300 : 0);
    },
    switchXAnimation () {
      this.scrollXSwitchAnimation = !this.scrollXSwitchAnimation;
    },
    switchYAnimation () {
      this.scrollYSwitchAnimation = !this.scrollYSwitchAnimation;
    },
  },
};
</script>

<style lang="scss">
#component-div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;

  .toolbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .toolbar-btn {
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

      span {
        line-height: 30px;
        text-align: center;
      }
    }
  }

  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .scroll-x-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 550px;
  }

  .scroll-y-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .module-item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    border-bottom: 1px solid #e4e4e4;

    &-title {
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 16px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      &.overflowXScroll {
        overflow-x: scroll;
      }

      &.overflowYScroll {
        height: 300px;
        overflow-y: scroll;
      }

      &-div {
        margin: 0 10px 10px 0;
        width: 100px;
        height: 100px;
        background-color: #40b883;
      }
    }

    &-extra {
      margin-top: 20px;
      height: 160px;

      &-title {
        margin-bottom: 10px;
        font-size: 14px;
        height: 20px;
      }

      .event-list {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        height: 130px;
        background-color: #cccccc;
        overflow-y: scroll;

        &__container {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        &-item {
          color: #000;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
}

</style>
