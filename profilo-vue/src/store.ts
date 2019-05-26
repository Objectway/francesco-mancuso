import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urlimg:'https://cdn1.iconfinder.com/data/icons/rcons-user-action/512/user-512.png',
    name:"Francesco",
    surname:"Mancuso",
    editname:'',
    editsurname:''
  },
  getters:{
    getUrl:(state) => {
      return state.urlimg;
    },
    getEditName:(state) => {
      if(state.editname==''){
        return state.name
      }
      else{
        return state.editname;
      }
    },
    getEditSurname:(state) => {
      if(state.editsurname==''){
        return state.surname
      }
      else{
        return state.editsurname;
      }
    }
  },
  mutations: {
    changeName: (state,value) => {
      state.name= value;
    },
    changeSurname: (state,value) => {
      state.surname= value;
    },
    changeEditName: (state,value) => {
      state.editname= value;
    },
    changeEditSurname: (state,value) => {
      state.editsurname= value;
    }
  },
  actions: {

  },
  strict:true,
});
