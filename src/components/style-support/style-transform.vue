<template>
  <div id="demo-transform">
    <div class="page">
      <div class="page-title">
        <p>动画</p>
      </div>
      <div class="title">
        <p>transform</p>
      </div>
      <div class="section">
        <div class="section-title">
          <p>translate</p>
        </div>
        <div class="translate">
          <div class="item translateX">
            <p>translateX(-10px)</p>
          </div>
          <div class="item translateY">
            <p>translateY(-10px)</p>
          </div>
          <div class="item translate">
            <p>translate(-10px, -10px)</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>scale</p>
        </div>
        <div class="scale">
          <div class="item scaleX">
            <p>scaleX(0.5)</p>
          </div>
          <div class="item scaleY">
            <p>scaleY(0.5)</p>
          </div>
          <div class="item scale">
            <p>scale(0.5)</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>rotate</p>
        </div>
        <div class="rotate">
          <div class="item rotateX">
            <p>rotateX(30deg)</p>
          </div>
          <div class="item rotateY">
            <p>rotateY(30deg)</p>
          </div>
          <div class="item rotateZ">
            <p>rotateZ(30deg)</p>
          </div>
          <div class="item rotate">
            <p>rotate(30deg)</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>skew</p>
        </div>
        <div class="skew">
          <div class="item skewX">
            <p>skewX(30deg)</p>
          </div>
          <div class="item skewY">
            <p>skewY(30deg)</p>
          </div>
          <div class="item skew">
            <p>skew(30deg)</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>perspective</p>
        </div>
        <div class="perspective perspective-100">
          <div class="item">
            <p>perspective: 100</p>
          </div>
        </div>
        <div class="perspective perspective-300">
          <div class="item">
            <p>perspective: 300</p>
          </div>
        </div>
        <div class="perspective perspective-500">
          <div class="item">
            <p>perspective: 500</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>transform-origin</p>
        </div>
        <div class="transform-origin">
          <div class="item transform-origin-left-top">
            <p>transform-origin: left top</p>
          </div>
        </div>
        <div class="transform-origin">
          <div class="item transform-origin-right-bottom">
            <p>transform-origin: right bottom</p>
          </div>
        </div>
        <div class="transform-origin">
          <div class="item transform-origin-center">
            <p>transform-origin: center</p>
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
#demo-transform {
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

      > .translate {
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
          width: 100px;
          height: 100px;
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
          }

          &.translateX {
            transform: translateX(-10px);
          }

          &.translateY {
            transform: translateY(-10px);
          }

          &.translate {
            transform: translate(-10px, -10px);
          }
        }
      }

      > .scale {
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
          width: 100px;
          height: 100px;
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
          }

          &.scaleX {
            transform: scaleX(0.5);
          }

          &.scaleY {
            transform: scaleY(0.5);
          }

          &.scale {
            //transform: translate(-10px, -10px);
            //transform: scaleX(0.5) scaleY(0.5);
            transform: scale(0.5);
          }
        }
      }

      > .rotate {
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
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
          }

          &.rotateX {
            transform: rotateX(30deg);
          }

          &.rotateY {
            transform: rotateY(30deg);
          }

          &.rotateZ {
            transform: rotateZ(30deg);
          }

          &.rotate3d {
            //transform: rotate3d(1, 1, 1, 30deg);
          }

          &.rotate {
            transform: rotate(30deg);
          }
        }
      }

      > .skew {
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
          width: 100px;
          height: 100px;
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
          }

          &.skewX {
            transform: skewX(30deg);
          }

          &.skewY {
            transform: skewY(30deg);
          }

          &.skew {
            transform: skewX(30deg) skewY(30deg);
          }
        }
      }

      > .perspective {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        &.perspective-100 {
          transform: rotateX(30deg) perspective(100px);
        }

        &.perspective-300 {
          transform: rotateX(30deg) perspective(300px);
        }

        &.perspective-500 {
          transform: rotateX(30deg) perspective(500px);
        }

        .item {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-right: 5px;
          width: 100px;
          height: 100px;
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
          }
        }
      }

      > .transform-origin {
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
          width: 100px;
          height: 100px;
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
          }

          &.transform-origin-left-top {
            transform: rotate(30deg);
            transform-origin: left top;
          }

          &.transform-origin-right-bottom {
            transform: rotate(30deg);
            transform-origin: right bottom;
          }

          &.transform-origin-center {
            transform: rotate(30deg);
            transform-origin: 100px 100px;
          }
        }
      }
    }
  }
}

</style>
