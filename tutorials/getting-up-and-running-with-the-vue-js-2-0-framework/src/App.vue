<template>
  <div id="app">
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="Enter a github username here">
      <button type="submit">Go</button>
    </form>
    <div>
      <p v-if="currentUsername==null">
        Enter a username above to see their Github data
      </p>
      <p v-else>
        Below are the results for {{currentUsername}}
      </p>
    </div>
    <github-user-data :data="githubData[currentUsername]"></github-user-data>
  </div>
</template>

<script>
import bus from './bus'
import GithubUserData from './GithubUserData.vue'
export default {
  name: 'app',
  components:{
    GithubUserData
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      currentUsername:null,
      githubData:{}
    }
  },
  created(){
    bus.$on('new-username',this.onUsernameChange)
  },
  destroyed(){
    bus.$off('new-username',this.onUsernameChange)
  },
  methods:{
    fetchGithubData(name){
      if(this.githubData.hasOwnProperty(name)){
        return
      }

      const url = `https://api.github.com/users/${name}`

      fetch(url)
        .then(r=>r.json())
        .then(data=>{
          console.log(data)
          this.$set(this.githubData,name,data)
        })
    },
    onUsernameChange(name){
      this.currentUsername = name
      this.fetchGithubData(name)
    },
    onSubmit(event){
      if(this.username && this.username !== ''){
        bus.$emit('new-username',this.username)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
