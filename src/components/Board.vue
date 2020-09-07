<template>
  <div>
    <div class="board">
      <boards></boards>
      <between></between>
    </div>
    <br />
    <div class="mylist">
      <list></list>
      <card></card>
    </div>
  </div>
</template>

<script>
import Boards from "@/components/Boards.vue";
import Between from "@/components/Between.vue";
import List from "@/components/List.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Board",
  components: {
    Boards,
    Between,
    List,
    Card
  }
};
</script>
1<style >
.boards {
  background-image: url("https://i.imgur.com/7AqxKzf.jpg");
  background-size: cover;
  background-attachment: fixed;
}
.mylist {
  min-height: 500px;
  max-width: 300px;
  background-color: rgba(245, 241, 241, 0.904);
  border-radius: 4px;
  align-self: center;
  text-align: center;
  margin-left: 50px;
  margin-bottom: px;
}
</style>
