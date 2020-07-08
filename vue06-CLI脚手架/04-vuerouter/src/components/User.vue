<template>
  <div>
    <h2>我是用户界面</h2>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
    <button @click="btnCLick">点击</button>
    <hr />
    <router-link :to="'/user/ ' + userId + '/news'">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  methods: {
    btnCLick() {
      console.log(this.$router);
      console.log(this.$route);
    }
  }
};
</script>

<style></style>
