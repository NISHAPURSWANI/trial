<template>
  <div class="modal" v-show="modal">
    <div >
      <div class="modal_text">Modal Title:</div>
      <div class="modal_body">
          Description:<br>
          Attachments:<br>
              </div>
     <input type="text" placeholder="write your comment" class="inputboxmodal">

          
          <button class="closemodal" @click="modal=false"><b>Close</b></button>
    </div>
  </div>
</template>
<script>
export default {
    data:function(){
        return{
        modal:true
        }
    }
}
</script>
<style scoped>
.modal {
  height: 500px;
  width: 500px;
  border: 1px;
  display: flex;
  margin-left: 500px;
  margin-top: 130px;
  background-color: rgba(245, 238, 238, 0.651);
}
.modal_text {
  margin-left: 10px;
}
.modal_body {
  display: flex;
  text-align: left;
  margin-top: 20px;
  margin-left: 10px;
}
.closemodal {
  background-color: red;
  height: 40px;
  width:60px;
  margin-left: 430px;
  margin-top: 330px;
}
.inputboxmodal{
display:flex;
width:250px;
 margin-left:10px;
 height:30px;
}
</style>