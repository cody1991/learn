<template>
  <div>
    <h2>      
      来源：<a href="https://cn.vuejs.org/v2/guide/index.html">介绍</a>
    </h2>
		{{ message }}
    <hr>
    <span :title="message">
      悬停鼠标查看信息
    </span>
    <hr>
    <p v-if="seen">能看到</p>
    <hr>
    <ol>
      <li v-for="todo in todos">
        {{todo.text}}
      </li>
    </ol>
    <hr>
    <button @click="reverseMessage">逆转消息</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Hello Vue!',
      seen: true,
      todos: [{
        text: '学习js'
      }, {
        text: '学习vue'
      }, {
        text: '整个项目'
      }]
    }
  },
  methods: {
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
