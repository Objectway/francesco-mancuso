import Vue from 'vue';
import Vuex from 'vuex';
import {User} from './User'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:[
      {
        id: null,
        name: null,
        username: null,
        email: null,
        address: null,
        phone: null,
        website: null,
        company: null,
        geo: null
      }
    ]
  },
  getters:{
    getUsers:(state) => {
      return state.users;
    }
  },
  mutations: {
    setUsers:(state,users) => {
      state.users=users;
    }
  },
  actions: {
    setUsers (context, lista ){
      context.commit('setUsers',lista);
    },
    getPassword (context,{username, email}){
      let autorizzato=false;
      let password='';
      context.state.users.forEach((element,index) => {
        if(username==element.username && email==element.email){
          autorizzato=true;
          password=(element.address.zipcode);
        }
      });
      if(autorizzato==false){
        return "Credenziali Errate"
      }
      else if(autorizzato==true){
        return password
      }
    }
  },
  strict:true
});
