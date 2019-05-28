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
        Voto: {{filmdetails.Rated}}
      </div>
      <div class="FilmDetails__runtime">
        Data di Uscita: {{filmdetails.RunTime}}
      </div>
      <div class="FilmDetails_genre">
        Genere: {{filmdetails.Genre}}
      </div>
      <div class="FilmDetails__director">

      </div>
      <div class="FilmDetails__writer">

      </div>
      <div class="FilmDetails__actors">

      </div>
      <div class="FilmDetails__plot">
        

      </div>
      <div class="FilmDetails__language">

      </div>
      <div class="FilmDetails__country">

      </div>
      <div class="FilmDetails__awards">

      </div>
      <div class="FilmDetails__poster">

      </div>
      <div class="FilmDetails__metascore">

      </div>
      <div class="FilmDetails__imdbRating">

      </div>
      <div class="FilmDetails__imdbVotes">

      </div>
      <div class="FilmDetails__imdbID">

      </div> 
      <div class="FilmDetails__type">

      </div>
      <div class="FilmDetails__dvd">

      </div>
      <div class="FilmDetails__boxoffice">

      </div>
      <div class="FilmDetails__production">

      </div>
      <div class="FilmDetails__website">

      </div>
      <div class="FilmDetails__response">

      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FilmDetails extends Vue {
    public id?:string;
    public filmdetails:FilmDetails= new FilmDetails();
    created(){
        this.id=this.$route.params.id;
        this.axios.get(`http://www.omdbapi.com/?apikey=51fb3d47&i=${this.id}`)
            .then((response:any) => {
                this.filmdetails=response.data;
                console.log(this.filmdetails)
            })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
