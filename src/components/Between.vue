<template>
  <div class="between">
    <div class="between1">
        <b>Front-end Training</b>

      <button class="mybtnstar">
        <i class="far fa-star" style="font-size:18px;color:orange "></i>
      </button>
      <span class="btn-divider"></span>

      <span class="normtext">Personal</span>
      <span class="btn-divider"></span>

      <button class="mybtnprivate">
        <i class="fa fa-lock" style="font-size:14px; color:white;"></i> &nbsp; Private
      </button>
      <span class="btn-divide"></span>

      &nbsp; &nbsp;
      <i class="fas fa-circle" style="font-size:24px"></i>
      <i class="fas fa-circle" style="font-size:24px"></i>
      <i class="fas fa-circle" style="font-size:24px"></i>
      <i class="fas fa-circle" style="font-size:24px"></i>
      <i class="fas fa-circle" style="font-size:24px"></i>
      &nbsp;
      <button class="mybtnin">Invite</button>
    </div>

    <span class="menu-btnrhs">
      <button class="mybtnbutler">
        <i class="fas fa-concierge-bell" style="font-size:18px;color:white; "></i>&nbsp; Butler
      </button>
      <button class="mybtnbutler">
        <i class="fas fa-ellipsis-h menu-btn-icon" style="font-size:18px;color:white; "></i>&nbsp; Show Menu
      </button>
    </span>
    
  </div>
</template>
<style scoped>
.between1{
  display:flex;
  margin-left:20px;
  justify-content: flex-start;
  color:white;
  Font-size:18px;
  Font-weight:700px;

}
.between{
  margin-top: 25px;
  margin-bottom: 25px;
}
.normtext{
   color:white;
   margin-left: 20px; 
   font-weight: 14px; 
}

.mybtnstar{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 4px;
  border-radius: 4px;
  display:block;
  width:32px;
  height:25.2px;
  margin-left: 20px; 
}
.menu-btnrhs{
  display:flex;
 justify-content: flex-end;
  margin-top:-35px
}
.mybtnbutler{
  color:white;
 background: rgba( 255, 255, 255, 0.24);
   border:0px;
  margin-left: 8px;
  border-radius: 4px;
  display:block;
  font-size:14px;
}
.mybtnprivate{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  height:25.2px;
  margin-left: 20px;
  margin-right:20px;
  font-size: 14px;
}
.mybtnin{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  border-radius: 4px;
  width:58px;
  height:25.2px;
  margin-left: 40px;
  margin-right:40px;
  font-size:16px;
}
.btn-divider {
  float: left;
  border-left: 1px solid ;
  height: 1.6em;
  margin: 0em 0em 1em 1em;
}
.btn-divide {
  float: left;
  border-left: 1px solid ;
  height: 1.6em;
  margin: 0em 0em 1em 0em;
  margin-right:10px;
}


</style>