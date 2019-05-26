<template>
  <div class="FilmList">
    <div class="FilmList__formInput">
      <input type="text" v-model="search">
      <button @click="searchFilm(search)"> CERCA </button>
    </div>
    <div :key="film.imdbID" v-for="film in filmList" class="FilmList__results">
      <div class="FilmList__resultsPoster" >
        <img @click="goToDetails(film.imdbID)" :src="film.Poster">
      </div>
      <div class="FilmList__resultsTitle" >
        Titolo: {{film.Title}}
      </div>
      <div class="FilmList__resultsType" >
        Genere: {{film.Type}}
      </div>
      <div class="FilmList__resultsYear" >
        Anno di Uscita: {{film.Year}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FilmDetails from './FilmDetails.vue'
@Component({
  components: {
  },
})
export default class FilmList extends Vue {
  public search: string = '';
  public filmList: any= [];
  public searchFilm(search:string){
    this.axios.get(`http://www.omdbapi.com/?apikey=51fb3d47&s=${search}`)
      .then((response:any) => {
        this.filmList = response.data.Search
        console.log(this.filmList);
      })
  };
  public goToDetails(id:string){
    this.$router.push(`/filmdetails/${id}`)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
