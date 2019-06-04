<template>
  <div id="app">
    <div v-on:perfavore="pippo" id="nav">

    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class App extends Vue{
  pippo(){
    console.log("pippo")
  }
}
  
</script>

<style lang="scss">
</style>
