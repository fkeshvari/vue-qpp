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
            <button class="btn btn-primary" type="button" name="button" v-on:click="formData(nom, description, dateDebut, dateFin,prixProjet , statut)">Changer</button>
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
      dateDebut:'' ,
      dateFin: '',
      prixProjet: '',
      statut: ''
    }
  },
  created () {
    let paramsId = this.$route.params.id
    ProjetService.oneProjet(paramsId).then(projet => {
      this.nom = projet.nom;
      this.description = projet.description;
      this.dateDebut = projet.dateDebut;
      this.dateFin = projet.dateFin;
      this.prixProjet = projet.prixProjet;
      this.statut = projet.statut;
    }
      )
    
  },
  methods: {
    formData: function (nom, description, dateDebut, dateFin,prixProjet , statut) {
      ProjetService.editProjet(nom, description, dateDebut, dateFin,prixProjet , statut)
    }
  }
};
</script>

<style lang="css" scoped>
</style>
