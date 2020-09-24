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
          </p>
          <!----close btn--->
          <button @click="modalc=false,carddesc=false" class="closemodalbtn">
            <i class="fas fa-times"></i>
          </button>
        </h5>
<!--Description-->
        <p>
          <i class="fas fa-align-left" style="margin-left:10px; position:absolute;margin-top:8px;"></i>

          <span class="textcard">Description:</span>
          <!-- <button class="editdes" @click="carddesc=true" >Edit</button> -->
        </p>
         <div v-if="carddesc">
          <span class="textcarddet">{{card.description}}</span>

        </div>

        <b-textarea class="desctext" placeholder="enter the card description" @click="carddesc=true" ></b-textarea>

       
        <!----- Attachment-->
        <p>
          <i class="fas fa-paperclip" style="margin-left:10px; position:absolute:margin-top:4px;"></i>
          <span class="textcardatt">Attachments:</span>
        </p>
        <p>
          <div class="tta">
          <!-- <span class="textcardattach"><span style="margin-left:10px;margin-top:50px;">{{card.attachments}}</span></span> -->
          <span class="textcardattach"><span style="margin-left:-50px;">{{card.attachments}}</span></span>
          </div>
        <!-- </p> -->
        <!----Activity---->
        <p>
          <i class="fa fa-list" style="margin-left:10px; position:absolute:margin-top:4px;"></i>
          <span class="textcardat">Activity:</span>
          <button class="showdetail">Show Details</button>
        </p>
           
        <!-- </div> -->
               <!----buton right-->

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
      carddesc:false
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
  border: 0px;
  margin-top: -25px;
  margin-left: 600px;
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
/************************************************ */
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
  display: flex;
}
.mybtnrhs {
    /* margin-top: -250px;   */
    /* display: flex; */
    /* position: fixed; */
  /* margin-left: -520px;  */
   /* float: right; */
  /* padding: 0 0px 0px 0px; */
  /* width: 168px; */
  /* overflow: hidden; */
  /* z-index: 10; */
      /* margin-top:-250px;  
    margin-left:530px; */
    display:flex;
    flex-wrap: nowrap;
    flex-flow: column;
    /* align-content: flex-start; */
    /* justify-content: top; */
    float: top;
}
.btnsonright:hover {
  background-color: rgba(45, 50, 58, 0.2);
}
.textcard {
  /* margin-left: 10px; */
  /* font-size: 18px; */
  font-family: "Roboto", sans-serif;
  display: inline-block;
  width: auto;
  margin: 4px 40px 0;
  min-height: 18px;
  min-width: 40px;
}
.textcardat {
  /* margin-left: 12px; */
  /* font-size: 14px; */
    display: inline-block;
  width: auto;
 min-height: 18px;
  min-width: 40px;
  font-family: "Roboto", sans-serif;
  margin: 4px 20px 0;
  padding: 8px 0 0;
}
/* .textcardatt {
  /* margin-left: 12px; */
  /*font-size: 14px;
  font-family: "Roboto", sans-serif;
  /* margin: 4px 20px 0; */
  /* padding: 8px 0 0; */
  /* padding-top: 10px; */
 /* margin-left: 20px;
  margin-top: -780px;
} */
.textcardatt{
      margin: 24px 20px 0px;


}

.textcarddet {
    margin: 4px 40px 0px;
    /* margin-bottom:35px; */
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}
.editdes {
  margin-left: 10px;
  background-color: rgba(234, 236, 240, 1);
  color: #4c5b76;
  border: 0px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  border-radius: 2px;
  line-height: 20px;
}
.editdes:hover {
  background-color: rgba(45, 50, 58, 0.2);
}
.card_title {
  margin: 4px 0 0;
  padding: 8px 0 0;
}
.desctext{
  background-color: rgba(45, 50, 58, 0.2);
  width:450px;
  /* margin-bottom: 20px; */
    margin: 4px 40px 0;

}
.textcardattach{
      margin: 4px 50px 0; 
      /* background-color: rgba(45, 50, 58, 0.2);
      height:60px;
      width:450px;
      display: inline-block; */


}
.tta{
  margin: 4px 130px 0;
      background-color: rgba(45, 50, 58, 0.2);
      height:60px;
      width:360px;
      display: inline-block;

}
</style>

