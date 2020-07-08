<template>
  <div>
    <!-- <h2>我是登录界面</h2>
    <router-link
      v-for="(item, index) in stuData"
      :key="index"
      :to="{
        path: '/' + item.id + '/profile',
        query: item
      }"
      tag="li"
      >{{ item.name }}</router-link
    >
    <hr /> -->
    <el-row class="tac" style="width:300px">
      <el-col :span="12">
        <el-menu
          default-active="0"
          class="el-menu-vertical-demo"
          @select="choosediv"
        >
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">我的账户</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-document"></i>
            <span slot="title">地址管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stuData: [
        { id: 1, name: "梦回", age: 22 },
        { id: 2, name: "冉志成", age: 20 },
        { id: 3, name: "盛佳怡", age: 21 },
        { id: 4, name: "刘五", age: 20 }
      ],
      crediv: 2
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    choosediv(index) {
      let arr = ["/my/usermsg", "/my/usermap", "/my/usershop"];
      this.$router.replace(arr[index]);
    }
  },
  beforeRouteEnter(to, from, next) {
    next("/");
  }
};
</script>

<style scoped>
.content {
  position: relative;
  top: -150px;
  left: 150px;
}
</style>
