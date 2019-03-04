<template>
  <div class="home container">
    <Title title="Bienvenu sur votre application"/>
    <p>Pour voir le nombre de salariés dans l’agence cliquez ici</p><router-link tag="a" to="/ListSalarie">Voir</router-link>
    <p>Pour voir le nombre de projets dans l’agence cliquez ici</p><router-link tag="a" to="/ListProjet">Voir</router-link>
    <p>Pour voir le nombre de clients dans l’agence cliquez ici</p><router-link tag="a" to="/ListClient">Voir</router-link>
  </div>
</template>

<script>

import Title from '@/utils/Title.vue';

export default {
  name: 'home',
  components: {
    Title
  }
};
</script>
