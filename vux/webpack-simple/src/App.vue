<template>
  <group>
    <cell title="vue" value="cool"></cell>
  </group>
</template>

<script>
import Group from 'vux/dist/components/group';
import Cell from 'vux/dist/components/cell';
export default {
  components:{
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
