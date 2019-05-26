import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FilmDetails from './components/FilmDetails.vue'
Vue.use(Router);

export default new Router({
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
      props: {default: true},
      // component: () => import(/* webpackChunkName: "about" */ './components/FilmDetails.vue'),
    },
  ],
});