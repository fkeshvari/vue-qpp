<template lang="html">
  <div class="create-salarie">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Nom</label>
              <input class="form-control" type="text" v-model="nom">
          </div>
          <div class="form-group">
              <label>Prenom</label>
              <input class="form-control" type="text" v-model="prenom">
          </div>
          <div class="form-group">
              <label>Username</label>
              <input class="form-control" type="number" v-model="username">
          </div>
          <div class="form-group">
              <label>Birthday</label>
              <input class="form-control" type="number" v-model="birthday">
          </div>
          <div class="form-group">
              <label>Adresse</label>
              <input class="form-control" type="number" v-model="adresse">
          </div>
          <div class="form-group">
              <label>Telephone</label>
              <input class="form-control" type="number" v-model="telephone">
          </div>
          <div class="form-group">
              <label>Mail</label>
              <input class="form-control" type="number" v-model="mail">
          </div>
          <div class="form-group">
              <label>Poste</label>
              <input class="form-control" type="number" v-model="poste">
          </div>
          <button class="btn btn-success" type="button" name="button" v-on:click="createSalarie(nom, prenom, username, birthday,adresse , telephone, mail, poste )">Créer</button>
      </form>
  </div>
</template>

<script>

import SalarieService from '../services/SalarieService.vue'

export default {
  data () {
    return {
    nom: '' ,
    prenom: '' ,
    username: '' ,
    birthday: '' ,
    adresse: '' ,
    telephone: '' ,
    mail: '' ,
    poste: '' 
    }
  },
  methods: {
    createSalarie: function (nom, prenom, username, birthday,adresse , telephone, mail, poste ) {
      SalarieService.createSalarie(nom, prenom, username, birthday,adresse , telephone, mail, poste ).then(alert("created!"));
    }
  }
};
</script>

<style lang="css" scoped>
</style>
