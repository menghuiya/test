<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#1296db">
      <img src="../assets/img/tabbar/home.png" alt="" slot="item-icon" />
      <img
        src="../assets/img/tabbar/home-active.png"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#1296db">
      <img src="../assets/img/tabbar/shop.png" alt="" slot="item-icon" />
      <img
        src="../assets/img/tabbar/shop-active.png"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#1296db">
      <img src="../assets/img/tabbar/user.png" alt="" slot="item-icon" />
      <img
        src="../assets/img/tabbar/user-active.png"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">用户</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar';
import TabBarItem from './tabbar/TabBarItem';
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style></style>
