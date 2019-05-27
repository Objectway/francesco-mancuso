import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import vueaxios from 'vue-axios';
Vue.use(Vuex,axios,vueaxios);

export default new Vuex.Store({
  state: {
    film:{}
  },
  getters: {
    getFilm: (state) => {
      return state.film;
    }
  },
  mutations: {
    changeFilm: (state,film) => {
      state.film=film;
    }
  },
  actions: {
    
  },
  strict:true,
});
