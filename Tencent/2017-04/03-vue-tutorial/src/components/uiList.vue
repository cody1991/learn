<template>
  <div>
    <span>{{tipsText}}</span>
    <!-- <ui-button :msg="msg" @btnClickEvent="btnClickEvent"></ui-button> -->
    <component :is="currentView" @btnClickEvent="btnClickEvent" :msg="msg" keep-alive></component>
  </div>
</template>
<script>
import uiButton from '@/components/uiButton'
export default {
  components: {
    uiButton
  },
  props: {
    msg: {
      default: '下载'
    },
    tipsText: {
      default: '默认的文案'
    },
    currentView: {
      default: 'ui-button'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    btnClickEvent() {
      console.log('按钮点击事件')
      this.$emit('btnClickEvent')
    }
  }
}

</script>

