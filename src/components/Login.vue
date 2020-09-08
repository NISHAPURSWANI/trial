<template>
  <div class="formsec">
    <img alt="Vue logo" src="../assets/trello.png" class="image" style="width:200px;height:50px;" />
    <br />
    <br />
    <br />
    <br />

    <div class="form">
      <b-card>
      <form>
        <b>Login to Trello</b>
        <br />
        <br />
        <label for="username">
          <input
            type="text"
            v-model="username"
            placeholder="Enter your username"
            style="height:50px; width:350px"
          />
        </label>
        <br />
        <br />
        <label for="password">
          <input
            type="password"
            v-model="password"
            placeholder="Enter your password"
            style="height:50px; width:350px"
          />
        </label>
        <br />
        <br />
        <router-link to="/board">
          <label for="login">
            <button class="login" @click='verify()'>Login</button>
          </label>
          <br />
        </router-link>
      </form>
      </b-card>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
 Vue.use(VueAxios, axios)

export default {
  name: "HelloWorld",
     
    
  data: function() {
    return {
      email: "",
      username: "",
      password: ""
    };
    
  },
  methods:{

    verify(){
      axios.post('https://trello-clone-123.herokuapp.com/rest-auth/login/',{
        username:this.username,
        password:this.password
        
      })
      .then((response)=>{
        console.log(response);  

      })
    }
    

  }
}
  </script>

  

<style>
.form {
  display: border-box;
  height: 350px;
  width: 520px;
  border: 0px solid;
  box-shadow: 220px;
  justify-content: center;
  margin-left: 500px;
  align-self: center;
}
.login {
  background-color: green;
  color: honeydew;
  align-content: center;
}
.formsec {
  justify-content: center;
  background-color: white;
  height:auto;
  width:auto;

}
.image {
  width: 550px;
  height: 550px;
  position: center;
}
</style>
