<template>
  <div>
    <ui-button msg="确定" @btnClickEvent="doSth"></ui-button>
  </div>
</template>
<script>
import uiButton from '@/components/uiButton'
export default {
  components: {
    uiButton
  },
  name: 'pageButton',
  data() {
    return {

    }
  },
  methods: {
    doSth() {
      console.log('你点击了组建 click:btnClickEvent')
    }
  }
}

</script>

