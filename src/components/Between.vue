<template>
  <div class="between">
    <span>
      <b>Front-end Training</b>
    </span> &nbsp; |
    <button class="starbtn">
      <i class="fa fa-star" style="color:orange;"></i>
    </button> &nbsp;|
    <span>
      <b>Personal</b>
    </span>
    &nbsp; |
    <button class="pvtbtn">
      <i class="fa fa-lock" style="color:white;"></i> &nbsp;Private
    </button>
    <button class="circle"></button>
    <button class="circle"></button>
    <button class="circle"></button>
    <button class="circle"></button>
    <button class="circle"></button>
    <button class="invite">Invite</button>
    <button class="mybtnbutler">
      <i class="fas fa-concierge-bell" style="font-size:18px;color:white;"></i>&nbsp; Butler
    </button>
    <button class="mybtnmenu">
      <i class="fas fa-ellipsis-h menu-btn-icon" style="font-size:18px;color:white;"></i>&nbsp;Show Menu
    </button>
  </div>
</template>
<style >
.between {
  text-align: left;
  color: white;
  margin-left: 10px;
  margin-top: 20px;
}
.pvtbtn {
  color: white;
  margin-right: 30px;
  background: rgba(255, 255, 255, 0.24);
  border: 0px;
  border-radius: 4px;
}
.starbtn {
  background: rgba(255, 255, 255, 0.24);
  border: 0px;
  border-radius: 4px;
}

.circle {
  border-radius: 50%;
  border: 0px;
  /*margin-left:0.4rem;*/
  height: 25.2px;
  width: 25.2px;
  margin-top: -35px;
  border: 0px;
}
.invite {
  margin-left: 40px;
  color: white;
  border-radius: 4px;
  margin-right: 40px;
  background: rgba(255, 255, 255, 0.24);
  border: 0px;
}
.mybtnbutler {
  color: white;
  background: rgba(255, 255, 255, 0.24);
  border: 0px;
  border-radius: 0.4rem;
  display: block;
  margin-left: 1300px;
  margin-top: -25px;
}
.mybtnmenu {
  color: white;
  background: rgba(255, 255, 255, 0.24);
  border: 0px;
  border-radius: 0.4rem;
  display: block;
  margin-left: 1390px;
  margin-top: -25px;
}
</style>
