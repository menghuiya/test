import axios from "axios";

export function request(config) {
  //创建 axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
    // headers: headers
  });
  //拦截器

  //拦截请求
  instance.interceptors.request.use(
    config => {
      // Do something before request is sent
      console.log("interceptors", config);
      /**
       * 比如某些信息不符合服务器的需求
       * 比如每次发送网络请求时 希望在界面中显示一个请求的图标
       * 某些网络请求(比如登录(token)),必须携带一些特殊的信息
       */
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  //拦截响应
  instance.interceptors.response.use(
    response => {
      console.log("res:", response);
      return response;
    },
    error => {
      // Do something with response error
      return Promise.reject(error);
    }
  );

  //发送真正的请求
  return instance(config);
}
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //创建 axios实例
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//       // headers: headers
//     });
//     //发送真正的请求
//     instance(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }

// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//     // headers: headers
//   });

//   instance(config)
//     .then(res => {
//       console.log(res);
//       success(res);
//     })
//     .catch(err => {
//       console.log(err);
//       failure(err);
//     });
// }

// export function request(config) {
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//     // headers: headers
//   });

//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res);
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err);
//     });
// }
