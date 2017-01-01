<template>
  <ol>
    <li v-for="news of list">
      <p class="title">{{news.title}}</p>
      <p class="date">{{news.create_at}}</p>
      <p class="author">By:{{news.author.loginname}}</p>
    </li>
  </ol>
</template>

<style scoped lang="less">
  ol{
    margin-left:2rem;
    list-style:outside decimal;
    li{
      line-height: 1.5;
      padding:1rem;
      border-bottom:1px solid #b6b6b6;
      .title{
        font-weight: bold;
        font-size: 1.3rem;
      }
      .date{
        font-size: 0.8rem;
        color:#d6d6d6;
      }
    }
  }
</style>

<script>
  import news from '../api/news'
  export default {
    data () {
      return {
        list: [],
        limit: 10
      }
    },
    props: {
      page: {
        type: Number,
        default: 1
      },
      trigger: {
        type: Boolean,
        default: true
      }
    },
    created () {
      this.get()
    },
    watch: {
      page (val) {
        console.log(this.page)
        this.get()
      }
    },
    methods: {
      get () {
        console.log('get')
        news.getList({
          page: this.page,
          limit: this.limit
        }, (err, list) => {
          if (err) {
            console.log(err)
          } else {
            list.data.forEach((data) => {
              const d = new Date(data.create_at)
              data.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
            })
            // this.list = this.list.concat(list.data)
            // 改为分页
            this.list = list.data
            setTimeout(() => {
              this.trigger = true
            }, 500)
          }
        })
      }
    }
  }
</script>
