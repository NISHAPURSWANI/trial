<template>
  <div>
    <div>
      <ul class="listoflist">
       <li @click="modal=true">
          Complete mock-up for client website
          <br />&nbsp;
          <i class="fas fa-paperclip" style="font-size:12px;"></i>&nbsp;1
        </li>

        <li @click="modal=true">
          Email mock-up to client for
          feedback
          <div v-show="modal">
            <modal></modal>
          </div>
          <br />&nbsp;
          <i class="fas fa-paperclip" style="font-size:12px;"></i>&nbsp;1
        </li>
        <div v-show="newcard">
          <li>
        <b-form-textarea id="textarea-plaintext" plaintext ></b-form-textarea>
      </li>
          <div class="cardbuttons" v-show="added">
            <button class="add" @click="added=false">Add card</button>
            <button class="closecard" @click="newcard=false">Close</button>
          </div>
        </div>
      </ul>

      <div>
        <button class="aac" @click="newcard=true">+ Add another card....</button>
      </div>
    </div>
  </div>
</template>
<script>

import Modal from "@/components/Modal.vue";
export default {
  name: "Card",
  data: function() {
    return {
      modal: false,
      newcard: false,
      added: true
    };
  },
  components: {
    Modal
  }
};
</script>
<style scoped>


.listoflist {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: start;
  padding: 6px 3px;
  overflow-y: auto;

}

.listoflist li {
  font-size: 16px;
  font-weight: 200px;
  line-height: 20px;
  background-color: #fff;
  padding: 6px 6px;
  color: rgba(45,50,58,1);
  border-radius: 3px;
  margin-bottom: 5px;
 font-family:'Roboto';
 text-align:left;

}
.aac {
  background-color: ebecf0;
  border: 0px;
  color:#5e6c84
}
.cardbuttons {
  display: flex;
  margin-left: 140px;
}
.add {
  background-color: #5aac44;
}
.closecard {
  background-color: red;
}
.listoflist li:hover{
      background: rgba(45, 50, 58 ,0.1);
;

}
</style>
