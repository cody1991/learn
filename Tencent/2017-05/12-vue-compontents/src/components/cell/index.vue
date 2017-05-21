<template>
  <div :class="_clas" :style="styl" @click="clickHandler">
    <div :clsss="cssPrefix + 'cell-hd'">
      <slot name="icon"></slot>
    </div>
    <div :class="cssPrefix + 'cell-bd'">
      <slot name="title"></slot>
    </div>
    <div :class="cssPrefix + 'cell-ft'">
      <slot name="value"></slot>
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
    arrow: {
      type:Boolean,
      default: true
    },
    href:{
      type:String
    }
  },
  computed: {
    _clas() {
      return [cssPrefix + 'cell',this.arrow ? cssPrefix + 'cell-access' : '' , this.clas]
    }
  },
  data() {
    return {
      cssPrefix
    }
  },
  methods: {
    clickHandler(e){
      if (this.href) {
        location.href = this.href
      }
      this.$emit('click', e)
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  &cell {
    display: flex;
    padding: 0.4rem 0.6rem;
    height:2rem;
    position: relative;
    justify-content:center;
    align-items: center;
    &-bd {
      flex:1;
      text-align: left
    }
    &-ft{
      position: relative;
    }
    &:after{
      .divider;
    }
  }
  &cell-access{
    .active;
    .@{css-prefix}cell-ft{
      padding-right:12px;
      color:@sub-color;
      &:after{
        .arrow;
      }
    }
  }
}

</style>

