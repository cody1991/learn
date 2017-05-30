<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <editor :input-content="inputContent" :upload-url="uploadURL" v-model="outputContent"></editor>
    {{outputContent}}
  </div>
</template>
<script>
import Editor from './Editor'
export default {
  name: 'hello',
  components: {
    Editor
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputContent: 'base on wangeditor',
      outputContent: '',
      uploadURL: '/php/wmuploadimg2.php'
    }
  }
}
</script>
