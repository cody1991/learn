<template>
  <div :class="_clas" :style="_styl" @click="clickHandler">
    <slot></slot>
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
    opcity: {
      type:Number,
      default: 0.35
    }
  },
  computed: {
    _clas() {
      return [cssPrefix + 'overlay', this.clas]
    },
    _styl(){
      return 'opacity:' + this.opacity
    }
  },
  data() {
    return {
      cssPrefix
    }
  },
  methods: {
    clickHandler(e){
      this.$emit('click',e)
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  &overlay{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    width:100%;
    background:#000;
    user-select:none;
  }
}

</style>

