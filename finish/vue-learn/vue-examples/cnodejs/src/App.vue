<template>
    <div id="app">
        <c-header></c-header>
        <div class="main">
            <router-view></router-view>
        </div>
        <c-footer></c-footer>
        <c-back></c-back>
    </div>
</template>

<script>
import cHeader from './components/header'
import cFooter from './components/footer'
import cBack from './components/backTop'
import store from './vuex/store'

export default {
    components: {
        cHeader,
        cFooter,
        cBack
    },
    store
}
</script>

<style lang="less">
    html,#app{
        height:100%;
    }
    ul,li{
        list-style: none;
    }
    body{
        height: 100%;
        font: 16px 'Microsoft YaHei', '微软雅黑', 'STHeiti', 'WenQuanYi Micro Hei', 'SimSun', 'sans-serif';
        background-color: #E1E1E1;
    }
    a{
        color:#ccc;
        text-decoration: none;
    }
    img{
        vertical-align: middle;
        max-width: 100%;
    }
    .main{
        overflow: hidden;
        padding:0 5%;
        min-height: 100%;
    }
    *{
        margin: 0;
        padding:0;
    }
</style>
