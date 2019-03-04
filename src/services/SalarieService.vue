<script>
const myApiUrl = 'http://localhost:3000'


export default {
  createSalarie (nom, prenom, username, birthday,adresse , telephone, mail, poste ) {
        return fetch(myApiUrl+"/createSalarie", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "nom": nom,
          "prenom": prenom,
          "username": username,
          "birthday": birthday,
          "adresse": adresse,
          "telephone": telephone,
          "mail": mail,
          "poste": poste
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  editSalarie (nom, prenom, username, birthday,adresse , telephone, mail, poste ) {
    return fetch(myApiUrl + "/editSalarie/" +  id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "nom": nom,
          "prenom": prenom,
          "username": username,
          "birthday": birthday,
          "adresse": adresse,
          "telephone": telephone,
          "mail": mail,
          "poste": poste
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getSalaries () {
    console.log(myApiUrl + "/listSalarie")
    return fetch(myApiUrl + "/listSalarie")
      .then((response) => {
        return response.json()
      })
  },
oneSalarie(id) {
      return fetch(myApiUrl + "/oneSalarie/"+ id)
      .then((response) => {
        return response.json()
      })

    }
};
</script>
