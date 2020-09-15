<template>
  <div>
    <div class="list">
        <b>Tasks to Do</b>
         <Card/>
          </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
  name:"List",
  components:{
    Card,
  }
}
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


</style>