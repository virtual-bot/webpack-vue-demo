<template>
  <div id="demo-background">
    <div class="page">
      <div class="page-title">
        <p>背景</p>
      </div>
      <div class="title">
        <p>Background</p>
      </div>
      <div class="section">
        <div class="section-title">
          <p>background-color</p>
        </div>
        <div class="background-color">
          <div class="item background-color-lightyellow">
            <p>background-color: lightyellow;</p>
          </div>
          <div class="item background-color-000">
            <p>background-color: #000;</p>
          </div>
          <div class="item background-color-ffb400">
            <p>background-color: #ffb400;</p>
          </div>
          <div class="item background-color-rgb">
            <p>background-color: rgb(255, 0, 0);</p>
          </div>
          <div class="item background-color-rgba">
            <p>background-color: rgba(255, 0, 0, 0.5);</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>background-image1 远程图片</p>
        </div>
        <div class="background-image1">
          <div class="item"></div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>background-image2 本地图片</p>
        </div>
        <div class="background-image2">
          <div class="item"></div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>background-image3 线性渐变</p>
        </div>
        <div class="background-image3">
          <div class="item"></div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>background-size</p>
        </div>
        <div class="background-size">
          <div class="item default">
            <p>默认100% 100%</p>
          </div>
          <div class="item cover">
            <p>background-size: cover;</p>
          </div>
          <div class="item contain">
            <p>background-size: contain;</p>
          </div>
          <div class="item auto">
            <p>background-size: auto;</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>background-repeat 暂不支持 round space</p>
        </div>
        <div class="background-repeat">
          <div class="item no-repeat">
            <p>background-repeat: no-repeat;</p>
          </div>
          <div class="item repeat">
            <p>background-repeat: repeat;</p>
          </div>
          <div class="item repeat-x">
            <p>background-repeat: repeat-x;</p>
          </div>
          <div class="item repeat-y">
            <p>background-repeat: repeat-y;</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>background-position</p>
        </div>
        <div class="background-position">
          <div class="item center">
            <p>background-position: center;</p>
          </div>
          <div class="item bottom-center">
            <p>background-position: bottom center;</p>
          </div>
          <div class="item bottom-left">
            <p>background-position: bottom left;</p>
          </div>
          <div class="item percentage">
            <p>暂不支持百分比 background-position: 100% 100%;</p>
          </div>
          <div class="item number">
            <p>暂不支持数字 background-position: 50px 50px;</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>暂不支持数字</p>
          <p>background-position-x</p>
          <p>background-position-y</p>
        </div>
        <div class="background-position-x">
          <div class="item number">
            <p>background-position: 50px 50px;</p>
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

    };
  },
};
</script>

<style scoped lang="scss">
#demo-background {
  flex: 1;
  //align-self: flex-start;
  //width: 100px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
  overflow-x: hidden;

  .page {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    //overflow: visible;
    //flex: 1;

    .page-title {
      margin-left: 10px;
      font-size: 28px;
    }

    .title {
      margin-left: 10px;
      margin-bottom: 10px;
      height: 30px;

      p {
        color: #666;
        font-size: 18px;
        text-align: left;
        line-height: 30px;
      }
    }

    .section {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-title {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #666;
      }

      > .background-color {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 50px;
          height: 50px;
          //background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
          }

          &.background-color-lightyellow {
            background-color: lightyellow;

            p {
              color: #000;
            }
          }

          &.background-color-000 {
            background-color: #000;
          }

          &.background-color-ffb400 {
            background-color: #ffb400;
          }

          &.background-color-rgb {
            background-color: rgb(255, 0, 0);
          }

          &.background-color-rgba {
            background-color: rgba(255, 0, 0, 0.5);
          }
        }
      }

      > .background-image1 {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 50px;
          height: 50px;
          background-image: url("http://placehold.it/50x50");

          p {
            font-size: 12px;
            color: #fff;
          }
        }
      }

      > .background-image2 {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 50px;
          height: 50px;
          background-image: url("../../assets/logo.png");

          p {
            font-size: 12px;
            color: #fff;
          }
        }
      }

      > .background-image3 {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 50px;
          height: 50px;
          //background-image: linear-gradient(to right bottom, #FF0000 0%, #00FF00 20px, rgb(0, 0, 255) 100%);
          //background-image: linear-gradient(#e66465, #9198e5);
          //background-image: linear-gradient(45deg, red, blue);
          //background-image: linear-gradient(135deg, orange 60%, cyan);
          background-image: linear-gradient(to right, red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%);

          p {
            font-size: 12px;
            color: #fff;
          }
        }
      }

      > .background-size {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 80px;
          height: 80px;
          background-image: url("http://img.qdaily.com/article/article_show/20180226115511QR0IMWjcBZmo8FaV.gif");
          background-repeat: no-repeat;
          background-position: center;

          p {
            font-size: 12px;
            color: #fff;
            opacity: 0.3;
          }

          &.default {
            background-size: fit;
          }

          &.cover {
            background-size: cover;
          }

          &.contain {
            background-size: contain;
          }

          &.auto {
            background-image: url("http://img.qdaily.com/article/article_show/20180226115511QR0IMWjcBZmo8FaV.gif");
            background-size: auto;
          }
        }
      }

      > .background-repeat {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 60px;
          height: 60px;
          background-image: url("http://placehold.it/30x30");
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
            opacity: 0.7;
          }

          &.no-repeat {
            background-repeat: no-repeat;
          }

          &.repeat {
            background-repeat: repeat;
          }

          &.repeat-x {
            background-repeat: repeat-x;
          }

          &.repeat-y {
            background-repeat: repeat-y;
          }

          &.space {
            //background-repeat: space;
          }

          &.round {
            //background-repeat: round;
          }
        }
      }

      > .background-position {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 60px;
          height: 60px;
          background-image: url("http://placehold.it/30x30");
          background-size: auto;
          background-repeat: no-repeat;
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
            opacity: 0.3;
          }

          &.center {
            background-position: center;
          }

          &.bottom-center {
            background-position: bottom center;
          }

          &.bottom-left {
            background-position: bottom left;
          }

          &.percentage {
            //background-position: 100% 100%;
          }

          &.number {
            //background-position: 50px 50px;
          }
        }
      }

      > .background-position-x {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 30px;
          height: 30px;
          background-image: url("http://placehold.it/30x30");
          background-size: auto;
          background-repeat: no-repeat;
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
            opacity: 0.3;
          }

          &.number {
            //background-position-x: 30px;
            //background-position-y: 30px;
          }
        }
      }
    }
  }
}

</style>
