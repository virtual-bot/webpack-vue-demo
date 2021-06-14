const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const pkg = require('../package.json');

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
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 1500,
  },
  entry: {
    index: path.resolve(pkg.nativeMain),
  },
  output: {
    filename: 'index.bundle',
    strictModuleExceptionHandling: true,
    path: path.resolve('./dist/dev/'),
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        HOST: JSON.stringify(process.env.DEV_HOST || '127.0.0.1'),
        PORT: JSON.stringify(process.env.DEV_PORT || 38989),
      },
      __PLATFORM__: null,
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
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [[
                '@babel/preset-env',
                {
                  targets: {
                    chrome: 57,
                    ios: 9,
                  },
                },
              ]],
              plugins: [
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
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
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        }],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
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
        aliases['@voltron/vue'] = voltronVuePath;
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
