<template>
  <div class="FilmList">
    <div class="FilmList__formInput">
      <input type="text" v-model="search">
      <button @click="searchFilm(search)"> CERCA </button>
    </div>
    <div v-for="film in filmList" class="FilmList__Results">
        {{film.Title}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FilmList extends Vue {
  public search: string = '';
  public filmList: any= [];
  public searchFilm(search:string){
    this.axios.get(`http://www.omdbapi.com/?apikey=51fb3d47&s=${search}`)
      .then((response:any) => {
        this.filmList = response.data.Search
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
