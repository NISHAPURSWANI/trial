<template>
  <div class="formsec">
    <img
      alt="Vue logo"
      src="../assets/trello.png"
      class="image"
    />
    <br /><br /><br /><br />

    <div class="form">
      <form>
        <br /><br />
        <label for="email"
          ><input
            type="text"
            v-model="email"
            placeholder="Enter your username"
            style="height:50px; width:350px"
          />{{ username }}</label
        ><br /><br />
        <label for="email"
          ><input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            style="height:50px; width:350px"
          />{{ email }}</label
        ><br /><br />
        <label for="password"
          ><input
            type="password"
            v-model="password"
            placeholder="Enter your password"
            style="height:50px; width:350px"
          />{{ password }}</label
        ><br /><br />
        <router-link to="/board"
          ><label for="login"><button class="login">Login</button></label><br
        /></router-link>
        
      </form>
    </div>
  </div>
</template>
<script>
//import Vue from "vue";

export default {
  name: "HelloWorld",
  data: function() {
    return {
      email: "",
      username: "",
      password: ""
    };
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
  /*background-image: url("https://i.imgur.com/7AqxKzf.jpg");
  background-size: cover;
  background-attachment: fixed;*/

}
.login {
  background-color: green;
  color: honeydew;
  align-content: center;
}
.formsec{
    justify-content: center;
    
}
.image{
    width: 550px;
    height: 550px;
    position: center;
}
</style>
