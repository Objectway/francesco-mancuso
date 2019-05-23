<template>
<div>
  <div :key="person.name" v-for="person in persons" >
    <person :imgurl="person.imgurl" :name="person.name" :surname="person.surname" :badge="person.badge"></person>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Person from '../components/Person.vue';
import Persona from '../interfaces/Persona';
// import CustomButton from '../components/CustomButton.vue'
@Component({
  components: {
    Person,
    // CustomButton
  },
})
export default class Home extends Vue {

  public persons: Persona[] = [
    {
      imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
      name: 'Mario',
      surname: 'Rossi',
      badge: 'Guest',
    },
    {
      imgurl: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      name: 'Giuseppe',
      surname: 'Verdi',
      badge: 'Admin',
    },
  ];
}
</script>
