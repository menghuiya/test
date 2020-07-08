import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

//使用全局的配置
// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;
// axios({
//   url: "/home/multidata"
// }).then(res => {
//   console.log(res);
// });
// // axios({
// //   url: "http://test.wdf5.com/api/users"
// // })
// //   .then(res => {
// //     console.log(res);
// //   })
// //   .catch(res => {
// //     console.log(res);
// //   });
// axios
//   .all([
//     axios({ url: "http://123.207.32.32:8000/home/multidata" }),
//     axios({ url: "http://123.207.32.32:8000/home/multidata" })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1);
//       console.log(res2);
//     })
//   );

//创建对应的axios的实例

// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// });

// instance1({
//   url: "/home/multidata"
// }).then(res => {
//   console.log(res);
// });

//封装一个request模块

import { request } from "./network/request";
request({
  url: "/home/multidata"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// request(
//   {
//     url: "/home/multidata"
//   },
//   res => {
//     console.log("request", res);
//   }
// );

// request({
//   baseConfig: {
//     url: "/home/multidata"
//   },
//   success: function(res) {
//     console.log(res);
//   },
//   failure: function(err) {
//     console.log(err);
//   }
// });
