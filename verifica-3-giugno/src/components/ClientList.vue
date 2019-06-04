<template>
  <div class="ClientList">
    <div class="ClientList__Header">
      <i class="fas fa-bars"></i>
      <div class="ClientList__HeaderConectus"> CONECTUS </div>
      <div class="ClientList__HeaderBell">
        <i class="fas fa-bell"></i>
      </div>
    </div>
    <div class="ClientList__TopBar">
      <div class="ClientList__TopBarPhrase">
        Elenco Clienti e Prospect
      </div>
      <div class="ClientList__TopBarCreate">
        <i class="fas fa-plus-circle"></i>
        Crea Nuovo Prospetto
      </div>
    </div>
    <div class="ClientList__SearchBar">
      <i class="fas fa-search"></i>
      <input v-model="search" type="text" placeholder="Cerca...">
    </div>
    <my-client :key="myvariable" v-for="(utente) in listaUtenti" :object="JSON.stringify({ utente:utente, photoList:photoList})"  ></my-client>
    <button @click="pippo"> CIAO </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import './webcomponents/Client.ts'
import { User } from '../User';
@Component({
  components: {
  }
})
export default class ClientList extends Vue {
  public listaUtenti:User[]=[];
  public photoList:any[]=[];
  public search:string='';
  public listaRicerca:any[]=[];
  public myvariable:string='ciao';
  created(){
    
    this.axios.get("http://localhost:3001/rest/v1/photo/")
      .then(response => {
        this.photoList=response.data
        // console.log(response.data)
      })
    this.axios.get("http://localhost:3001/rest/v1/users")
      .then( (response) => {
        //console.log(response.data)
        this.listaUtenti=response.data;
      })
    
  }
  pippo(){
  }
  filterList() {
      var users = this.listaUtenti.filter((user) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase());
  });
  return users;
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
    background: rgb(236, 236, 236);
    .ClientList__Header{
      display: flex;
      align-items: center;
      background: #005dad;
      color: white;
      width: 100%;
      height: 5* $gatter;
      font-weight: bold;
      font-size: 18px;
      .fa-bars{
        margin: 2*$gatter;
      }
      .ClientList__HeaderConectus{
        margin-top: 5px;
      }
      .ClientList__HeaderBell{
        margin-left: auto;
        margin-right: 5* $gatter;
        justify-self: flex-end;
      }
    }
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
</style>
