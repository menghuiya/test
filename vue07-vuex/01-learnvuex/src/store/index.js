import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT } from "../mutation-types";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

//安装插件

Vue.use(Vuex);

const state = {
  count: 1000,
  students: [
    { id: 1000, name: "menghui", age: 22 },
    { id: 1001, name: "menghui1", age: 20 },
    { id: 1002, name: "menghui2", age: 21 },
    { id: 1003, name: "menghui3", age: 23 }
  ],
  info: {
    name: "menghui",
    age: 22,
    height: 150
  }
};
//创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    // moduleA
  }
});

//导出
export default store;
