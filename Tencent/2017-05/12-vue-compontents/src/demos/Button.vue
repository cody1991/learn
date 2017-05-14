<template>
  <layout>
    <x-header slot="header">
      <div slot="title">
        XButton
      </div>
    </x-header>
    <x-body class="demos" slot="body" style="background:#fff">
        <div class="button-demo">
          <x-button @on-click="btnClick">default</x-button>
          <x-button type="primary" @on-click="btnClick">primary</x-button>
          <x-button type="dashed" @on-click="btnClick">dashed</x-button>
          <x-button type="warning" @on-click="btnClick">warning</x-button>
          <x-button type="primary" disabled @on-click="btnClick">Disabled</x-button>
      </div>
    </x-body>
  </layout>
</template>
<script>
import {
  XHeader,
  Layout,
  XBody,
  XButton
} from '@/components'

import 'normalize.css'
export default {
  components: {
    XHeader,
    Layout,
    XBody,
    XButton
  },
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    btnClick(e){
      console.log(e)
    }
  }
}

</script>
<style lang="less">
.button-demo {
  padding: 0 1rem;
  button {
    margin-top: 20px;
  }
}

</style>

