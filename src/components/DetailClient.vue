<template lang="html">
  <table>
      <tr>
         <th>Nom de l'entreprise</th>
         <th>Adresse</th>
         <th>Contact</th>
         <th>Secteur d'activite</th>
      </tr>
      <tr>
         <td>{{client.nomEntreprise}}</td>
         <td>{{client.adresse}}</td>
         <td>{{client.contact}}</td>
         <td>{{client.secteurActivite}}</td>
      </tr>
  </table>
</template>

<script>
import ClientService from '../services/ClientService.vue'

export default {
  name:'DetailClient',
  data () {
    return {
      client: []
    }
  },
  created() {
      let params = this.$route.params.id;
      ClientService.oneClient(params)
        .then((data) => {
          this.client = data;
          console.log(this.client);
      })
      .catch(error => { console.log(error)});
   
}
};
</script>

<style lang="css" scoped>
</style>
