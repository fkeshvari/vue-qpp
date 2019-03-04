<script>
const myApiUrl = 'http://localhost:3000'


export default {
  createProjet (nom, description, dateDebut, dateFin,prixProjet , statut) {
        return fetch(myApiUrl+"/createProjet", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "nom": nom,
          "description": description,
          "dateDebut": dateDebut,
          "dateFin": dateFin,
          "prixProjet": prixProjet,
          "statut": statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  editProjet (nom, description, dateDebut, dateFin,prixProjet , statut) {
    return fetch(myApiUrl +"/editProjet/" + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "nom": nom,
          "description": description,
          "dateDebut": dateDebut,
          "dateFin": dateFin,
          "prixProjet": prixProjet,
          "statut": statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getProjets () {
    console.log(myApiUrl + "/listProjet")
    return fetch(myApiUrl + "/listProjet")
      .then((response) => {
        return response.json()
      })
  },
oneProjet(id) {
      return fetch(myApiUrl + "/oneProjet/"+ id)
      .then((response) => {
        return response.json()
      })

    }
};
</script>
