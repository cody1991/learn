<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-12">
        <div class="col-sm-3"></div>
        <div class="col-sm-9">        
          <ul class="list-inline">
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/time-entries">计划列表</router-link></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-3">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  components:{
    sidebar
  }
}
</script>

<style>
a,a:hover,a:visited,a:focus{
  text-decoration: none;
}
</style>
