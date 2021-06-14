<template>
  <div id="demo-animation">
    <div class="demo-box">
      <!--      四个方框旋转           -->
      <div class="title"><p>demo 1</p></div>
      <div class="demo">
        <div class="boxDemo item1"></div>
        <div class="boxDemo item2"></div>
        <div class="boxDemo item3"></div>
        <div class="boxDemo item4"></div>
      </div>
      <!--      四个方框旋转          -->
      <!--      loading效果         -->
      <!--      <div class="title"><p>demo 2</p></div>-->
      <!--      <div class="demo2">-->
      <!--        <div class="box1"></div>-->
      <!--        <div class="box2"></div>-->
      <!--        <div class="box3"></div>-->
      <!--        <div class="box4"></div>-->
      <!--      </div>-->
      <!--      loading效果         -->
      <!--      开关灯效果         -->
      <div class="title"><p>demo 3</p></div>
      <div class="demo3">
        <div class="box">
          <div class="switch-box">
            <div class="switch-button"></div>
          </div>
          <div class="light"></div>
        </div>
      </div>
      <!--      开关灯效果         -->

      <!--      loading效果2         -->
      <div class="title"><p>demo 4</p></div>
      <div class="demo4">
        <div class="box item1"></div>
        <div class="box item2"></div>
        <div class="box item3"></div>
        <div class="box item4"></div>
        <div class="box item5"></div>
        <div class="box item6"></div>
        <div class="box item7"></div>
      </div>
      <!--      loading效果2         -->
      <!--      图片渐变         -->
      <div class="title"><p>demo 5</p></div>
      <div class="demo5">
        <img
          src="https://w.wallhaven.cc/full/nr/wallhaven-nrmmgm.png" class="pic1">
        <img
          src="https://w.wallhaven.cc/full/5w/wallhaven-5w6lx7.jpg" class="pic2">
      </div>
      <!--      图片渐变         -->


    </div>
  </div>
