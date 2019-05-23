<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <!-- <router-view/> -->
    <h1> {{ message }}</h1>
    <p v-html="messageHtml" />
    <a :href="url"> Vai su google </a>
    <button @click="clickMe">
      Click Button
    </button>
    <div :key="button.name" v-for="button in buttons">
      <custom-button
        :button-name="button.name"
        :button-color="button.color"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import  CustomButton  from './components/CustomButton.vue';
@Component({
  components:{
    CustomButton
    }
})
export default class App extends Vue {
  public message: string = 'Hello Vue! Finalmente';
  public messageHtml: string = 'ZA WARUDOOOO';
  private url: string = 'http://www.google.it';

  public clickMe(event: any) {
    console.log(event);
  }
  public buttons: {[key:string]:string}[] = [
    {
      name:'pippo',
      color:'red'
    },
    {
      name:'PayPall',
      color: 'blue'
    },
    {
      name: 'PayAmazon',
      color: 'yellow'
    }
  ];
}
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
