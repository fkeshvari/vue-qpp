import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import createClient from './components/createClient.vue'
import EditClient from './views/EditClient.vue'
import ListClient from './components/ListClient.vue'
import DetailClient from './components/DetailClient.vue'
import createSalarie from './components/createSalarie.vue'
import EditSalarie from './components/EditSalarie.vue'
import ListSalarie from './components/ListSalarie.vue'
import DetailSalarie from './components/DetailSalarie.vue'
import createProjet from './components/createProjet.vue'
import EditProjet from './components/EditProjet.vue'
import ListProjet from './views/ListProjet.vue'
import DetailProjet from './components/DetailProjet.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/createClient',
      name: 'createClient',
      component: createClient
    },
    {
      path: '/listClient',
      name: 'listClient',
      component: ListClient
    },
    {
      path: '/editClient/:id',
      name: 'EditClient',
      component: EditClient
    },
    {
      path: '/detailClient/:id',
      name: 'DetailClient',
      component: DetailClient

    },
    {
      path: '/createSalarie',
      name: 'createSalarie',
      component: createSalarie
    },
    {
      path: '/editSalarie/:id',
      name: 'EditSalarie',
      component: EditSalarie
    },
    {
      path: '/detailSalarie/:id',
      name: 'DetailSalarie',
      component: DetailSalarie
    },
    {
      path: '/listSalarie',
      name: 'listSalarie',
      component: ListSalarie
    },
    {
      path: '/createProjet',
      name: 'createProjet',
      component: createProjet
    },
    {
      path: '/listProjet',
      name: 'listProjet',
      component: ListProjet
    },
    {
      path: '/detailProjet/:id',
      name: 'DetailProjet',
      component: DetailProjet

    },
    {
      path: '/editProjet/:id',
      name: 'EditProjet',
      component: EditProjet
    }


  ]
});
