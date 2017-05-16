<template>
  <div :class="_clas" :style="styl">
    <x-input
      :htmlType="hType"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :name="name" 
      :clear="false"
      :required="required"
      @on-focus="focusHandler"
      @on-blur="blurHandler"
      @on-keyup="keyupHandler"
      @on-keydown="keydownHandler"
      @on-change="changeHandler"
    />
    <button :class="[cssPrefix+'password-switch']" type="button" @click="switchHandler">
      <i v-if="this.hType === 'password'" class="iconfont">&#xe602;</i>
      <i v-if="this.hType === 'text'" class="iconfont">&#xe63b;</i>
    </button>
  </div>
</template>
<script>
import {
  cssPrefix
} from '@/utils/variable'

import mixins from '@/utils/mixins'

import XInput from '../input'

export default {
  mixins: [mixins.base, mixins.input],
  components:{
    XInput
  },
  computed: {
    _clas() {
      return [cssPrefix + 'password', this.clas]
    }
  },
  data() {
    return {
      cssPrefix,
      hType:'password'
    }
  },
  methods:{
    changeHandler(value){
      this.$emit('on-change',value)
    },
    switchHandler(){
      this.hType = this.hType === 'password' ? 'text' : 'password'
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  &password {
    position: relative;
    label{
      position:static;
    }
    &-switch{
      position:absolute;
      right: 0;
      top:0;
      .button;
      width:40px;
      height: 100%;
      .iconfont{
        font-size: 20px;
        color:#666;
      }
    }
  }
}

</style>

