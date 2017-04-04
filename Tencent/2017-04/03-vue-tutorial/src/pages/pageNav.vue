<template>
  <div>
    <ui-nav :items="items" @navClickEvent="navClickEvent"></ui-nav>
  </div>
</template>
<script>
import uiNav from '@/components/uiNav'
export default {
  name: 'pageNav',
  components: {
    uiNav
  },
  data() {
    return {
      items: [{
        text: '首页',
        active: true
      }, {
        text: '列表',
        active: false
      }, {
        text: '关于',
        active: false
      }, {
        text: '招聘',
        active: false
      }]
    }
  },
  methods: {
    navClickEvent(items, index) {
      console.log(index, items[index])
    }
  }
}

</script>

