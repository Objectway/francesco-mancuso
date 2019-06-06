<template>
  <div class="CreateInsert">
    <div class="CreateInsert__phrases">
      <div class="CreateInsert__topPhrase">Crea un nuovo Prospect</div>
      <div class="CreateInsert__bottomPhrase">Inserisci i dati Anagrafici della persona Fisica</div>
    </div>
    <div class="CreateInsert__body">
      <div class="CreateInsert__bodyImage">
        <i class="fas fa-user"></i>
        PersonaFisica
      </div>
      <div class="CreateInsert__bodyRight">
        <div class="CreateInsert__bodyRightForm1">
          <div class="CreateInsert__bodyRightForm1Content">
              <label> NOME </label>
              <input v-model="name" type="text" placeholder="Inserisci Nome">
          </div>
          <div class="CreateInsert__bodyRightForm1Content">
              <label> COGNOME </label>
              <input v-model="surname" type="text" placeholder="Inserisci Cognome">
          </div>
        </div>
        <div class="CreateInsert__bodyRightForm1">
            <div class="CreateInsert__bodyRightForm1Content">
                  <label> USERNAME </label>
                  <input v-model="username" type="text" placeholder="Inserisci Username">
              </div>
              <div class="CreateInsert__bodyRightForm1Content">
                  <label> PASSWORD </label>
                  <input v-model="password" type="password" placeholder="Inserisci Password">
              </div>
        </div>
        <div class="CreateInsert__bodyRightFormcf">
            <label> CODICE FISCALE </label>
            <input v-model="cf" type="text" placeholder="Inserisci Codice Fiscale">
        </div>
        <div class="CreateInsert__bodyRightDisable">
            <input type="checkbox">
            <label> Persona con Disabilità </label>
        </div>
        <div class="CreateInsert__bodyRightText">
          <div class="CreateInsert__bodyRightTextTop">
              Informatica ai sensi del decreto
        </div>
        <div class="CreateInsert__bodyRightTextBottom">
            Il cliente dichiara di aver preso atto di quanto indicato nell'informativa consegnatagli in data odierna e consapevole dei diritti previsti dal decreto legislaativo n.196 del 30/06/2003 , presta il suo consenso</div>
        </div>
        <div class="CreateInsert__bodyRightRadio">
            <div>
                <input v-model="agreed" type="radio" name="agree" :value="true">
                <label>Presto il Consenso</label>
            </div>
            <div>
                <input v-model="agreed" type="radio" name="agree" :value="false">
                <label>Nego il Consenso</label>
            </div>
        </div>
      </div>
    </div>
    <div class="CreateInsert__button">
      <button @click="annulla" class="CreateInsert__buttonUndo"> ANNULLA </button>
      <button :class="{'agreed': agreed}" @click="avanti" class="CreateInsert__buttonForward"> AVANTI </button>
    </div>
    <div v-show="success" class="CreateInsert__success">
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EventBus } from '../main';

@Component({
  components: {}
})
export default class CreateChoose extends Vue {
  public name='';
  public surname='';
  public username='';
  public password='';
  public cf='';
  public lastindex=0;
  public agreed:boolean=null;
  public success:boolean=false;
  annulla(){
    this.$emit('returnToChoose')
  }
  avanti(){
    // debugger;
      if(this.agreed==true){
        if(this.name!='' && this.surname!='' && this.cf!=''){
          this.returnLastIndex();
          let user={
          "id": this.lastindex,
          "name": this.name +' ' + this.surname,
          "username": this.username,
          "email": this.cf,
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": this.password,
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
    }

    this.startTimer();
    this.$store.dispatch('addUser',user);
    this.success=true;
    setTimeout(() => {
      this.success=false;
      this.$router.push('/clientlist');
    },4*1000)

  }
  else{
    alert('Credenziali obbligatorie')
    }
  }
    else{
      alert("Dai il consenso")
    }


  }
  startTimer() {
    var timer = 3;
    var seconds;
    const interval=setInterval(function () {;
        seconds = timer % 60;

        seconds = seconds < 10 ? 0 + seconds : seconds;

        document.querySelector('.CreateInsert__success').innerHTML = "        <img src='https://media.tenor.com/images/771577ac99bc46709e85e2f8ad5376ea/tenor.gif'>" +
         "Utente Registrato Correttamente, verrai reindirizzato in " + seconds + " secondi";

        if (--timer < 0) {
            timer = 0;
            clearInterval(interval);
        }
    }, 1000);
}
  created(){
    this.axios.get("http://localhost:3001/rest/v1/users/")
      .then( (response) => {
        this.$store.commit('setUsers',response.data);
          })
    
  }
  returnLastIndex(){
    this.lastindex=this.$store.getters.getLastIndex
  }
}
</script>

