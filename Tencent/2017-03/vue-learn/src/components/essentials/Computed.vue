<template>
  <div>
    <p>Original message: "{{message}}"</p>
    <p>Computed reversed message: "{{reverseMessage}}"</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Cody'
    }
  },
  computed: {
    reverseMessage () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
