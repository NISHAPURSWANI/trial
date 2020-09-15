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
        <div class="list">
          <input type="text" placeholder="Add List title" />
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
  flex: 0 0 25rem;
  display: flex;
  background-color: #ebecf0;
  flex-direction: column;
  max-height: calc(100vh - 118px);
  border-radius: 3px;
  margin-right: 10px;
  width: 300px;
  margin-left: 10px;
}
.addlist {
  color: white;
  background: rgba(255, 255, 255, 0.24);
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
</style>