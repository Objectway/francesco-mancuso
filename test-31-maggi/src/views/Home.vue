<template>
  <div class="home">
    <my-contatore @valueChange="fooUpdate"></my-contatore>
    <label-count :value="count" ></label-count>
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

