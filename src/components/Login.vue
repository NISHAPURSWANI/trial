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
          <div v-show="spin">
            <b-spinner variant="primary" label="Spinning"></b-spinner>
          </div>

          <label for="login">
            <button class="login" @click="spin=true">Login</button>
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
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { required } from "vuelidate/lib/validators";

Vue.use(VueAxios, axios);

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
      }
      else {
        axios.post("https://trello-clone-123.herokuapp.com/rest-auth/login/", {
            username: this.username,
            password: this.password
          })
          .then(response => {
            if (response.status === 200) {
              this.spin = false;
              console.log(response);
              this.$router.push({ name: "Board" });
            } else if(response.statuscode===400) {
              alert("invalid creditenials");
              this.spin = false;
              alert("invalid ");
            }
          });
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
  height: auto;
  width: auto;
}
.image {
  width: 550px;
  height: 550px;
  position: center;
}
</style>
