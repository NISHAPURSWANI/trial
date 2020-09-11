import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/Login.vue")
  },
  {
    path: "/board",
    name: "Board",
    component: () =>
      import(/* webpackChunkName: "board" */ "../components/Board.vue"),
   meta:{ requiresAuth: true }
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
 // base: process.env.rest-auth/login,

  routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('TOKEN');
  
if(token){
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
}
})

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