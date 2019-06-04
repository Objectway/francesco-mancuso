<template>
  <div class="Home">
  <component @ReturnToLogin="goToLogin" @recuperoPassword="goToForgotPassword" :is="dynamicComponent"></component>
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
  
  
  goToForgotPassword(){
    this.dynamicComponent='forgotPassword';
  }
  goToLogin(){
    this.dynamicComponent='login';
  }
  
}
</script>
<style lang="scss">
  
</style>
