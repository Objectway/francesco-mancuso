<template>
  <div class="ClientList">
    <div class="ClientList__Header">
      <i class="fas fa-bars"></i>
      <div class="ClientList__HeaderConectus"> CONECTUS </div>
      <div class="ClientList__HeaderBell">
        <i class="fas fa-bell"></i>
      </div>
    </div>
    <my-client :key="utente.id" v-for="(utente,index) in listaUtenti" :object="JSON.stringify({ utente:utente, image:photoList[utente.id].thumbnailUrl})"  ></my-client>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './webcomponents/Client.ts'
import { User } from '../User';
@Component({
  components: {
  },
})
export default class ClientList extends Vue {
  public listaUtenti:User[]=[];
  public photoList:any[]=[];

  created(){
    this.axios.get("http://localhost:3001/rest/v1/photo/")
      .then(response => {
        this.photoList=response.data
        console.log(response.data)
      })
    this.axios.get("http://localhost:3001/rest/v1/users")
      .then( (response) => {
        console.log(response.data)
        this.listaUtenti=response.data;
      })
    
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
    background: rgb(194, 194, 194);
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
  }
</style>
