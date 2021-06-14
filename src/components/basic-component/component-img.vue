<template>
  <div id="component-img">
    <div class="scroll-container">
      <div class="module-item">
        <p class="module-item-title">默认图片:</p>
        <div class="module-item-content">
          <img
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
            @load="onEvent( $event, 'load')"
            @loadStart="onEvent( $event, 'loadstart')"
            @loadEnd="onEvent($event, 'loadEnd')"
            @error="onEvent ($event, 'error')"
            src="../../assets/dialog.png"
            class="module-item-content-image"
            :defaultSource="defaultImg"
          />
        </div>
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
        <p class="module-item-title">.9拉伸图:</p>
        <div class="module-item-content">
          <img src="../../assets/dialog.png" class="module-item-content-image" :capInsets="capInsets" />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">resizeMode: contain</p>
        <div class="module-item-content">
          <img src="../../assets/dialog.png" class="module-item-content-image" :resizeMode="'contain'" />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">resizeMode: cover</p>
        <div class="module-item-content">
          <img src="../../assets/dialog.png" class="module-item-content-image" :resizeMode="'cover'" />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">resizeMode: center</p>
        <div class="module-item-content">
          <img src="../../assets/dialog.png" class="module-item-content-image" :resizeMode="'center'" />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">resizeMode: stretch</p>
        <div class="module-item-content">
          <img src="../../assets/dialog.png" class="module-item-content-image" :resizeMode="'stretch'" />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">resizeMode: repeat</p>
        <div class="module-item-content">
          <img src="../../assets/dialog.png" class="module-item-content-image" :resizeMode="'repeat'" />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">gif支持</p>
        <div class="module-item-content">
          <img src="http://img.qdaily.com/article/article_show/20180226115511QR0IMWjcBZmo8FaV.gif" class="module-item-content-image" :resizeMode="'contain'" />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">png支持</p>
        <div class="module-item-content">
          <img src="../../assets/logo.png" class="module-item-content-image" :resizeMode="'contain'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const defaultImg = 'data:image/png;base64,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';

export default {
  data() {
    return {
      capInsets: {
        top: 45,
        left: 25,
        right: 80,
        bottom: 25,
      },
      defaultImg,
      eventList: [],
    };
  },
  methods: {
    onEvent(e, n) {
      this.eventList.push({
        eventName: n,
        event: e,
      });
      this.eventList = this.eventList.slice(-10);
    },
  },
};
</script>

<style scoped lang="scss">
#component-img {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;

  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
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
      width: 300px;
      height: 180px;

      &-image {
        width: 300px;
        height: 180px;
        border-width: 1px;
        border-style: solid;
        border-color: #42b983;
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

#demo-img .image {
  width: 300px;
  height: 180px;
  margin: 30px;
  border-width: 1px;
  border-color: #40b883;
}

#demo-img .contain {
  resize-mode: contain;
}

#demo-img .cover {
  resize-mode: cover;
}

#demo-img .center {
  resize-mode: center;
}

#demo-img .stretch {
  resize-mode: stretch;
}

#demo-img .repeat {
  resize-mode: repeat;
}
</style>
