<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">注册</span>
    </div>
    <el-form label-width="100px" class="demo-ruleForm" v-bind:rules="rules" ref="ruleForm" v-bind:model="ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input type="text" auto-complete="off" v-model="ruleForm.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" auto-complete="off" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input type="password" auto-complete="off" v-model="ruleForm.password2" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="handleSubmit">提交</el-button>
        <el-button v-on:click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  // 进入路由时判断当前登录状态，已登录则跳转到首页
  beforeRouteEnter(to, from, next) {
      console.log(VM)
      next(VM => {
        if (VM.$AV.User.current()) {
          console.log('当前登录')
          VM.$router.push('/')
        } else {
          console.log('当前未登录')
        }
      })
    },
    data() {
      // 姓名验证
      let validatorName = function(rule, value, callback) {
          if (!value) {
            callback(new Error('请输入账号'))
          } else if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(value) || value.length < 6) {
            callback(new Error('账号只能是6位以上中英文或者数字'))
          } else {
            callback()
          }
        }
        // 密码验证
      let validatorPass = (rule, value, callback) => {
          if (!value) {
            callback(new Error('请输入密码'))
          } else if (!/^[A-Za-z0-9]+$/.test(value) || value.length < 6) {
            callback(new Error('密码只能是6位以上英文或者数字'))
          } else {
            callback()
          }
        }
        // 重复密码验证
      let validatorPass2 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入确认密码'))
        } else if (!/^[A-Za-z0-9]+$/.test(value) || value.length < 6) {
          callback(new Error('密码只能是6位以上英文或者数字'))
        } else {
          if (this.ruleForm.password !== value) {
            callback(new Error('两次确认密码不一致'))
          }
          callback()
        }
      }
      return {
        // 表单数据
        ruleForm: {
          name: '',
          password: '',
          password2: ''
        },
        // 验证规则
        rules: {
          name: [{
            validator: validatorName,
            trigger: 'blur'
          }],
          password: [{
            validator: validatorPass,
            trigger: 'blur'
          }],
          password2: [{
            validator: validatorPass2,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      // 提交函数
      handleSubmit() {
        // 验证表单
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            console.log('验证通过')
            let user = new this.$AV.User()
            user.setUsername(this.ruleForm.name)
            user.setPassword(this.ruleForm.password)
              // 提交登录
            user.signUp().then(loginedUser => {
              console.log(loginedUser)
              this.$message('成功注册')
                // 注册成功后跳转到登录页面
              this.$router.push('/login')
            }, error => {
              console.log(error)
            })
          } else {
            console.log('验证不通过')
          }
        })
      },
      // 重置表单函数
      handleReset() {
        this.$refs.ruleForm.resetFields()
      }
    }
}
</script>
