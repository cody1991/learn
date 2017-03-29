<template>
  <div>
    <input type="text" v-model="newtodo" @keyup.enter="addNewTodo" placeholder="Add a todo">
    <ul>
      <li is="listTodoItem"
        v-for="(todo, index) in todos"
        :title="todo"
        @remove="todos.splice(index,1)">
      </li>
    </ul>
  </div>
</template>
<script>
import listTodoItem from './listTodoItem.vue'
export default {
  data () {
    return {
      newtodo: '',
      todos: [
        'learn js',
        'learn vue'
      ]
    }
  },
  components: {
    listTodoItem
  },
  methods: {
    addNewTodo () {
      this.todos.push(this.newtodo)
      this.newtodo = ''
    }
  }
}
</script>
