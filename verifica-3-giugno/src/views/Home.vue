<template>
  <div class="Home">
  <component @recuperoPassword="changeComponent" :is="dynamicComponent"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src
import ForgotPassword from '../components/ForgotPassword.vue';

@Component({
  components: {
    login:Login,
    forgotPassword:ForgotPassword
  },
})
export default class Home extends Vue {
  private dynamicComponent='login';
  changeComponent(){
    this.dynamicComponent='forgotPassword'
  }
}
</script>
<style lang="scss">
  
</style>
