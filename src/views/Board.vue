<template>
  <div class="main">
    <div>
      <Header />
      <Between />

      <div class="listrender">
        <list v-for="list in lists" :key="list.id" :list="list"></list>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Between from "@/components/Between.vue";
import List from "@/components/List.vue";
import instance from "../axios_i";
export default {
  name: "Board",
  components: {
    Header,
    Between,
    List
  },
  data: function() {
    return {
      lists: [],
      title: null
    };
  },
  created() {
    instance
      .get("/boards/e60d1c4b-6138-4c32-8ccd-34b1265aa0c2/")
      .then(response => {
        this.lists = response.data.list_details;
      });
  }
};
</script>
<style >
.main {
  background-image: url("https://i.imgur.com/7AqxKzf.jpg");
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.listrender {
  display: flex;
  direction: row;
}
</style>
