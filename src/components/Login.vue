<template>
  <div class="loginpage">
    <img alt="Vue logo" src="../assets/trello.png" class="image" style="width:200px;height:50px;  " />

    <div class="loginform" id="loginform">
      <form v-on:submit.prevent="submit">
        <b-card title="Login to trello " class="card">
          <input
            type="text"
            class="myinput"
            placeholder="Enter your username"
            v-model.trim="$v.username.$model"
            :class="{'is-invalid': validationStatus($v.username)}"
            @keypress.enter="validationStatus()"
          />
          <div
            v-if="!$v.username.required"
            class="invalid-feedback"
          >The user name field is required.</div>

          <input
            type="password"
            class="myinput"
            v-model.trim="$v.password.$model"
            :class="{'is-invalid': validationStatus($v.password)}"
            placeholder="Enter your password"
            @keypress.enter="validationStatus()"
          />
          <div v-if="!$v.password.required" class="invalid-feedback">The password field is required.</div>

          <br />

          <!--<button class="loginbtn" @onclick="spin=true">
            Login
            <b-spinner small v-show="spin"></b-spinner>
          </button>-->
          <label for="login">
            <button class="loginbtn" @click="spin=true">
              <b>Log in</b>
              <b-spinner small variant="primary" label="Spinning" v-show="spin"></b-spinner>
            </button>
          </label>

        </b-card>
      </form>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import instance from "../axios_i";

export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
      spin: false
    };
  },
  validations: {
    username: { required },
    password: { required }
  },
  methods: {
    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit: function() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) {
        this.spin = false;
        return;
      } else {
        instance
          .post("/rest-auth/login/", {
            username: this.username,
            password: this.password
          })

          .then(response => {
            console.log(response);
            const token = response.data.key;
            localStorage.setItem("TOKEN", token);

            if (response.status === 200) {
              this.spin = false;

              this.$router.push({ name: "Board" });
            }
          })
          .catch(error => {
            this.spin = false;
            console.log(error);
            alert("Invalid username or password");
            this.$router.push({ name: "Login" });
          });
      }
    }
  },
  created(){
    const token=localStorage.getItem("TOKEN")
    if(token){
      this.$router.push({ name: "Board" });

    }
  }
};
</script>


<style>
.loginpage {
  margin-top: 80px;
}
.loginform {
  margin-top: 40px;
}
.myinput {
  margin-top: 15px;
  height: 50px;
  width: 300px;
}
.card {
  width: 550px;
  height: 350px;
  text-align: center;
  display: flex;
  align-content: space-around;
  color:#5E6C84;
}
.loginbtn {
  margin-top: 20px;
  text-align: center;
  background-color: #5AAC44;
  width: 300px;
  border:0px;
  border-radius: 4px;
  color:white;
  height: 35px;


}
.loginbtn:hover{
    background:#5cd839;

}
</style>