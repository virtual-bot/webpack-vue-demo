<template>
  <div class="com-main" :key="'main'">
    <div class="scroll-container">
      <p class="com-main-title">
        <span>Vue: {{ Vue.version }}</span>
        <span v-if="Vue.Native"> ---- Voltron-Vue: {{ Vue.Native.version }}</span>
      </p>
      <div class="com-main-module">
        <p class="com-main-module-title">基础组件</p>
        <div class="com-main-module-content">
          <div v-for="feature in basicComponent" :key="feature.id" class="com-main-module-content-item">
            <p :to="{path: `/demo/${feature.id}`}" @click="openPage(feature.id, feature.component)" class="com-main-module-content-item-button">
              {{ feature.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="com-main-module" v-if="extendComponent.length">
        <p class="com-main-module-title">扩展组件</p>
        <div class="com-main-module-content">
          <div v-for="feature in extendComponent" :key="feature.id" class="com-main-module-content-item">
            <p :to="{path: `/demo/${feature.id}`}" @click="openPage(feature.id, feature.component)" class="com-main-module-content-item-button">
              {{ feature.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="com-main-module" v-if="styleSupport.length">
        <p class="com-main-module-title">样式支持</p>
        <div class="com-main-module-content">
          <div v-for="feature in styleSupport" :key="feature.id" class="com-main-module-content-item">
            <p :to="{path: `/demo/${feature.id}`}" @click="openPage(feature.id, feature.component)" class="com-main-module-content-item-button">
              {{ feature.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="com-main-module" v-if="globalModule.length">
        <p class="com-main-module-title">终端模块</p>
        <div class="com-main-module-content">
          <div v-for="feature in globalModule" :key="feature.id" class="com-main-module-content-item">
            <p :to="{path: `/demo/${feature.id}`}" @click="openPage(feature.id, feature.component)" class="com-main-module-content-item-button">
              {{ feature.name }}
            </p>
          </div>
        </div>
      </div>
      <dialog
        v-if="newPageStatus"
        class="com-main-dialog"
        :animationType="'slide-right'"
        @requestClose="onPageClose"
      >
        <div class="com-main-dialog-main">
          <header-component
            :title="pageName"
            :back-status="true"
            @back="onPageClose"
          ></header-component>
          <component :is="pageComponent"></component>
        </div>
      </dialog>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import basicComponent from '../../components/basic-component';
import extendComponent from '../../components/extend-component';
import styleSupport from '../../components/style-support';
import globalModule from '../../components/global-module';
import HeaderComponent from './header.vue'

export default {
  components: {
    HeaderComponent,
  },
  name: 'App',
  data() {
    return {
      basicComponent: Object.keys(basicComponent).map(demoId => ({
        id: demoId,
        name: basicComponent[demoId].name,
        component: basicComponent[demoId].component,
      })),
      extendComponent: Object.keys(extendComponent).map(demoId => ({
        id: demoId,
        name: extendComponent[demoId].name,
        component: extendComponent[demoId].component,
      })),
      styleSupport: Object.keys(styleSupport).map(demoId => ({
        id: demoId,
        name: styleSupport[demoId].name,
        component: styleSupport[demoId].component,
      })),
      globalModule: Object.keys(globalModule).map(demoId => ({
        id: demoId,
        name: globalModule[demoId].name,
        component: globalModule[demoId].component,
      })),
      Vue,
      newPageStatus: false,
      pageName: '',
      pageComponent: null,
    };
  },
  methods: {
    openPage (id, component) {
      this.newPageStatus = true;
      this.pageName = id;
      this.pageComponent = component;
    },
    onPageClose () {
      this.newPageStatus = false;
      this.pageName = ''
      this.pageComponent = null;
    }
  }
};
</script>

<style lang="scss">
.com-main {
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

  &-title {
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e4e4e4;
    text-align: center;
  }

  &-module {
    &-title {
      padding: 10px 0;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: #e4e4e4;
      text-align: center;
    }

    &-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;

      &-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 10px;
        min-width: 150px;
        height: 40px;
        border-width: 1px;
        border-style: solid;
        border-color: #40b883;
        border-radius: 5px;

        &-button {
          height: 38px;
          line-height: 38px;
          text-align: center;
          color: #40b883;
        }
      }
    }
  }

  &-dialog {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &-main {
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
    }
  }
}
</style>
