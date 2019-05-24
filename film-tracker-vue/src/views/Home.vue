<template>
  <div class="FilmList">
    <film-list></film-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilmList from '@/components/FilmList.vue';

@Component({
  components: {
    FilmList,
  },
})
export default class Home extends Vue {}
</script>
