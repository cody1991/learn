<template>
  <div id="header">
    <!-- @click="showNav" -->
    <div class="title">
      <a  class="go-menu" @click="showNav">
        <i class="fa fa-bars"></i>
      </a>
      <p>{{com.title}}</p>
    </div>
    <div class="nav-right">
<!--       <a class="go-city">
        广州
        <i class="fa fa-angle-down"></i>
      </a> -->
      <router-link :to="{name:'home'}" class="go-home">
        <i class="fa fa-home"></i>
      </router-link>
    </div>
  </div>  
</template>

<script>
  import '../assets/header.less'
  export default {
    data () {
      return {}
    },
    props: {
      com: {
        type: Object
      }
    },
    methods: {
      showNav: function () {
        return this.$store.dispatch('changeLeftNavState', true)
      }
    }
  }
</script>
