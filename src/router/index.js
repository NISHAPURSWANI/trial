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
    redirect: "/board",

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

    meta:{requiresAuth: false }

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
  base: process.env.BASE_URL,


  routes
});

/*router.beforeEach((to, from, next) => {
  let token= localStorage.getItem("TOKEN")
  if(token && token!=='undefined'){
    next({name:'Board'})
  }
  else{
    next({name:'Login'})
  }


})*/
/*if (to.matched.some(route => route.meta.requiresAuth)) {

  if (to.name==="Login") {
  //let token=localStorage.getItem('TOKEN');

    console.log("hello")
    next()
  } else {
    next({ path: '/login' });
  }
}
next();
})

export default router

/*if (to.matched.some(route => route.meta.requiresAuth)) {

    if (to.name==="Login") {
    //let token=localStorage.getItem('TOKEN');

      console.log("hello")
      next()
    } else {
      next({ path: '/login' });
    }
  }
  next();
});*/
/*router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {

    if (to.name==="Login") {
      let token=localStorage.getItem('TOKEN');
      if(token&&token!=='undefined')
    

      console.log("hello")
      next('/board')
    } else {
      next('/login');
    }
  }
  next();
});*/
/*router.beforeEach((to, from, next) => {
  if(to.name==="Login"){
    let token=localStorage.getItem("Token")
    if(token && token!=='undefined'){
      next()

    }
    else{
      next('/login')
    }
  }
  else{
    next()
  }
});*/
/*router.beforeEach((to, from, next) => {
  
  let token=localStorage.getItem("TOKEN")
  if(to.name==="Board"){
    console.log("I am in board",to)

    if(!token ){
      next({path:'/login'})

    }
    
   /* else{
      next()
    }*/
  /*}
  
  else if(to.name==="Login"){
    console.log("I am in login",to)
    if(token ){
      next({path:'/board'})

    }
  }
});*/
/*router.beforeEach((to,from,next)=>{
  let token=localStorage.getItem("TOKEN")
  if(to.name==="Board"){
    next()
  }
  else if(to.name==="Login"){
    if(token){
      next()
    }
    else{
      next('/login')
    }
  }
})*/
/*router.beforeEach((to,from,next)=>{
  let token=localStorage.getItem("TOKEN")
  if(to.name==="Login"){
    if(token){
      next()
    }
    else{
      next('/login')
    }
    
  }
  
 
})*/
/*router.beforeEach((to,from,next)=>{
  let token=localStorage.getItem("TOKEN")
  if(token){
    next()
  }
  else{
    next('/login')
  }
})
*/
router.beforeEach((to,from,next)=>{

  let token=localStorage.getItem("TOKEN")
  if(to.name==="Board"){
    if(token){
      console.log(token)
      next()
    }
    else{
      next('/login')
    }
  }
  else{
    next('/login')
  }
})
export default router


