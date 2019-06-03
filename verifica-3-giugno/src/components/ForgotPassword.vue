<template>
  <div class="ForgotPassword">
      <div class="ForgotPassword__modal">
          <div class="ForgotPassword__modalForm">
                <label> USERNAME </label>
                <input placeholder="Inserisci Username" type="text" v-model="username">
          </div>
          <div class="ForgotPassword__modalForm">
                <label> E-MAIL </label>
                <input placeholder="Inserisci E-mail" type="text" v-model="email">
          </div>
          <div class="ForgotPassword__modalPassword">

          </div>
          <div class="ForgotPassword__modalButton">
              <button @click="Recupera"> Recupera </button>
          </div>
          
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class ForgotPassword extends Vue {
    public username:string='';
    public email:string='';
    public password?:string;
    Recupera(){
       (this.$store.dispatch('getPassword',{username:this.username, email:this.email}))
        .then(response => {
            this.password=(response);
            const el= document.querySelector('.ForgotPassword__modalPassword');
            if(response!="Credenziali Errate"){
                el.innerHTML= `La password è ${this.password}`
                const input= document.querySelectorAll('input');
                for(let i=0;i<input.length;i++){
                input[i].style.border="";
                debugger;
            }
            }
            else{
                el.innerHTML= response;
                const input= document.querySelectorAll('input');
                for(let i=0;i<input.length;i++){
                input[i].style.border="1px solid red"
                
      }
            }
        })
    }
}
</script>
<style lang="scss">
    $gatter:8px;
    .ForgotPassword{
    position:absolute;
    width: 100%;
    height: 100%;
    background: rgb(194, 194, 194);
    display: flex;
    justify-content: center;
    align-items: center;
        .ForgotPassword__modal{
        background: white;
        -webkit-box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
        box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
        width: 50%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        }
        .ForgotPassword__modalForm{
            margin: 0 4*$gatter $gatter;
            display: flex;
            flex-direction: column;
            line-height: 32px;
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
        .ForgotPassword__modalButton{
            margin: $gatter 4*$gatter;
            button{
              height: 5*$gatter;
              width: 100%;
              background: #00b1e7;
              border: 0;
              color:rgba(255 , 255, 255, 0.75)
        }
        }
        .ForgotPassword__modalPassword{
            margin-left: $gatter * 4;
        }
    }
</style>
