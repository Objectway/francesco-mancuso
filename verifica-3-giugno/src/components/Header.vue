<template>
  <div class="Header">
      <i class="fas fa-bars"></i>
      <div class="Header__conectus"> CONECTUS </div>
      <div class="Header__bell">
        <i class="fas fa-bell"></i>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({

    })
export default class Header extends Vue{
  
}
  
</script>

<style lang="scss">
$gatter: 8px;
 .Header{
      display: flex;
      align-items: center;
      background: #005dad;
      color: white;
      width: 100%;
      height: 5* $gatter;
      font-weight: bold;
      font-size: 18px;
      .fa-bars{
        margin: 2*$gatter;
      }
      .Header__conectus{
        margin-top: 5px;
      }
      .Header__bell{
        margin-left: auto;
        margin-right: 5* $gatter;
        justify-self: flex-end;
      }
    }
</style>
