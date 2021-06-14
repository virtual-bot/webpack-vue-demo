<template>
  <div id="demo-position">
    <div class="page">
      <div class="page-title">
        <p>定位</p>
      </div>
      <div class="title">
        <p>position</p>
      </div>
      <div class="section">
        <p class="section-title">position: relative</p>
        <div class="position">
          <div class="box relative">
            <p>relative</p>
          </div>
          <div class="center">
            <p>relative box</p>
          </div>
        </div>
        <p class="section-title">position: absolute</p>
        <div class="position">
          <div class="box absolute">
            <p>absolute</p>
          </div>
          <div class="center">
            <p>relative box</p>
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
#demo-position {
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

      > .position {
        position: relative;
        width: 300px;
        height: 300px;
        background-color: #ac5151;

        .box {
          position: relative;
          top: 100px;
          left: 100px;
          width: 150px;
          height: 150px;
          background-color: burlywood;

          &.relative {
            position: relative;
          }

          &.absolute {
            position: absolute;
          }
        }

        .center {
          position: relative;
          left: 20px;
          width: 100px;
          height: 100px;
          background-color: rosybrown;
        }
      }
    }
  }
}

</style>
