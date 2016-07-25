<template>
  <div>
    <Display></Display>
    <Increment></Increment>
    <Decrement></Decrement>
  </div>
</template>

<script>

import Display from './components/Display.vue'
import Increment from './components/Increment.vue'
import Decrement from './components/Decrement.vue'
import store from './vuex/store.js' // import the store we just created

export default {
  components: {
    Display: Display,
    Increment: Increment,
    Decrement: Decrement
  },
  store:store
}
</script>
