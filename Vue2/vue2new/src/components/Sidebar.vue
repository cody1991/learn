<template>
  <div class="card">
    <div class="card-header" align="center">
      <img src="http://avatar.csdn.net/1/E/E/1_kevin_qq.jpg" alt="" class="avatar img-circle img-responsive">
      <p><strong> 非梦</strong></p>
      <p class="card-title">订阅列表</p>
    </div>
    <div class="card-block">
      <p v-for="(mp, idx) in subscribeList" @mouseover="showRemove(idx)" @mouseout="hideRemove(idx)">
        <small class="item">
          <a :href="mp.encGzhUrl" class="nav-link" target="_blank">
            <img :src="mp.image" class="mpavatar img-circle img-responsive "> {{mp.mpName}}
          </a>
          <a @click="unsubscribeMp(mp.weixinhao)">
            <i class="fa fa-lg float-xs-right text-danger sidebar-remove" :class="{'fa-minus-circle': mp.showRemoveBtn}">
            </i>
          </a>
        </small>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data () {
      return {}
    },
    created () {
      return this.$store.dispatch('initFromLS', 'init from LS')
    },
    computed: {
      subscribeList () {
        return this.$store.state.subscribeList
      }
    },
    methods: {
      unsubscribeMp (weixinhao) {
        return this.$store.dispatch('unsubscribeMp', weixinhao)
      },
      showRemove (idx) {
        this.subscribeList[idx]['showRemoveBtn'] = true
      },
      hideRemove (idx) {
        this.subscribeList[idx]['showRemoveBtn'] = false
      }
    }
  }
</script>

<style>
  .avatar {
    height: 75px;
    margin:0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .item a{
    height: 30px;
    line-height: 30px; 
  }
  .mpavatar {
    height: 30px;
    margin: 0 auto;
  }
  .img-circle {
    border-radius: 1000px;
  }
</style>
