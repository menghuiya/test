<template>
  <div>
    <h2>我是关于</h2>
    <h3>梦回呀</h3>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (confirm("您有商品暂未购买,您需要查看吗")) {
      //如果是true ，那么就把页面转向thcjp.cnblogs.com

      next(false);
    } else {
      //否则说明下了，赫赫

      next();
    }
  }
};
</script>

<style></style>
