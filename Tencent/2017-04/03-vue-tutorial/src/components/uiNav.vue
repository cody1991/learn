<template>
  <div>
    <a v-for="(item, index) in items" :class="[commonClass, item.active ? activeClass : '']" @click="navClickEvent(items,index)">
      <span>{{item.text}}</span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'pageNav',
  props: ['items'],
  data() {
    return {
      commonClass: 'nav-item',
      activeClass: 'active',
    }
  },
  methods: {
    navClickEvent(items, index) {
      items.forEach(function(el) {
        el.active = false
      })
      items[index].active = true
      this.$emit('navClickEvent', items, index)
    }
  }
}

</script>
<style scoped>
.active {
  color: skyblue;
}

</style>

