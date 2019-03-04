<template lang="html">
    <div class="client-list">
        <table class="table">
            <tr>
                <th>Nom de l'entreprise</th>
                <th>Adresse</th>
                <th>Contact</th>
                <th>Secteur d'activite</th>
            </tr>
            <tr v-for="client in clients">
                <td>{{client.nomEntreprise}}</td>
                <td>{{client.adresse}}</td>
                <td>{{client.contact}}</td>
                <td>{{client.secteurActivite}}</td>
                <td><router-link :to="{name:'EditClient', params:{id:client._id}}">Modifier</router-link></td>
                <td><router-link :to="{name:'DetailClient', params:{id:client._id}}">Detail</router-link></td>
            </tr>
        </table>

    </div>
</template>

<script>

import ClientService from '../services/ClientService.vue'

export default {
  name: 'listClient',
  data () {
    return {
      clients: []
    }
  },
  created () {
    ClientService.getClients()
      .then((data) => {
        console.log(data);
        this.clients = data
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
