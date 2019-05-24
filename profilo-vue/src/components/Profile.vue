<template>
  <div class="ProfileWrapper">
    <div class="ProfileWrapper__image">
      <img :src="imgurl">
    </div>
    <div class="ProfileWrapper__data">
      <div class="ProfileWrapper__dataName">
          {{$store.state.name}}
      </div>
      <div class="ProfileWrapper__dataSurname">
        {{$store.state.surname}}
      </div>
    </div>
    <div class="ProfileWrapper__edit">
      <button @click="showEdit"> EDIT </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
  public imgurl:string=this.$store.getters.getUrl;

  created(){
    
  }
  showEdit(){
    this.$router.push('/edit')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .ProfileWrapper{
    display: flex;
    &__image{
      scale: 0.2;
    }
  }
</style>
