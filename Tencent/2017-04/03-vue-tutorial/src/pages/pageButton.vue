<template>
  <div>
    <ui-button msg="确定" @btnClickEvent="doSth">
      <span slot="icon">Icon</span>
    </ui-button>
    <ui-button msg="取消" @btnClickEvent="doSth2"></ui-button>
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
    },
    doSth2() {
      console.log('你点击了组建 click:btnClickEvent 2')
    }
  }
}

</script>

