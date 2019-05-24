import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urlimg:'https://cdn1.iconfinder.com/data/icons/rcons-user-action/512/user-512.png',
    name:"Francesco",
    surname:"Mancuso",
    tempname:' ',
    tempsurname:' '
  },
  getters:{
    getUrl:(state) => {
      return state.urlimg;
    },
    getDefaultName:(state) => {
      if(!state.name){
        return
      }
    },
    getDefaultSurname:(state) => {
      return state.surname;
    }
  },
  mutations: {
    changeName: (state,value) => {
      state.name= value;
    },
    changeSurname: (state,value) => {
      state.surname= value;
    },
    changeTempname: (state,value) => {
      state.tempname= value;
    },
    changeTempsurname: (state,value) => {
      state.tempsurname= value;
    }
  },
  actions: {

  },
  strict:true,
});
