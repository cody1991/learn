<template>
  <div>
    child
  </div>
</template>
<script>
  export default {
    beforeCreate () {
      console.log('beforeCreate!')
    },
    created () {
      console.log('created!')
    },
    beforeMount () {
      console.log('beforeMount!')
    },
    mounted () {
      console.log('mounted')
    },
    beforeDestroy () {
      console.log('beforeDestroy!')
    },
    destroyed () {
      console.log('destroyed!')
    }
  }
</script>
