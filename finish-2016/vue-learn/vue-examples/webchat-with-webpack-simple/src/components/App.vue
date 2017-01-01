<template>
      <div id="chat" @click="APPCLICK()">
          <div class="sidebar">
              <card :user="user" :search.sync="search"></card>
              <user-list :user-list="userList" :search="search" :user-index.sync="userIndex"></user-list>
          </div>
          <div class="main">
              <message :message-list="messages" :user-list="userList" :user="user" :show-context.sync="showContextMenu"></message>
              <text :text="text" :messages.sync="messages"></text> 
          </div>
      </div>
</template>
<script>

import storage from '../storage.js';
import userList from './list.vue';
import card from './card.vue';
import message from './message.vue';
import text from './text.vue';

export default {
        data:function(){
            var _data = storage.fetch()

            console.log(_data);

            return {
                _data:_data, // storage
                user:_data.user,
                search:'', 
                userIndex:_data.userIndex || 0,
                userList:_data.userList,
                messageList:_data.sessionList,
                text:'',
                showContextMenu:false
            }
        },
        components:{
            userList,
            card,
            message,
            text
        },
        computed:{
            messages:function(){
                return this.messageList[this.userIndex];
            }
        },
        watch:{
            '[messageList,userIndex]':{
                deep:true,
                handler:function(){
                    storage.save({
                        userIndex:this.userIndex,
                        user:this.user,
                        userList:this.userList,
                        sessionList:this.messageList
                    });
                }
            }
        },
        filters:{

        },
        methods:{
            APPCLICK:function(){
                this.showContextMenu = false;
            }
        }
    }
</script>

<style lang="less">
    #chat{
        overflow:hidden;
        border-radius: 3px;
        .sidebar,.main{
            height: 100%;
        }
        .sidebar{
            float: left;
            width: 200px;
            color:#f4f4f4;
            background-color: #2e3238;
        }
        .main{
            position: relative;
            overflow: hidden;
            background-color: #eee;
        }
        .m-text{
            position: absolute;
            width: 100%;
            bottom:0;
            left:0;
        }
        .m-message{
            height: ~'calc(100% - 160px)';
        }
    }
</style>
