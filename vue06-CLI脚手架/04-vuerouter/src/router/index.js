//配置路由相关的信息
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

//懒加载的方式
const Home = () => import("../components/Home");
const About = () => import("../components/About");
const User = () => import("../components/User");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const Profile = () => import("../components/Profile");
const Login = () => import("../components/Login");
const userproflie = () => import("../components/userproflie");
const zhanghu = () => import("../components/my/zhanghu");
const dizhi = () => import("../components/my/dizhi");
const dingdan = () => import("../components/my/dingdan");

//1,通过Vue.use(插件),安装插件
Vue.use(VueRouter);

//2,创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    },
    children: [
      // {
      //   path: "",
      //   redirect: "news"
      // },
      {
        path: "news",
        component: HomeNews
      },
      {
        path: "message",
        component: HomeMessage
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于"
    }
    // beforeEnter: (to, from, next) => {
    //   console.log("about before");
    //   next();
    // }
  },
  {
    path: "/user/:userId",
    component: User,
    meta: {
      title: "用户"
    },
    children: [
      {
        path: "news",
        component: HomeNews
      }
    ]
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "档案"
    }
  },
  {
    path: "/my",
    component: Login,
    meta: {
      title: "登录"
    },
    children: [
      // {
      //   path: "/:user/profile",
      //   component: userproflie
      // }
      {
        path: "",
        redirect: "usermsg"
      },
      {
        path: "usermsg",
        component: zhanghu
      },
      {
        path: "usermap",
        component: dizhi
      },
      {
        path: "usershop",
        component: dingdan
      }
    ]
  }
];
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: "history"
});
// 前置守卫(guard)  全局守卫
router.beforeEach((to, from, next) => {
  //从from跳转到to
  if (to.path.indexOf("my") > -1) {
    next();
  } else {
    document.title = to.matched[0].meta.title;
    next();
  }
});

//后置钩子(hook) 没有next 前置守卫执行后执行
// router.afterEach(route => {
//   // console.log("--------");
// });

export default router;
