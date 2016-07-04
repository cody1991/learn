<template>
    <div id="toolbar">
        <i class="glyphicon logo">
            <img src="../assets/logo.png" height="30" width="30" alt="">
        </i>
        <i class="glyphicon glyphicon-plus"></i>
        <i class="glyphicon glyphicon-star" :class="{starred:activeNote.favorite}"></i>
        <i class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script>
    import{newNote,deleteNote,toggleFavorite} from '../vuex/action';
    import {activeNote} from '../vuex/getter';

    export default{
        vuex:{
            getters:{
                activeNote
            },
            actions:{
                newNote,
                deleteNote,
                toggleFavorite
            }
        }
    }
</script>
