// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

const cpn = {
  template: `<div>
    <h2>我是一个组件</h2>
  </div>
  `
};
/* eslint-disable no-new */
new Vue({
  el: "#app",

  // components: { App },
  // template: "<App/>"
  render: function(createElement, context) {
    //1.普通用法:creatElement('标签')
    // return createElement("h2", { class: "box" }, [
    //   "hello 梦回",
    //   createElement("button", ["按钮"])
    // ]);
    //2.传入组件对象
    return createElement(App);
  }
});
