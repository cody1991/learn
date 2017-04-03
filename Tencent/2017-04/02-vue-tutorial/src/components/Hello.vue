<template>
  <div class="hello">
    <countdown :start="start" @countdown="start = false" @click.native="sendCount">
    </countdown>
    <input type="text" v-model.trim="msg">
    <my-button @click.native="buttonClick"></my-button>
    <p v-for="tel in telephone">
      {{tel | newtel}}
    </p>
    <my-demo :time="time" @a='a'></my-demo>
  </div>
</template>
<script>
import myButton from './my-button.vue'
import myDemo from './my-demo.vue'
import countdown from './countdown.vue'
export default {
  components: {
    myButton,
    myDemo,
    countdown
  },
  name: 'hello',
  filters: {
    newtel(value) {
      if (!value) {
        return ''
      }
      value = value.toString().substr(7, 4)
        // console.log(value)

      value = '*'.repeat(7) + value

      let endMember = value.substr(-1, 1)
      if (endMember % 2) {
        value += '中奖'
      } else {
        value += '谢谢参与'
      }

      return value
    }
  },
  data() {
    return {
      time: 10,
      start: false,
      msg: 'Welcome to Your Vue.js App',
      telephone: [
        10000000000,
        10000000001,
        10000000002,
        10000000003,
        10000000004,
        10000000005,
        10000000006,
        10000000007,
      ]
    }
  },
  methods: {
    buttonClick() {
      console.log('click')
    },
    a(value) {
      this.time = value
    },
    sendCount(value) {
      this.start = true
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>

