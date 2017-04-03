<template>
  <div>
    <p>
      start: {{start}}
    </p>
    <p>
      <button>{{time | change}}</button>
    </p>
  </div>
</template>
<script>
let flag = false
export default {
  props: ['start'],
  data() {
    return {
      time: '获取验证码'
    }
  },
  watch: {
    start(value, oldvalue) {
      if (value == true) {
        this.coundDown()

      }
    }
  },
  methods: {
    coundDown() {
      this.time = 60

      let time = setInterval(() => {
        this.time--
          if (this.time == 0) {
            this.$emit('countdown')
            this.time = '获取验证码'
            flag = true
            clearInterval(time)
          }
      }, 100)
    }
  },
  filters: {
    change(value) {
      if (!value) {
        return ''
      }
      if (!isNaN(value)) {
        if (flag == true) {
          return `重新发送 ${value} S`
        }
        return value + 'S'
      } else {
        return value
      }
    }
  }
}

</script>

