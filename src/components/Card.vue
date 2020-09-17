<template>
  <div>
      <b-card class="cards"><b-card-body class="cardbody" @click="dmodal=true"  v-b-modal.modal-1> {{card.title}}</b-card-body></b-card>
      <div v-show="dmodal">
        <Modal/>
      </div>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";

export default {
  props:['card'],
components:{
 Modal
},
  data:function(){
    return{
    dmodal:false
    }
  }
}
</script>
<style>
.cards {
  height: 50px;
  padding: 0px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 5px;
  margin-right:5px;
  border-radius:4px;
  width:240px;
  
}
.cardbody{
  display:flex;
  margin-top:-40px;
  margin-left:-25px;
}
.cards:hover{
  background-color:rgba(45, 50, 58 ,0.1);;
}
</style>
