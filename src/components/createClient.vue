<template lang="html">
  <div class="create-client">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Nom de l'entreprise</label>
              <input class="form-control" type="text" v-model="nomEntreprise">
          </div>
          <div class="form-group">
              <label>Secteur d'activite</label>
              <input class="form-control" type="text" v-model="secteurActivite">
          </div>
          <div class="form-group">
              <label>Adresse</label>
              <input class="form-control" type="number" v-model="adresse">
          </div>
          <div class="form-group">
              <label>Contact</label>
              <input class="form-control" type="number" v-model="contact">
          </div>
          <button class="btn btn-success" type="button" name="button" v-on:click="createClient(nomEntreprise, adresse, contact, secteurActivite)">Créer</button>
      </form>
  </div>
</template>

<script>

import ClientService from '../services/ClientService.vue'

export default {
  data () {
    return {
    nomEntreprise: '' ,
    adresse: '' ,
    contact:{},
    secteurActivite: ''
    }
  },
  methods: {
    createClient: function (nomEntreprise, adresse, contact, secteurActivite) {
      ClientService.createClient(nomEntreprise, adresse, contact, secteurActivite).then(alert("created!"));
    }
  }
};
</script>

<style lang="css" scoped>
</style>
