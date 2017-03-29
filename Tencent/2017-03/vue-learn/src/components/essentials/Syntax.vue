<template>
  <div>
    <span v-once>{{message}}</span> <input type="text" v-model="message">
    <hr>
    <span>{{message | capitalize('haha')}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'cody'
    }
  },
  filters: {
    capitalize (value, arg1) {
      if (!value) {
        return ''
      }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1) + arg1
    }
  }
}
</script>
