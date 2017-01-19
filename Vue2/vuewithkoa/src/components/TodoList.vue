<template>
  <el-row class="content">
    <el-col :sm="{span:8,offset:8}" :xs="{span:20,offset:2}">
      <span>
        欢迎：{{name}} ! 你的待办事项是：
      </span>
      <el-input placeholder="请输入待办事项" v-model="todo" @keyup.enter.native="addTodo"></el-input>
      <!--{{list}}-->
      <el-tabs v-model="activeName">
        <el-tab-pane label="待办事项" name="first">
          <el-col :xs="24">
            <template v-if="!Done">
              <template v-for="(item, index) in list">
                <div class="todo-list" v-if="item.status === false">
                  <span class="item">
                    {{ index + 1 }} . {{ item.content }}
                  </span>
                  <span class="pull-right">
                    <el-button @click="finished(index)" size="small" type="primary">完成</el-button>
                    <el-button @click="remove(index)" size="small" :plain="true" type="danger">删除</el-button>
                  </span>
                </div>
              </template>
            </template>
            <div v-else>
              暂无待办事项
            </div>
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="已完成事项" name="second">
          <template v-if="count > 0">
            <template v-for="(item, index) in list">
              <div class="todo-list" v-if="item.status === true">
                <span class="item finished">
                  {{ index + 1 }}. {{ item.content }}
                </span>
                <span class="pull-right">
                  <el-button size="small" type="primary" @click="restore(index)">还原</el-button>
                </span>
              </div>
            </template>
          </template>
          <div v-else>
            暂无已完成事项
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      name: 'Cody',
      todo: '',
      list: [],
      activeName: 'first',
      count: 0
    }
  },
  methods: {
    addTodo () {
      if (this.todo === '') {
        return
      }
      let obj = {
        status: false,
        content: this.todo
      }
      this.list.push(obj)
      this.todo = ''
    },
    finished (index) {
      this.$set(this.list[index], 'status', true)
      this.$message({
        type: 'success',
        message: `${this.list[index].content} 任务完成`
      })
    },
    remove (index) {
      let removeTodo = this.list.splice(index, 1)
      // console.log(removeTodo)
      this.$message({
        type: 'info',
        message: `${removeTodo[0].content} 任务删除`
      })
    },
    restore (index) {
      this.$set(this.list[index], 'status', false)
      this.$message({
        type: 'info',
        message: `${this.list[index].content} 任务还原`
      })
    }
  },
  computed: {
    Done () {
      let count = 0
      let length = this.list.length
      for (let i in this.list) {
        this.list[i].status === true ? count += 1 : ''
      }
      this.count = count
      if (count === length || length === 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-input
    margin 20px auto
  .todo-list
    width 100%
    margin-top 8px
    padding-bottom 8px
    border-bottom 1px solid #eee
    overflow hidden
    text-align left
    .item
      font-size 20px
      &.finished
        text-decoration line-through
        color #ddd
  .pull-right
    float right
</style>
