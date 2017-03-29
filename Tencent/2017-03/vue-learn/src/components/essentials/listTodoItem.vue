<template>
  <li>
    {{title}}
    <button @click="$emit('remove')">删除</button>
  </li>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['title']
}
</script>
