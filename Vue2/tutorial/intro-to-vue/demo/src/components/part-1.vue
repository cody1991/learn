<template>
  <div class="hello" :style="{backgroundColor: `hsl(${x}, 80%, 50%)`}" @mousemove="xCoordinate">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in items">
        {{item}}
      </li>
    </ul>
    <h3>Type here:</h3>
    <input type="text" v-model="message">
    <p>{{message}}</p>
    <button @click="increment">+</button>{{counter}}<button @click="decrement">-</button>
    <p>{{x}}</p>
  </div>
</template>

<script>
// const items = [
//   'thingie',
//   'another thingie',
//   'lots of stuff',
//   'yadda yadda'
// ]

// function listOfStuff() {
//   let full_list = ''

//   for (let i = 0; i < items.length; i++) {
//     full_list = full_list + `<li> ${items[i]} </li>`
//   }

//   const contain = document.querySelector('#container')
//   container.innerHTML = `<ul> ${full_list} </ul>`
// }

// listOfStuff()

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0,
      x: 0,
      items: [
        'thingie',
        'another thingie',
        'lots of stuff',
        'yadda yadda'
      ],
      message: ''
    }
  },
  methods: {
    increment () {
      this.counter++
    },
    decrement () {
      this.counter > 0 ? this.counter-- : 0
    },
    xCoordinate (e) {
      this.x = e.clientX
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
