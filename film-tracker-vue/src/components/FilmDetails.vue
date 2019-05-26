<template>
  <div class="FilmDetails">
      <div class="FilmDetails__poster">
        <img :src='filmdetails.Poster'>
      </div>
      <div class="FilmDetails__title">
       Titolo: {{filmdetails.Title}}
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FilmDetails extends Vue {
    public id?:string;
    public filmdetails:FilmDetails= {};
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
