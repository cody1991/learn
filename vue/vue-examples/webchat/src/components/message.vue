<script>
    var now = new Date();
    var nowYear = now.getFullYear(),
        nowMonth = now.getMonth(),
        nowDate = now.getDate();

    var todayZero = new Date(nowYear,nowMonth-1,nowDate);

    import contextMenu from './contextmenu.vue';

    export default {
        props:['messageList','userList','user','showContext'],
        data:function(){
            return {
                site:{
                    x:0,
                    y:0
                }
            }
        },
        filters:{
            time:function(val){
                var _time = new Date(val),
                    hours = _time.getHours() + ':' + (_time.getMinutes() < 10 ? '0' + _time.getMinutes() : _time.getMinutes()),
                    year = (_time.getFullYear()) + '年' + (_time.getMonth() + 1) + '月' + _time.getDate() + '日';

                if(_time.getTime() < todayZero.getTime()){
                    return year + hours;
                }else{
                    return hours;
                }
            },
            img:function(val){
                var sender = typeof val.self === 'undefined' ? this.sessionUser : this.user;
                return sender && sender.img;
            }
        },
        computed:{
            sessionUser:function(){
                var _this = this;
                var users = this.userList.filter(function(item){
                    return item.id === _this.messageList.userId;
                });

                return users[0];
            }
        },
        methods:{
            showContextMenuFn:function(e){
                this.site.x = e.offsetX + 20;
                this.site.y = e.pageY - 50;
                this.showContext = true;
            }
        },
        components:{
            contextMenu
        }
    }
</script>

<template>
    <div class="m-message" @contextmenu.prevent="showContextMenuFn">
        <ul>
            <li v-for="message in messageList.data">
                <p class="time"><span>{{message.time | time}}</span></p>
                <div class="main" :class="{self:message.self}">
                    <img :src="message | img" class="avatar" width="30" height="30">
                    <div class="text" v-html="message.text"></div>
                </div>
            </li>
        </ul>
    </div>
    <context-menu v-show="showContext" :site="site" :message.sync="messageList" :show-menu.sync="showContext"></context-menu>
</template>

<style scoped lang="less">
    .m-message{
        padding:10px 15px;
        overflow-y: scroll;
        position: relative;
        li{
            margin-bottom: 15px;
        }
        .time{
            margin:7px 0 ;
            text-align: center;
            > span{
                display: inline-block;
                padding:0 18px;
                font-size:12px;
                color:#fff;
                border-radius: 2px;
                background-color: #dcdcdc;
            }
        }
        .avatar{
            float: left;
            margin:0 10px 0 0;
            border-radius: 3px;
        }
        .text{
            display: inline-block;
            position: relative;
            padding:0 10px;
            max-width: ~'calc(100% - 40px)';
            min-height: 30px;
            line-height: 2.5;
            font-size: 12px;
            text-align: left;
            word-break:break-all;
            background-color: #fafafa;
            border-radius: 4px;
            &:before{
                content: '';
                position: absolute;
                top:9px;
                right: 100%;
                border:6px solid transparent;
                border-right-color:#fafafa;
            }
        }
        .self{
            text-align: right;
            .avatar{
                float: right;
                margin:0  0 0 10px;
            }
            .text{
                background-color: #b2e281;
                &:before{
                    right: inherit;
                    left:100%;border-right-color:transparent;
                    border-left-color: #b2e281;
                }
            }
        }
    }
</style>
