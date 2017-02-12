<template>
  <div>
    <button @click="toggleShow">
      <span v-if="isShowing">
        Hide Child
      </span>
      <span v-else>
        Show Child
      </span>
    </button>
    <div v-if="isShowing"> 
      <child></child>
    </div>

    <div v-show="isShowing"> 
      <child></child>
    </div>
  </div>
</template>

<script>
  import child from './part-3/child.vue'
  export default {
    data () {
      return {
        isShowing: false
      }
    },
    methods: {
      toggleShow () {
        this.isShowing = !this.isShowing
      }
    },
    components: {
      child
    }
  }
</script>
