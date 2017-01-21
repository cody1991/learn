<template>
  <div>
    Users: {{name}}
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        name: ''
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('/api/users/' + this.$route.params.name)
          .then((res) => {
            this.name = res.data.name
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>
