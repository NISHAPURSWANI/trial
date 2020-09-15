<template>
  <div>
    <div>

      <ul class="listoflist">
        <li  @click="modal=true">
          Complete mock-up for client website
          <br />&nbsp;
          <i class="fas fa-paperclip" style="font-size:12px;"></i>&nbsp;1
        </li>
  

         <!-- <li @keypress.enter="modal=true">-->
           <li  @click="modal=true">
          Email mock-up to client for
          feedback
         <div v-show="modal">
            <modal></modal>
          </div>
          <br />&nbsp;
          <i class="fas fa-paperclip" style="font-size:12px;"></i>&nbsp;1
        </li>
         <div v-show="newcard" >
            <li>
          <input type="text" class="listoflist">
        </li>
        <div class="cardbuttons" v-show="added">
   <button class="add" @click="added=false">Add card</button>
   <button class="closecard" @click="newcard=false" >Close</button>
        </div>
   </div>

      </ul>

      <div  ><button class="aac" @click="newcard=true">+ Add another card....</button></div>

    </div>
    </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  name:"Card",
  data:function(){
    return{
  modal:false,
  newcard:false,
  added:true
    }
  },
  components:{
    Modal

  },
 /*methods:{
    closecard:function(){
      this.$newcard===false;

    }
  }*/
}

</script>
<style scoped>

.listoflist {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: start;
 padding:  6px 3px;
  overflow-y: auto;
}



.listoflist li {
  font-size: 15px;
  font-weight: 200;
  line-height: 1.3;
  background-color: #fff;
  padding: 6px 6px;
  color: #4d4d4d;
  border-bottom: 0.1rem solid #ccc;
  border-radius: 3px;
  margin-bottom: 5px;

}
.aac{
  background-color:ebecf0;
  border:0px;
}
.cardbuttons{
  display: flex;
  margin-left: 140px;
}
.add{
  background-color: green;
}
.closecard{
  background-color: red;
}
</style>