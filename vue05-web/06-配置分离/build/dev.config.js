//开发时依赖
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {
  devServer: {
    //开发阶段需要
    contentBase: '../dist',
    inline: true
  }
});
