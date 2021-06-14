<template>
  <div id="dialog-demo">
    <div class="dialog-demo-button-1" @click="clickView">
      <span class="button-text">显示/隐藏对话框</span>
    </div>
    <div class="btn-wrap">
      <button class="btn" @click="animated = false"><span>关闭动画</span></button>
      <button class="btn" @click="animated = true"><span>打开动画</span></button>
      <button class="btn" @click="animationType = 'none'"><span>none</span></button>
      <button class="btn" @click="animationType = 'slide'"><span>slide</span></button>
      <button class="btn" @click="animationType = 'fade'"><span>fade</span></button>
      <button class="btn" @click="animationType = 'pop'"><span>pop</span></button>
      <button class="btn" @click="animationType = 'slide_fade'"><span>slide_fade</span></button>
      <button class="btn" @click="animationType = 'slide-top'"><span>slide-top</span></button>
      <button class="btn" @click="animationType = 'slide-right'"><span>slide-right</span></button>
      <button class="btn" @click="animationType = 'slide-left'"><span>slide-left</span></button>
      <button class="btn" @click="immersionStatusBar = true">
        <span>immersionStatusBar=true</span>
      </button>
      <button class="btn" @click="immersionStatusBar = false">
        <span>immersionStatusBar=false</span>
      </button>
      <button class="btn" @click="darkStatusBarText = true">
        <span>darkStatusBarText=true</span>
      </button>
      <button class="btn" @click="darkStatusBarText = false">
        <span>darkStatusBarText=false</span>
      </button>
    </div>
    <!-- dialog 无法支持 v-show，只能使用 v-if 进行显示切换 onOrientationChange 暂时无效 -->
    <dialog
      class="dialog-demo"
      :animated="animated"
      :animationType="animationType"
      :animationDuration="300"
      :barrierColor="'rgba(0, 0, 0, 0.4)'"
      :immersionStatusBar="immersionStatusBar"
      :darkStatusBarText="darkStatusBarText"
      :supportedOrientations="supportedOrientations"
      v-if="dialogIsVisible"
      @show="onShow"
      @requestClose="onClose"
      @orientationChange="onOrientationChange"
    >
      <!-- iOS 平台上 dialog 必须只有一个子节点 -->
      <!-- dialog 里的布局比较奇怪，碰到问题请联系终端同学 -->
      <div class="dialog-demo-wrapper">
        <!-- 空白区域点击关闭 -->
        <div class="fullscreen center row" @click="clickView">
          <!-- 内容区域阻止点击事件冒泡导致关闭 -->
          <div class="dialog-demo-close-btn center column" @click="stopPropagation">
            <p class="dialog-demo-close-btn-text">点击空白区域关闭</p>
            <button class="dialog-demo-button-1" @click="clickOpenSecond">
              <span class="button-text">点击打开二级全屏弹窗</span>
            </button>
            <p v-if="showText">{{showText}}</p>
          </div>
          <dialog
            :animationType="animationType"
            :immersionStatusBar="immersionStatusBar"
            v-if="dialog2IsVisible"
            @requestClose="onClose">
            <div @click="clickOpenSecond" class="dialog-2-demo-wrapper">
              <p>Hello 我是二级全屏弹窗，点击任意位置关闭。</p>
            </div>
          </dialog>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  methods: {
    clickView() {
      this.dialogIsVisible = !this.dialogIsVisible;
    },
    clickOpenSecond(evt) {
      evt.stopPropagation(); // 二级弹窗关闭时会冒泡到这里，所以也要阻止一下冒泡防止一级 dialog 消失
      this.dialog2IsVisible = !this.dialog2IsVisible;
    },
    onShow() {
      console.log('Dialog is opening');
      this.showText = 'show';
    },
    onClose(evt) {
      console.log('Dialog is closing');
      evt.stopPropagation();
      // Dialog 会响应硬件返回按钮，所以需要在这里关闭弹窗。
      // 如果第二层弹窗是展开的，则只关闭二层弹窗，否则关闭一层弹窗
      if (this.dialog2IsVisible) {
        this.dialog2IsVisible = false;
      } else {
        this.dialogIsVisible = false;
        this.showText = '';
      }
      console.log('Dialog is closing');
    },
    onOrientationChange () {
      console.log('Dialog is change orientation');
    },
    stopPropagation(evt) {
      evt.stopPropagation();
    },
  },
  data() {
    return {
      animated: true,
      animationType: 'none',
      immersionStatusBar: false,
      darkStatusBarText: false,
      supportedOrientations: [
        'portrait',
        'portrait-upside-down',
        'landscape',
        'landscape-left',
        'landscape-right',
      ],
      dialogIsVisible: false,
      dialog2IsVisible: false,
      showText: '',
    };
  },
  // 绑定 Vue-Router 的返回 hook
  beforeRouteLeave(to, from, next) {
    // 如果弹窗没开，就返回上一页。
    if (!this.dialogIsVisible) {
      next();
    }
  },
};
</script>

<style scope>
  #dialog-demo {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
  }

  .dialog-demo-button-1 {
    height: 30px;
    width: 200px;
    border-style: solid;
    border-color: #40b883;
    border-width: 1px;
    border-radius: 5px;
  }

  .dialog-demo-button-1 .button-text {
    line-height: 30px;
    text-align: center;
  }

  .dialog-demo {
    position: absolute;
    background-color: transparent;
  }

  .btn-wrap {
    margin: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn {
    height: 30px;
    margin-right: 8px;
    margin-bottom: 5px;
    border-radius: 5px;
    border-color: #333333;
    border-width: 1px;
    border-style: solid;
  }

  .btn span {
    margin-left: 2px;
    margin-right: 2px;
    line-height: 30px;
    text-align: center;
  }

  .dialog-demo-wrapper {
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .dialog-demo-wrapper .fullscreen {
    /*background-color: rgba(0, 0, 0, 0.3);*/
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    /*bottom: 0;*/
  }

  .dialog-demo-close-btn {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    margin-top: 300px;
    background-color: red;
    border-radius: 8px;
  }

  .dialog-demo-close-btn-text {
    width: 200px;
    font-size: 22px;
    line-height: 40px;
    flex-direction: column;
    text-align: center;
  }

  .dialog-2-demo-wrapper {
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
