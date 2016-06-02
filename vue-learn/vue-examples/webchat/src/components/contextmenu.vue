<script>
    export default {
        props:['site','showMenu','message'],
        methods:{
            clearMessage:function(){
                this.showMenu = false;
                this.message.data = [];
            }
        }
    }
</script>

<template>
    <div id="contextMenu" :style="{left:site.x + 'px',top:site.y + 'px'}">
        <ul class="dropdown_menu">
            <li @click="clearMessage">
                <a>清屏</a>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    #contextMenu{
        z-index: 1000;
        position: absolute;
    }
    .dropdown_menu{
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        border:1px solid #d6d6d6;
        box-shadow: rgba(0,0,0,0.1) 2px 3px 10px;
        min-width: 125px;
        li{
            &:hover{
                background-color: #f1f1f1;
            }
        }
        a{
            display: block;
            text-decoration: none;
            color:#000;
            font-size: 14px;
            padding:8px;
            border-bottom: 1ox solid #f1f1f1;
            text-align: left;
        }
    }
</style>
