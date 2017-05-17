<template>
  <layout>
    <x-header slot="header">
      <div slot="title">
        XTextarea
      </div>
    </x-header>
    <x-body slot="body" >
      <div class="input-demo demos">
        <div class="fieldset">
          <x-textarea @on-change="changeHandler" placeholder="请输入消息内容" :content="content"></x-textarea>
        </div>  
      </div>
    </x-body>
  </layout>
</template>
<script>
import {
  XHeader,
  Layout,
  XBody,
  XTextarea
} from '@/components'

import 'normalize.css'
export default {
  components: {
    XHeader,
    Layout,
    XBody,
    XTextarea
  },
  data() {
    return {
      content: 'Cody的Vue组建'
    }
  },
  methods: {
    changeHandler(value){
      this.content = value
    }
  }
}

</script>
<style lang="less">

</style>

