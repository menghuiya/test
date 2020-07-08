<template>
  <div>学号--------{{ num }}</div>
</template>

<script>
export default {
  data() {
    return {
      num: '',
    };
  },
  mounted() {
    // 获取动态路由传值
    //this.$route.params
    this.num = this.$route.params.id;
    console.log(this.$route.params);
  },
  beforeRouteEnter(to, from, next) {
    console.log('您进入了学生信息页面');
    next();
  },
};
</script>
