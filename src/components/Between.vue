<template>
  <div class="between">
    <div class="between1">
      <h style="Font-size:20px;">
        <b>Front-end Training</b>
      </h>

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

    <span class="menu-btn">
      <button class="mybtnbutler">
        <i class="fas fa-concierge-bell" style="font-size:18px;color:white; "></i>&nbsp; Butler
      </button>
      <button class="mybtnbutler">
        <i class="fas fa-ellipsis-h menu-btn-icon" style="font-size:18px;color:white; "></i>&nbsp; Show Menu
      </button>
    </span>
  </div>
</template>
<style >
.between {
    flex-basis: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.8rem 0;
    padding: 0 1rem;
    color: #f6f6f6;
}

.between1 {
    display: flex;
    
}

.between1 .btn {
    margin-right: 1rem;
}

.between1 .btn:last-of-type {
    margin-right: 0;
}

.between .btn {
    font-size: 1.4rem;
    font-weight: 300;
    padding: 0 0.6rem;
    border-radius: 0.3rem;
    height: 3rem;
}

.between .btn:hover {
    background-color: #006aa8;
}
.mybtnstar{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  display:block;
  width:32px;
  height:25.2px;
  /*margin-top:10px;
  margin-bottom:10px;*/
  margin-left: 2rem;  
}
.normtext{
   color:white;
   
   margin-left: 2rem;  
}

.mybtnprivate{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  /*display:block;
  /*width:32px;*/
  height:25.2px;
  /*margin-top:10px;
  margin-bottom:10px;*/
  margin-left: 2rem;
  margin-right:2rem;
}
.mybtnin{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  /*display:block;*/
  width:58px;
  height:25.2px;
  /*margin-top:10px;
  margin-bottom:10px;*/
  margin-left: 4rem;
  margin-right:4rem;
}

.mybtnbutler{
  color:white;
 background: rgba(255, 255, 255, 0.24);
   border:0px;
  margin-left: 0.4rem;
  border-radius: 0.4rem;
  display:block;
  /*padding: 1em, 1em, 1em, 1em;*/

 
  
}
.menu-btn {
  display: flex;
 flex-direction: row;
  margin-top:-20px;
 
  
}

</style>