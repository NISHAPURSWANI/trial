<template>
  <div>
    <b-card class="cards">
      <b-card-body class="cardbody">{{card.title}}</b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["card"]
};
</script>
<style>
.cards {
  height: 50px;
  padding: 0px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 4px;
  width: 240px;
}
.cardbody {
  display: flex;
  margin-top: -35px;
  margin-left: -30px;
}
.cards:hover {
  background-color: rgba(45, 50, 58, 0.1);
}
</style>
