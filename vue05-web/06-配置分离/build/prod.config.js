const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin() //丑化js代码 开发阶段不需要
  ]
});
