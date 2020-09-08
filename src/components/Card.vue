<template>
  <div>
    <div>
      <b-card class="cardm" v-show="card111" @click="modal=true">card111</b-card>
    </div>
    <b-card class="cardm">card55</b-card>
    <b-card class="cardm">card789</b-card>
    <b-card class="cardm">card789</b-card>
    <br />
    <br />
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      modal: false,
      card111: true
    };
  }
};
</script>
<style>
.cardm {
  width: 250px;
  height: 50px;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 6px;
  margin-left: 25px;
}
.modal_box {
  width: 600px;
  height: auto;
  background-color: lightgray;
  text-align: left;
  margin-bottom: 5px;
  margin-left: 350px;
}
.title {
  margin-left: 20px;
}
.description {
  margin-left: 20px;
}
</style>
