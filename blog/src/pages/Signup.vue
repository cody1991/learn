<template>
  <el-row class="signup">
    <el-col :span="20" :offset="2">
<!--       <el-form ref="form" :rules="rules" :model="form" label-width="80px" enctype="multipart/form-data" method="POST" action="/api/signup">
        <el-form-item label="用户名">
          <el-input v-model="form.name" placeholder="用户名" name="name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="密码" name="password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input v-model="form.repassword" placeholder="重复密码" name="repassword"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-checkbox-group v-model="form.gender">
            <el-checkbox label="男" name="gender" true-label="m" checked></el-checkbox> 
            <el-checkbox label="女" name="gender" true-label="f"></el-checkbox> 
            <el-checkbox label="保密" name="gender" true-label="x"></el-checkbox> 
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input type="textarea" v-model="form.bio"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">注册</el-button>
        </el-form-item>
      </el-form> -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" method="POST" action="/api/POST">
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送" prop="delivery">
    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
    </el-col>
    <el-col>
      <!-- {{form}} -->
    </el-col>
  </el-row>
</template>

<script>
  // export default {
  //   methods: {
  //     onSubmit (formName) {
  //       console.log('submit')
  //       this.$refs[formName].validate((valid) => {
  //         if (valid) {
  //           console.log('valid')
  //           return true
  //         } else {
  //           console.log('invalid')
  //           return false
  //         }
  //       })
  //     }
  //   },
  //   data () {
  //     return {
  //       form: {
  //         name: '',
  //         password: '',
  //         repassword: '',
  //         gender: 'm',
  //         bio: ''
  //       },
  //       rules: {
  //         name: [{
  //           required: true,
  //           message: '请输入',
  //           trigger: 'blur'
  //         }],
  //         password: [{
  //           required: true,
  //           message: '请输入',
  //           trigger: 'blur'
  //         }],
  //         repassword: [{
  //           required: true,
  //           message: '请输入',
  //           trigger: 'blur'
  //         }],
  //         gender: [{
  //           required: true,
  //           message: '请输入',
  //           trigger: 'blur'
  //         }],
  //         bio: [{
  //           required: true,
  //           message: '请输入',
  //           trigger: 'blur'
  //         }]
  //       }
  //     }
  //   }
  // }
  export default {
    data () {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!')
            return true
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang="stylus">
.signup
  padding 20px 0
  max-width 640px
  margin 0 auto
</style>
