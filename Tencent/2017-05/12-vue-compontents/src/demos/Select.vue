<template>
  <layout>
    <x-header slot="header">
      <div slot="title">
        XSelect
      </div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell>
          <div slot="title">下拉框</div>
          <x-select
            slot="value"
            :value="value"
            :options="options"
            placeholder="请选择"
            @on-change="changeHandler"
          ></x-select>
        </cell>
      </group>
    </x-body>
  </layout>
</template>
<script>
import {
  XHeader,
  Layout,
  XBody,
  Group,
  Cell,
  XSelect
} from '@/components'

import 'normalize.css'
export default {
  components: {
    XHeader,
    Layout,
    XBody,
    Group,
    Cell,
    XSelect
  },
  data() {
    return {
      value:'',
      options: [
        {
          value: '1',
          label: '篮球'
        },
        {
          value: '2',
          label: '羽毛球'
        },
        {
          value: '3',
          label: '乒乓球'
        },
        {
          value: '4',
          label: '高尔夫'
        }]
    }
  },
  methods: {
    changeHandler(value){
      this.value = value
    }
  }
}
</script>
<style lang="less">
</style>
