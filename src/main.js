import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import Board from "./component/Board.vue"
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
 

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
/*new Vue({
  router,
  store,
  render: h => h(Board)
}).$mount("#board");*/
