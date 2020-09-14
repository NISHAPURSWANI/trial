<template>
  <div >
    <div class="mytext">
      <button class="mybtn">
        <i class="fa fa-th"></i>
      </button>
      <button class="mybtn">
        <i class="fa fa-home"></i>
      </button>
      <button class="mybtn">
        <i class="fab fa-trello"></i> &nbsp;
        <span style="font-size:16px; color:white;">Boards</span>
      </button>
      <input type="text" class="search" />
      <button class="mysearchbtn">
        <i class="fa fa-search"></i>
      </button>
      <img
        src="https://raw.githubusercontent.com/FrozenHearth/TrelloClone/master/images/trello-logo.png"
        width="70"
        height="30"
      />
      <button class="mybtnrhss">
        <i class="fa fa-plus"></i>
      </button>
      <button class="mybtnrhs">
        <i class="fa fa-info-circle"></i>
      </button>
      <button class="mybtnrhs">
        <i class="fa fa-bell"></i>
      </button>
      <!--<router-link :to="{name:'Login'}"><button class="circular" @click="logout()" ></button></router-link>-->
      <button class="circular" @click="logout()" ></button>
      <div>
  
</div>
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      //log:false



    }
  },
  methods:{
  logout:function(){

  this.$router.push( "/login" );
  localStorage.removeItem("TOKEN")

  }

  },
    
}
</script>
<style>
.mytext {
  text-align: start;
  background-color: rgba(0, 0, 0, 0.2);
}
.mybtn {
  color: white;
  background-color: rgba(255, 255, 255, 0.32);
  font-size: 20px;
  margin-left: 4px;
  border-radius: 4px;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.search {
  color: white;
  background-color: rgba(255, 255, 255, 0.32);
  font-size: 20px;
  margin-left: 4px;
  border-radius: 4px;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 200px;
}
.mysearchbtn {
  color: white;
  background-color: rgba(255, 255, 255, 0.32);
  font-size: 20px;
  margin-left: 4px;
  border-radius: 4px;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 420px;
}
.mybtnrhss {
  color: white;
  background-color: rgba(255, 255, 255, 0.32);
  font-size: 18px;
  margin-right: 4px;
  border-radius: 4px;
  margin-left: 500px;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.mybtnrhs {
  color: white;
  background-color: rgba(255, 255, 255, 0.32);
  font-size: 18px;
  margin-right: 4px;
  border-radius: 4px;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.circular {
  border-radius: 50%;
  border: 0px;
  height: 25.2px;
  width: 25.2px;
  margin-top: 0px;
}

</style>