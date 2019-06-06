import Vue from 'vue';
import Vuex from 'vuex';
import {User} from './User'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:[],
    photos:[],
    loaded:false,
    logged:null,
  },
  getters:{
    getUsers:(state) => {
      return state.users;
    },
    getLastIndex(state){
      let lastindex=0;
      state.users.forEach(element => {
        if(element.id>lastindex){
          lastindex=element.id
        }
      });
      return lastindex+1;
    },
    getLoaded(state){
      return state.loaded;
    },
    getPhotos(state){
      return state.photos
    },
    getLogged(state){
      return state.logged;
    }
  },
  mutations: {
    setUsers:(state,users) => {
      state.users=users;
    },
    setPhotos:(state,photos) => {
      state.photos=photos;
    },
    addUser(state,user){
      state.users.push(user);
    },
    setLoaded(state,loaded){
      state.loaded=loaded;
    },
    setLogged(state,logged){
      state.logged=logged;
    }
  },
  actions: {
    setUsers (context, lista ){
      context.commit('setUsers',lista);
    },
    setPhotos (context, photos ){
      context.commit('setPhotos',photos);
    },
    getPassword (context,{username, email}){
      debugger;
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
    },
    addUser(context,user){
      context.commit('addUser',user)
    },
    setLoaded(context,loaded){
      context.commit('setLoaded',loaded)
    }
  },
  strict:true
});
