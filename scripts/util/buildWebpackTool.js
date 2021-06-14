const path = require('path');
const { argv } = require('yargs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyEntryOutputPlugin = require('copy-entry-output-webpack-plugin');
const config = require('../config');
const fs = require('fs');

const createWebpackPromise = webpackConfig => new Promise((resolve, reject) => {
  try {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        reject(err.stack || err);
        if (err.details) {
          reject(err.details);
        }
      } else {
        const info = stats.toJson();
        if (stats.hasErrors()) {
          reject(info.errors);
        }
        resolve();
      }
    });
  } catch (err) {
    reject(err);
  }
});

const createBuildVendor = () => {
  const vendorConfig = require('../voltron-webpack.vendor');
  const distTempPath = config.hippyDistTempPath;
  return createWebpackPromise(merge(vendorConfig, {
    output: {
      path: distTempPath,
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: 'var __VENDOR_CHUNK_HASH__ = \'[chunkhash]\';',
        raw: true,
      }),
      new WebpackManifestPlugin({
        fileName: 'vendor-manifest.json',
        useEntryKeys: true,
      }),
    ],
  }));
};

// 打包页面
const createBuildModule = (entryPathArr = []) => {
  const entry = {};
  entryPathArr.forEach(({ moduleName, moduleEntryPath }) => {
    entry[moduleName] = moduleEntryPath;
  });
  const businessConfig = require('../voltron-webpack.prod.js');
  const customPlugin = [
    new WebpackManifestPlugin({
      fileName: 'page-manifest.json',
      useEntryKeys: true,
    }),
    new CopyEntryOutputPlugin({
      match: 'assets/**',
      outputPath(entryChunk, options) {
        return path.join(options.output.path, entryChunk.name);
      },
    }),
    new webpack.BannerPlugin({
      banner: 'var __MODULE_NAME__ = \'[name]\';var __MODULE_CHUNK_HASH__ = \'[chunkhash]\';',
      raw: true,
    }),
  ];
  if (argv.analyze) {
    customPlugin.push(new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }));
  }
  const sourceMapMode = config.hippySourceMap ? 'source-map' : 'none';
  const androidConfig = merge(businessConfig, {
    entry,
    output: {
      path: config.hippyDistTempPath,
    },
    plugins: customPlugin,
    devtool: sourceMapMode,
  });
  delete androidConfig.entry.index;
  return createWebpackPromise(androidConfig)
    .then(() => Promise.resolve())
    .catch(err => Promise.reject(err));
};

exports.createWebpackPromise = createWebpackPromise;
exports.createBuildVendor = createBuildVendor;
exports.createBuildModule = createBuildModule;

