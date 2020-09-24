<template>
  <div>
    <b-card class="cards">
      <b-card-body class="cardbody" @click="showcard(card.id)" v-b-modal.modal-center>{{card.title}}</b-card-body>
    </b-card>
    <div v-if="modalc">
      <b-modal id="modal-center" centered title="BootstrapVue" hide-footer hide-header>
        <!-- <div class="mymodal"> -->
        <h5>
          <p class="card_title">
            <i
              class="fa fa-window-maximize"
              style="margin-left:10px; position:absolute:margin-top:4px;"
            ></i>
            {{card.title}}
                      <button @click="modalc=false,carddesc=false" class="closemodalbtn">
            <i class="fas fa-times"></i>
          </button>

          </p>
          <!--Description-->
        </h5>
        <p>
          <i class="fas fa-align-left" style="margin-left:10px; position:absolute;margin-top:8px;"></i>
        </p>
        <p class="headertext">Description:</p>
        <span v-if="carddesc">
          <p class="descdesc">{{card.description}}</p>
        </span>
        <div>
          <b-textarea
            class="desctext"
            placeholder="enter the card description"
            @click="carddesc=true"
          ></b-textarea>
        </div>
        <div class="attachment">
          <i
            class="fas fa-paperclip"
            style="margin-left:10px; position:absolute:margin-top:4px; font-size:15px;"
          ></i>

          <span class="attach">Attachments:</span>


        </div>
                     <div class="textcardattach"><span style="padding:30px 10px 0;">{{card.attachments}}</span></div>
                             <div>
          <i class="fa fa-list" style="margin-left:10px; position:absolute:margin-top:4px;"></i>
          <span class="textcardat">Activity:</span>
          <button class="showdetail">Show Details</button>
        </div>
        

        <div class="mybtnrhs">
          <p class="btnsonright">Suggested</p>
          <br />
          <button class="btnsonright">
            <i class="fa fa-user" style="margin-top:4px; margin-right:5px;"></i> Join
          </button>
          <br />
          <button class="btnsonright">
            <i class="fa fa-user" style="margin-top:4px;margin-right:5px; "></i>
            Member
          </button>
          <br />
          <button class="btnsonright">
            <i class="fa fa-tag" aria-hidden="true" style="margin-top:4px; margin-right:5px;"></i>
            Label
          </button>
          <br />
          <button class="btnsonright">
            <i
              class="fa fa-check-square"
              aria-hidden="true"
              style="margin-top:4px; margin-right:5px;"
            ></i>
            Checklist
          </button>
          <br />

          <button class="btnsonright">
            <i class="fa fa-clock" aria-hidden="true" style="margin-top:4px; margin-right:5px;"></i>
            Due Date
          </button>
          <br />

          <button class="btnsonright">
            <i class="fa fa-paperclip" style="margin-top:4px; margin-right:5px;"></i>Attachments
          </button>
          <br />

          <button class="btnsonright">
            <i
              class="fa fa-window-maximize"
              aria-hidden="true"
              style="margin-top:4px; margin-right:5px;"
            ></i>
            Cover
          </button>
          <br />
        </div>
                  
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  props: ["card"],

  data: function() {
    return {
      lists: [],
      title: null,
      description: null,
      attachments: null,
      modalc: false,
      carddesc: false
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
.card_title {
  margin: 4px 0 0;
  padding: 8px 0 0;
  font-size: 20px;
  font-family: "Roboto", sans-serif;

}
.headertext {
  margin-left: 35px;
  margin-top: -5px;
    font-family: "Roboto", sans-serif;

}
.desctext {
  background-color: rgba(45, 50, 58, 0.2);
  width: 450px;
  /* margin-bottom: 20px; */
  margin: 4px 35px 0;
  padding: 10px 10px 0;
    font-family: "Roboto", sans-serif;

}
.descdesc {
  margin-left: 35px;
  padding: 8px 0 0;
  display: flex;
    font-family: "Roboto", sans-serif;


}
.attachment {
  margin-top: 10px;
  padding: 8px 0 0;
    font-family: "Roboto", sans-serif;

}
.attach {
  margin-left: 10px;
  margin-top: -5px;
  padding: 8px 0 0;
    font-family: "Roboto", sans-serif;

}
.modal-body {
  background-color: rgba(244, 245, 247, 1) !important;
  height: 503px;
  width: 700px;
  font-family: "Roboto", sans-serif;
}
.btnsonright {
  background-color: rgba(234, 236, 240, 1);
  color: #4c5b76;
  border: 0px;
  margin-top: -20px;
  font-family: "Roboto", sans-serif;
  width: 110px;
  text-align: left;
  font-size: 14px;
  border-radius: 2px;
  margin-bottom: 5px;
}
.mybtnrhs {
        display:flex;
    flex-flow: column;
    flex-wrap: wrap-reverse;
    position: static;
    margin-top: -200px;
      font-family: "Roboto", sans-serif;
      margin-left:560px;

    
}
.btnsonright:hover {
  background-color: rgba(45, 50, 58, 0.2);
}
.textcardattach{
      margin: 20px 35px 0; 
       background-color: rgba(45, 50, 58, 0.2);
      height:60px;
      width:450px;
      display: inline-block; 
        font-family: "Roboto", sans-serif;




}
/* .tta{
  /* margin: 4px 130px 0; 
      background-color: rgba(45, 50, 58, 0.2);
      height:60px;
      width:360px;
      display: inline-block;
      /* margin-top:-860px; 
      margin-left:200px;
       margin-top:-790px; 

} */
.link{
        margin: 4px 35px 0; 
        background-color: rgba(45, 50, 58, 0.2);
        height: 60px;
        width:80px;
        text-align: center;
        /* margin-top: 20px; */
          font-family: "Roboto", sans-serif;

  

}
.textcardat {
  /* margin-left: 12px; */
  /* font-size: 14px; */
    display: inline-block;
  width: auto;
 min-height: 18px;
  min-width: 40px;
  font-family: "Roboto", sans-serif;
  margin: 20px 10px 0;
  padding: 8px 0 0;
}
.showdetail {
  margin-left: 280px;
  background-color: rgba(234, 236, 240, 1);
  color: #4c5b76;
  border: 0px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  border-radius: 2px;
  /* margin-right:250px; */
}
.showdetail:hover {
  background-color: rgba(45, 50, 58, 0.2);
}
.closemodalbtn {
  background-color: #f4f5f7;
  color: #4c5b76;
  font-weight: 100;
  display: flex;
  align-items: flex-start;
  height: 25.2px;
  width: 25.2px;
  border: 0px;
  margin-top: -25px;
  margin-left: 750px;
  padding:2px 4px  2px;
    font-family: "Roboto", sans-serif;

}
.closemodalbtn:hover {
  background-color: rgba(45, 50, 58, 0.2);
}
.myclosemodalbtn {
  display: flex;
  float: right;
  margin-right: 20px;
  margin-top: -120px;
  border: 0px;
    font-family: "Roboto", sans-serif;

}


</style>

