<template>
  <div>
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
          <!-- <card :card="card" v-on:done="carddescribe()"></card> -->
           <card :card="card"></card>
        </div>
        <div class="newcard" v-show="newcard">
          <b-textarea class="newtext" placeholder="enter your card title" v-model="cardtitle"></b-textarea>

          <div></div>
          <div class="cardbtn" v-show="cardbtns">
            <button class="addcardbtn" @click="addcard(list.id,list.card_details.length)">Add Card</button>
            <button class="closebutton" @click="newcard=false">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <button class="addcard" @click="newcard=true">+add another card</button>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import instance from "../axios_i";

export default {
  props: ["list"],
  name: "List",
  components: {
    Card
  },
  data: function() {
    return {
      newcard: false,
      inputfields: true,
      cardbtns: true,
      cardtitle: "",
      order: ""
    };
  },
  methods: {
    addcard(list_id, list_cardcount) {
      console.log(list_id, list_cardcount);
      instance
        .post("/cards/", {
          title: this.cardtitle,
          list: list_id,
          order: list_cardcount
        })
         .then(response => {
          console.log(response);
          this.cardbtns = false;
          this.newcard = false;
          this.$emit('ready')
          
     
         })
      


        .catch(function(error) {
          console.log(error);

          alert("Enter all the card details properly");
          this.cardbtns = false;
          this.newcard = false;
        });
    },
    // carddescribe(){
    //    console.log("card describe function");
    //   instance
    //     .patch("/boards/e60d1c4b-6138-4c32-8ccd-34b1265aa0c2/")
    //     // .then(response => {
    //     //   this.lists = response.data.list_details;
    //     // });
    //     .then(response=>{
    //       console.log("response from card description",response)
    //     })
    // }
    }
    
};
</script>

<style scoped>
.listbox {
  width: 270px;
  background-color: #ebecf0;
  margin-left: 20px;
  border-radius: 4px;
  margin-right: 20px;
  max-height: 75vh;
  overflow-y: scroll;
}
.title {
  background-color: #ebecf0;
  flex-direction: column;
  border-radius: 3px;
  margin-right: 10px;
  text-align: start;
  margin-left: 15px;
  max-height: 100%;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  font-family: "Roboto";
  padding-top: 6px;
  padding-bottom: 6px;
  color: rgb(118, 118, 118);
}
.addcard {
  width: 200px;
  background-color: #ebecf0;
  text-align: start;
  border: 0px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  margin-top: 20px;
}
.newtext {
  height: 50px;
  padding: 0px;
  margin-top: 2px;
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
.newcard {
  padding: 3px;
}
</style>