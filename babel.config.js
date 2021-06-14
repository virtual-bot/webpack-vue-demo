const path = require('path')
module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      // debug: true, // 开启debug可以看到每个文件都用了哪些es6的特性
      entryFiles: [
        path.resolve(__dirname, './src/native-entry.js'),
      ],
    }],
  ],
};