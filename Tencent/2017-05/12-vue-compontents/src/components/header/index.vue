<template>
  <div :class="_clas" :style="styl">
    <div :class="[cssPrefix + 'header-nav']">
      <button :class="['btn-pull',cssPrefix+'header-back']" v-if="back!==false" @click="backHandler">
        <i class="iconfont">
          &#xe660;
        </i>
      </button>
      <div :class="[cssPrefix + 'header-title']">
        <slot name="title"></slot>
      </div>
      <slot name="pull"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import {
  cssPrefix
} from '@/utils/variable'

import mixins from '@/utils/mixins'

export default {
  name: 'xheader',
  data() {
    return {
      cssPrefix: cssPrefix
    }
  },
  mixins: [mixins.base],
  props: {
    back: {
      type: [String, Boolean],
      default: true
    },
    backText: {
      type: String,
      default: '返回'
    }
  },
  computed: {
    _clas() {
      return [cssPrefix + 'header', this.clas]
    }
  },
  methods: {
    backHandler() {
      if (this.back === true) {
        console.log('history back')
        history.back()
      }
      if (typeof this.back === 'string') {
        console.log(this.back, 'back')
        location.href = this.back
      }
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  &header{
    background:#fff;
    &-nav{
      color:#fff;
      background-color:@primary-color;
      display:flex;
      align-items:center;
      height:2.7rem;
    }
    .btn-pull{
      color:inherit;
      height:inherit;
      min-width: 40px;
      text-align: center;
      .button;
      .active;
    }
    &-back{
      margin-right:-10px;
      position:relative;
      z-index:1;
      &:active{
        background:transparent!important;
      }
    }
    &-title{
      flex:1;
      font-size:1.1rem;
      overflow: hidden;
    }
  }
}

</style>

