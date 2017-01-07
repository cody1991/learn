<template>
  <div class="home-header">
    <header>
      <router-link to="/" exact>home</router-link>
      <router-link :to="{
        name:'Article',
        path:'/article',
        params:{
          userId:123
        },
        query:{plan:'private'}
      }">
      article
      </router-link>
      <router-link to="/demo">demo</router-link>
    </header>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang="less"></style>
