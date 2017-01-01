<template>
    <nav class="pagination">
        <a v-link="{name:'tab',params:{tab:currentTab,page:currentPage-1}}" class="pre" v-if="currentPage !== 1">上一页</a>
        <a v-link="{name:'tab',params:{tab:currentTab,page:currentPage+1}}" class="next">下一页</a>    
    </nav>
</template>

<script>
    import {getCurrentPage,getCurrentTab} from '../vuex/getters';

    export default{
        vuex:{
            getters:{
                currentPage:getCurrentPage,
                currentTab:getCurrentTab
            }
        }
    }
</script>

<style lang="less">
    .pagination{
        overflow: hidden;
        padding:10px;
        font-size:10px;
        margin:0 auto;
        a{
            border:1px solid #ddd;
            padding:5px;
            border-radius: 3px;
            &:hover{
                background-color: #f5f5f5;
            }
        }
    }
    .pre{
        float: left;
    }
    .next{
        float: right;
    }
</style>
