<template>
  <div id="app">
    <BlogNav></BlogNav>
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css'
import 'element-ui/lib/theme-default/index.css'
import BlogNav from './components/BlogNav'
export default {
  name: 'app',
  components: {
    BlogNav
  }
}
</script>

<style lang="stylus">
#app 
  font-family 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing antialiased;
  -moz-osx-font-smoothing grayscale;
  color #2c3e50;
a 
  text-decoration none;
.el-menu--horizontal .el-menu-item 
  padding 0
  a
    padding 0 20px
    height 60px
    display block
  .router-link-active
    color #20a0ff
</style>
