<template>
  <div class="ForgotPassword">
    <div class="ForgotPassword__modal">
          <button @click="ReturnToLogin" class="ForgotPassword__modalGoBack">
            <i class="fas fa-chevron-left"></i>
            Torna al Login
        </button>
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
            <img v-if="loading" src="https://siga.ana.gob.pa/pcus/images/spinner.gif">
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
    public loading:boolean=false;
    created(){
        console.log(this.$store.getters.getUsers)
    }
    Recupera(){
        this.loading=true; //setto la variabile che mi fa comparire lo spinner a true
        console.log(this.loading)
        if(this.$store.getters.getUsers.length==0){ //se la lista non esiste vado a scaricarla
            this.axios.get("http://localhost:3001/rest/v1/users/")
                .then( (response) => {
                    this.$store.commit('setUsers',response.data);
                    (this.$store.dispatch('getPassword',{username:this.username, email:this.email})) // richiamo il metodo dallo store che mi ritorna la password 
                        .then(response => {                                                          //se i dati sono giusti o "Credenziali errate se sono sbagliati"
                            this.password=(response);
                            const el= document.querySelector('.ForgotPassword__modalPassword');
                            if(response!="Credenziali Errate"){                                      //conidizioni sulla risposta e stile dei bordi
                                el.innerHTML= `La password è ${this.password}`
                                const input= document.querySelectorAll('input');
                                for(let i=0;i<input.length;i++){
                                input[i].style.border="1px solid #cccccc";
                                this.loading=false;
                            }
                            }
                            else{
                                el.innerHTML= response;
                                const input= document.querySelectorAll('input');
                                for(let i=0;i<input.length;i++){
                                input[i].style.border="1px solid red";
                                this.loading=false;
                                }
                            }
                        })
                })
        }
        else{
            (this.$store.dispatch('getPassword',{username:this.username, email:this.email})) //se la lista esiste già vado ad usare quella cosi se aggiungo un nuovo prospetto posso recuperarne la password
                .then(response => {
                    this.password=(response);
                    const el= document.querySelector('.ForgotPassword__modalPassword');
                    if(response!="Credenziali Errate"){
                        el.innerHTML= `La password è ${this.password}`
                        const input= document.querySelectorAll('input');
                        for(let i=0;i<input.length;i++){
                        input[i].style.border="1px solid #cccccc";
                        this.loading=false;
                    }
                    }
                    else{
                        el.innerHTML= response;
                        const input= document.querySelectorAll('input');
                        for(let i=0;i<input.length;i++){
                        input[i].style.border="1px solid red";
                        this.loading=false;
                        }
                    }
                })
        }
    }
    ReturnToLogin(){
        this.$emit('ReturnToLogin');
    }
}
</script>
<style lang="scss">
    $gatter:8px;
    
    .ForgotPassword{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
        .ForgotPassword__modal{
        background: white;
        -webkit-box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
        box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        }
        .ForgotPassword__modalGoBack{
            margin: 8*$gatter 4*$gatter 8* $gatter;
            width: 15 * $gatter;
            height: 5* $gatter;
            background: #00b1e7;
            border: 0;
            color:rgba(255 , 255, 255, 0.75)
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
            margin: $gatter 4*$gatter 16* $gatter;
            display: flex;
            flex-direction: column;
            align-items: center;
            button{
            height: 5*$gatter;
            width: 100%;
            background: #00b1e7;
            border: 0;
            color:rgba(255 , 255, 255, 0.75);
            }
            img{
              margin-top: 30px;
              width: 50px;
              height: auto;
            }
        }
        .ForgotPassword__modalPassword{
            margin-left: $gatter * 4;
        }
    }
</style>
