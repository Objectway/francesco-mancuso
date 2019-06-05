<template>
  <div class="CreateChoose">
    <div class="CreateChoose__phrases">
      <div class="CreateChoose__topPhrase">
        Crea un nuovo Prospect
      </div>
      <div class="CreateChoose__bottomPhrase">
        Per iniziare il censimento del prospect è necessario scegliere la tipologia di cliente
      </div>
    </div>
    <div class="CreateChoose__body">
        <div class="CreateChoose__bodyPhrase">
            Scegli la tipologia di Cliente
        </div>
        <div class="CreateChoose__bodyType">
            <div @click="goToInsert" class="CreateChoose__bodyTypePerson">
                <div class="CreateChoose__bodyTypePersonContent">
                    <i class="fas fa-user"></i>
                    Persona Fisica
                </div>
            </div>
            <div class="CreateChoose__bodyTypePerson">
                <div class="CreateChoose__bodyTypePersonContent">
                    <i class="fas fa-building"></i>
                    Persona Giuridica
                </div>
            </div>
        </div>
    </div>
    <div class="CreateInsert__button">
      <button @click="annulla" class="CreateInsert__buttonUndo"> ANNULLA </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'
@Component({
    components:{
      Header
    }
    })
export default class CreateChoose extends Vue{
  goToInsert(){
    this.$emit('changeComponent')
  }
  annulla(){
    this.$router.push('/clientlist')
  }

  
}
  
</script>

<style lang="scss">
    $gatter:8px;
    .CreateChoose{
        margin: $gatter *4 ;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        .CreateChoose__topPhrase{
            font-size: 24px;
            font-weight: bold;
        }
        .CreateChoose__bottomPhrase{
            font-size: 14px;
            color:rgba($color: #000000, $alpha: 0.5)
        }
        .CreateChoose__body{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin:$gatter *10;
            .CreateChoose__bodyType{
                display: flex;
                width: 100%;
                justify-content: center;
            }
            .CreateChoose__bodyTypePerson{
                background: white;
                width: 400px;
                height: 250px;
                margin: $gatter * 2;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-weight: bold;
                .fas{
                    margin: $gatter *2 0;
                    font-size: 70px;
                }
                .CreateChoose__bodyTypePersonContent{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: auto 0;
                }
            }
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
    }
    }

</style>
