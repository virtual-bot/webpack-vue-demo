<template>
  <div id="demo">
    <div :style="{ alignItems:'center' }">
      <div class="input-box">
        <input type="text" v-model="url"/>
        <button class="input-button" @click="handleConnect">
          <span>连接</span>
        </button>
      </div>
      <div class="controller-box">
        <div v-for="(item,index) in tests" :key="index" @click="item.fun()" :style="{height: 40,width: 130,alignItems: 'center',justifyContent: 'center',marginTop: 20,backgroundColor:item.color}">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="info-box">
        <p>{{socketInfo}}</p>
        <p>{{message}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#demo {
  flex: 1;
  overflow-y: scroll;
}

.input-box {
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.input-box input {
  width: 200px;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #40b883;
}

.input-button {
  width: 100px;
  height: 40px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  background-color: #40b883;
}

.controller-box {
  margin-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #2525e0;
}

.info-box {
  flex: 1;
  margin-top: 40px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #2525e0;
}
</style>

<script>
export default {
  name: 'webocket-test',
  data() {
    return {
      url: 'ws://localhost:8056',
      socket: null,
      message: '',
      tests: [],
    };
  },
  computed: {
    socketInfo() {
      return JSON.stringify({
        url: this.socket?.url,
        readyState: this.socket?.readyState,
        isReady: this.isReady,
      }, null, 2);
    },
    isReady() {
      return this.socket?.readyState === 1;
    },
  },
  methods: {
    handleConnect() {
      this.socket = new WebSocket(this.url);
      this.socket.onopen = () => {
        this.message += 'event <-- onopen\n';
      }
      this.socket.onmessage = (data) => {
        this.message += `event <-- onmessage: ${data}\n`;
      }
      this.socket.onclose = () => {
        this.message += 'event <-- onclose\n';
      }
      this.socket.onerror = (error) => {
        this.message += `event <-- onerror: ${error}\n`;
      }
    },
    handleSend() {
      if (this.isReady) {
        this.socket.send('hello world');
        this.message += 'send --> hello world\n';
      }
    },
    handleClose() {
      if (this.isReady) {
        this.socket.close();
        this.message += 'close -->\n';
      }
    },
  },
  created() {
    this.tests = [
      {
        name: '发送消息',
        fun: this.handleSend,
        color: '#4753b3',
      },
      {
        name: '关闭连接',
        fun: this.handleClose,
        color: '#40b883',
      },
    ];
  }
};
</script>
