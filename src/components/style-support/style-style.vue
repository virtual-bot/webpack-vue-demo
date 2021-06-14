<template>
  <div id="demo-style">
    <div class="page">
      <div class="page-title">
        <p>其他样式</p>
      </div>
      <div class="title">
        <p>Style</p>
      </div>
      <div class="section">
        <div class="section-title">
          <p>opacity</p>
        </div>
        <div class="opacity">
          <div class="item opacity-20">
            <p>opacity: 0.2</p>
          </div>
          <div class="item opacity-80">
            <p>opacity: 0.8</p>
          </div>
          <div class="item">
            <p class="opacity-50">text opacity: 0.5</p>
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
#demo-style {
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

      > .opacity {
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
          background-color: #ac5151;

          p {
            font-size: 12px;
            color: #fff;
          }

          &.opacity-20{
            opacity: 0.2;
          }

          &.opacity-80{
            opacity: 0.8;
          }

          p.opacity-50 {
            opacity: 0.5;
          }
        }
      }
    }
  }
}

</style>
