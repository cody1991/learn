<template>
  <button @click="a">按钮 {{time2}}</button>
</template>
<script>
export default {
  data() {
      return {
        time2: this.time
      }
    },
    props: ['time'],
    methods: {
      a() {
        this.time2++

          this.$emit('a', this.time2)



      }
    }
}

</script>

