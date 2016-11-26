<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>Notes</h2>
            <div class="btn-group btn-group-justified">
                <div class="btn-group">
                    <button type="button" class="btn btn-default" @click="toggleShow('all')" :class="{active:show === 'all'}">
                        All notes
                    </button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-default" @click="toggleShow('favorite')" :class="{active:show === 'favorite'}">
                        Favorites notes
                    </button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="list-group">
                <a v-for="note in filteredNotes" class="list-group-item" :class="{active:activeNote===note}" @click="updateActiveNote(note)">
                    <h4 class="list-group-item-heading">
                        {{note.title.trim().substring(0,30)}}
                    </h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import {updateActiveNote,updateShow} from '../vuex/action';
    import {show,filteredNotes,activeNote} from '../vuex/getter';

    export default{
        vuex:{
            getters:{
                show,
                filteredNotes,
                activeNote
            },
            actions:{
                updateActiveNote,
                updateShow
            }
        },
        methods:{
            toggleShow(show){
                this.updateShow(show);
            }
        }
    }
</script>

<style lang="less" scoped>
    #notes-list{
        float: left;
        width: 300px;
        height: 100%;
        background-color: #f5f5f5;
        font-family: 'Raleway',sans-serif;
        font-weight: 400;
        #list-header{
            padding:5px 25px 25px 25px;
            h2{
                font-weight: 300;
                text-transform: uppercase;
                text-align: center;
                font-size: 22px;
                padding-bottom: 8px;
            }
        }
        .container{
            height: calc(~"100% - 137px");
            max-height: calc(~"100% - 137px");
            overflow: auto;
            width: 100%;
            padding:0;
            .list-group-item{
                cursor: pointer;
                border:0;
                border-radius: 0;
                .list-group-item-heading{
                    font-weight: 300;
                    font-size: 15px;
                }
            }
        }

    }
</style>
