<template>
    <div>
        <span class="win-bar" v-if="!hasGame || win / total > 0" :style="{width: 100 * win / total + '%'}">
        </span>
        <span v-if="loss / total > 0" :style="{width:100*loss/total + '%'}" class="loss-bar">
            {{win === 0 ? '0%' : ''}}
        </span>
        <p :class="hasGame?'' : 'no-game'" >{{hasGame ? (100 * win / total).toFixed(1) + '%' : '无场次'}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            win:{
                type:Number,
                default:0
            },
            loss:{
                type:Number,
                default:0
            }
        },
        computed:{
            total () {
                return this.win + this.loss
            },
            hasGame () {
                if(this.win === 0 && this.loss === 0){
                    return false;
                }
                return true
            }
        }
    }
</script>

<style scoped lang="less">
    div{
        border:1px solid #e1e1e1;
        border-radius: 5px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;

        span{
            display: inline-block;
            float: left;
            height: 1.6em;
        }
        p{
            margin:0;
            position: absolute;
            width: 100%;
            top:0;
            height: 1.6em;
            text-align: center;
            color:#fff;
        }
        .win-bar{
            width: 100%;
            text-align: center;
            background-color: #129e0f;
        }
        .no-game{
            background-color: #fff;
            color:#000;
        }
        .loss-bar{
            background-color: #c80000;
            text-align: center;
            color:#fff;
        }
    }
</style>
