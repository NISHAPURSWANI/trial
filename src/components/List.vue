<template>
  <div >
    <div class="render">
    <div class="listbox">
      <div class="title">
        {{list.title}}
        <i
          class="fas fa-ellipsis-h"
          style="display:flex; margin-left:200px; margin-top:-24px;"
        ></i>
   </div>
      <div v-for="card in list.card_details" :key="card.id">
      
        <card :card="card" ></card>
      </div>
   <div class="newcard" v-show="newcard">
  <b-textarea class="newtext" ></b-textarea>
  <div class="cardbtn">
  <button class="addcardbtn" @click="addcard()" >Add Card</button>
  <button class="closebutton" @click="newcard=false"><i class="fas fa-times"></i></button>
  </div>
      </div>

      <button class="addcard" @click="newcard=true">+add another card</button>
    </div>
  </div>

  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import instance from '../axios_i';

export default {
  props: ["list"],
  name: "List",
  components: {
    Card,
    // Modal
  },
  data: function() {
    return {
      newcard: false,
      title:''
    };
  },
methods:{
  addcard(){
    instance.post('/cards/'),{
      title:this.title,
      description:'',
      // attachment:'',
      list:'"21c33ef9-f3e7-42f4-924e-8a99339bdc0a"'
    }
  }
}
  }
</script>

<style scoped>
.listbox {
  width: 250px;
  background-color: #ebecf0;
  margin-left: 20px;
  border-radius: 4px;
  margin-right: 20px;
 
}
.title {
  background-color: #ebecf0;
  flex-direction: column;
  border-radius: 3px;
  margin-right: 10px;
  text-align: start;
  margin-left: 20px;
  max-height: 100%;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  font-family: "Roboto";
  padding-top: 6px;
  padding-bottom: 2px;
  color: rgb(118, 118, 118);


}
.addcard {
  width: 200px;
  background-color: #ebecf0;
  text-align: start;
  border: 0px;
  margin-left:-50px;
}
.newtext {
  height: 50px;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 6px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 4px;
  width: 240px;
}
.addcardbtn {
  background-color: #5aac44;
  color: white;
  border-radius: 3px;
  border: 0px;
}
.cardbtn {
  display: flex;
  justify-content: flex-start;
  margin-left: 5px;
}
.closebutton {
  border: 0px;
  font-size: 14px;
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.32);
}
.closebutton:hover {
  color: black;
}
/*.addnewlist{

  background: rgba( 255, 255, 255, 0.24);
  border:0px;
  border-radius: 4px;
  font-size:14px;
  display: block;  

}*/
</style>