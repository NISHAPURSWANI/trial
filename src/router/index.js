import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/Login.vue"),
  },
  {
    path: "/board",
    name: "Board",
    component: () =>
      import(/* webpackChunkName: "board" */ "../components/Board.vue"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login") {
    next();
  } else {
    let token = localStorage.getItem("TOKEN");
    console.log(token);
    if (token && token !== "undefined") {
      console.log("token present", token, to);
      next();
    } else {
      console.log("token not present", token, to);
      next("/login");
    }
  }
});

// router.beforeEach((to, from, next) => {

// if(token){
//   console.log("hello1")

//   if(token==='undefined'){
//     next('/login')
//     console.log("hello")
//   }
//   else{

//     console.log("hello2")

//     next()
//   }
// }
// else{
//   console.log("hello3")

//   next('/login')
// }
// })

export default router;

/*if(token){
    console.log("hello1")

    if(token==='undefined'){
      next('/login')
      console.log("hello")
    }
    else{
      
      console.log("hello2")

      next()
    }
  }
  else{
    console.log("hello3")

    next('/login')
  }*/
/*if(token===undefined){
    console.log('hekko')
    next('/login')
  }
  else{
    console.log('hello')
    next()
  }
})
*/
