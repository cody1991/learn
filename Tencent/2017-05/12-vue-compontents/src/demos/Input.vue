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
          <x-input :value="account" placeholder="请输入账号" @on-change="accountChangeHandler"/>
          <password placeholder="请输入密码" :value="password" @on-change="passwordChangeHandler"/>
        </div>
        <div style="padding:0 15px;margin-top: 20px;">
          <x-button class="btn-login" type="primary">立即登陆</x-button>
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
  XInput,
  Password
} from '@/components'

import 'normalize.css'
export default {
  components: {
    XHeader,
    Layout,
    XBody,
    XButton,
    XInput,
    Password
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
    },
    accountChangeHandler(value){
      this.account = value
    },
    passwordChangeHandler(value){
      this.password = value
    }
  }
}

</script>
<style lang="less">


</style>

