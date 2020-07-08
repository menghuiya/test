import Vue from "vue";
import Router from "vue-router";

const Home = () => import("../views/home/Home");
// const Category = () => import("../views/category/Category");
const Cart = () => import("../views/cart/Cart");
const Profile = () => import("../views/profile/Profile");

//安装插件
Vue.use(Router);
//创建路由对象\
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  }
];
//导出
export default new Router({
  routes,
  mode: "history"
});
