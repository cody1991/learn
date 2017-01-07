<template>
  <div id="app">
    <ArticleList></ArticleList>
    <HomeHeader></HomeHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import ArticleList from './components/templates/ArticleList.vue'
import HomeHeader from './components/templates/HomeHeader.vue'
export default {
  name: 'app',
  components: {
    ArticleList,
    HomeHeader
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color:red;
}
</style>
