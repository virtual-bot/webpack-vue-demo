<template>
  <div id="demo-text">
    <div class="page">
      <div class="page-title">
        <p>文字样式</p>
      </div>
      <div class="title">
        <p>Text</p>
      </div>
      <div class="section">
        <div class="section-title">
          <p>color</p>
        </div>
        <div class="color">
          <p class="p color-red">color: red</p>
          <p class="p color-000">color: #000</p>
          <p class="p color-ffb400">color: #ffb400</p>
          <p class="p color-rgb">color: rgb(255, 0, 0)</p>
          <p class="p color-rgba">color: rgba(255, 0, 0, 0.5)</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>font-size</p>
        </div>
        <div class="font-size">
          <p class="p size-12">font-size: 12px</p>
          <p class="p size-24">font-size: 24px</p>
          <p class="p size-36">font-size: 36px</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>font-style</p>
        </div>
        <div class="font-style">
          <p class="p normal">font-style: normal;</p>
          <p class="p italic">font-style: italic;</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>font-weight</p>
        </div>
        <div class="font-weight">
          <p class="p normal">font-weight: normal;</p>
          <p class="p bold">font-weight: bold;</p>
          <p class="p number1">font-weight: 100;</p>
          <p class="p number2">font-weight: 700;</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>text-decoration</p>
        </div>
        <div class="text-decoration">
          <p class="p none">text-decoration: none;</p>
          <p class="p underline">text-decoration: underline;</p>
          <p class="p line-through">text-decoration: line-through;</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>text-align</p>
        </div>
        <div class="text-align">
          <p class="p left">text-align: left;</p>
          <p class="p center">text-align: center;</p>
          <p class="p right">text-align: right;</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>line-height</p>
        </div>
        <div class="line-height">
          <p class="p number-20">line-height: 20px;</p>
          <p class="p number-40">line-height: 40px;</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>line-height</p>
        </div>
        <div class="font-family">
          <p class="p tttgb">font-family: TTTGB;</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">
          <p>text-overflow（注意必须写numberOfLines属性才会生效）</p>
        </div>
        <div class="text-overflow">
          <p class="p clip" :numberOfLines="1">text-overflow: clip;text-overflow: clip;text-overflow: clip;</p>
          <p class="p ellipsis" :numberOfLines="1">text-overflow: ellipsis;text-overflow: ellipsis;text-overflow: ellipsis;</p>
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
#demo-text {
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

      > .color {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;

          &.color-red{
            color: red;
          }

          &.color-000{
            color: #000;
          }

          &.color-ffb400 {
            color: #ffb400;
          }

          &.color-rgb {
            color: rgb(255, 0, 0);
          }

          &.color-rgba {
            color: rgba(255, 0, 0, 0.5);
          }
        }
      }

      > .font-size {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;

          &.size-12{
            font-size: 12px;
          }

          &.size-24{
            font-size: 24px;
          }

          &.size-36{
            font-size: 36px;
          }
        }
      }

      > .font-style {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;

          &.normal{
            font-style: normal;
          }

          &.italic{
            font-style: italic;
          }
        }
      }

      > .font-weight {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;

          &.normal{
            font-weight: normal;
          }

          &.bold{
            font-weight: bold;
          }

          &.number1 {
            font-weight: 100;
          }

          &.number2 {
            font-weight: 700;
          }
        }
      }

      > .text-decoration {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;

          &.none{
            text-decoration: none;
          }

          &.underline{
            text-decoration: underline;
          }

          &.line-through {
            text-decoration: line-through;
          }
        }
      }

      > .text-align {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;

          &.left{
            text-align: left;
          }

          &.center{
            text-align: center;
          }

          &.right {
            text-align: right;
          }
        }
      }

      > .line-height {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;
          background-color: #ac5151;

          &.number-20{
            line-height: 20px;
          }

          &.number-40{
            line-height: 40px;
          }
        }
      }

      > .font-family {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;
          background-color: #ac5151;

          &.tttgb{
            font-family: TTTGB;
          }
        }
      }

      > .text-overflow {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        width: 200px;
        height: 120px;
        background-color: #aaaaaa;

        .p {
          margin-bottom: 5px;
          font-size: 12px;
          background-color: #ac5151;
          height: 20px;
          overflow: hidden;
          line-height: 20px;

          &.clip{
            text-overflow: clip;
          }

          &.ellipsis{
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}

</style>
