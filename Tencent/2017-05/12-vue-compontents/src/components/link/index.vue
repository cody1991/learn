<template>
  <router-link :class="_clas" :style="styl" :to="href">
    <slot></slot>
  </router-link>
</template>
<script>
import {
  cssPrefix
} from '@/utils/variable'

import mixins from '@/utils/mixins'

export default {
  mixins: [mixins.base],
  computed: {
    _clas() {
      return [cssPrefix + 'link', this.active ? cssPrefix + 'link-active' : '' , this.clas]
    }
  },
  props: {
    href: {
      type: String
    },
    active: {
      type: Boolean,
      default: true
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
  &link{
    color:@primary-color;
      text-decoration: none;
      box-sizing: border-box;
      cursor: default;
      &-active{
        .active;
      }
  }
}
</style>

