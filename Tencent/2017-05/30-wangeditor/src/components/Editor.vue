<template>
  <div id="editor" v-html="inputContent" @input="outputContent">
  </div>
</template>
<script>
import WangEditor from 'wangeditor'
export default {
  props: ['inputContent', 'uploadUrl'],
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.createEditor()
  },
  methods: {
    createEditor() {
      let self = this
      let editor = new WangEditor('editor')

      editor.config.menus = ['undo', 'redo', 'bold', 'italic', 'underline', 'fontfamily', 'fontsize', 'eraser', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', 'link', 'unlink', 'img', 'video', 'fullscreen']

      // editor.config.menus = ['source', '|', , '', '', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', , , '|', 'link', 'unlink', 'table', 'img', 'video', '|', '', '', 'fullscreen']
      editor.config.uploadImgUrl = this.uploadUrl
      editor.config.uploadImgFileName = 'file'

      editor.onchange = function() {
        self.formatContent(this.$txt.html())
      }

      editor.create()
    },
    formatContent(content) {
      this.content = content
      this.outputContent()
    },
    outputContent() {
      this.$emit('input', this.content)
    }
  }
}
</script>
<style>
#editor {
  height: 500px;
}

.wangEditor-container {
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid #CCC;
}
</style>
