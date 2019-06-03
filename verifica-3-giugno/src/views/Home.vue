<template>
  <div class="Home">
  <login></login>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src

@Component({
  components: {
    Login,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
  .Home{
    width: 100%;
    height: 100%;
    
  }
</style>
