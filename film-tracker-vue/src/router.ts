import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FilmDetails from './components/FilmDetails.vue'
import VueRouter from 'vue-router';
import Prova from './components/Prova.vue'
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/filmdetails/:id',
      name: 'filmdetails',
      component: FilmDetails,
    },
    {
      path:'*',
      component: Prova,
    }
  ],
});
