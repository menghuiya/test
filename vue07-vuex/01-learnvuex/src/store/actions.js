export default {
  //context 上下文在这里就是store对象
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit("changeInfo");
  //     console.log(payload.message);
  //     payload.success();
  //   }, 1000);
  // }

  aUpdateInfo(context, payload) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        context.commit("changeInfo");
        console.log(payload);
        res("22222");
      }, 1000);
    });
  }
};
