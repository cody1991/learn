<template>
  <div :class="_clas" :style="styl">
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
      return [cssPrefix + 'body', this.scroll ? 'scrollbox' : '', this.clas]
    }
  },
  props: {
    scroll: {
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
  &body {
    overflow: auto;
    flex: 1;
  }
}

</style>

