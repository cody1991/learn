<template>
  <div id="app" class="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';
import NotesList from './components/NotesList';
import Editor from './components/Editor';
import store from './vuex/store';
import {initStore} from './vuex/action';
export default{
    components:{
        Toolbar,
        NotesList,
        Editor
    },
    store,
    vuex:{
        actions:{
            initStore
        }
    },
    ready(){
        this.initStore()
    }
}


</script>

<style>
html,#app {
  height: 100%;
}

body{
  margin:0;
  padding:0;
  border:0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
</style>
