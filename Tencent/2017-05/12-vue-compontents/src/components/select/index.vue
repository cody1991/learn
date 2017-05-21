<template>
  <div :class="_clas" :style="styl" @click="clickHandler">
    <button type="button" :class="!options ? cssPrefix + 'select-placeholder':''">
      {{option?option.label:placeholder}}
    </button>
    <select v-if="options" @focus="clickHandler" :value="value">
        <option v-for="item in options" :value="item.value">{{item.label}}</option>
      </select>
  </div>
</template>
<script>
import {
  cssPrefix
} from '@/utils/variable'

import mixins from '@/utils/mixins'
import Vue from 'vue'
import {Actionsheet, ActionsheetItem} from '../actionsheet' 
export default {
  mixins: [mixins.base, mixins.input],
  
  props: {
    options: {
      type: Array
    }
  },
  computed: {
    _clas() {
      return [cssPrefix + 'select', this.clas]
    }
  },
  data() {
    return {
      cssPrefix,
      selected: false,
      option: null
    }
  },
  created(){
    this.optionUpdate(this.value)
  },
  destroyed(){

    if(this.popup){
      this.popup.open = false
      setTimeout(()=>{
        this.popup.$destroyed()
        this.popup = null
        console.log('popup 销毁')
      },2000)
    }
  },
  watch:{
    value(val){
      this.optionUpdate(val)
    }
  },
  methods: {
    clickHandler(){
      let select = this
      let node = document.createElement('div')
      document.body.appendChild(node)

      this.popup = new Vue({
        el: node,
        template: '<actionsheet :open="open" :value="value" @on-close="closeHandler" @on-menu="menuHandler"><actionsheet-item v-for="item in options" :value="item.value" :disabled="item.disabled">{{item.label}}</actionsheet-item></actionsheet>',
        components: {
          Actionsheet,
          ActionsheetItem
        },
        data: {
          options: this.options,
          open: false,
          value: this.value
        },
        mounted(){
          this.open = true
        },
        destroyed(){
          document.body.removeChild(this.$el)
        },
        methods:{
          closeHandler(){
            this.open = false
            setTimeout(()=>{
              this.$destroyed()
            },1000)
          },
          menuHandler(val){
            select.$emit('on-change',val)
          }
        }
      })
    },
    optionUpdate(val){
      let option = null 
      this.options.forEach((item)=>{
        if(item.value === val) {
          option = item
        }
      })
      this.option = option
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  &select {
    position: relative;
    height: 2.6rem;
    select {
      display: none;
    }
    button{
      border:0;
      background: transparent;
      font-size: inherit;
      text-align: inherit;
      height: 100%;
      outline: none;
      box-sizing: border-box;
      width:100%;
      padding:0;
      z-index: 1;
    }
    &-placeholder{
      color:#999;
    }
  }
}

</style>

