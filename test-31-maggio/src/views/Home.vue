<template>
  <div class="home">
    <my-contatore @valueChange="fooUpdate"></my-contatore>
    <label-count @cambiovaluta="cambia" :value="count" ></label-count>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '../components/contatore.ts'
import '../components/labelcount.ts'
@Component({
  components: {
  },
  
})
export default class Home extends Vue {
  public count:number=0;
  fooUpdate(data: any){
    this.count=data.detail
  }
  cambia(data:any){
    console.log(data.detail)
    if(data.detail=="Dollaro"){
      this.count=(1.12*this.count).toFixed(3);
    }
    else if(data.detail=="CanadianDollar"){
    this.count=(1.51*this.count).toFixed(3);
    }
    else if(data.detail=="BritishPound"){
      this.count=(0.88*this.count).toFixed(3);
    }
  }
}
</script>
<style lang="scss">
  .home{
    display:flex;
    justify-content: space-around;
    background:#7FFFD4;
    align-items: center
  }

</style>

