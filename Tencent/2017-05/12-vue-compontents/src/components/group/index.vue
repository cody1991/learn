<template>
  <div :class="_clas" :style="styl">
    <div v-if="title" :class="[cssPrefix+'group-title']">{{title}}</div>
    <div :class="[cssPrefix+'group-inner']">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {
  cssPrefix
} from '@/utils/variable'

import mixins from '@/utils/mixins'

export default {
  mixins: [mixins.base],
  props: {
    title:{
      type:String
    }
  },
  computed: {
    _clas() {
      return [cssPrefix + 'group', this.clas]
    }
  },
  data() {
    return {
      cssPrefix
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  &group {
    margin: 1.1rem 0;
    padding-top:1px;
    padding-bottom: 1px;
    &-title{
      padding:0.4rem 0.5rem;
    }
    &-inner{
      position: relative;
      background-color: #fff;
      &:before,&:after{
        .divider;
      }
      &:before{
        top:0;
      }
    }
  }
}

</style>

