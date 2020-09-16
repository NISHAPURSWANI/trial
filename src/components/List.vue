<template>
  <div>
    <div class="list">
      <b>Tasks to Do</b>
      <Card />
    </div>
    <div class="anotherlist">
      <div class="addinglist"></div>
      <button class="addlist" @click="listadder=true">
        <i class="fas fa-plus" style="font-size:18px;color:white; "></i>&nbsp; Add another List
      </button>
      <div v-show="listadder">
        <div class="newlist">
      <b></b>
    </div>
    
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name: "List",
  components: {
    Card
  },
  data: function() {
    return {
      listadder: false
    };
  }
};
</script>
<style scoped>
.list {
  flex: 25px;
  display: flex;
  background-color: #ebecf0;
  flex-direction: column;
  border-radius: 3px;
  margin-right: 10px;
  width: 300px;
  margin-left: 10px;
}
.addlist {
  color: white;
  background: #ebecf0;
  border: 0px;
  margin-left: 8px;
  border-radius: 4px;
  display: block;
}
.anotherlist {
  display: flex;
  justify-content: flex-end;
  margin-top: -180px;
  margin-right: 6px;
}
.newlist {
  flex: 25px;
  display: flex;
  background-color: #ebecf0;
  flex-direction: column;
  border-radius: 3px;
  margin-right: 10px;
  width: 300px;
  margin-left: -210px;
  justify-content:flex-end;
}

</style>
<!--<template>
<div>
<div class="listbox">
  <div class="title">
    Hello from list
  </div>
</div>
</div>
</template>
<style scoped>
.listbox{
  
  width:300px;
  background-color: #ebecf0;
  margin-left:20px;
  border-radius: 4px;
  margin-right:20px;
  

}
.title{
background-color: #ebecf0;
  flex-direction: column;
  border-radius: 3px;
  margin-right: 10px;
  text-align: start;
  margin-left: 20px;
  max-height: 100%;
  font-size:20px;
  font-weight:bold;
  line-height: 24px;
  font-family: 'Roboto';

}
</style>-->