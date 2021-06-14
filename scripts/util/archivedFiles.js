const fs                        = require('fs-extra');
const path                      = require('path');
const config = require('../config');
const { zipDir } = require(path.resolve(config.hippyScriptsPath, './util/index.js'));

async function archivedFiles(entryPathArr) {
  const bundleConfigObj = {};
  const zipBundleTask = [];
  const sourceMapArr = [];

  const vendorManifest = require(path.resolve(config.hippyDistTempPath, 'vendor-manifest.json'));
  const vendorBundleFilename = vendorManifest.vendor;
  const originVendorPath = path.resolve(config.hippyDistTempPath, `${vendorBundleFilename}`);
  const publishVendorPath = path.resolve(config.hippyDistBundlePath, vendorBundleFilename);
  fs.copySync(originVendorPath, publishVendorPath);
  bundleConfigObj.vendor = {
    moduleName: 'vendor',
    filename: vendorBundleFilename,
  };

  entryPathArr.forEach(({ moduleName, moduleOriginPath }) => {
    const androidModuleItemManifest = require(path.resolve(config.hippyDistTempPath, 'page-manifest.json'));
    const zipName = androidModuleItemManifest[moduleName].slice(0, androidModuleItemManifest[moduleName].indexOf('.js'));
    const originBundlePath = path.resolve(config.hippyDistTempPath, `${zipName}.js`);
    const originVendorPath = path.resolve(config.hippyDistTempPath, `${vendorBundleFilename}`);
    const originAssetsPath = path.resolve(config.hippyDistTempPath, `${moduleName}/assets`);
    const originSourceMapPath = path.resolve(config.hippyDistTempPath, `${zipName}.js.map`);
    // ensure bundle dir
    const publishDir = path.resolve(config.hippyDistBundlePath, zipName);
    const publishZip = path.resolve(config.hippyDistBundlePath, `${zipName}.zip`);
    const publishBundlePath = path.resolve(publishDir, 'index.js');
    const publishVendorPath = path.resolve(publishDir, 'vendor.js');
    const publishAssetsPath = path.resolve(publishDir, 'assets');
    fs.ensureDirSync(publishDir);
    fs.copySync(originBundlePath, publishBundlePath);
    fs.copySync(originVendorPath, publishVendorPath);
    if (!Array.isArray(bundleConfigObj.module)) bundleConfigObj.module = [];
    bundleConfigObj.module.push({
      moduleName,
      originModuleName: moduleOriginPath,
      filename: `${zipName}.zip`,
    });
    zipBundleTask.push(zipDir(publishDir, publishZip, true));
    if (fs.existsSync(originAssetsPath)) fs.copySync(originAssetsPath, publishAssetsPath);
    // ensure source map dir
    const mapDir = path.resolve(config.hippyDistSourceMapPath, zipName);
    const mapBundlePath = path.resolve(mapDir, 'index.js');
    const mapSourceMapPath = path.resolve(mapDir, `${zipName}.js.map`);
    fs.ensureDirSync(mapDir);
    fs.copySync(originBundlePath, mapBundlePath);
    fs.copySync(originSourceMapPath, mapSourceMapPath);
    sourceMapArr.push({
      moduleName,
      originModuleName: moduleOriginPath,
      indexBundleFilename: `${zipName}/index.js`,
      sourceMapFilename: `${zipName}/${zipName}.js.map`,
    });
  });
  await Promise.all(zipBundleTask);
  fs.writeFileSync(path.resolve(config.hippyDistBundlePath, 'bundle.config.json'), JSON.stringify(bundleConfigObj, null, 4));
  fs.writeFileSync(path.resolve(config.hippyDistSourceMapPath, 'source-map.config.json'), JSON.stringify(sourceMapArr, null, 4));
}

module.exports = archivedFiles;
