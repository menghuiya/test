<template>
  <div>
    <h2>我是首页</h2>
    <h3>梦回呀</h3>
    <router-link to="/home/news">消息</router-link>
    <router-link to="/home/message">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: "你好啊",
      path: "/home/news"
    };
  },
  //生命周期-创建
  created() {
    console.log("created");
  },
  //声明周期-销毁
  destroyed() {
    console.log("destroyed");
  },
  //活跃的
  activated() {
    // console.log("activated");
    this.$router.push(this.path);
  },

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.path = this.$route.path;
    next();
  }
};
</script>

<style></style>
