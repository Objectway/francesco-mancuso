<template>
  <div>
      CIAO
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FilmDetails from './FilmDetails.vue'
@Component({
  components: {
  },
})
export default class Prova extends Vue {
  created(){
      this.$router.push('/')
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
