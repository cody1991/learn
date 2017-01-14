<template>
  <div id="home">
    <div class="banner">
      <swiper class="banner-swiper" :options="swiperOption">
        <swiper-slide class="slide" v-for="item in banner">
          <a :href="item.url" target="_blank">
            <img :src="item.imageUrl">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="now-playing">
      <div class="item" v-for="item in nowplay">
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <img :src="item.cover.origin">
          <div class="desc">
            <div class="info">
              <h4>{{item.name}}</h4>
              <p>{{item.cinemaCount}} 家影院上映 {{item.watchCount}} 人购票</p>
            </div>
            <div class="count">{{item.grade}}</div>
          </div>
        </router-link>
      </div>
      <router-link :to="{name:'film',params:{type:'now-playing'}}" class="go-more">
        更多热映电影
      </router-link>
    </div>
    <div class="coming-soon">
      <div>即将上映</div>
    </div>
    <div class="coming-soon">
      <div class="item" v-for="item in coming">
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <img :src="item.cover.origin">
          <div class="desc">
            <div class="info">
              <h4>{{item.name}}</h4>
            </div>
            <div class="time">
              {{item.premiereAt | formatDate}}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/home.less'
  import {mapGetters} from 'vuex'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOption: {
          autoplay: 1500,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },
    created () {
      this.$store.commit('COM_CONF', {
        title: '卖座电影'
      })
      if (this.banner.length === 0) {
        this.$store.dispatch('getBannerList')
      }
      if (this.nowplay.length === 0) {
        this.$store.dispatch('getNowPlaying')
      }
      if (this.coming.length === 0) {
        this.$store.dispatch('getComingSoon')
      }
    },
    computed: mapGetters({
      banner: 'getBannerList',
      nowplay: 'getNowPlaying',
      coming: 'getComingSoon'
    }),
    components: {
      swiper,
      swiperSlide
    },
    filters: {
      formatDate: function (time) {
        let date = new Date(time * 1)
        let year = date.getFullYear()
        let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

        return `${year}年${month}月${day}日上映`
      }
    }
  }
</script>

<style lang="less">
  
</style>
