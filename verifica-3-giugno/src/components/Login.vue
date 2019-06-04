<template>
<div class="Login">
  <div class="Login__modal">
    <div class="Login__modalPhrases">
      <div class="Login__modalPhrasesTop">
        Onboarding Login
      </div>
      <div class="Login__modalPhrasesBottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta et urna sed gravida. 
        Proin egestas pulvinar nunc, at scelerisque sem vestibulum et.
      </div>
    </div>
    <div class="Login__modalForm">
      <div class="Login__modalFormContent">
        <label>
          USERNAME
        </label>
        <input v-model="username" type="text" placeholder="Inserisci Username">
      </div>
      <div class="Login__modalFormContent">
        <label>
          PASSWORD
        </label>
        <input v-model="password" type="password" placeholder="Inserisci Password">
      </div>
      <div class="Login__modalFormError"></div>
    </div>
    <div class="Login__modalButton">
      <button @click="accedi" > ACCEDI </button>
    </div>
    <div class="Login__modalForgot">
       <div @click="recuperoPassword" >Recupera Password</div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { User } from '../User';
@Component
export default class Login extends Vue {
  public username:string='';
  public password:string='';
  created(){
    this.axios.get("http://localhost:3001/rest/v1/users")
      .then( (response) => {
        this.$store.dispatch('setUsers',response.data)
      })
  }
  accedi(){
    let riconosciuto=false;
    this.$store.getters.getUsers.forEach((element:User) => {
      if(element.username==this.username && element.address.zipcode==this.password){
        riconosciuto=true;
        this.$router.push('/clientlist');
      }
    });
    if(riconosciuto==false){
      const input= document.querySelectorAll('input');
      for(let i=0;i<input.length;i++){
        input[i].style.border="1px solid red"
      }
      document.querySelector('.Login__modalFormError').innerHTML = "Controlla le credenziali"
    }
  }
  recuperoPassword(){
    this.$emit('recuperoPassword');
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $gatter:8px;
  .Login{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(236, 236, 236);
    display: flex;
    justify-content: center;
    align-items: center;
    .Login__modal{
      background: white;
      box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
      width: 70%;
      font-family: Arial, Helvetica, sans-serif;
      .Login__modalPhrases {
        margin-left: 4* $gatter;
        margin-top: 8* $gatter;
        line-height: 2* $gatter;
        margin-bottom: 8* $gatter;
      }
      .Login__modalPhrasesTop{
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 2* $gatter;
      }
      .Login__modalPhrasesBottom{
          margin-right: 30%;
          font-size: 14px;
          color: rgba(0,0,0,0.75);
      }
      .Login__modalForm{
        color: red ;
        margin: 0 4*$gatter;
        .Login__modalFormContent{
          display: flex;
          flex-direction: column;
          line-height: 32px;
          margin-bottom: 8px;
          input{
            height: 5*$gatter;
            padding-left: 4px;
          }
          label{
            color:rgba(0,0,0,0.75);
            font-weight: bold;
            font-size: 12px;
          }
        }
      }
      .Login__modalButton{
        margin: $gatter 4*$gatter;
        button{
          height: 5*$gatter;
          width: 100%;
          background: #00b1e7;
          border: 0;
          color:rgba(255 , 255, 255, 0.75)
        }
      }
      .Login__modalForgot{
        margin:0 4*$gatter 16* $gatter;
        div{
          font-size: 12px;
          color:#00b1e7;
          text-decoration: none;
        }
      }
    }
  }
</style>
