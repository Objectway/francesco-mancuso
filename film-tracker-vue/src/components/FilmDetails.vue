<template>
  <div class="FilmDetails">
      <div class="FilmDetails__poster">
        <img :src='filmdetails.Poster'>
      </div>
      <div class="FilmDetails__title">
       Titolo: {{filmdetails.Title}}
      </div>
      <div class="FilmDetails__year">
        Anno: {{filmdetails.Year}}
      </div>
      <div class="FilmDetails__rated">
        Visione adatta: {{filmdetails.Rated}}
      </div>
      <div class="FilmDetails__runtime">
        Durata: {{filmdetails.Runtime}}
      </div>
      <div class="FilmDetails_genre">
        Genere: {{filmdetails.Genre}}
      </div>
      <div class="FilmDetails__director">
        Direttore: {{filmdetails.Director}}
      </div>
      <div class="FilmDetails__writer">
        Scrittori: {{filmdetails.Writer}}
      </div>
      <div class="FilmDetails__actors">
        Attori: {{filmdetails.Actors}}
      </div>
      <div class="FilmDetails__plot">
        Trama: {{filmdetails.Plot}}
      </div>
      <div class="FilmDetails__language">
        Lingua: {{filmdetails.Language}}
      </div>
      <div class="FilmDetails__country">
        Paese: {{filmdetails.Country}}
      </div>
      <div class="FilmDetails__awards">
        Awards: {{filmdetails.Awards}}
      </div>
      <div class="FilmDetails__metascore">
        Metascore: {{filmdetails.Metascore}}
      </div>
      <div class="FilmDetails__imdbRating">
        Voto IMDB: {{filmdetails.imdbRating}}
      </div>
      <div class="FilmDetails__imdbVotes">
        Numero Voti: {{filmdetails.imdbVotes}}
      </div>
      <div class="FilmDetails__imdbID">
        Id IMDB: {{filmdetails.imdbID}}
      </div> 
      <div class="FilmDetails__type">
        Tipo: {{filmdetails.Type}}
      </div>
      <div class="FilmDetails__dvd">
        DVD: {{filmdetails.DVD}}
      </div>
      <div class="FilmDetails__boxoffice">
        BoxOffice: {{filmdetails.BoxOffice}}
      </div>
      <div class="FilmDetails__production">
        Production: {{filmdetails.Production}}
      </div>
      <div class="FilmDetails__website">
        Sito Web: {{filmdetails.Website}}
      </div>
      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Film from '../interfaces/FilmDetails';

@Component
export default class FilmDetails extends Vue {
    public id?:string;
    public filmdetails:Film=new Film();
    created(){
        this.id=this.$route.params.id;
        console.log(this.$route.params.id)
        this.axios.get(`http://www.omdbapi.com/?apikey=51fb3d47&i=${this.id}`)
            .then((response:any) => {
                this.filmdetails=response.data;
            })
    }
}
</script>

<style scoped lang="scss">

</style>
