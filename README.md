# voltron-vue-demo

如何开发新页面

1. npm install
3. 在`./src/pages`目录中加入页面名称，例如`test-bot`
4. 修改`./src/main-native.js`中`import App from './page/demo/index.vue';`为`import App from './page/test-bot/index.vue';`
5. npm run voltron:dev
6. 通过usb连接安卓手机
7. npm run voltron:debug
8. 进入调试页面即可
