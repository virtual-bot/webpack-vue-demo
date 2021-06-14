const path = require('path');
const pkg = require('../package.json');
// 不建议修改
const hippyMainEntry = path.resolve(__dirname, '../', pkg.nativeMain);
const hippyRootPath = path.resolve(__dirname, '../');
const hippyScriptsPath = path.resolve(__dirname);
const hippySrcPath = path.resolve(__dirname, '../src');
// 可根据喜好修改
const hippyDevPath = path.resolve(__dirname, '../dist/dev/');
const hippyDistPath = path.resolve(__dirname, '../dist-native');
const hippyDistTempPath = path.resolve(hippyDistPath, 'temp');
const hippyDistBundlePath = path.resolve(hippyDistPath, 'bundles');
const hippyDistSourceMapPath = path.resolve(hippyDistPath, 'source-map');
const hippyBundleChunkHash = true;
const hippySourceMap = true;
const buildIgnore = [];
const config = {
  hippyMainEntry,
  hippyRootPath,
  hippyScriptsPath,
  hippySrcPath,
  hippyDevPath,
  hippyDistPath,
  hippyDistTempPath,
  hippyDistBundlePath,
  hippyDistSourceMapPath,
  hippyBundleChunkHash,
  hippySourceMap,
  buildIgnore,
};

module.exports = config;
