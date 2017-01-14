<template>
  <div id="film" v-scroll="getMore">
    <div class="tabs">
      <div class="item" @click="changeTab('now-playing')" :class="type=='now-playing' ? 'active' : ''">
        正在热映
      </div>
      <div class="item" @click="changeTab('coming-soon')" :class="type=='coming-soon' ? 'active' : ''">
        即将上映
      </div>
    </div>
    <div class="tab-content">
      <transition-group tag="div" name="list-complete" class="now-playing-list" v-if="type==='now-playing'">
        <router-link v-for="item in nowList" :key="item" class="item list-complete-item" :to="{name:'detail',params:{id:item.id}}">
          <div class="avatar">
            <img :src="item.poster.thumbnail">
          </div>
          <div class="info">
            <h3>{{item.name}}</h3>
            <p>{{item.intro}}</p>
            <p>
              <span>{{item.cinemaCount}}</span>家影院上映 | <span>{{item.watchCount}}</span>人购票
            </p>
          </div>
          <div class="count">{{item.grade}}</div>
        </router-link>
      </transition-group>
      <transition-group tag="div" name="list-complete" class="coming-soon-list" v-if="type==='coming-soon'">
        <router-link v-for="item in comingList" :key="item" class="item list-complete-item" :to="{name:'detail',params:{id:item.id}}">
          <div class="avatar">
            <img :src="item.poster.thumbnail">
          </div>
          <div class="info">
            <h3>{{item.name}}</h3>
            <p>{{item.intro}}</p>
            <p>
              <span class="time">{{item.premiereAt|formatDate}}</span>
            </p>
          </div>
        </router-link>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import '../assets/film.less'
  import {mapGetters} from 'vuex'
  export default {
    methods: {
      changeTab (type) {
        if (this.type === type) {
          return false
        }

        this.type = type
        this.$router.replace({
          params: {
            type: type
          }
        })

        if (this.type === 'now-playing' && this.nowList.length === 0) {
          this.$store.dispatch('getNowPlayList')
        } else if (this.type === 'coming-soon' && this.comingList.length === 0) {
          this.$store.dispatch('getComingList')
        }
      },
      getMore (el) {
        if (document.body.scrollTop + window.innerHeight >= el.clientHeight - 100) {
          if (this.$route.params.type === 'now-playing') {
            this.$store.dispatch('getNowPlayList')
          } else if (this.$route.params.type === 'coming-soon') {
            this.$store.dispatch('getComingList')
          }
        }
      }
    },
    data () {
      return {
        type: ''
      }
    },
    created () {
      document.body.scrollTop = 0
      this.$store.commit('COM_CONF', {
        title: '卖座电影'
      })

      this.type = this.$route.params.type

      if (this.type === 'now-playing' && this.nowList.length === 0) {
        this.$store.dispatch('getNowPlayList')
      } else if (this.type === 'coming-soon' && this.comingList.length === 0) {
        this.$store.dispatch('getComingList')
      }
    },
    computed: mapGetters({
      nowList: 'getNowPlayList',
      comingList: 'getComingList'
    }),
    filters: {
      formatDate (time) {
        let date = new Date(time * 1)
        let year = date.getFullYear()
        let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
        let week = date.getDay()

        let arr = ['日', '一', '二', '三', '四', '五', '六']

        return `${year}年${month}月${day}日上映 星期${arr[week]}`
      }
    }
  }
</script>

<style lang="less">
  
</style>
