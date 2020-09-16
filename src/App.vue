<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
/*@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap");*/
@import "system-fonts";
.system-sans-serif { font-family: -apple-system, BlinkMacSystemFont, /* MacOS and iOS */
               'avenir next', avenir, /* MacOS and iOS */
               'Segoe UI', /* Windows */
               'lucida grande', /* Older MacOS */
               'helvetica neue', helvetica, /* Older MacOS */
               'Fira Sans', /* Firefox OS */
               roboto, noto, /* Google stuff */
               'Droid Sans', /* Old Google stuff */
               cantarell, oxygen, ubuntu, /* Linux stuff */
               'franklin gothic medium', 'century gothic', /* Windows stuff */
               'Liberation Sans', /* Linux */
               sans-serif; /* Everything else */ }


#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
   /* font-family: 'Roboto';*/

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  text-align: center;
  height:100vh;
  width:100vw;
}

</style>
