import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import ClientList from './views/ClientList.vue';
import Create from './views/Create.vue';
import store from './store'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path:'/clientlist',
      name: 'clientlist',
      component: ClientList,
      beforeEnter: (to,from,next) => {
        to:'/clientlist';
        if(store.getters.getLogged==true){
          next()
        }
        else{
          next('/')
        }
      }
    },
    {
      path:'/create',
      name: 'create',
      component: Create
    }
  ],
});
