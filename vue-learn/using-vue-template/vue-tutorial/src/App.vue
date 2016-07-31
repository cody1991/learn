<template>
    <div class="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a href="#" class="navbar-brand">
                    <i class="glyphicon glyphicon-time">
                        计划表
                    </i>
                </a>
                <ul class="nav navbar-nav">
                    <li>
                        <a v-link="'/home'">首页</a>
                    </li>
                    <li>
                        <a v-link="'/time-entries'">计划列表</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="col-sm-3">
                <sidebar :time="totalTime"></sidebar>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar.vue';
    export default{
        components:{
            'sidebar':Sidebar
        },
        data(){
            return {
                totalTime:0
            }
        },
        events:{
            timeUpdate(timeEntry){
                this.totalTime += parseFloat(timeEntry.totalTime);
            },
            deleteTime(timeEntry){
                this.totalTime -= parseFloat(timeEntry.totalTime);
            }
        }
    }
</script>
