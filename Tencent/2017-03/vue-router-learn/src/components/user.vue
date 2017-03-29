<template>
  <div>
    User {{$route.params.username}} {{$route.params.post_id}}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  watch: {
    '$route' (to, from) {
      console.log(to, from)
    }
  }
}
</script>
