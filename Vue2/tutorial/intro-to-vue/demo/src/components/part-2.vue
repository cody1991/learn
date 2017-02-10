<template>
  <div class="hello">
    <hr>
    <button @click="increment">+</button>
    Adjust the state
    <button @click="decrement">-</button>
    <h2>This is the hello state: <span>{{count}}</span></h2>
    <child :text="msg" :count="staticInteger">
      <!-- <h3>This is slot number one</h3> -->
      <h1 slot="header">This is slot has name header</h1>
    </child>
    <p>This is a child counter that is using a static integer as props</p>
    <child :text="msg2" :count="count">
      <h3>This is slot number two</h3>
      <small>I can put more info in,too!</small>
    </child>
    <p>This is the same child counter and it is using the state as props</p>
    <hr>
    <ul>
      <li is="individualComment" v-for="comment in comments" :commentpost="comment"></li>
    </ul>
    <input type="text" v-model="newComment" @keyup.enter="addComment" placeholder="Add a comment">
  </div>
</template>

<script>
import child from './part-2/child'
import individualComment from './part-2/individual-comment'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2: 'Welcome Cody',
      count: 0,
      staticInteger: 1,
      newComment: '',
      comments: [{
        text: 'Looks great Julianne!',
        author: 'Robin Rendle',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg'
      }, {
        text: 'I Love the sea',
        author: 'Miriam Suzanne',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg'
      }]
    }
  },
  components: {
    child,
    individualComment
  },
  methods: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    },
    addComment () {
      const newCommentObj = {
        text: this.newComment,
        author: 'Cody',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg'
      }
      this.comments.push(newCommentObj)
      this.newComment = ''
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
