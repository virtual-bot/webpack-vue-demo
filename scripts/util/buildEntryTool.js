const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const config = require('../config');

exports.execEntryFile = () => {
  const entryStr = fs.readFileSync(config.hippyMainEntry).toString();
  const originFilePath = entryStr.match(/\/page\/(.*?)\/index.vue/)[1];
  const entryModuleName = originFilePath.replace(/\//g, '_');
  return [
    {
      moduleName: entryModuleName,
      moduleOriginPath: originFilePath,
      moduleEntryPath: config.hippyMainEntry,
      origin: true,
    },
  ];
};

exports.clearBuildDir = () => {
  fs.emptyDirSync(config.hippyDistPath);
  fs.ensureDirSync(config.hippyDistTempPath);
  fs.ensureDirSync(config.hippyDistBundlePath);
  fs.ensureDirSync(config.hippyDistSourceMapPath);
};

exports.createEntryFiles = () => {
  const entryFileStr = fs.readFileSync(config.hippyMainEntry).toString();
  const originEntryFiles = glob.sync('../src/page/**/index.vue', { cwd: path.resolve(__dirname, '..') });
  const f = originEntryFiles.filter(item => !/(component|components)/.test(item));
  return f.map((item) => {
    const originFilePath = item.replace(/..\/src\/page\/(.*?)\/index.vue/, '$1');
    const entryModuleName = originFilePath.replace(/\//g, '_');
    const newEntryFilePath = path.resolve(__dirname, `../../src/main-native-${entryModuleName}.js`);
    const entryStr = entryFileStr.replace(/import\s+App\s+from\s+'@\/pages\/(.*?)\/index.vue';/i, `import App from '@/pages/${originFilePath}/index.vue';`);
    const config = {
      moduleName: entryModuleName,
      moduleOriginPath: originFilePath,
      moduleEntryPath: newEntryFilePath,
    };
    if (fs.existsSync(newEntryFilePath)) {
      return {
        ...config,
        origin: true,
      };
    }
    fs.writeFileSync(newEntryFilePath, entryStr);
    return {
      ...config,
    };
  });
};

exports.clearEntryFiles = (moduleEntryArr) => {
  moduleEntryArr.forEach(({ moduleEntryPath, origin }) => {
    if (fs.existsSync(moduleEntryPath) && !origin) fs.unlinkSync(moduleEntryPath);
  });
};

exports.replaceBabelConfig = (moduleEntryArr) => {
  const str = `const path = require('path')
module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      // debug: true, // 开启debug可以看到每个文件都用了哪些es6的特性
      entryFiles: [
        path.resolve(__dirname, './src/native-entry.js'),
        ${moduleEntryArr.map(item => `path.resolve(__dirname, './src/main-native-${item.moduleName}.js')`).join(',')}
      ],
    }],
  ],
};`;
  fs.writeFileSync(path.resolve(config.hippyRootPath, 'babel.config.js'), str);
};

exports.returnBabelConfig = () => {
  const str = `const path = require('path')
module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      // debug: true, // 开启debug可以看到每个文件都用了哪些es6的特性
      entryFiles: [
        path.resolve(__dirname, './src/native-entry.js'),
      ],
    }],
  ],
};`;
  fs.writeFileSync(path.resolve(config.hippyRootPath, 'babel.config.js'), str);
};
