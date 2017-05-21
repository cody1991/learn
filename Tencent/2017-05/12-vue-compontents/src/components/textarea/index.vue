<template>
  <label :class="_clas" :style="styl">

    <div :class="[cssPrefix + 'textarea-shadow']"></div>
    <textarea
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :name="name" 
      :required="required"
      @focus="focusHandler"
      @blur="blurHandler"
      @keyup="keyupHandler"
      @keydown="keydownHandler" 
      @change="changeHandler"
      @input="inputHandler"
      >{{content}}</textarea>
  </label>
</template>
<script>
import {
  cssPrefix
} from '@/utils/variable'

import mixins from '@/utils/mixins'

export default {
  props: {
    content: {
      type:String
    }
  },
  mixins: [mixins.base, mixins.input],
  computed: {
    _clas() {
      let styles = {}
      styles[cssPrefix + 'textarea-focus'] = this.isFocus
      return [cssPrefix + 'textarea-wrapper', styles]
    }
  },
  mounted(){
    console.log(this.$el)
    this.$textarea = this.$el.querySelector('textarea')
    this.$shadow = this.$el.querySelector('.' + cssPrefix + 'textarea-shadow')
    this.renderAutoHeight(this.$el.querySelector('textarea').value)
  },
  data() {
    return {
      cssPrefix,
      isFocus: false
    }
  },
  methods: {
    inputHandler(e){
      this.renderAutoHeight(e.target.value)
    },
    renderAutoHeight(value){
      this.$shadow.innerHTML = value.replace(/(\r|\n)$/,'<br/>s').replace(/(\r|\n)/g,'<br/>')
      this.$el.style.height = this.$shadow.clientHeight+'px'
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  &textarea-wrapper{
    position: relative;
    display: block;
    height:2.6rem;
    min-height: 2.6rem;
    text-align:left;
    textarea,.@{css-prefix}textarea-shadow{
      padding:0.8rem;
      width:100%;
      text-align: inherit;
      font-style: inherit;
      line-height: inherit;
      font-family: inherit;
      box-sizing: border-box;
      min-height:inherit;
      color:inherit
    }
    textarea{
      height:100%;
      resize: none;
      border:0;
      .disabled;
      outline:none;
      overflow: hidden;
      vertical-align: middle;
    }

    &:before{
      .divider;
      z-index: 1;
    }
    &:after{
      .divider(@primary-color);
      width:0;
      transition:width 0.4s @ease-in-out;
      z-index:2;
    }

  }
  &textarea-focus:after{
    width:100%;
  }
  &textarea-shadow{
    position:absolute;
    left:0;
    top:0;
    min-height:2.6rem;
    // word-break:break-all;
    opacity: 0;
    z-index:-1;
  }
}

</style>

