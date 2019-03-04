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
              <button class="btn btn-primary" type="button" name="button" v-on:click="formData(nom, prenom, username, birthday,adresse , telephone, mail, poste)">Changer</button>
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
      username:'',
      birthday: '',
      adresse: '',
      telephone: '',
      mail: '',
      poste: ''
    }
  },
  created () {
    let paramsId = this.$route.params.id
    SalarieService.oneSalarie(paramsId).then(salarie => {
      this.nom = salarie.nom;
      this.prenom = salarie.prenom;
      this.username = salarie.username;
      this.birthday = salarie.birthday;
      this.adresse = salarie.adresse;
      this.telephone = salarie.telephone;
      this.mail = salarie.mail;
      this.poste = salarie.poste;
      
    }
      )
    
  },
  methods: {
    formData: function (nom, prenom, username, birthday,adresse , telephone, mail, poste) {
      SalarieService.editSalarie(nom, prenom, username, birthday,adresse , telephone, mail, poste)
    }
  }
};
</script>

<style lang="css" scoped>
</style>

