<template>
    <div id="note-editor">
        <div v-if="currentNote.id">
            <div class="form-group">
                <input type="text" name="title" class="title form-control" placeholder="请输入标题" @input="updateNote" v-model="currentNote.title"><span class="time">{{time}}</span>
                <textarea name="content" rows="3" placeholder="请输入正文" class="form-control" @input="updateNote" v-model="currentNote.content"></textarea>
            </div>
        </div>
        <div v-else class="container">
            <div class="row">
                <div class="col-sm-12">
                    <p class="no-more">
                        没有可展示的笔记，请在左侧添加新笔记或加星。
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import {editNote} from '../vuex/action';
    import {activeNote} from '../vuex/getter';

    export default{
        vuex:{
            getters:{
                activeNote
            },
            actions:{
                editNote
            }
        },
        computed:{
            currentNote:activeNote,
            time:function(){

                 function formatTime(time) {

                    time = parseInt(time, 10);
                    time = new Date(time);

                    // 2016-03-22 12:35
                    var timeString = '',
                        year = time.getFullYear(),
                        month = time.getMonth() + 1,
                        date = time.getDate(),
                        hours = time.getHours(),
                        minutes = time.getMinutes();

                    timeString = year + '-' + addZero(month) + '-' + addZero(date) + ' ' + addZero(hours) + ':' + addZero(minutes);

                    function addZero(num) {
                        num = num < 10 ? ('0' + num) : num;
                        return num;
                    }

                    return timeString;
                }

                if(this.currentNote.id){
                    return formatTime(this.currentNote.id);
                }else{
                    return '';
                }

            }
        },
        methods:{
            updateNote(){
                this.editNote(this.currentNote);
            }
        }
    }
</script>

<style lang="less" scoped>
    #note-editor{
        height: 100%;
        margin-left:380px;
        .form-group{
            height: 100%;
        }
    }
    .title{
        border:0;
    }

    .time{
        padding:6px 12px;
    }

    textarea{
        height: 100%;
        border:0;
        border-radius: 0;
        padding-top: 15px;
    }
    .no-more{
        padding: 6px 0;
    }
</style>

