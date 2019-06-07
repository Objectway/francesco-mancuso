<template>
  <div v-if="loaded" class="ClientList">
    <Header></Header>
    <div class="ClientList__TopBar">
      <div class="ClientList__TopBarPhrase">
        Elenco Clienti e Prospect
      </div>
      <div @click="goToCreate" class="ClientList__TopBarCreate">
        <i class="fas fa-plus-circle"></i>
        Crea Nuovo Prospetto
      </div>
    </div>
    <div class="ClientList__SearchBar">
      <i  class="fas fa-search"></i>
      <input v-model="search" type="text" placeholder="Cerca..." @keyup="filterList()">
    </div>
    <my-client  :key="index" v-for="(utente,index) in listaUtenti" :object="JSON.stringify({ utente:utente, photoList:photoList})" ></my-client>
  </div>
  <div class="Spinner" v-else>
    <img src="https://cdn.dribbble.com/users/15774/screenshots/1759511/spinner.gif">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import '../components/webcomponents/Client.ts'
import { User } from '../User';
import  Header  from '@/components/Header.vue'
@Component({
  components: {
    Header
  }
})
export default class ClientList extends Vue {
  public listaUtenti:User[]=[];
  public photoList:any[]=[];
  public search:string='';
  public loaded:boolean=false;
  created(){
    this.listaUtenti=this.$store.getters.getUsers;  //prendo la lista utenti dallo store
    this.photoList=this.$store.getters.getPhotos;   //prendo la lista con le foto dallo store
    if(this.listaUtenti.length!=0){  // se entrambe sono piene allora lo spinner si ferma e il contenuto compare
      if(this.photoList.length!=0){
        this.loaded=true;
        console.log(this.$store.getters.getUsers);
      }
      else{ //se invece solo quella delle foto è vuota scarico quella 
        this.axios.get("http://localhost:3001/rest/v1/photo/")
        .then((response) => {
          this.$store.commit('setPhotos',response.data);
          this.photoList=this.$store.getters.getPhotos;
          this.loaded=true;
          console.log(this.$store.getters.getUsers);
      })
      }
    }
    
    else if(this.listaUtenti.length==0){ // se invece è vuota anche quella degli utenti le scarico entrambe
      this.axios.get("http://localhost:3001/rest/v1/users/")
        .then( (response) => {
          this.$store.commit('setUsers',response.data);
          this.listaUtenti=this.$store.getters.getUsers;
          this.axios.get("http://localhost:3001/rest/v1/photo/")
            .then(response => {
              this.$store.commit('setPhotos',response.data);
            this.photoList=this.$store.getters.getPhotos;
            this.loaded=true;
            console.log(this.$store.getters.getUsers);
        })
        })
  }
  
    }
    

  filterList() { // filtro la lista ad ogni carattere inserito
    this.listaUtenti=this.$store.getters.getUsers;
      var users = this.listaUtenti.filter((user) => {
        return user.name.toLowerCase().match(this.search.toLowerCase());
  });;
  this.listaUtenti=users;
  }
  goToCreate(){
    this.$router.push('/create')
  }
}
</script>
<style lang="scss">
  $gatter:8px;
  .ClientList{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f5f5f5;
    .ClientList__TopBar{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin:$gatter * 4 $gatter * 10;
      .ClientList__TopBarPhrase{
        font-weight: bold;
        font-size: 32px;
      }
      .ClientList__TopBarCreate{
        color:#00b1e7;
      }
    }
    .ClientList__SearchBar{
      display: flex;
      margin:$gatter *4 $gatter * 10;
      color:rgba(0, 0, 0, 0.5);
      align-items: center;
      border-bottom: 1px solid grey;
      input{
        width: 100%;
        height: $gatter * 4;
        padding-left: $gatter;
        background: none;
        border:0;
        }
      }
  }
  .Spinner{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
