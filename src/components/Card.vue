<template>
  <div>
    <b-card class="cards">
      <b-card-body
        class="cardbody"
        @click="showcard(card.id)"
        v-b-modal.modal-center
        >{{ card.title }}</b-card-body
      >
    </b-card>
    <div v-if="modalc">
      <b-modal
        id="modal-center"
        centered
        title="BootstrapVue"
        hide-footer
        hide-header
      >
        <div class="card_title">
        <span class="titleicon">
          <i
              class="fa fa-window-maximize"
             
            ></i>
        </span>
        <div class="titlecard">

      {{card.title}}
        </div>
      </div>
       <button
              @click="(modalc = false), (carddesc = false)"
              class="closemodalbtn"
            >
              <i class="fas fa-times"></i>
            </button>
      <!--card description-->
      <div class="card_description">
        <span class="descriptionicon"> <i
            class="fas fa-align-left"
          ></i>
        </span>
        <div class="cardin_description">
      Description:
        </div>
       
      </div>
      <div class="describecard">
        {{card.description}}
        </div>

      
       <div class="desctextarea">
          <b-textarea class="modaltextarea"></b-textarea>
      </div>
      <!-- card description-->
      <div class="card_attachment">
        <span class="descriptionicon"> <i
            class="fas fa-paperclip"
          ></i>
        </span>
        <div class="cardin_attachment">
      Attachment:
              </div>
              
              
      </div>
       <div class="attachedcard">
                {{card.attachments}}
              </div>
     
                   <!-- </div> -->

        <div class="mybtnrhs">
          <p class="btnsonright">Suggested</p>
          <br />
          <button class="btnsonright">
            <i class="fa fa-user" style="margin-top:4px; margin-right:5px;"></i>
            Join
          </button>
          <br />
          <button class="btnsonright">
            <i class="fa fa-user" style="margin-top:4px;margin-right:5px; "></i>
            Member
          </button>
          <br />
          <button class="btnsonright">
            <i
              class="fa fa-tag"
              aria-hidden="true"
              style="margin-top:4px; margin-right:5px;"
            ></i>
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
            <i
              class="fa fa-clock"
              aria-hidden="true"
              style="margin-top:4px; margin-right:5px;"
            ></i>
            Due Date
          </button>
          <br />

          <button class="btnsonright">
            <i
              class="fa fa-paperclip"
              style="margin-top:4px; margin-right:5px;"
            ></i
            >Attachments
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
         <!-- 
           <div class="attachedcard">
                {{card.attachments}}
              </div>
        <i
            class="fa fa-list"
            style="margin-left:10px; position:absolute:margin-top:4px;"
          ></i>
<span class="textcardat">Activity:</span>
          <button class="showdetail">Show Details</button> -->

    </b-modal>
    </div>
  </div>
</template>
<script>
import instance from "../axios_i";
export default {
  props: ["card"],

  data: function() {
    return {
      lists: [],
      title: null,
      description: null,
      attachments: null,
      modalc: false,
      carddesc: false,
      carddescription: ""
    };
  },

  methods: {
    showcard(card_id) {
      this.modalc = true;
      console.log("show card has been clickwd for", card_id);
    },
    changedesc(desc_id) {
      console.log("using the description control", desc_id);
      this.carddesc = true;
      instance
        .patch("/cards/" + desc_id + "/", {
          description: this.carddescription
        })
        .then(response => {
          console.log(response);
          console.log(this.carddescription);
          // this.$emit("done")
        })
        .catch(function(error) {
          console.log(error);

          alert("Enter all the description details properly");
        });
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
  display: flex;
  flex-flow: column;
  flex-wrap: wrap-reverse;
  position: static;
  margin-top: -150px;
  font-family: "Roboto", sans-serif;
  margin-left: 560px;
}
.btnsonright:hover {
  background-color: rgba(45, 50, 58, 0.2);
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
  margin-left: 650px;
  padding: 2px 4px 2px;
  font-family: "Roboto", sans-serif;
  font-family:"Roboto"

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
  font-family:"Roboto"
}
.titleicon {
  margin-left: 15px;
  position: absolute;
  margin-top: 4px;
  
}
.titlecard {
  margin: 4px 50px 0;
  padding: 0 0 0;
  font-size:20px;
  font-weight:800px;
  font-family:"Roboto"
  
}
.card_description {
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 0 0 0;
  position:relative;

}
.descriptionicon {
  margin-left: 20px;
  position: absolute;
  margin-top: 4px;
  font-family:"Roboto";
  font-weight:400px;


}
.cardin_description {
  font-size: 16px;
  line-height: 20px;
  margin-left: 50px;
  font-family:"Roboto"

}
.desctextarea {
  margin-left: 50px;
  position: relative;
  margin-top: 4px;
  font-family:"Roboto"

}
.modaltextarea {
  width: 400px;
  background-color: rgba(45, 50, 58, 0.1);
  height: 40px;
  font-family:"Roboto"

}
.card_attachment {
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 15px 0 0;
  margin-top: 4px;
  font-family:"Roboto";
  font-size:16px;

}
.cardin_attachment {
  font-size: 16px;
  line-height: 20px;
  margin-left: 50px;
  font-family:"Roboto";
    font-size:16px;


}
.attachedcard {
  margin-left: 50px;
  margin-top: 8px;
  background-color: rgba(45, 50, 58, 0.1);
  height: 40px;
  width: 300px;
  font-family:"Roboto";
      font-size:14px;
   /* height:50px;
     width: 400px; */



}
.describecard{
  margin:4px 50px 0;
  padding:8px 0 0;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 200;
}
</style>

