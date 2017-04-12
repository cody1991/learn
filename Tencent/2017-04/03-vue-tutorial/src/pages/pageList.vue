<template>
  <div>
    <ui-list :tipsText="tipsText" msg="弹层" @btnClickEvent="test"></ui-list>
  </div>
</template>
<script>
import uiList from '@/components/uiList'
export default {
  components: {
    uiList
  },
  name: 'pageList',
  data() {
    return {
      tipsText: '列表组建'
    }
  },
  methods: {
    test() {
      console.log('父元素')
    }
  }
}

</script>

