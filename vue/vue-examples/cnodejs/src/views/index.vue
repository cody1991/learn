<template>
    <div>
        <img src="../assets/images/index.png">
    </div>
</template>

<script>
    require('../assets/scss/iconfont/iconfont.css');
    require('../assets/scss/github-markdown.css');
    export default {
        ready (){
            setTimeout(() => {
                this.$route.router.go({
                    name:'list'
                });
            },2000);
        }
    }
</script>

<style lang="less">
    .index{
        width{
            width:100%;
            background-color:#fff;
            margin-top:40%;
        }
    }
</style>
