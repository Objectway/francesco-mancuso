<template>
  <div class="EditWrapper">
    <div class="EditWrapper__name">
        <label> NAME </label>
        <input @change="update" v-model="name" type="text">
    </div>
    <div class="EditWrapper__surname">
        <label> SURNAME </label>
        <input @change="update" v-model="surname" type="text">
    </div>
    <div class="EditWrapper__buttonSave">
        <button @click="salva"> Salva </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Edit extends Vue {
    public name:string=this.$store.state.tempname|| this.$store.state.name;
    public surname:string=this.$store.state.tempsurname;

    
    update(){
        this.$store.commit('changeTempname',this.name);
        this.$store.commit('changeTempsurname',this.surname)
    }

    public salva(){
        this.$store.commit('changeName',this.name);
        this.$store.commit('changeSurname',this.surname);
        this.name=' ';
        this.surname='';
    }

  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
