<template>
<div class="main">
  <div >
    <Header/>
    <Between/>
    <List/>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Between from '@/components/Between.vue'
import List from '@/components/List.vue'

export default {
  name:"Board",
  components:{
    Header,
    Between,
    List
  }
}
</script>
<style >
.main{
  background-image: url("https://i.imgur.com/7AqxKzf.jpg");
    height: 100%;
    width:100%;
    background-repeat: no-repeat;
    background-size: cover;

}
</style>