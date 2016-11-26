<template>
    <div>
        <!-- `$route.path`是当前路由对象的路径，会被解析为绝对路径当 -->
        <!-- `$route.path !== '/time-entries/log-time'`为`true`是显示，`false`，为不显示。 -->
        <!-- v-link 路由跳转地址 -->
        <button v-if="$route.path !== '/time-entries/log-time'" v-link="'/time-entries/log-time'" class="btn btn-primary">创建</button>

        <div v-if="$route.path === '/time-entries/log-time'">
            <h3>创建</h3>
        </div>

        <hr/>
        
        <!-- 下一级视图 -->
        <router-view></router-view>

        <hr/>

        <div class="time-entries">
            <p v-if="!timeEntries.length"><strong>没有任何任务</strong></p>
            <div class="list-group">
                <a v-for="timeEntry in timeEntries" class="list-group-item">
                    <div class="row">
                        <div class="col-xs-2 user-details">
                            <img :src="timeEntry.image" class="avatar img-circle img-responsive">
                            <p class="text-center">
                                <strong>
                                    {{timeEntry.name}}
                                </strong>
                            </p>
                        </div>
                        <div class="col-xs-3 text-center time-block">
                            <div class="list-group-item-text total-time">
                                {{timeEntry.totalTime}} h
                            </div>
                            <p class="label label-primary text-center">
                                {{timeEntry.date}}
                            </p>
                        </div>
                        <div class="col-xs-6 comment-section">
                            <p>{{timeEntry.comment}}</p>
                        </div>
                        <div class="col-xs-1">
                            <button v-if="$route.path !== '/time-entries/log-time'"  class="btn btn-xs btn-danger delete-button" @click="deleteTimeEntry(timeEntry)">
                                X
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            // let existingEntry = {
            //     user: {
            //         name: '二哲',
            //         email: 'kodo@forchange.cn',
            //         image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
            //     },
            //     comment: '我的一个备注',
            //     totalTime: 1.5,
            //     date: '2016-05-01'
            // }
            return {
                // timeEntries:[existingEntry]
                timeEntries:[]
            }
        },
        methods:{
            deleteTimeEntry(timeEntry){
                let index = this.timeEntries.indexOf(timeEntry);
                let _id = this.timeEntries[index]._id;
                if(window.confirm('确定要删除吗?')){
                    this.$http.delete('http://localhost:8888/delete/'+_id)
                    .then(function(ret){
                        console.log(ret);
                    })
                    .then(function(err){
                        console.log(err);
                    })
                }
                this.timeEntries.splice(index,1);
                // 派发到父组件上，执行父组件events里面的deleteTime方法
                this.$dispatch('deleteTime',timeEntry);
            }
        },
        events:{
            // 这个也会继续往上派发事件
            timeUpdate(timeEntry){
                this.timeEntries.push(timeEntry);
                return true;
            }
        },
        route:{
            data(){
                this.$http.get('http://localhost:8888/time-entries')
                    .then(function(ret){
                        this.timeEntries = ret.data;
                    })
                    .then(function(err){
                        console.log(err);
                    })
            }
        }
    }
</script>

<style lang="less">
    .list-group-item{
        p{
            margin-bottom: 0;
        }
        padding-top:0;
        padding-bottom: 0;
        .avatar{
            height: 40px;
            margin:8px auto 0;
        }
        .user-details{
            background-color: #f5f5f5;
            border-right: 1px solid #ddd;
        }
        .time-block{
            padding:15px;
        }
        .comment-section{
            padding:20px;
        }
        .delete-button{
            margin-top: 5px;
        }
    }
</style>
