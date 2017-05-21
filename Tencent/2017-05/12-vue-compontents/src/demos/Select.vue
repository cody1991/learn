<template>
  <layout>
    <x-header slot="header">
      <div slot="title">
        XSelect
      </div>
    </x-header>
    <x-body slot="body" >
      <group>
        
      </group>
    </x-body>
  </layout>
</template>
<script>
import {
  XHeader,
  Layout,
  XBody,
  Group
} from '@/components'

import 'normalize.css'
export default {
  components: {
    XHeader,
    Layout,
    XBody,
    Group
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {

  }
}

</script>
<style lang="less">

</style>

