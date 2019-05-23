<template>
   <div class="Animal">
       <span v-my-directive:background-color="[bgcolor]"> CIAO CIAO </span>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { EventBus } from '../main';
@Component({
    directives: {
        'my-directive':{
            bind:(el,binding,vnode)=>{
                if(binding.arg === 'background-color'){
                    el.style.backgroundColor = binding.value;
                }
            }
        }
    }
})

export default class AnimalList extends Vue {
    @Prop() public bgcolor!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Animal{
        width: 100%;
        height: 50px;
        box-shadow: 0 0 0 0 #000;
        background: red;
        color: #FFF;
        margin-bottom: 10px;
    }
</style>
