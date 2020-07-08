import { INCREMENT } from "../mutation-types";

export default {
  //方法
  [INCREMENT](state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  incrementCount(state, payload) {
    state.count += payload.counts;
  },
  addStu(state, stu) {
    return state.students.push(stu);
  },
  changeInfo(state) {
    // state.info.adress = "四川";
    // Vue.set(state.info, "adress", "洛杉矶");
    // delete state.info.height; //该方式做不到响应式
    // Vue.delete(state.info, "height");
    // setTimeout(() => {
    //   state.info.name = "梦回"; //错误代码 不能使用异步操作
    // }, 1000);
    state.info.name = "梦回";
  }
};
