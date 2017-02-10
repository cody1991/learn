<template>
  <div>
    <slot name="header">
      This slot has name `header` and default text
    </slot>
    <slot>
      I am some default text
    </slot>
    <div>{{text}}</div>
    <div>{{count}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        required: true
      }
    }
  }
</script>
