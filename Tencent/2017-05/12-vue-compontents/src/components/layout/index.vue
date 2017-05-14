<template>
  <div :class="_clas" :style="styl">
    <div :class="[cssPrefix + 'layout-flexbox']">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
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
  mixins: [mixins.base],
  computed: {
    _clas() {
      return [cssPrefix + 'layout', this.clas]
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
  &layout-flexbox{
    position:absolute;
      display:flex;
      height:100%;
      width:100%;
      flex-direction: column;
  }
}
</style>

