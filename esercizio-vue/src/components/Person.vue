<template>

    <div class="PersonWrapper">
      <div class="PersonWrapper__elementImage">
        <img :src="imgurl">
      </div>
      <div class="PersonWrapper__elementData">
        <div class="PersonWrapper__elementName">
          {{name}}
        </div>
        <div class="PersonWrapper__elementSurname">
          {{surname}}
        </div>
      </div>
      <div class="PersonWrapper__elementRight">
        <badge :badge="badge"></badge>
        <custom-button>
            <!-- <p slot="title"> TITLE</p>
            <p slot="button"> BUTTON </p> -->
        </custom-button>
        <custom-button v-if="badge=='Admin'" >
            <!-- <p slot="desc"> DESCRIPTION </p> -->
        </custom-button>
      </div>
      <button @click="clickAnimal"> VAI AD ANIMALI</button>
      <button @click="clickProfile"> VAI AL PROFILO </button>
      <input type="text" v-model.lazy="bgcolor">
      <component :is="componentName" :bgcolor="bgcolor"></component> 
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CustomButton from './CustomButton.vue';
import Badge from './Badge.vue';
import Persona from '../interfaces/Persona';
import { EventBus } from '../main';
import AnimalList from './AnimalList.vue';
import ProfileCard from './ProfileCard.vue';
@Component({
  components: {
    CustomButton,
    Badge,
    app1:AnimalList,
    app2: ProfileCard,
  },
})
export default class Person extends Vue implements Persona {
  @Prop() public imgurl!: string;
  @Prop() public name!: string;
  @Prop() public surname!: string;
  @Prop() public badge!: string;
  public componentName:string = "app1";
  public bgcolor:string="green";
  created(){
    EventBus.$on('eventBusCustomEvent',(data:any)=>{
      debugger;
      console.log(data)
    })
  }

  public childEvent(event: any) {
    console.log(event);
    alert('trigger ok' + event);
  }
  public clickAnimal(){
    this.componentName= 'app1';
  }
  public clickProfile(){
    this.componentName= 'app2';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .PersonWrapper{
    display: flex;
    &__elementData{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
