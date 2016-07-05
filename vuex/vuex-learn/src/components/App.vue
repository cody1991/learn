<template>
  <div id="app">
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import Display from './Display.vue';
import Increment from './Increment.vue';
import store from '../vuex/store';

console.log(store);
export default {
  components:{
    Display,
    Increment
  },
  store:store
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
