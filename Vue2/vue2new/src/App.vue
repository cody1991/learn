<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-dark bg-inverse navbar-fixed-top">
        <router-link to="/" class="navbar-brand text-success"> 简读</router-link>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">
              <i class="fa fa-home"> Home</i>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fa fa-flag"></i> Hot
            </a>
          </li>
        </ul>
        <form class="form-inline float-xs-right">
          <input type="text" class="form-control" placeholder="搜索公众号/文章">
          <router-link to="/search">
            <i class="fa fa-search btn btn-outline-success" @click=""></i>
          </router-link>
        </form>
      </nav>
    </div>
    <div class="container" style="margin-top: 80px;">
      <div class="row">
        <div class="col-xs-12 col-md-3 push-md-9 col-xl-3 push-xl-9">
          <sidebar></sidebar>
        </div>
        <div class="col-xs-12 col-md-9 pull-md-3 col-xl-9 pull-xl-3">
          <router-view></router-view>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'app',
  components: {
    'sidebar': Sidebar
  }
}
</script>

<style>
  body {
    font-size: 12px;
  }
</style>
