<template>
  <div class="Header">
      <i @click="show=!show" class="fas fa-bars"></i>
      <div v-if="show" class="Header__menu">
        <div class="Header__menuLeft">
          <div @click="goToList" class="Header__menuItem">
            Lista
          </div>
          <div @click="goToLogout" class="Header__menuItem">
            Logout
          </div>
        </div>
        <div @click="show=!show" class="Header__menuRight">

        </div>
      </div>
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
  public show=false;
  goToList(){
    this.$router.push('/clientlist')
  };
  goToLogout(){
    this.$router.push('/')
  }
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
    .Header__menu{
      top: 0;
      left: 0;
      position: fixed;
      display: flex;
      width: 100%;
      height: 100%;
    }
    .Header__menuLeft{
      width: 25%;
      height: 100%;
      top:0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba($color: #000000, $alpha: 0.7);
      .Header__menuItem{
        margin: $gatter *2 0;
        &:first-child{
          margin-top:$gatter*6;
        }
      }
    }
    .Header__menuRight{
      background: rgba($color: #000000, $alpha: 0.2);
      width: 100%;
      height: 100%;
    }
  }
</style>
