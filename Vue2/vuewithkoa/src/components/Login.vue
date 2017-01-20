<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6, offset: 9}">
      <span class="title">
        欢迎登陆
      </span>
      <el-row>
        <el-input
          v-model="account"
          placeholder="账号"
          type="text">
        </el-input>
        <el-input
          v-model="password"
          placeholder="密码"
          type="password">
        </el-input>
        <el-button @click="login" type="primary">登陆</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import md5 from 'md5'
  import axios from 'axios'
  export default {
    data () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      login () {
        console.log('登录')
        // push 改变路由
        // this.$router.push('/todolist')
        let obj = {
          name: this.account,
          password: md5(this.password)
        }
        let sessionStorage = window.sessionStorage
        // 信息发送给后端
        axios.post('/auth/user', obj)
          .then((res) => {
            console.log(res)
            if (res.data.success) {
              sessionStorage.setItem('demo-token', res.data.token)
              this.$message({
                type: 'success',
                message: '登录成功'
              })
              this.$router.push('/todolist')
            } else {
              console.log(res.data)
              this.$message({
                type: 'error',
                message: res.data.info
              })
              sessionStorage.setItem('demo-token', null)
            }
          })
          .catch((error) => {
            console.log(error)
            this.$message({
              type: 'error',
              message: '请求失败'
            })
            sessionStorage.setItem('demo-token', null)
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .el-input
    margin 12px 0
  .el-button
    width 100%
    margin-top 12px
</style>
