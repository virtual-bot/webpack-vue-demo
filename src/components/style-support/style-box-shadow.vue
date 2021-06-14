<template>
  <div id="demo-box-shadow">
    <div class="page">
      <div class="page-title">
        <p>阴影</p>
      </div>
      <div class="title">
        <p>Box-Shadow</p>
      </div>
      <div class="section">
        <div class="section-title">
          <p>box-shadow</p>
        </div>
        <div class="background-color">
          <div class="item">
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
#demo-box-shadow {
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
          background-color: #ac5151;
          box-shadow: 3px 3px red, -3px 0 2px olive;
          //box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

          p {
            font-size: 12px;
            color: #fff;
          }

        }
      }
    }
  }
}

</style>
