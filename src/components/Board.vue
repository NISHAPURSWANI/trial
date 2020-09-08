<template>
<div>
  <div class="boards" style="height:715px;">
    <div class="board">
      <boards></boards>
      <between></between>
    </div>
    <br />
    <div class="mylist">
      <list></list>
      <div  @click="box=true" >
      <card></card>
         

      
      </div>
       <div>
    <button class="btncard"><b>+</b>Add another card...</button>
    </div>
      <div v-show="box" class="bmodal">
      <modal></modal>
      </div>
    </div>
    <div class="add">
    <button class="listbtn"><b>+</b> Add another list...</button>
    </div>
  </div>
    </div>
</template>

<script>
import Boards from "@/components/Boards.vue";
import Between from "@/components/Between.vue";
import List from "@/components/List.vue";
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Board",
  components: {
    Boards,
    Between,
    List,
    Card,
   Modal
    

  },
  data:function(){
    return{
      box:false
    }
  }
};
</script>
1<style >
.boards {
  background-image: url("https://i.imgur.com/7AqxKzf.jpg");
 /* background-size: cover;
  background-attachment: fixed;*/
}
.mylist {
  min-height: 400px;
  max-width: 300px;
  background-color: rgba(245, 241, 241, 0.904);
  border-radius: 4px;
  align-self: center;
  text-align: center;
  margin-left: 50px;
  margin-bottom: 6px;
}
.bmodal{
  
  width: 600px;
  height: auto;
  background-color: lightgray;
  text-align: left;
  margin-bottom: 5px;
  margin-left: 350px;
  margin-top: -250px;

}
.btncard{
  color:black;
  background-color:rgba(255, 255, 255, 0.24); ;
  border:0px;
  width:200px;
}
.listbtn{
  color:white;
  background-color:rgba(255, 255, 255, 0.24); ;
  border:0px;
  margin-left:1280px;  
}
.add{
  margin-top:-400px;

}
</style>
