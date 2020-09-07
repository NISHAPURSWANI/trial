<template>
  <div>
    
    <b-card class="cardm" v-show="card111" @click="modal=true, card111=false">
      card111
    </b-card>
    <div v-show="modal" class="modal_box">
      title:<br>
      description:<br>
      attachment:
    </div>
  
     <b-card class="cardm"   >
      card55
    </b-card>
     <b-card class="cardm"  >
      card789
    </b-card>
     <b-card class="cardm"  >
      card789
    </b-card>


    
  
  </div>
</template>
<script>
export default {
  data:function(){
    return{
    modal:false,
    card111:true
    }
  },
  
};
</script>
<style>
.cardm{
  width: 250px;
  height:50px;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 6px;
  margin-left: 20px;
  
}
.modal_box{
  height:350px;
  width:350px;
  background-color: thistle;
  
}
</style>