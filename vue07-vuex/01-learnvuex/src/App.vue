<template>
  <div id="app">
    <h2>{{ $store.state.info }}</h2>
    <!-- <h2>{{ $store.state.moduleA.info }}</h2> -->
    <button @click="changeInfo">修改信息</button>

    <hr />
    {{ message }}
    <h2>{{ $store.state.count }}</h2>
    <!-- <h2>{{ $store.state.moduleA.count }}</h2> -->
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <button @click="addStu">增加学生</button>
    <hr />
    <hello-vue />
    <hr />
    <h2>{{ $store.getters.powerCounter }}</h2>

    <hr />
    <p>{{ $store.getters.more20stu }}</p>
    <p>{{ $store.getters.more20stuLength }}</p>
    <p>{{ $store.getters.moreAgestu(22) }}</p>
  </div>
</template>

<script>
import HelloVue from "./components/HelloVue";
import { INCREMENT } from "./mutation-types";
export default {
  name: "App",
  data() {
    return {
      message: "梦回",
      count: 0
    };
  },
  components: {
    HelloVue
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(counts) {
      //普通提交风格
      // this.$store.commit("incrementCount", counts);
      //特殊提交风格
      this.$store.commit({
        type: "incrementCount",
        counts
      });
    },
    addStu() {
      let stu = { id: 1004, name: "menghui4", age: 24 };
      this.$store.commit("addStu", stu);
    },
    changeInfo() {
      // this.$store.commit("changeInfo");
      // this.$store.dispatch("aUpdateInfo", {
      //   message: "我是携带的信息",
      //   success: () => {
      //     console.log("里面已经完成了");
      //   }
      // });
      this.$store.dispatch("aUpdateInfo", "我是携带的信息").then(res => {
        console.log("里面完成了提交");
        console.log(res);
      });
    }
  }
};
</script>

<style></style>
