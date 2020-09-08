<template>
  <div>
    <div>
      <b-card class="cardm" v-show="card111" @click="modal=true">card111</b-card>
    </div>

  <!-- <div v-show="modal" class="modal_box">
      <div class="title">
        <br />
        <b>
          <i class="fa fa-hashtag"></i>card 111
        </b>
        <br />
      </div>
      <br />
      <div class="description">
        <b>Description:</b>
        <br />Now that you have learned flex, try and create a layout like trello.
        Don't use javascript. Don't provide any user interaction. Just a static interface like trello.
        With Header, Board container, Lists, Cards.
        Make 7 lists, each with 20-5 cards.
        Lists are vertically scrollable.
        Board is horizontally scrollable.
        <br />
        <i class="fa fa-paperclip"></i> Attachment:
        <br />
        <b>Start-Date:</b>07/09/2020
        <br />
        <b>End-Date:</b>08/09/2020
        <br />
        <button class="circular"></button>&nbsp;
        <input
          type="text"
          placeholder="Write a comment...."
          style="width:350px;margin-top:-10px;"
        />

        <br />
        <b-button style="margin-left:500px;" @click="modal=false">Close</b-button>
      </div>
      <br />
    </div>-->
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
