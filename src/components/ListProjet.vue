<template lang="html">
    <div class="projet-list">
        <table class="table">
            <tr>
                <th>Nom</th>
                 <th>Description</th>
                 <th>Date debut</th>
                 <th>Date fin</th>
                 <th>Prix de projet</th>
                 <th>Statut</th>
            </tr>
            <tr v-for="projet in projets">
                <td>{{projet.nom}}</td>
                 <td>{{projet.description}}</td>
                 <td>{{projet.dateDebut}}</td>
                 <td>{{projet.dateFin}}</td>
                 <td>{{projet.prixProjet}}</td> 
                 <td>{{projet.statut}}</td>
                 <td><router-link :to="{name:'EditProjet', params:{id:projet._id}}">Modifier</router-link></td>
                <td><router-link :to="{name:'DetailProjet', params:{id:projet._id}}">Detail</router-link></td> 
            </tr>
        </table>

    </div>
</template>

<script>

import ProjetService from '../services/ProjetService.vue'

export default {
  name: 'listProjet',
  data () {
    return {
      projets: []
    }
  },
  created () {
    ProjetService.getProjets()
      .then((data) => {
        console.log(data);
        this.projets = data
      })
      .catch(error => { console.log(error) })
  }
};
</script>
<style type="text/css">
  th{
    color: green;
  }
</style>