<template>
  <div>
    <div class="list">
      <h3 class="list-title">
        <b>Tasks to Do</b>
      </h3>

      <ul class="listlist">
        <li>
          Complete mock-up for client website
          <br />&nbsp;
          <i class="fas fa-paperclip" style="font-size:12px;"></i>&nbsp;1
        </li>

        <li>
          Email mock-up to client for
          feedback
          <br />&nbsp;
          <i class="fas fa-paperclip" style="font-size:12px;"></i>&nbsp;1
        </li>
          
      </ul>

      <div class="aac">+ Add another card....</div>
    </div>
  </div>
</template>
<style scoped>
.list {
  flex: 0 0 25rem;
  display: flex;
  background-color: #ebecf0;
  flex-direction: column;
  max-height: calc(100vh - 11.8rem);
  border-radius: 0.3rem;
  margin-right: 1rem;
  width: 300px;
  margin-left: 10px;
}

.list:last-of-type {
  margin-right: 0;
}

.list-title {
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  color: #172b4d;
  padding: 1rem;
  height: 0.1em;
  text-align: center;
  margin-bottom: 2px;
}

.listlist {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: start;
  padding: 0 0.6rem 0.3rem;
  overflow-y: auto;
}

.listlist::-webkit-scrollbar {
  width: 0.6rem;
}

.listlist::-webkit-scrollbar-thumb {
  background-color: #c4c9cc;
  border-right: 0.6rem /*solid #e2e4e6*/;
}

.listlist li {
  font-size: 1 rem;
  font-weight: 200;
  line-height: 1.3;
  background-color: #fff;
  padding: 0.65rem 0.6rem;
  color: #4d4d4d;
  border-bottom: 0.1rem solid #ccc;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
  /*word-wrap: break-word;
  cursor: pointer;*/
}

.listlist li:last-of-type {
  margin-bottom: 0;
}
</style>