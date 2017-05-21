<template>
  <div :class="_clas" :style="styl">
    <transition name="popup-fade" v-if="!full">
      <overlay @click="closeHandler" v-if="open"></overlay>
    </transition>
  </div>
</template>
<script>
import Overlay from '../overlay'
import {
  cssPrefix
} from '@/utils/variable'

import mixins from '@/utils/mixins'

export default {
  mixins: [mixins.base],
  components:{
    Overlay
  },
  props:{
    open: {
      type: Boolean,
      default: false
    },
    full:{
      type: Boolean,
      default: false
    }
  },
  computed: {
    _clas() {
      return [cssPrefix + 'popup', this.clas]
    }
  },
  data() {
    return {
      cssPrefix
    }
  },
  watch: {
    open (val) {
      if (val) {
        this.$el.style.display = 'block'
        this.$emit('on-open')
      } else {
        setTimeout(()=>{
          this.$el.style.display = 'none'
        }, 300)
      }
    }
  },
  methods:{
    closeHandler(){
      this.$emit('on-close')
    },
    enterHandler(){
      this.$emit('on-enter')
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  & {

  }
}

</style>

