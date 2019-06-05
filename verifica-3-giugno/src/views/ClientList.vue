<template>
  <div class="ClientList">
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
  public loaded=false;
  created(){


    this.axios.get("http://localhost:3001/rest/v1/photo/")
      .then(response => {
        this.photoList=response.data;
      })
    if(this.$store.getters.getUsers.length<=1){
    this.axios.get("http://localhost:3001/rest/v1/users")
      .then( (response) => {
        this.$store.commit('setUsers',response.data);
        this.listaUtenti=response.data;
      })
    }
    else{
        this.listaUtenti=this.$store.getters.getUsers;
    }
  }

  filterList() {
    this.listaUtenti=this.$store.getters.getUsers;
      var users = this.listaUtenti.filter((user) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase());
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
</style>
