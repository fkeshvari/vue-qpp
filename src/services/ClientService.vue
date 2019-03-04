<script>
const myApiUrl = 'http://localhost:3000'


export default {
  createClient (nomEntreprise, adresse, contact, secteurActivite) {
        return fetch(myApiUrl+"/createClient", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "nomEntreprise": nomEntreprise,
          "adresse": adresse,
          "contact": contact,
          "secteurActivite": secteurActivite
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  
  deleteClient (id) {

  },
  editClient (id,nomEntreprise, adresse, contact, secteurActivite) {
    return fetch(myApiUrl + "/editClient/" + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "nomEntreprise": nomEntreprise,
          "adresse": adresse,
          "contact": contact,
          "secteurActivite": secteurActivite
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getClients () {
    console.log(myApiUrl + "/listClient")
    return fetch(myApiUrl + "/listClient")
      .then((response) => {
        return response.json()
      })
  },
oneClient(id) {
      return fetch(myApiUrl + "/oneClient/"+ id)
      .then((response) => {
        return response.json()
      })

    }
};

</script>
