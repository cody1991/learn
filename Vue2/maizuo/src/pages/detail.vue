<template>
  <div id="detail" v-if="detail">
    <div class="cover">
      <img :src="detail.cover.origin">
    </div>
    <div class="desc">
      <div class="title">影片简介</div>
      <div class="info">
        <p>导演：{{detail.director}}</p>
        <p>主演：<span v-for="item in detail.actors">{{item.name}}</span></p>
        <p>地区语言：({{detail.language}})</p>
        <p>类型：{{detail.category}}</p>
        <p>上映时间：{{detail.premiereAt|formatDate}}</p>
        <p class="synopsis">{{detail.synopsis}}></p>
      </div>
    </div>
    <router-link v-if="detail.isNowPlaying" :to="{name:'cinema',params:{id:detail.id}}" class="go-pay">
      立即购票
    </router-link>
  </div>
</template>

<script>
  import '../assets/detail.less'
  import {mapGetters} from 'vuex'
  export default {
    created () {
      let id = this.$route.params.id

      this.$store.dispatch('getFilmDetail', id)
    },
    filters: {
      formatDate: function (time) {
        let date = new Date(time * 1)
        let year = date.getFullYear()
        let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

        return `${year}-${month}-${day}`
      }
    },
    computed: mapGetters({
      detail: 'getFilmDetail'
    })
  }
</script>
