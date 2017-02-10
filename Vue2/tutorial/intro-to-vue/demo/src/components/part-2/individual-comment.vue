<template>
  <li>
    <img :src="commentpost.authorImg">
    <small>{{commentpost.author}}</small>
    {{commentpost.text}}
  </li>
</template>

<script>
  export default {
    props: ['commentpost']
  }
</script>
