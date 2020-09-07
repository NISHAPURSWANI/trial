<template>
  <div>
    <!--<b-card class="cardm" @click="onClick()">
      card111
      <div v-show="q1"><Modal></Modal></div>
    </b-card>
     <b-card class="cardm"  @click="onClick()">
      card555
    </b-card>-->
    <b-card class="cardm" v-show="card111" @click="modal=true, card111=false">
      card111
    </b-card>
    <div v-show="modal" class="xya">
      title:
      description:
      attachment:
    </div>
  
     <b-card class="cardm"   >
      card55
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
<!--<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Boards",
  components: {
    //List,
    //Card,
    Modal
    // Login
  },
  data:function(){return{
   q1:false
  }
  },

  methods: {
  onClick() {
    //this.q1==true;
     //alert('888');
     this.q1=true;

     
  }
}
};
</script>-->
<style>
.cardm{
  width: 250px;
  height:50px;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 6px;
  margin-left: 20px;
  
}
.xya{
  height:350px;
  width:350px;
  background-color: thistle;
  
}
</style>