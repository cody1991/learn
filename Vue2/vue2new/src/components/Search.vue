<template>
  <div class="card">
    <div class="card-header" align="center">
      <form class="form-inline">
        <input type="text" class="form-control form-control-lg wide" placeholder="搜索公众号/文章" @keyup.enter="searchMp(1)" v-model="searchInput">
        <i class="fa fa-search btn btn-lg btn-outline-success" @click="searchMp(1)"></i>
      </form>
    </div>
    <div class="card-block" v-if="!isSearching && !searchResultJson">
      <h5 align="center" class="text-muted">输入关键字，搜索公众号</h5>
    </div>
    <div class="card-block" v-if="searchResultJson">
      <h6 align="center" class="text-muted">
        "{{ searchKey }}" 搜索到 {{ searchResultJson.totalItems }} 条结果， 共 {{ searchResultJson.totalPages }} 页
      </h6>
    </div>
    <div class="card-block">
      <div class="media" v-for="(mp, index) in mpList">
        <div class="media-left imgbox">
          <a href="#">
            <img :src="mp.image" alt="" class="media-object rounded">
          </a>
        </div>
        <div class="media-body">
          <a :href="mp.encGzhUrl" target="_blank" class="nav-link"><h5 v-html="mp.name"></h5></a>
          <p style="margin-bottom:0px;">
            <small> 简介: </small><small v-html="mp.summary"></small>
          </p>
          <p class="text-muted" style="margin-bottom: 0px;">
            <a @click="">
              <i class="fa fa-lg float-xs-right" :class="{'fa-star text-danger': mp.isSubscribed, 'fa-star-o text-muted': !mp.isSubscribed}" @click="subscribe(index)"></i>
            </a>
            <small class="s1" title="粉丝">
              <i class="fa fa-heart-o"></i> {{mp.rank.fans}}
            </small>
            <small class="s1" title="月平均发表文章">
              <i class="fa fa-file-text-o"></i> {{mp.rank.pnum}}
            </small>
            <small class="s1" title="平均阅读次数">
              <i class="fa fa-eye"></i> {{mp.rank.rnum}}
            </small>
            <small class="s2" title="最近更新">
              <i class="fa fa-clock-o"></i> {{mp.date}}
            </small>
          </p>
          <p class="text-muted" style="margin-bottom: 30px;">
            <small class="text-muted s1">
              <a :href="mp.url" target="_blank" class="nav-link">{{mp.title1}}</a>
              <span v-html="mp.content"></span>
            </small>
          </p>
        </div>
      </div>
    </div>
    <div class="card-block" v-if="isSearching">
      <h5 align="center">
        <i class="fa fa-spinner fa-spin fa-lg fa-fw"></i> 正在搜索公众号
      </h5>
    </div>
    <div class="card card-block text-xs-right" v-if="hasNextPage && searchResultJson && !isSearching">
      <h5 class="btn btn-outline-success btn-block" @click="searchMp(page)">
        下一页 ({{page}})
        <i class="fa fa-angle-double-right"></i>
      </h5>
    </div>
    <div class="card card-block text-xs-right" v-if="!hasNextPage && searchResultJson">
      <h5 class="btn btn-outline-success btn-block">
        最后一页了
        <i class="fa fa-exclamation-triangle"></i>
      </h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchResult',
    data () {
      return {
        searchKey: '',
        searchInput: '',
        searchResultJson: '',
        isSearching: false,
        page: 1,
        hasNextPage: true
      }
    },
    computed: {
      subscribeList () {
        return this.$store.state.subscribeList
      },
      mpList () {
        return this.$store.state.mpList
      }
    },
    methods: {
      subscribe (idx) {
        if (this.mpList[idx].isSubscribed === true) {
          // 已经订阅
          return this.$store.dispatch('unsubSearchResult', this.mpList[idx].weixinhao)
        }

        let mp = {
          mpName: this.mpList[idx].title,
          image: this.mpList[idx].image,
          data: this.mpList[idx].date,
          weixinhao: this.mpList[idx].weixinhao,
          encGzhUrl: this.mpList[idx].encGzhUrl,
          subscriebDate: new Date().getTime(),
          showRemoveBtn: false
        }

        for (let item of this.subscribeList) {
          if (item.mpName === mp.mpName) {
            return false
          }
        }

        this.$store.dispatch('subscribeMp', mp)
      },
      searchMp (pg) {
        if (!this.searchInput.trim()) {
          return
        }
        this.isSearching = true

        if (pg === 1) {
          this.searchKey = this.searchInput
          this.$store.dispatch('clearSearchResult', 'clear')
          this.page = 1
          this.hasNextPage = true
        }

        this.$nextTick(function () {})

        this.$http.jsonp('http://weixin.sogou.com/weixinwap?_rtype=json&ie=utf8', {
          params: {
            page: pg,
            type: 1,
            query: this.searchKey
          },
          jsonp: 'cb'
        })
        .then(function (res) {
          // console.log(res)
          this.searchResultJson = JSON.parse(res.bodyText)

          let mpXmls = this.searchResultJson.items
          let i
          let xmlDoc
          let mpResult
          let onePageResults = []

          for (i in mpXmls) {
            mpResult = {}
            xmlDoc = new DOMParser().parseFromString(mpXmls[i], 'text/xml')

            mpResult['title'] = xmlDoc.getElementsByTagName('title')[1].childNodes[0].nodeValue
            mpResult['name'] = xmlDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue.replace('', '<span class="text-success">').replace('', '</span>')

            // console.log(xmlDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue)

            try {
              mpResult['summary'] = xmlDoc.getElementsByTagName('summary')[0].childNodes[0].nodeValue.replace('', '<span class="text-success">').replace('', '</span>')
            } catch (e) {
              mpResult['summary'] = '无介绍'
            }

            // 主页链接
            mpResult['encGzhUrl'] = xmlDoc.getElementsByTagName('encGzhUrl')[0].childNodes[0].nodeValue

            try {
              mpResult['url'] = xmlDoc.getElementsByTagName('url')[2].childNodes[0].nodeValue
              mpResult['title1'] = xmlDoc.getElementsByTagName('title1')[0].childNodes[0].nodeValue
            } catch (e) {
              mpResult['url'] = ''
              mpResult['title1'] = ''
            }

            try {
              mpResult['content'] = xmlDoc.getElementsByTagName('content')[0].childNodes[0].nodeValue.replace('', '<span class="text-success">').replace('', '</span>')
            } catch (e) {
              mpResult['content'] = ''
            }

            mpResult['date'] = xmlDoc.getElementsByTagName('date')[1].childNodes[0].nodeValue
            mpResult['image'] = xmlDoc.getElementsByTagName('image')[0].childNodes[0].nodeValue
            mpResult['weixinhao'] = xmlDoc.getElementsByTagName('weixinhao')[0].childNodes[0].nodeValue
            mpResult['openid'] = xmlDoc.getElementsByTagName('id')[0].childNodes[0].nodeValue

            let rank = xmlDoc.getElementsByTagName('rank')[0].attributes

            mpResult['rank'] = {}
            mpResult['rank']['fans'] = rank.fans.nodeValue // 粉丝数
            mpResult['rank']['rnum'] = rank.rnum.nodeValue // 月发文 篇
            mpResult['rank']['pnum'] = rank.pnum.nodeValue // 平均阅读

            mpResult['isSubscribed'] = false

            for (let item of this.subscribeList) {
              if (item.weixinhao === mpResult['weixinhao']) {
                mpResult['isSubscribed'] = true
                break
              }
            }

            onePageResults.push(mpResult)
          }

          this.$store.dispatch('addSearchResultList', onePageResults)
          this.page = this.page + 1
          if (this.page > this.searchResultJson.totalPages) {
            this.hasNextPage = false
          }
          this.isSearching = false
        }, function () {
          this.isSearching = false
          console.log('网络有问题')
        })
      }
    }
  }
</script>

<style>
  .form-inline .wide {
    width: 80%;
  }
  .imgbox {
    width: 100px;
    height: 120px;
    overflow: hidden;
  }
  .imgbox img{
    max-width: 100px;
  }
  .s1 {
    margin-right: 20px;
  }
  .s2 {
    margin-left: 20px;
  }
</style>
