<template>
  <div>
    <div class="listbox">
      <div class="title">
        {{list.title}}
        <i
          class="fas fa-ellipsis-h"
          style="display:flex; margin-left:200px; margin-top:-24px;"
        ></i>
      </div>

      <div v-for="card in list.card_details" :key="card.id">
        <card :card="card"></card>
      </div>
    </div>

    <br />
  </div>
</template>
<script>
import Card from "@/components/Card.vue";

export default {
  props: ["list"],
  name: "List",
  components: {
    Card
  },
  data: function() {
    return {
      newcard: false
    };
  },
  methods: {
    addcard: function() {}
  }
};
</script>

<style scoped>
.listbox {
  width: 250px;
  background-color: #ebecf0;
  margin-left: 20px;
  border-radius: 4px;
  margin-right: 20px;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
}
.title {
  background-color: #ebecf0;
  flex-direction: column;
  border-radius: 3px;
  margin-right: 10px;
  text-align: start;
  margin-left: 20px;
  max-height: 100%;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  font-family: "Roboto";
  padding-top: 6px;
  padding-bottom: 2px;
  color: rgb(118, 118, 118);
  display: flex;
  flex-direction: column;
}
.addcard {
  width: 200px;
  background-color: #ebecf0;
  text-align: start;
  border: 0px;
  margin-left: -35px;
}
.newtext {
  height: 50px;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 6px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 4px;
  width: 240px;
}
.addcardbtn {
  background-color: #5aac44;
  color: white;
  border-radius: 3px;
  border: 0px;
}
.cardbtn {
  display: flex;
  justify-content: flex-start;
  margin-left: 5px;
}
.closebutton {
  border: 0px;
  font-size: 14px;
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.32);
}
.closebutton:hover {
  color: black;
}
.addlist {
  color: white;
  background: rgba(255, 255, 255, 0.24);
  border: 0px;
  margin-left: 8px;
  border-radius: 4px;
  display: block;
  font-size: 14px;
}
.menu-btnlist {
  display: flex;
  justify-content: flex-end;
  margin-top: -400px;
}
</style>