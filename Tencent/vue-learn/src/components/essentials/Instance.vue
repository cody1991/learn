<template>
  <div>
    <img src="https://cn.vuejs.org/images/lifecycle.png" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    console.log(this.$data)
    console.log(this.$el)
  }
}
</script>
