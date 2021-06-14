<template>
  <div id="component-p">
    <div class="scroll-container">
      <div class="module-item">
        <p class="module-item-title">混合文本（暂不支持混合图片）：</p>
        <p class="module-item-content">
          <span class="color">文本1文本1文本1</span>
          <span class="fontSize">文本2文本2文本2</span>
          <span class="fontWeight">文本3文本3文本3</span>
          <span class="fontFamily">文本4文本4文本4</span>
        </p>
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

      .color {
        color: red;
      }
      .fontSize {
        font-size: 30px
      }
      .fontWeight {
        font-weight: bold;
      }
      .fontFamily {
        font-family: TTTGB;
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
