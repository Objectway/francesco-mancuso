<template>
    <span class="ButtonWrapper">
        <button @click="clickEventBusCustomEvent" > CLICCAMI </button>
        <slot name="title"></slot>
        <slot name="desc"></slot>
        <slot name="button"></slot>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { EventBus } from '../main';
@Component

export default class CustomButton extends Vue {
    
    clickEventBusCustomEvent(){
        EventBus.$emit('eventBusCustomEvent','u are here!!')
    }
    
    public ClickMe() {
      this.$emit('customButtonEvent', 'pippo');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