<style lang="scss">
$gatter: 8px;
.agreed{
  background: #1DB0E9;
  
}
input{
  padding-left: $gatter*2;
}
.CreateInsert {
  margin: $gatter * 4;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  .CreateInsert__topPhrase {
    font-size: 24px;
    font-weight: bold;
  }
  .CreateInsert__bottomPhrase {
    font-size: 14px;
    color: rgba($color: #000000, $alpha: 0.5);
  }
  .CreateInsert__body {
    display: flex;
  }
  .CreateInsert__bodyImage {
    background: white;
    margin: $gatter *8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 250px;
    .fas{
      font-size: 100px;
      margin-bottom: $gatter*2;
    }
  }
  .CreateInsert__bodyRight {
    background: white;
    margin: $gatter *8;
    width: 53%;
  }
  .CreateInsert__bodyRightForm1{
      display: flex;
      margin: $gatter *3;
      .CreateInsert__bodyRightForm1Content{
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0 $gatter;
          label{
              font-family: Arial, Helvetica, sans-serif;
              font-weight: bold;
              margin-bottom: $gatter /2;
          }
          input{
              height: $gatter *4;
              border: #bdbebf solid 1px;
          }
      }
  }
  .CreateInsert__bodyRightFormcf{
      display: flex;
    flex-direction: column;
    width: 100%;
    padding:0 $gatter *4.5 0 $gatter *4;
    box-sizing: border-box;
    label{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        margin-bottom: $gatter /2;
    }
    input{
        height: $gatter *4;
        border: #bdbebf solid 1px;
        text-transform: uppercase;
    }
  }
  .CreateInsert__bodyRightDisable{
    padding:$gatter*2 $gatter *4.5 0 $gatter *4;
    input{
        margin: 0;
    }
  }
  .CreateInsert__bodyRightText{
    margin:$gatter*2 $gatter *4.5 0 $gatter *4;
    font-family: Arial, Helvetica, sans-serif;
    .CreateInsert__bodyRightTextTop{
        font-weight: bold;
    }
    .CreateInsert__bodyRightTextBottom{
        font-size: 16px;
        color:rgba($color: #000000, $alpha: 0.5)
    }
  }
  .CreateInsert__bodyRightRadio{
    display: flex;
    justify-content: space-between;
    margin:$gatter*2 $gatter *4.5 $gatter *4 $gatter *4;
  }
  .CreateInsert__button{
        display: flex;
        justify-content: space-between;
        margin: $gatter *4;
        margin: auto 0;
        background: white;
        font-family: Arial, Helvetica, sans-serif;
        .CreateInsert__buttonUndo{
            width:100px;
            height: 40px;
            border: 0;
            background: #bdbebf;
            color: white;
            margin: $gatter *2;
        }
        .CreateInsert__buttonForward{
            width:100px;
            height: 40px;
            border: 0;
            color: white;
            margin: $gatter *2;
        }
    }
    .CreateInsert__success{
      width: 500px;
      height: 500px;
      background: white;
      position: fixed;
      align-self: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
}
</style>
