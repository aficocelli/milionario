<template>
  <div class="backModal">
    <b-modal no-close-on-backdrop ref="startModal" id="startGame" hide-footer hide-header  title="Chi vuol essere milionario">
      <h1 class="text-center">Chi vuol essere milionario</h1>
      <b-row align-v="center">
        <b-button class="mt-3 btn-color1"  block @click="hideModal()">Gioca</b-button>
      </b-row>
    </b-modal>
    <domanda></domanda>
    <div v-if="on" :key="on"  class="backModal"></div>
  </div>
</template>

<script>


export default {
  data(){
    return {
      on: true
    }
  },
  methods:{
    showModal(){
      this.$refs['startModal'].show();
    },
    hideModal(){
      this.$refs['startModal'].hide();
      this.on = false;
    }
  },
  mounted(){
    this.showModal();
  }
}

</script>

<style>
  .backModal{
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    height:100vh;
    background-image: url("./assets/bg.png");
  }

  .btn-color1{
    background-color:#2a4ab0 !important;
    font-weight:bold !important;
    font-size:32px !important;
  }
</style>
