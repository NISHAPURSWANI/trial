import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
//import { toPrecision } from "core-js/fn/number/epsilon";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    //component: Home,
    redirect: "/login",

  },
  {
    path: "/about",
    name: "About",
    component: () =>
      //import(/* webpackChunkName: "about" */ "../views/About.vue")
      import(/* webpackChunkName: "about" */ "../views/About.vue"),

  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      //import(/* webpackChunkName: "login" */ "../components/Login.vue"),
      import(/* webpackChunkName: "login" */ "../components/Login.vue"),

    meta: { requiresAuth: false }

  },
  {
    path: "/board",
    name: "Board",
    component: () =>
      import(/* webpackChunkName: "board" */ "../views/Board.vue"),
    meta: { requiresAuth: true },
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,


  routes
});

router.beforeEach((to, from, next) => {

  let token = localStorage.getItem("TOKEN")
  if (to.name !== "Login") {
    if (token) {
      console.log(token)
      next()
    }
    else {
      next('/login')
    }
  }
  else {
    next()
  }
})
export default router


