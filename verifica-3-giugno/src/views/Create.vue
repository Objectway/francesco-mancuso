<template>
  <div class="Create">
    <Header></Header>
    <component @returnToChoose="returnToChoose" :agreed="agreed" @changeComponent="changeComponent($event)" :is="dynamiccomponent"></component>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import CreateChoose from '@/components/CreateChoose.vue';
import CreateInsert from '@/components/CreateInsert.vue';
import CreateJuridical from '@/components/CreateJuridical.vue'
@Component({
    components:{
      Header,
      choose:CreateChoose,
      insert:CreateInsert,
      juridical:CreateJuridical
    }
    })
export default class Create extends Vue{
    public dynamiccomponent:string='choose';
    @Prop() agreed?:boolean;
    created(){
      this.$store.dispatch('setLogged',true);
    }
    changeComponent(value){
      if(value=="insert"){
      this.dynamiccomponent="insert";
      }
      else if(value=="juridical"){
        this.dynamiccomponent="juridical"
      }
    }
    returnToChoose(){
      this.dynamiccomponent="choose";
    }
}
  
</script>

<style lang="scss">
  .Create{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>
