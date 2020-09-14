/*import axios from 'axios';
//import Vue from "vue";



const instance = axios.create({
  baseURL: "https://trello-clone-123.herokuapp.com",

})
let newtoken = localStorage.getItem('TOKEN');
if(newtoken&&newtoken!=='undefined') {
  instance.defaults.headers = {
    Authorization: "Token" + newtoken
  }
}

export default instance;*/
import axios from "axios";
//import Vue from "vue";

const instance = axios.create({
  baseURL: "https://trello-clone-123.herokuapp.com",
});

let newtoken = localStorage.getItem("TOKEN");
if (newtoken && newtoken !== "undefined") {
  instance.defaults.headers = {
    Authorization: "TOKEN " + newtoken,
  };
}

export default instance;
