<template>
    <div v-show="modal">
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
    
    </div>
</template>
<script>
export default {
  data:function(){
    return{
      modal:true
    }
  }
}
</script>