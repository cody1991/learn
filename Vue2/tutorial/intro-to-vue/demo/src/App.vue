<template>
  <div id="app">
    <div class="nav">    
      <router-link to="/part-1">part-1</router-link>
      <router-link to="/part-2">part-2</router-link>
      <router-link to="/wine">wine</router-link>
      <router-link to="/part-3">part-3</router-link>
      <router-link to="/part-4">part-4</router-link>
      <router-link to="/part-5">part-5</router-link>
      <!-- <router-link to="/book">book</router-link> -->
      <router-link to="/chart">chart</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  a {
    text-decoration: none;
    color:white;
    background-color: #000;
    padding:10px 20px;
    display: inline-block;
    margin:10px 5px;
    transition: all 0.2s;
    border-radius: 4px;
    border:1px solid #000;
    &.router-link-active, &:hover{
      color: #000;
      background-color: white;
      border:1px solid #000;
    }
  }
}
</style>
