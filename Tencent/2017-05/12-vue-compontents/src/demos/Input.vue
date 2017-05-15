<template>
  <layout>
    <x-header slot="header">
      <div slot="title">
        XInput, Password
      </div>
    </x-header>
    <x-body slot="body">
      <div class="input-demo demos">
        <div class="fieldset">
          <x-input/>
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
  XButton,
  XInput
} from '@/components'

import 'normalize.css'
export default {
  components: {
    XHeader,
    Layout,
    XBody,
    XButton,
    XInput
  },
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    btnClick(e) {
      console.log(e)
    }
  }
}

</script>
<style lang="less">


</style>

