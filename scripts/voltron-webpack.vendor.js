const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const config = require('./config');

module.exports = {
  mode: 'production',
  bail: true,
  entry: {
    vendor: [path.resolve(__dirname, './vendor.js')],
  },
  output: {
    filename: '[name].js',
    path: config.hippyDistTempPath,
    globalObject: '(0, eval)("this")',
    library: 'voltronVueBase',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __PLATFORM__: JSON.stringify(''),
    }),
    new CaseSensitivePathsPlugin(),
    new VueLoaderPlugin(),
    new webpack.DllPlugin({
      context: path.resolve(__dirname, '..'),
      format: true,
      path: path.resolve(config.hippyDistTempPath, '[name]-dll.json'),
      name: 'voltronVueBase',
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
        test: /\.(js)$/,
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
                    useBuiltIns: 'entry',
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
