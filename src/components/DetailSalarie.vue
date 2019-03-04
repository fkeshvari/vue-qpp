<template lang="html">
  <table>
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
      <tr>
         <td>{{salarie.Nom}}</td>
         <td>{{salarie.Prenom}}</td>
         <td>{{salarie.Birthday}}</td>
         <td>{{salarie.Adresse}}</td>
         <td>{{salarie.Telephone}}</td>
         <td>{{salarie.Mail}}</td>
         <td>{{salarie.Poste}}</td>
      </tr>
  </table>
</template>

<script>
import SalarieService from '../services/SalarieService.vue'

export default {
  name:'DetailSalarie',
  data () {
    return {
      salarie: []
    }
  },
  created() {
      let params = this.$route.params.id;
      SalarieService.oneSalarie(params)
        .then((data) => {
          this.salarie = data;
          console.log(this.salarie);
      })
      .catch(error => { console.log(error)});
   
}
};
</script>

<style lang="css" scoped>
</style>

