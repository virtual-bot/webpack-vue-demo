<template>
  <div ref="inputDemo" id="component-input">
    <div class="scroll-container">
      <div class="module-item">
        <p class="module-item-title">基本使用，事件属性</p>
        <div class="module-item-content">
          <input
            class="module-item-content-input"
            v-model="text"
            ref="input"
            :autoFocus="true"
            :placeholder="'Text'"
            :defaultValue="'test default value'"
            @focus="onEvent($event, 'focus')"
            @blur="onEvent($event, 'blur')"
            @input="onEvent($event, 'input')"
            @change="onEvent($event, 'change')"
            @endEditing="onEvent($event, 'endEditing')"
            @layout="onEvent($event, 'layout')"
            @click="onEvent($event, 'click')"
            @selectionChange="onEvent($event, 'selectionChange')"
            @keyboardWillShow="onEvent($event, 'keyboardWillShow')"
          />
        </div>
        <div class="module-item-func">
          <div class="module-item-func-btn" @click="focus">
            <span>focus()</span>
          </div>
          <div class="module-item-func-btn" @click="blur">
            <span>blur()</span>
          </div>
          <div class="module-item-func-btn" @click="clear">
            <span>clear()</span>
          </div>
          <div class="module-item-func-btn" @click="text = 'abcdefg'">
            <span>value = 'abcdefg'</span>
          </div>
          <div class="module-item-func-btn" @click="setValue">
            <span>setValue('hhh')</span>
          </div>
          <div class="module-item-func-btn" @click="getValue">
            <span>getValue()</span>
          </div>
          <!--          <div class="module-item-func-btn" @click="showInputMethod">-->
          <!--            <span>showInputMethod</span>-->
          <!--          </div>-->
          <!--          <div class="module-item-func-btn" @click="hideInputMethod">-->
          <!--            <span>hideInputMethod</span>-->
          <!--          </div>-->
        </div>
        <div class="module-item-extra">
          <p class="module-item-extra-title">{{ 'v-model 文本内容为:' + text }}</p>
          <p class="module-item-extra-title">{{ 'getValue 文本内容为:' + getText }}</p>
          <div class="event-list">
            <div>
              <p v-for="(item, index) in eventList" :key="index">{{item.eventName}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">type="default"</p>
        <div class="module-item-content">
          <input
            class="module-item-content-input"
            type="default"
            placeholder="default"
            placeholderTextColor="red"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">type="numeric"</p>
        <div class="module-item-content">
          <input
            type="numeric"
            placeholder="default"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">type="password"</p>
        <div class="module-item-content">
          <input
            type="password"
            placeholder="default"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">type="phone-pad"</p>
        <div class="module-item-content">
          <input
            type="phone-pad"
            placeholder="default"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">type="email"</p>
        <div class="module-item-content">
          <input
            type="email"
            placeholder="default"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">caretColor="red"</p>
        <div class="module-item-content">
          <input
            :caretColor="'red'"
            placeholder="光标颜色为红色"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">maxlength="5"</p>
        <div class="module-item-content">
          <input
            :maxlength="5"
            placeholder="限制5个字符"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">disabled="true"</p>
        <div class="module-item-content">
          <input
            placeholder="不可输入框"
            class="module-item-content-input"
            :disabled="true"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">returnKeyType="done"</p>
        <div class="module-item-content">
          <input
            placeholder="returnKeyType: done"
            returnKeyType="done"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">returnKeyType="go"</p>
        <div class="module-item-content">
          <input
            placeholder="returnKeyType: go"
            returnKeyType="go"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">returnKeyType="next"</p>
        <div class="module-item-content">
          <input
            placeholder="returnKeyType: next"
            returnKeyType="next"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">returnKeyType="search"</p>
        <div class="module-item-content">
          <input
            placeholder="returnKeyType: search"
            returnKeyType="search"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">returnKeyType="send"</p>
        <div class="module-item-content">
          <input
            placeholder="returnKeyType: send"
            returnKeyType="send"
            class="module-item-content-input"
          />
        </div>
      </div>
      <div class="module-item">
        <p class="module-item-title">:numberOfLines="2" 多行具体参考textarea</p>
        <div class="module-item-content">
          <textarea
            :row="3"
            :numberOfLines="2"
            placeholder="多行文本"
            class="module-item-content-input height76"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

/**
   * 这个 Demo 里有直接操作 DOM 的章节
   */
export default {
  /**
     * 组件加载时自动 focus 第一个输入框
     */
  data() {
    return {
      text: '',
      getText: '',
      h: Vue.Native.Dimensions.window.height,
      input2Value: '123456',
      eventList: [],
    };
  },
  mounted() {
  },
  methods: {
    /**
       * 当点击顶部 View 时取消所有输入框的 focus 状态
       */
    blurAllInput() {
      this.getChildNodes(this.$refs.inputDemo.childNodes).filter(element => element.tagName === 'input').forEach(input => input.blur());
    },
    onEvent(evt, name) {
      this.eventList.push({
        eventName: name,
        event: evt,
      });
      this.eventList = this.eventList.slice(-10);
    },
    getChildNodes(childNodes) {
      return !Vue.Native ? Array.from(childNodes) : childNodes;
    },
    focus(evt) {
      evt.stopPropagation();
      this.$refs.input.focus();
    },
    blur(evt) {
      evt.stopPropagation();
      this.$refs.input.blur();
    },
    clear() {
      this.$refs.input.clear();
    },
    setValue(evt) {
      evt.stopPropagation();
      this.$refs.input.setValue('hhh');
    },
    getValue(evt) {
      evt.stopPropagation();
      this.$refs.input.getValue()
        .then((res) => {
          console.log('=========');
          console.log(res);
          this.getText = res;
        });
    },
    hideInputMethod() {
      this.$refs.input.hideInputMethod();
      // Vue.Native.callUIFunction(null, 'hideInputMethod', []);
    },
    showInputMethod() {
      this.$refs.input.showInputMethod();
      // Vue.Native.callUIFunction(null, 'showInputMethod', []);
    },
  },
};
</script>

<style scoped lang="scss">
#component-input {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;

  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .module-item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    border-bottom: 1px solid #e4e4e4;

    &-title {
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 16px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      height: 40px;
      border-width: 1px;
      border-style: solid;
      border-color: #42b983;

      &-input {
        height: 38px;
        line-height: 38px;
        font-size: 14px;

        &.height76 {
          height: 76px;
        }
      }
    }

    &-func {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;

      &-btn {
        border-color: #4c9afa;
        border-radius: 5px;
        border-width: 1px;
        margin: 10px 10px 0 0;
        width: 150px;
        height: 40px;

        span {
          width: 150px;
          height: 40px;
          text-align: center;
          line-height: 40px;
        }
      }
    }

    &-extra {
      margin-top: 20px;

      &-title {
        margin-bottom: 10px;
        font-size: 14px;
        height: 20px;
      }

      .event-list {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        height: 130px;
        background-color: #cccccc;
        overflow-y: scroll;

        &__container {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        &-item {
          color: #000;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
}
  .demo-input {
    flex: 1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .demo-input-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .demo-input .input {
    width: 300px;
    height: 48px;
    color: #242424;
    border-width: 1px;
    border-color: #ccc;
    font-size: 16px;
    margin: 20px;
    /* underline-color-android: #40b883; */
  }

  .demo-input .event-list {
    height: 160px;
  }

  .demo-input .event-list p {
    font-size: 14px;
    line-height: 16px;
  }

  .demo-input .input-button {
    border-color: #4c9afa;
    border-width: 1px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 200px;
    height: 30px;
  }

  .demo-input .input-button span {
    line-height: 30px;
    text-align: center;
  }
</style>