</template>
<script>
  export default {
    name: "style-animation",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  #demo-animation {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;

    .demo-box {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .title {
        width: 100px;
        height: 50px;
        padding-top: 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      .demo {
        width: 300px;
        height: 300px;
        background-color: #e4e4e4;

        .boxDemo {
          width: 100px;
          height: 100px;
          position: absolute;
          background-color: red;

          &.item1 {
            animation: boxMoveAndColorChange 4s linear 0s infinite normal forwards running;
          }

          &.item2 {
            animation: boxMoveAndColorChange1 2s ease 0s infinite normal forwards running;
          }

          &.item3 {
            animation: boxMoveAndColorChange2 4s linear 0s infinite normal forwards running;
          }

          &.item4 {
            animation: boxMoveAndColorChange3 2s ease 0s infinite normal forwards running;
          }
        }
      }

      .demo2 {
        width: 300px;
        height: 100px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #e4e4e4;

        .box1 {
          width: 70px;
          height: 40px;
          position: absolute;
          left: 0;
          background-color: greenyellow;
          animation: boxLoad1 2s linear 0s infinite alternate forwards running;
        }

        .box2 {
          width: 70px;
          height: 40px;
          position: absolute;
          left: 70px;
          background-color: greenyellow;
          /*animation: boxMoveAndColorChange 4s linear 0s infinite normal forwards running;*/
        }

        .box3 {
          width: 70px;
          height: 40px;
          position: absolute;
          left: 140px;
          background-color: greenyellow;
          /*animation: boxMoveAndColorChange 4s linear 0s infinite normal forwards running;*/
        }

        .box4 {
          width: 70px;
          height: 40px;
          position: absolute;
          left: 210px;
          background-color: greenyellow;
          /*animation: boxMoveAndColorChange 4s linear 0s infinite normal forwards running;*/
        }
      }

      .demo3 {
        .box {
          width: 300px;
          height: 150px;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: #444444;

          .switch-box {
            width: 150px;
            height: 50px;
            border-radius: 25px;
            background-color: #1F2736;

            .switch-button {
              position: absolute;
              height: 50px;
              width: 50px;
              border-radius: 25px;
              background-color: #283446;
              animation: switch 4s linear 2s infinite normal forwards running;
            }
          }

          .light {
            height: 30px;
            width: 30px;
            border-radius: 15px;
            margin-left: 20px;
            animation: lightColor 4s linear 2s infinite normal forwards running;
          }

        }
      }

      .demo4 {
        width: 300px;
        height: 100px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #e4e4e4;

        .box {
          width: 30px;
          height: 100px;
          position: absolute;
          background-color: greenyellow;

          &.item1 {
            left: 0;
            animation: boxLoad 2s linear 0s infinite normal forwards running;
          }

          &.item2 {
            left: 45px;
            animation: boxLoad 2s linear 200ms infinite normal forwards running;
          }

          &.item3 {
            left: 90px;
            animation: boxLoad 2s linear 400ms infinite normal forwards running;
          }

          &.item4 {
            left: 135px;
            animation: boxLoad 2s linear 600ms infinite normal forwards running;
          }

          &.item5 {
            left: 180px;
            animation: boxLoad 2s linear 800ms infinite normal forwards running;
          }

          &.item6 {
            left: 225px;
            animation: boxLoad 2s linear 1000ms infinite normal forwards running;
          }

          &.item7 {
            left: 270px;
            animation: boxLoad 2s linear 1200ms infinite normal forwards running;
          }
        }
      }

      .demo5 {
        width: 300px;
        height: 300px;

        .pic1 {
          width: 300px;
          height: 300px;
        }

        .pic2 {
          position: absolute;
          width: 300px;
          height: 300px;
          left: 0;
          top: 0;
          animation: picDraw 10s linear 0s infinite normal forwards running;
        }
      }


    }
  }


  /* 方形框框移动 + 变色 */
  @keyframes boxMoveAndColorChange {
    0% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
    25% {
      background-color: yellow;
      left: 200px;
      top: 0px;
    }
    50% {
      background-color: blue;
      left: 200px;
      top: 200px;
    }
    75% {
      background-color: green;
      left: 0px;
      top: 200px;
    }
    100% {
      background-color: red;
      left: 0px;
      top: 0px;
    }

  }

  @keyframes boxMoveAndColorChange1 {
    0% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
    25% {
      background-color: green;
      left: 0px;
      top: 200px;
    }

    50% {
      background-color: blue;
      left: 200px;
      top: 200px;
    }
    75% {
      background-color: yellow;
      left: 200px;
      top: 0px;
    }
    100% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
  }

  @keyframes boxMoveAndColorChange2 {
    0% {
      background-color: red;
      left: 0px;
      top: 100px;
    }
    50% {
      background-color: greenyellow;
      transform: rotate(40deg);

      left: 200px;
      top: 100px;
    }
    100% {
      background-color: red;
      left: 0px;
      top: 100px;
    }
  }

  @keyframes boxMoveAndColorChange3 {
    0% {
      background-color: red;
      left: 100px;
      top: 0px;
    }
    50% {
      background-color: greenyellow;
      transform: rotate(90deg);

      left: 100px;
      top: 200px;
    }
    100% {
      background-color: red;
      left: 100px;
      top: 0px;
    }
  }

  /* 方形框框移动 + 变色 */
  /* loading效果 */
  @keyframes boxLoad {
    0% {
      top: 0;
      height: 100px;
    }

    50% {
      top: 25px;
      height: 50px;
    }

    100% {
      top: 0;
      height: 100px;
    }
  }

  /* loading效果 */
  /* 开关灯效果 */
  @keyframes switch {
    0% {
      left: 0;
    }
    25% {
      left: 100px;
    }
    75% {
      left: 100px;
    }
    100% {
      left: 0;
    }
  }

  @keyframes lightColor {
    0% {
      background-color: #1F2736;
    }
    25% {
      background-color: #b9f3fe;
    }
    70% {
      background-color: #b9f3fe;
    }
    100% {
      background-color: #1F2736;
    }
  }

  /* 开关灯效果 */

  /* 图片渐变 */
  @keyframes picDraw {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* 图片渐变 */


</style>
