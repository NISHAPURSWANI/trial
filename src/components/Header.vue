<template>
  <div class="head">
<div>
	<div class="menu">
    <button class="mybtn"><i class="fa fa-th" style="font-size:15px; color:white;"></i></button>
    <button class="mybtn"><i class="fas fa-home" style="font-size:15px;color:white; "></i></button>

   <button class="mybtnboard"><i class="fab fa-trello" style="font-size:15px; color:white;" ></i> &nbsp; Boards </button>
   
  <input type="text" class="inputbox">
    <button class="mybtnsearch"><i class="fa fa-search" style="font-size:15px; color:white;"></i></button>
    
   

	</div>
</div>
	<div class="title">

    <img  src="https://raw.githubusercontent.com/FrozenHearth/TrelloClone/master/images/trello-logo.png" width="70" height="30" >
 

	</div>
  <div>
<div class="menurhs">
    <button class="mybtnrhs"><i class="fas fa-plus" style="font-size:13px; color:white;"></i></button> 
    <button class="mybtnrhs"><i class="fa fa-info-circle" style="font-size:15px; color:white;"></i></button>
     <button class="mybtnrhs"><i class="far fa-bell" style="font-size:15px;color:white;"></i></button>
      <button  class="circular" @click="logout()"></button> 
  </div>
</div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      //log:false
    };
  },
  methods:{
  logout:function(){
  this.$router.push({ name: "Login" });
  localStorage.removeItem('token')

  }

  },
};
</script>
<style scoped>
.head {
    display: flex;
    align-items: center;
    padding: 0 0.8rem;
   background: rgba(0,0,0,0.20);
    
  

}

.head .btn {

    border-radius: 0.3rem;

}


.menu { 
    display: flex;
    background: none;
}
.menurhs { 
    display: flex;
    justify-content:flex-end;
    margin-left: 400px;;
    
    
    

}
.title{
    display: flex;
    margin-left: 500px;
}
.circular{
      border-radius: 50%;
    border:0px;
    margin-left:0.4rem;
    height:25.2px;
  width:25.2px;
  margin-top:10px;
  margin-bottom:10px;
    
   
}
.mybtn{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  display:block;
  width:32px;
  height:25.2px;
  margin-top:10px;
  margin-bottom:10px;


  
}
.mybtnsearch{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  display:block;
  width:32px;
  height:25.2px;
  margin-top:10px;
  margin-bottom:10px;
  margin-left:-2px;
  
  

    
}
.mybtnrhs{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  display:block;
  width:32px;
  height:25.2px;
  margin-top:10px;
  margin-bottom:10px;

  
}
.mybtnboard{
  color:white; 
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  display:block;
  width:92px;
  height:25.2px;
  margin-top:10px;
  margin-bottom:10px;

  

}
.inputbox{
  color:white; 
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  display:block;
  width:150px;
  height:25.2px;
  margin-top:10px;
  margin-bottom:10px;
  
}

</style>
