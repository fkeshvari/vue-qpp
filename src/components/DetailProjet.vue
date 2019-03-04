<template lang="html">
  <table>
      <tr>
         <th>Nom</th>
         <th>Description</th>
         <th>Date debut</th>
         <th>Date fin</th>
         <th>Prix de projet</th>
         <th>Statut</th>
      </tr>
      <tr>
         <td>{{projet.nom}}</td>
         <td>{{projet.description}}</td>
         <td>{{projet.dateDebut}}</td>
         <td>{{projet.dateFin}}</td>
         <td>{{projet.prixProjet}}</td> 
         <td>{{projet.statut}}</td> 
      </tr>
  </table>
</template>

<script>
import ProjetService from '../services/ProjetService.vue'

export default {
  name:'DetailProjet',
  data () {
    return {
      projet: []
    }
  },
  created() {
      let params = this.$route.params.id;
      ProjetService.oneProjet(params)
        .then((data) => {
          this.projet = data;
          console.log(this.projet);
      })
      .catch(error => { console.log(error)});
   
}
};
</script>

<style lang="css" scoped>
</style>
