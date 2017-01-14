<template>
  <div class="wrap" v-scroll="showTop">
    <com-header :com="comConf"></com-header>
    <div class="container">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
    <com-loading v-show="loading"></com-loading>
    <com-sidebar></com-sidebar>
    <div class="go-top" :class="goTop?'active':''" @click="gotop">
      <i class="fa fa-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import 'normalize.css'

import Header from './components/header'
import Loading from './components/loading'
import Sidebar from './components/sidebar'

import {mapGetters} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left',
      goTop: false
    }
  },
  components: {
    comHeader: Header,
    comLoading: Loading,
    comSidebar: Sidebar
  },
  created () {
    if (this.$route.name === undefined) {
      return this.$router.push('home')
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to.path)
      console.log(from.path)

      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  computed: mapGetters({
    comConf: 'comConf',
    loading: 'loading'
  }),
  methods: {
    showTop: function () {
      if (document.body.scrollTop > 200) {
        this.goTop = true
      } else {
        this.goTop = false
      }
    },
    gotop: function () {
      let speed = 10
      let timer = setInterval(function () {
        if (document.body.scrollTop > 0) {
          document.body.scrollTop = document.body.scrollTop - speed > 0 ? document.body.scrollTop - speed : 0
          speed += 20
        } else {
          clearInterval(timer)
        }
      }, 16)
    }
  }
}
</script>
