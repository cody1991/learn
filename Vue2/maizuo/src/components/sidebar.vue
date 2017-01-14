<template>
  <div id="sidebar">
    <div class="sidebar-container" @click="hideNav" v-show="show">
      <div class="sidebar-overlay">
        <transition name="leftNav">
          <nav v-show="show">
            <ul>          
              <li v-for="menu in menuList">
                <router-link :to="menu.path">
                  <span>{{menu.name}}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  require('../assets/sidebar.less')
  export default {
    data () {
      let menuList = [{
        name: '首页',
        path: '/home'
      }, {
        name: '影片',
        path: '/film/now-playing'
      }]
      return {
        menuList: menuList
      }
    },
    computed: {
      show () {
        return this.$store.getters.leftNavState
      }
    },
    methods: {
      hideNav () {
        this.$store.dispatch('changeLeftNavState', false)
      }
    }
  }
</script>
