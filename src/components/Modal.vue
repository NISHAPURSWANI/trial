<template>
  <div>

   
   <!-- {{card.title}} , {{card.description}},{{card.attachments}} -->
      <!-- <b-button >Launch demo modal</b-button> -->

  <!-- <b-modal id="modal-1" hide-footer hide-header>
     <p class="my-4">{{card.id}}
      {{card.description}}
      {{card.attachments}} -->
          <!-- {{cards.title}}, -->
          <!-- {{cards.description}}, -->
          <!-- {{cards.attachments}} --> -
<div>
 <div>
  <!-- <b-button v-b-modal.modal-center>Launch centered modal</b-button>

  <b-modal id="modal-center" centered title="BootstrapVue" >
    <p class="my-4">Vertically centered modal!
      title:{{title}}
     description: {{description}}
     attachments:{{attachments}}
    </p>
  </b-modal>-->
  <b-button v-b-modal.modal-center>Launch centered modal</b-button> 

    <b-modal id="modal-center" centered title="BootstrapVue" >

    <h1>{{card.title}}</h1>
    <p>{{card.description}}</p>
    <p1>{{card.attachments}}</p1>
    </b-modal>

</div>
</div>
</div>
</template>
<script>
export default {
  props:["card","title","description","attachments"],

  name:"Modal",
   data: function() {
    return {
      // lists: [],
      cardtitle: null,
      carddescription:null,
      cardattachments:null,
      // modalc:false
      
    };
    },
   
}
</script>