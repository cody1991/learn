<template>
    <div class="container">
        <nav class="nav">
            <div class="nav-tab" @click="navRoute($event,'index')">
                首页
            </div>
            <div class="nav-tab" @click="navRoute($event,'themes')">
                主题日报
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import store from './vuex/store'

export default {
    store:store,
    methods:{
        navRoute(e,name){
            this.$route.router.go({
                name:name
            })
        }
    }
}
</script>

<style lang="less">
    html{
        font-size: 62.5%;
         font-family: Hiragino Sans GB,Helvetica,Arial,STHeiti,WenQuanYi Micro Hei,sans-serif;
    }
    *{
        padding:0;
        margin:0;
    }
    body{
        background-color: #f5f5f5;
    }
    .container{
        max-width: 80rem;
        margin:0 auto;
        padding-top:7rem;
        .nav{
            position: fixed;
            height: 6rem;
            width:100%;
            background-color: #252e39;
            top:0;
            left:0;
            z-index:2;
            font-size:1.5rem;
            color:#fff;
            .nav-tab{
                display:inline-block;;
                height: 6rem;
                line-height: 6rem;
                text-align: center;
                min-width: 8rem;
                cursor:pointer;
            }
        }
    }
</style>
