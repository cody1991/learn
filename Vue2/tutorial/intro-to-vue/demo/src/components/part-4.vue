<template>
  <div>
    <button @click="inc">+</button>
    counter : {{ counter }}
    <button @click="dec">-</button>
    <hr>
    {{asyncIncrement}}
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    computed: {
      counter () {
        return this.$store.getters.counter
      }
    },
    methods: {
      ...mapActions([
        'asyncIncrement'
      ]),
      inc () {
        this.$store.dispatch('asyncIncrement', {
          by: 1,
          duration: 1000
        })
      },
      dec () {
        this.$store.dispatch('asyncDecrement', {
          by: 1,
          duration: 500
        })
      }
    }
  }
</script>
