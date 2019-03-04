<template lang="html">
  <div class="create-client">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Nom</label>
              <input class="form-control" type="text" v-model="nom">
          </div>
          <div class="form-group">
              <label>Description</label>
              <input class="form-control" type="text" v-model="description">
          </div>
          <div class="form-group">
              <label>Date debut</label>
              <input class="form-control" type="number" v-model="dateDebut">
          </div>
          <div class="form-group">
              <label>Date fin</label>
              <input class="form-control" type="number" v-model="dateFin">
          </div>
          <div class="form-group">
              <label>Prix de projet</label>
              <input class="form-control" type="number" v-model="prixProjet">
          </div>
          <div class="form-group">
              <label>Statut</label>
              <input class="form-control" type="number" v-model="statut">
          </div>
          <button class="btn btn-success" type="button" name="button" v-on:click="createProjet(nom, description, dateDebut, dateFin,prixProjet , statut)">Créer</button>
      </form>
  </div>
</template>

<script>

import ProjetService from '../services/ProjetService.vue'

export default {
  data () {
    return {
    nom: '' ,
    description: '' ,
    dateDebut:'',
    dateFin: '',
    prixProjet: '',
    statut: ''
    }
  },
  methods: {
    createProjet: function (nom, description, dateDebut, dateFin,prixProjet , statut) {
      ProjetService.createProjet(nom, description, dateDebut, dateFin,prixProjet , statut).then(alert("created!"));
    }
  }
};
</script>

<style lang="css" scoped>
</style>
