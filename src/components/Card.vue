<template>
  <div>
    <b-card class="cards">
      <b-card-body class="cardbody" @click="showcard(card.id)" v-b-modal.modal-center>{{card.title}}</b-card-body>
    </b-card>
    <div v-if="modalc">

      <b-modal
        id="modal-center"
        centered
        title="BootstrapVue"
        hide-footer
        hide-header
        class="modal-background"

      >
        <div class="mymodal">
          <h3>
            <i class="fas fa-money-check"></i>
            Title:{{card.title}}
          </h3>
          <p>
            <i class="fas fa-align-justify"></i>
            &nbsp;Description:{{card.description}}
          </p>
          <p>
            <i class="fas fa-paperclip"></i>
            &nbsp;Attachments:{{card.attachments}}
          </p>
          <div class="myclosemodalbtn">
            <button @click="modalc=false" class="closemodalbtn">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <p>
            <i class="fas fa-align-left"></i>Activity
            <button class="showdetail">Show Details</button>
          </p>
          <i class="fas fa-circle" style="font-size:24px"></i>
          <input type="text" placeholder="write a comment" style="width:300px;" />
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  props: ["card"],
  mymodal: ['mymodal'],

  data: function() {
    return {
      lists: [],
      title: null,
      description: null,
      attachments: null,
      modalc: false
    };
  },

  methods: {
    showcard(card_id) {
      this.modalc = true;
      console.log(card_id, "show card has been clickwd");
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
  outline: none;
}
.cards:hover {
  background-color: rgba(45, 50, 58, 0.1);
}
.closemodalbtn {
  background-color: #f4f5f7;
  color: #4c5b76;
  font-weight: 100;
  display: flex;
  align-items: flex-start;
  height: 25.2px;
  width: 25.2px;
  border:0px;
}
.closemodalbtn:hover {
  background-color: rgba(45, 50, 58, 0.2);
}
.myclosemodalbtn {
  display: flex;
  float: right;
  margin-right: 20px;
  margin-top: -120px;
  border:0px;
}
.mymodal {
  height: 500px;
  width: 500px;
  color: #2e2d33;
}
.showdetail {
  margin-left: 300px;
  background-color: #f4f5f7;
  color: #4c5b76;
  border:0px;
}
.showdetail:hover {
  background-color: rgba(45, 50, 58, 0.2);
}

</style>
