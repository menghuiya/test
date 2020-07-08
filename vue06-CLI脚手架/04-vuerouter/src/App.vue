<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"
        ><router-link to="/home" tag="div" replace
          >网站首页</router-link
        ></el-menu-item
      >
      <el-menu-item index="3"
        ><router-link to="/about" tag="div" replace
          >商品中心</router-link
        ></el-menu-item
      >
      <el-menu-item index="4">
        <router-link to="/my" tag="div" replace>个人中心</router-link>
      </el-menu-item>
    </el-menu>
    <!-- <button @click="homebtn">首页</button>
    <button @click="aboutbtn">关于</button> -->

    <!-- <router-link to="/profile" replace>档案</router-link> -->
    <!-- <router-link :to="/user/ + userid" replace>用户</router-link>
    <router-link
      :to="{
        path: '/profile',
        query: { name: 'menghui', height: 160, age: 20 }
      }"
      replace
      >档案</router-link
    > -->
    <!-- <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button> -->
    <!-- <router-link to="/login" replace>我的</router-link> -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userid: "menghui",
      userName: "menghuiya",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    homebtn() {
      //代码方式修改路径  vue-router
      //push=>pushState
      // this.$router.push("/home");
      this.$router.replace("/home");
      console.log("home");
    },
    aboutbtn() {
      this.$router.replace("/about");
      console.log("about");
    },
    userClick() {
      this.$router.replace("/user/" + this.userid);
    },
    profileClick() {
      this.$router.replace({
        path: "/profile",
        query: { name: "menghui", height: 160, age: 20 }
      });
    }
  }
};
</script>

<style>
.router-link-active {
  color: #ff0000;
}
</style>
