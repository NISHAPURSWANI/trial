<template>
  <div>
    <b-card class="cards">
      <!-- <b-card-body class="cardbody"  @click="showmodal(card.id)"  v-b-modal.modal-1   >{{card.title}} {{card.description}},
          {{card.attachments}} 

      </b-card-body>-->
      <b-card-body class="cardbody" @click="showmodal(card.id)" v-b-modal.modal-1>{{card.title}}</b-card-body>
    </b-card>
    <div v-show="cardmodal">
      <b-modal id="modal-1" hide-footer hide-header>
        <p class="my-4">
          HELLO FROM MODAL COMPONENT
          {{card.title}},
          {{card.description}},
          {{card.attachments}}
        </p>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  props: ["card"],
  components: {},
  data: function() {
    return {
      cards: [],
      cardmodal: false
    };
  },
  methods: {
    showmodal(card_id) {
      this.cardmodal = true;
      console.log(card_id);
    }
  }
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
