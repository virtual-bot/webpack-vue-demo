<template>
  <div id="component-p">
    <div class="scroll-container">
      <div class="module-item">
        <p class="module-item-title">不带样式：</p>
        <p
            class="module-item-content"
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
        >
          这是最普通的一行文字
        </p>
        <div class="module-item-extra">
          <p class="module-item-extra-title">事件列表</p>
          <div class="event-list">
            <div class="event-list__container">
              <p class="event-list-item" v-for="(item, index) in eventList" :key="index">{{item.eventName}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">颜色：</p>
        <p class="module-item-content color">这行文字改变了颜色</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">尺寸：</p>
        <p class="module-item-content fontSize">这行改变了大小</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">粗体：</p>
        <p class="module-item-content fontWeight">这行加粗了</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">下划线：</p>
        <p class="module-item-content textDecorationUnderline">这里有条下划线</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">删除线：</p>
        <p class="module-item-content textDecorationLineThrough">这里有条删除线</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">行高：</p>
        <p class="module-item-content lineHeight">这个字行高60这个字行高60这个字行高60这个字行高60这个字行高60这个字行高60这个字行高60这个字行高60这个字行高60</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">自定义字体：</p>
        <p class="module-item-content fontFamily">腾讯字体 Voltron</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">超出省略：</p>
        <p class="module-item-content textOverflowEllipsis" :numberOfLines="2">超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">超出截断：</p>
        <p class="module-item-content textOverflowClip" :numberOfLines="2">超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁</p>
      </div>
      <div class="module-item">
        <p class="module-item-title">超出渐隐：</p>
        <p class="module-item-content textOverflowFade" :numberOfLines="2">超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁超出两行剪裁</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventList: [],
    };
  },
  methods: {
    onEvent(e, n) {
      e.stopPropagation();
      this.eventList.push({
        eventName: n,
        event: e,
      });
      this.eventList = this.eventList.slice(-10);
    },
  },
};
</script>

<style lang="scss" scoped>

#component-p {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;

  .scroll-container {
    display: flex;
    flex-direction: column;
  }

  .module-item {
    padding: 20px;
    border-bottom: 1px solid #e4e4e4;

    &-title {
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 16px;
    }

    &-content {
      font-size: 14px;

      &.color {
        color: red;
      }
      &.fontSize {
        font-size: 30px;
      }
      &.fontWeight {
        font-weight: bold;
      }
      &.textDecorationUnderline {
        text-decoration: underline;
      }
      &.textDecorationLineThrough {
        text-decoration: line-through;
      }
      &.fontFamily {
        font-family: TTTGB;
      }
      &.textOverflowEllipsis {
        text-overflow: ellipsis;
      }
      &.textOverflowClip {
        text-overflow: clip;
      }
      &.textOverflowFade {
        text-overflow: fade;
      }

      &.lineHeight {
        line-height: 60px;
        background-color: burlywood;
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
