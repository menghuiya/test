const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //动态获取文件路径
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        //css-loader只负责加载css文件 不负责解析
        //style-loader 负责将样式添加到DOM中
        //顺序会从右到左读 顺序不能乱
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {},
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //加载的图片小于limit是 会将图片编译成base64的字符串形式
              //当加载的图片大于是 将使用file-loader来进行展示
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  resolve: {
    //alias别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
};
