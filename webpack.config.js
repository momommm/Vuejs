const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
     entry: path.join(__dirname, './src/main.js'),
     output:{
         path: path.join(__dirname, './dist'),
         filename: 'bundle.js'
    },
     mode: 'development',
     plugins: [
          new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
          }),
         new VueLoaderPlugin()
     ],
     module: {
         rules: [
             { test:/\.css$/, use:['style-loader','css-loader'] },
             { test: /\.vue$/, use: 'vue-loader'}
         ]
     }
};