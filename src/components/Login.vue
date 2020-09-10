<template>
  <div class="formsec">
    <img alt="Vue logo" src="../assets/trello.png" class="image" style="width:200px;height:50px;" />
    <br />
    <br />
    <br />
    <br />

    <div class="form" id="loginform">
      <b-card>
        <form v-on:submit.prevent="submit">
          <b>Login to Trello</b>
          <br />
          <br />
          <input
            type="text"
            v-model.trim="$v.username.$model"
            :class="{'is-invalid': validationStatus($v.username)}"
            class="form-control form-control-lg"
            placeholder="Enter your username"
            style="height:50px; width:350px; margin-left:70px;"
          />
          <div
            v-if="!$v.username.required"
            class="invalid-feedback"
          >The user name field is required.</div>

          <br />
          <br />
          <input
            type="password"
            v-model.trim="$v.password.$model"
            :class="{'is-invalid': validationStatus($v.password)}"
            class="form-control form-control-lg"
            placeholder="Enter your password"
            style="height:50px; width:350px;margin-left:70px;"
            @keypress.enter="validationStatus()"
          />
          <div v-if="!$v.password.required" class="invalid-feedback">The password field is required.</div>
          <br />

          <label for="login">
            <button class="login" @click="spin=true">Login <b-spinner  small variant="primary" label="Spinning" v-show="spin"></b-spinner>
            </button>
          </label>
          <br />
        </form>
      </b-card>
    </div>

    <br />
    <br />
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import instance from '../plugins/axios_i';

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
        instance.post('/rest-auth/login'),{
           username: this.username,
             password: this.password,
        }
        

          .then(resp => {
         if (resp.status === 200) {
        this.spin = false;
        this.$router.push({ name: "Board" });

        

        }
      })
      .catch(error => {
        this.spin=false
        console.log(error);
        alert("Invalid username or password");
        this.$router.push({ name: "Login" });/**/
      }) 

      

        }
        

         

      
  
      }
    }
  };
    
</script>

  

<style>
.form {
  display: border-box;
  height: 350px;
  width: 520px;
  border: 0px solid;
  box-shadow: 220px;
}
.login {
  background-color :rgba(21, 252, 0, 0.781);
  color: honeydew;
  align-content: center;
}
.formsec {
  justify-content: center;
  background-color: white;
  height: auto;
  width: auto;
}
.image {
  width: 550px;
  height: 550px;
  position: center;
}
</style>
