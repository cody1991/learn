<template>
    <div class="jumbotron">
        <h1>任务追踪</h1>
        <p>
            <strong>
                <a v-link="'/time-entries'">创建一个任务</a>
            </strong>
        </p>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
