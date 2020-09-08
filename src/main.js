import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios';

import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';

 

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(Vuelidate);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
