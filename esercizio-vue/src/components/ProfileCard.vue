<template>
   <div class="Card">
       <span v-my-directive:background-color="[bgcolor]" > Profile Card Component 
        </span>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { EventBus } from '../main';
@Component({
    directives: {
        'my-directive': {
            bind: ( el, binding, vnode) => {
                if (binding.arg === 'background-color') {
                    el.style.backgroundColor = binding.value;
                }
            },
        },
    },
})

export default class ProfileCard extends Vue {
    @Prop() public bgcolor!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Card{
        width: 200px;
        height: 200px;
        box-shadow: 0 0 0 0 #000;
        background: blue;
    }
</style>
