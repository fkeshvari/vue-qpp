<template lang="html">
    <div class="salarie-list">
        <table class="table">
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Username</th>
                <th>Birthday</th>
                <th>Adresse</th>
                <th>Telephone</th>
                <th>Mail</th>
                <th>Poste</th>
            </tr>
            <tr v-for="salarie in salaries">
               <td>{{salarie.nom}}</td>
               <td>{{salarie.prenom}}</td>
               <td>{{salarie.birthday}}</td>
               <td>{{salarie.adresse}}</td>
               <td>{{salarie.telephone}}</td>
               <td>{{salarie.mail}}</td>
               <td>{{salarie.poste}}</td>
               <td>{{salarie._id}}</td>
               <td><router-link :to="{name:'EditSalarie', params:{id:salarie._id}}">Modifier</router-link></td>
               <td><router-link :to="{name:'DetailSalarie', params:{id:salarie._id}}">Detail</router-link></td>
            </tr>
        </table>

    </div>
</template>

<script>

import SalarieService from '../services/SalarieService.vue'

export default {
  name: 'listSalarie',
  data () {
    return {
      salaries: []
    }
  },
  created () {
    SalarieService.getSalaries()
      .then((data) => {
        console.log(data);
        this.salaries = data;
        console.log(this.salaries)
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
