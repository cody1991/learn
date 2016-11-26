<template>
    <div id="toolbar">
        <i class="glyphicon logo">
            <img src="../assets/logo.png" height="30" width="30" alt="">
        </i>
        <i @click="newNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred:activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
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

<style lang="less" scoped>
    #toolbar{
        float: left;
        width: 80px;
        height: 100%;
        background-color: #30414d;
        color:#767676;
        padding:35px 25px 25px 25px;
        .starred{
            color:#f7ae4f;
        }
        i{
            font-size: 30px;
            margin-bottom: 35px;
            cursor: pointer;
            opacity: 0.8;
            transition:opacity 0.5s ease;
            &:hover{
                opacity: 1;
            }
        }
    }
</style>
