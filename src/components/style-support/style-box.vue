<template>
  <div id="demo-box">
    <div class="page">
      <div class="page-title">
        <p>盒模型相关</p>
      </div>
      <div class="title">
        <p>box-sizing: border-box</p>
      </div>
      <div class="title">
        <p>width = content-width + padding + border</p>
      </div>
      <div class="section">
        <p class="section-title">width: 100</p>
        <p class="section-title">height: 100</p>
        <p class="section-title">border-width: 10px;</p>
        <p class="section-title">border-color: yellow;</p>
        <p class="section-title">border-style: solid;</p>
        <p class="section-title">padding-top: 10px;</p>
        <p class="section-title">padding-right: 10px;</p>
        <p class="section-title">margin-top: 10px;</p>
        <p class="section-title">margin-left: 10px;</p>
        <p class="section-title">目前单位只支持数字，对应终端的pt，px单位会自动转换为无单位</p>
        <div class="width">
          <div class="box">
            <div class="inner"></div>
          </div>
        </div>
      </div>
      <div class="title">
        <p>max-width</p>
      </div>
      <div class="section">
        <div class="max-width1">
          <p class="section-title">flex: 1;max-width: 不设置;</p>
        </div>
        <div class="max-width2">
          <p class="section-title">flex: 1;max-width: 100px;</p>
        </div>
      </div>
      <div class="title">
        <p>min-width</p>
      </div>
      <div class="section" :style="{selfAlign: 'stretch'}">
        <div :style="{alignSelf: 'stretch', flex: 1,display: 'flex', flexDirection: 'row',}">
          <div class="min-width1" :style="{backgroundColor: 'grey'}">
            <p class="section-title"></p>
          </div>
          <div :style="{flex: 1, height: '30px', backgroundColor: '#ffb400'}">
            <p>flex: 1</p>
          </div>
        </div>
        <div :style="{alignSelf: 'stretch', flex: 1,display: 'flex', flexDirection: 'row',}">
          <div class="min-width2" :style="{minWidth: '200px', backgroundColor: 'grey'}">
            <p class="section-title">min-width: 200px;</p>
          </div>
          <div :style="{flex: 1, height: '30px', backgroundColor: '#ffb400'}">
            <p>flex: 1</p>
          </div>
        </div>
      </div>
      <div class="title">
        <p>max-height</p>
      </div>
      <div class="section max-height">
        <div class="max-height1">
          <p class="section-title">flex: 1;max-width: 不设置;</p>
        </div>
        <div class="max-height2">
          <p class="section-title">flex: 1;max-height: 50px;</p>
        </div>
      </div>
      <div class="title">
        <p>min-height</p>
      </div>
      <div class="section" :style="{height: '200px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}">
        <div :style="{width: '50px',display: 'flex', flexDirection: 'column',marginRight: '30px'}">
          <div :style="{backgroundColor: 'grey'}"></div>
          <div :style="{flex: 1, backgroundColor: '#ffb400'}">
            <p>flex: 1</p>
          </div>
        </div>
        <div :style="{width: '50px',display: 'flex', flexDirection: 'column',}">
          <div :style="{width: '50px', minHeight: '150px', backgroundColor: 'grey'}">
            <p class="section-title">min-height: 150px;</p>
          </div>
          <div :style="{flex: 1, backgroundColor: '#ffb400'}">
            <p>flex: 1</p>
          </div>
        </div>
      </div>
<!--      <div class="title">-->
<!--        <p>overflow</p>-->
<!--      </div>-->
<!--      <div class="section">-->
<!--        <p class="section-title">overflow</p>-->
<!--        <div class="border">-->
<!--          <div class="box border-top"></div>-->
<!--          <div class="box border-top-width border-top-color border-top-style"></div>-->
<!--          <div class="box border-right"></div>-->
<!--          <div class="box border-right-width border-right-color border-right-style"></div>-->
<!--          <div class="box border-bottom"></div>-->
<!--          <div class="box border-bottom-width border-bottom-color border-bottom-style"></div>-->
<!--          <div class="box border-left"></div>-->
<!--          <div class="box border-left-width border-left-color border-left-style"></div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="title">
        <p>overflow</p>
      </div>
      <div class="section">
        <p class="section-title">overflow</p>
        <div class="overflow">
<!--          <div class="box"></div>-->
          <div class="box scroll">
            <div class="child"></div>
          </div>
          <div class="box visible">
            <div class="child"></div>
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
#demo-box {
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
    overflow: visible;
    //flex: 1;

    .page-title {
      font-size: 28px;
    }

    .title {
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
        margin-bottom: 10px;
        font-size: 14px;
        color: #666;
      }

      > .width {
        display: flex;
        flex-direction: column;
        //align-items: center;
        //justify-content: center;
        //margin: 0 auto;
        width: 200px;
        height: 200px;
        background-color: #ac5151;

        .box {
          display: flex;
          flex-direction: column;
          //margin: 10px 0 0 0;
          margin-top: 10px;
          margin-left: 10px;
          padding-top: 10px;
          padding-right: 10px;
          width: 100px;
          height: 100px;
          //border: 10px solid #e4e4e4;
          //border-width: 10px 0 0 10px;
          border-top-width: 10px;
          border-top-color: yellow;
          border-top-style: solid;
          border-right-width: 5px;
          border-right-color: burlywood;
          border-right-style: dotted;
          border-bottom-width: 10px;
          border-bottom-color: yellow;
          border-bottom-style: dashed;
          //border-color: yellow;
          //border-style: solid;
          background-color: black;
          //border-radius: 10px;
          border-bottom-right-radius: 10px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;

          .inner {
            flex: 1;
            background-color: #fff
          }
        }
      }

      > .max-width1 {
        align-self: stretch;
        margin-bottom: 10px;
        height: 50px;
        background-color: #ac5151;
        p {
          color: #fff;
        }
      }

      > .max-width2 {
        align-self: stretch;
        max-width: 200px;
        height: 50px;
        background-color: #ac5151;

        p {
          color: #fff;
        }
      }

      &.max-height {
        display: flex;
        flex-direction: row;
        height: 100px;
        border-color: #aaaaaa;
      }

      > .max-height1 {
        align-self: stretch;
        margin-right: 10px;
        width: 100px;
        background-color: #ac5151;

        p {
          color: #fff;
        }
      }

      > .max-height2 {
        align-self: stretch;
        max-height: 50px;
        width: 100px;
        background-color: #ac5151;

        p {
          color: #fff;
        }
      }

      > .overflow {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        //.box {
        //  flex-shrink: 0;
        //  flex-grow: 0;
        //  flex-basis: 150px;
        //  margin-left: 50px;
        //  width: 100px;
        //  height: 150px;
        //  background-color: #cccccc;
        //}
        .box {
          margin-bottom: 30px;
          width: 300px;
          height: 100px;
          background-color: #ac5151;

          &.scroll {
            overflow-y: scroll;
          }

          &.visible {
            overflow: visible;
          }

          .child {
            flex-shrink: 0;
            flex-grow: 0;
            flex-basis: 300px;
            margin-left: 50px;
            width: 100px;
            height: 200px;
            background-color: #40b883;
          }
        }
      }
    }
  }
}

</style>
