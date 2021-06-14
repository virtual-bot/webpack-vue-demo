const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const pkg = require('../package.json');
const config = require('./config');
const manifest = require(path.resolve(config.hippyDistTempPath, 'vendor-dll.json'));

let cssLoader = '@voltron/vue-css-loader';
const voltronVueCssLoaderPath = path.resolve(__dirname, './lib/voltron-vue-css-loader/dist/index.js');
if (fs.existsSync(voltronVueCssLoaderPath)) {
  /* eslint-disable-next-line no-console */
  console.warn(`* Using the @voltron/vue-css-loader in ${voltronVueCssLoaderPath}`);
  cssLoader = voltronVueCssLoaderPath;
} else {
  /* eslint-disable-next-line no-console */
  console.warn('* Using the @voltron/vue-css-loader defined in package.json');
}

module.exports = {
  mode: 'production',
  watch: true,
  watchOptions: {
    aggregateTimeout: 1500,
  },
  bail: true,
  entry: {
    index: [path.resolve(pkg.nativeMain)],
  },
  output: {
    filename: config.hippyBundleChunkHash ? '[name].[chunkhash].js' : '[name].js',
    path: config.hippyDistTempPath,
    globalObject: '(0, eval)("this")',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __PLATFORM__: JSON.stringify(''),
    }),
    new CaseSensitivePathsPlugin(),
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
          'unicode-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: cssLoader,
            options: {
              logLevel: 'error',
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: cssLoader,
            options: {
              logLevel: 'error',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      chrome: 57,
                    },
                    // debug: true,
                    useBuiltIns: 'usage',
                    modules: false,
                    corejs: 3,
                  },
                ],
              ],
            },
          },
          'unicode-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    // if node_modules path listed below is not your repo directory, change it.
    modules: [path.resolve(__dirname, '../node_modules')],
    alias: (() => {
      const aliases = {
        '@': path.resolve('./src'),
      };

      // If voltron-vue was built exist then make a alias
      // Remove the section if you don't use it
      const voltronVuePath = path.resolve(__dirname, './lib/voltron-vue');
      if (fs.existsSync(path.resolve(voltronVuePath, 'dist/index.js'))) {
        /* eslint-disable-next-line no-console */
        console.warn(`* Using the @voltron/vue in ${voltronVuePath} as vue alias`);
        aliases.vue = voltronVuePath;
      } else {
        /* eslint-disable-next-line no-console */
        console.warn('* Using the @voltron/vue defined in package.json');
      }
      // If voltron-vue-router was built exist then make a alias
      // Remove the section if you don't use it
      const voltronVueNativeComponentsPath = path.resolve(__dirname, './lib/voltron-vue-native-components');
      if (fs.existsSync(path.resolve(voltronVueNativeComponentsPath, 'dist/index.js'))) {
        /* eslint-disable-next-line no-console */
        console.warn(`* Using the @voltron/vue-native-components in ${voltronVueNativeComponentsPath}`);
        aliases['@voltron/vue-native-components'] = voltronVueNativeComponentsPath;
      } else {
        /* eslint-disable-next-line no-console */
        console.warn('* Using the @voltron/vue-native-components defined in package.json');
      }

      return aliases;
    })(),
  },
};
