import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});

/**
 * 那么.vue文件中template是谁处理的呢?
 * vue-template-compiler 依赖
 */
