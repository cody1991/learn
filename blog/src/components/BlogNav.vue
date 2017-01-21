<template>
  <el-menu theme="dark"  mode="horizontal">
    <template v-if="user">
      <el-menu-item index="1">  
        个人主页  
      </el-menu-item>
      <el-menu-item index="2">  
        发表文章
      </el-menu-item>
      <el-menu-item index="3">
        登出
      </el-menu-item>
    </template>
    <template v-else>
      <el-menu-item index="1">    
        <router-link :to="{name: 'posts'}" exact>登录</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{name: 'signup'}">注册</router-link>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        user: null
      }
    }
  }
</script>

<style lang="stylus" scoped>
.el-menu
  border-radius 0
</style>
