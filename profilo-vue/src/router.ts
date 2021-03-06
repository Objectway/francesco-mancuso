import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Edit from './components/Edit.vue'
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
      path:'/edit',
      name: 'edit',
      component: Edit,
    }
  ],
});
