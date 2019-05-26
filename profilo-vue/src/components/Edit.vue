<template>
  <div class="EditWrapper">
    <div class="EditWrapper__name">
        <label> NAME </label>
        <input @change="update" v-model="editname" type="text">
    </div>
    <div class="EditWrapper__surname">
        <label> SURNAME </label>
        <input @change="update" v-model="editsurname" type="text">
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
    public editname:string = this.$store.getters.getEditName;
    public editsurname:string = this.$store.getters.getEditSurname;

    

    update(){
        this.$store.commit('changeEditName',this.editname);
        console.log("ho cambiato il temp name");
        this.$store.commit('changeEditSurname',this.editsurname);
        console.log("ho cambiato il temp surname");
    }

    public salva(){
        this.$store.commit('changeName',this.editname);
        this.$store.commit('changeSurname',this.editsurname);
        this.editname='';
        this.editsurname='';
    }

  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
