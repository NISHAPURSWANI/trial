<template>
  <div>
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
      <div v-show="box" class="bmodal">
      <modal></modal>
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
  background-size: cover;
  background-attachment: fixed;
}
.mylist {
  min-height: 500px;
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
</style>
