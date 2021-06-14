<template>
  <div id="demo-flex">
    <div class="page">
      <div class="page-title">
        <p>Style</p>
      </div>
      <div class="title">
        <p>display</p>
      </div>
<!--      <p class="desc">注意：Flutter-Render中display只能为flex或者none</p>-->
      <div class="section">
        <p class="section-title">display: flex</p>
        <div class="display flex"></div>
        <p class="section-title">display: none</p>
        <div class="display none"></div>
      </div>
      <div class="title">
        <p>flex-direction</p>
      </div>
      <div class="section">
        <p class="section-title">flex-direction: row</p>
        <div class="flex-direction row">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item3"></div>
        </div>
        <p class="section-title">flex-direction: row-reverse</p>
        <div class="flex-direction row-reverse">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item3"></div>
        </div>
        <p class="section-title">flex-direction: column</p>
        <div class="flex-direction column">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item3"></div>
        </div>
        <p class="section-title">flex-direction: column-reverse</p>
        <div class="flex-direction column-reverse">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item3"></div>
        </div>
      </div>
      <div class="title">
        <p>flex-wrap</p>
      </div>
      <div class="section">
        <p class="section-title">flex-wrap: nowrap</p>
        <div class="flex-wrap nowrap">
          <div class="item" v-for="i in 16" :key="i"></div>
        </div>
        <p class="section-title">flex-wrap: wrap</p>
        <div class="flex-wrap wrap">
          <div class="item" v-for="i in 16" :key="i"></div>
        </div>
        <p class="section-title">flex-wrap: wrap-reverse</p>
        <div class="flex-wrap wrap-reverse">
          <div class="item" v-for="i in 16" :key="i"></div>
        </div>
      </div>
      <div class="title">
        <p>align-items</p>
      </div>
      <div class="section">
        <p class="section-title">align-items: stretch</p>
        <div class="align-items stretch">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-items: flex-start</p>
        <div class="align-items flex-start">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-items: center</p>
        <div class="align-items center">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-items: flex-end</p>
        <div class="align-items flex-end">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-items: baseline</p>
        <div class="align-items baseline">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
      </div>
      <div class="title">
        <p>align-self</p>
      </div>
      <div class="section">
        <p class="section-title">align-self: auto</p>
        <div class="align-self auto">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-self: stretch</p>
        <div class="align-self stretch">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-self: flex-start</p>
        <div class="align-self flex-start">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-self: center</p>
        <div class="align-self center">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-self: flex-end</p>
        <div class="align-self flex-end">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
        <p class="section-title">align-self: baseline</p>
        <div class="align-self baseline">
          <div class="item" :class="`item${i}`" v-for="i in 4" :key="i"></div>
        </div>
      </div>
      <div class="title">
        <p>justify-content</p>
      </div>
      <div class="section">
        <p class="section-title">justify-content: flex-start</p>
        <div class="justify-content flex-start">
          <div class="item" :class="`item${i}`" v-for="i in 3" :key="i"></div>
        </div>
        <p class="section-title">justify-content: center</p>
        <div class="justify-content center">
          <div class="item" :class="`item${i}`" v-for="i in 3" :key="i"></div>
        </div>
        <p class="section-title">justify-content: flex-end</p>
        <div class="justify-content flex-end">
          <div class="item" :class="`item${i}`" v-for="i in 3" :key="i"></div>
        </div>
        <p class="section-title">justify-content: space-between</p>
        <div class="justify-content space-between">
          <div class="item" :class="`item${i}`" v-for="i in 3" :key="i"></div>
        </div>
        <p class="section-title">justify-content: space-around</p>
        <div class="justify-content space-around">
          <div class="item" :class="`item${i}`" v-for="i in 3" :key="i"></div>
        </div>
        <p class="section-title">justify-content: space-evenly 暂不支持</p>
        <div class="justify-content space-evenly">
          <div class="item" :class="`item${i}`" v-for="i in 3" :key="i"></div>
        </div>
      </div>
      <div class="title">
        <p>flex basic</p>
      </div>
      <div class="section">
        <div class="flex">
          <div v-for="i in 2" class="item" :key="i">
            <p class="item-text">block</p>
          </div>
        </div>
        <div class="flex">
          <div v-for="i in 3" class="item" :key="i">
            <p class="item-text">block</p>
          </div>
        </div>
        <div class="flex">
          <div v-for="i in 6" class="item" :key="i">
            <p class="item-text">block</p>
          </div>
        </div>
        <div class="flex2">
          <div class="item">
            <p class="item-text"></p>
          </div>
          <div class="item item2">
            <p class="item-text"></p>
          </div>
          <div class="item">
            <p class="item-text"></p>
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
#demo-flex {
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
    align-items: stretch;
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
      //align-items: stretch;

      &-title {
        margin-bottom: 10px;
        font-size: 14px;
        color: #666;
      }

      > .display {
        height: 50px;

        p {
          flex: 1;
          text-align: center;
          line-height: 30px;
          color: #bbb;
          font-size: 14px;
        }

        &.flex {
          background-color: #ebebef;
        }

        &.none {
          display: none;
          background-color: #ebebef;
        }
      }

      > .flex-direction {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e4e4e4;

        &.row {
          flex-direction: row;
        }
        &.row-reverse {
          flex-direction: row-reverse;
        }
        &.column {
          flex-direction: column;
        }
        &.column-reverse {
          flex-direction: column-reverse;
        }

        .item1 {
          margin: 10px;
          width: 30px;
          height: 30px;
          background-color: burlywood;
        }

        .item2 {
          margin: 10px;
          width: 40px;
          height: 40px;
          background-color: rosybrown;
        }

        .item3 {
          margin: 10px;
          width: 50px;
          height: 50px;
          background-color: cornflowerblue;
        }
      }

      > .flex-wrap {
        display: flex;
        flex-direction: row;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e4e4e4;

        &.nowrap {
          flex-wrap: nowrap;
        }

        &.wrap {
          flex-wrap: wrap;
        }

        &.wrap-reverse {
          flex-wrap: wrap-reverse;
        }

        .item {
          margin: 5px;
          flex-basis: 30px;
          flex-shrink: 0;
          flex-grow: 0;
          //width: 30px;
          height: 30px;
          background-color: #ebebef;
        }
      }

      > .align-items {
        display: flex;
        flex-direction: row;
        height: 60px;
        background-color: #ac5151;

        &.stretch {
          align-items: stretch;

          .item.item2 {
          }
        }

        &.flex-start {
          align-items: flex-start;
        }

        &.center {
          align-items: center;
        }

        &.flex-end {
          align-items: flex-end;
        }

        &.baseline {
          align-items: baseline;
        }

        .item {
          width: 30px;
          height: 30px;
          margin: 0 5px;
          //margin-left: 5px;
          //margin-right: 5px;
          background-color: #ebebef;

          &.item1 {
            height: 10px;
          }
          &.item3 {
            height: 50px;
          }
        }
      }

      > .align-self {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 60px;
        background-color: #ac5151;

        &.auto {
          .item.item2 {
            height: 30px;
            align-self: auto;
          }
        }

        &.stretch {
          .item.item2 {
            align-self: stretch;
          }
        }

        &.flex-start {
          .item.item2 {
            align-self: flex-start;
          }
        }

        &.center {
          .item.item2 {
            align-self: center;
          }
        }

        &.flex-end {
          .item.item2 {
            align-self: flex-end;
          }
        }

        &.baseline {
          .item.item2 {
            align-self: baseline;
          }
        }

        .item {
          width: 30px;
          height: 30px;
          margin: 0 5px;
          //margin-left: 5px;
          //margin-right: 5px;
          background-color: #ebebef;

          &.item1 {
            height: 10px;
          }
          &.item3 {
            height: 50px;
          }
        }
      }

      > .justify-content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 60px;
        background-color: #ac5151;

        &.flex-start {
          justify-content: flex-start;
        }
        &.center {
          justify-content: center;
        }
        &.flex-end {
          justify-content: flex-end;
        }
        &.space-between {
          justify-content: space-between;
        }
        &.space-between {
          justify-content: space-around;
        }
        &.space-evenly {
          justify-content: space-evenly;
        }

        .item {
          height: 30px;
          margin-left: 5px;
          margin-right: 5px;
          background-color: #ebebef;

          &.item1 {
            width: 30px;
          }
          &.item2 {
            width: 100px;
          }
          &.item3 {
            width: 70px;
          }
        }
      }

      > .flex {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        height: 30px;

        .item {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: 0 5px;
          //margin-left: 5px;
          //margin-right: 5px;
          height: 30px;
          border-radius: 6px;
          background-color: #ebebef;

          &-text {
            flex: 1;
            padding: 0 5px;
            //display: flex;
            //flex-direction: column;
            //align-items: center;
            //justify-content: center;
            color: #bbb;
            font-size: 14px;
          }
        }

        .item-a {
          display: flex;
          flex-direction: column;
          margin: 0 5px;
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background-color: #ebebef;

          &.item2 {
            //flex: 0 0 30px;
            flex: 30px;
          }
        }
      }

      > .flex2 {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        height: 30px;

        .item {
          display: flex;
          flex-direction: column;
          //margin-left: 5px;
          //margin-right: 5px;
          margin: 0 5px;
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background-color: #ebebef;

          &.item2 {
            //flex: 0 0 30px;
            flex: 30px;
          }
        }
      }
    }
  }
}

</style>
