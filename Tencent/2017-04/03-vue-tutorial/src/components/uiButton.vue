<template>
  <button class="ui-btn" @click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>
<script>
export default {
  props: {
    msg: {
      default: '下载'
    }
  },
  data() {
    return {}
  },
  methods: {
    btnClickEvent() {
      console.log(this.msg)
      this.$emit('btnClickEvent')
    }
  }
}

</script>

