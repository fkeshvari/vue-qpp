<template lang="html">

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
          <button class="btn btn-primary" type="button" name="button" v-on:click="formData(nomEntreprise,adresse,contact,secteurActivite)">Changer</button>
      </form>

</template>

<script>
import ClientService from '../services/ClientService.vue'

export default {
  data () {
    return {
      nomEntreprise: '' ,
      adresse: '' ,
      contact:[],
      secteurActivite: ''
    }
  },
  created () {
    let paramsId = this.$route.params.id
    ClientService.oneClient(paramsId).then(client => {
      this.nomEntreprise = client.nomEntreprise;
      this.adresse = client.adresse;
      this.contact = client.contact;
      this.secteurActivite = client.secteurActivite;
    }
      )
    
  },
  methods: {
    formData: function (nomEntreprise,adresse,contact,secteurActivite ) {
      ClientService.editClient(nomEntreprise,adresse,contact,secteurActivite)
    }
  }
};
</script>

<style lang="css" scoped>
</style>
