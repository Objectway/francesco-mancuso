<template>
  <div>
    <button :style="{color:buttonColor}">
      {{ buttonName }}
    </button>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class CustomButton extends Vue {
  @Prop() private buttonName!: string;
  @Prop() private buttonColor!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
