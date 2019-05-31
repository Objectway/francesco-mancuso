
import { shallowMount } from '@vue/test-utils';
import  Home  from '@/views/Home.vue'
describe('Home.vue', () => {

  it('has a created hook', () => {
    const a = shallowMount(Home);
    expect(typeof a.fooUpdate()).toBe('function')
  })

});

