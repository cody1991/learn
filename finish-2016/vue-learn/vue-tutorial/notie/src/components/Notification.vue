<template>
    <div class="notification" v-if="show" :style="setStyle" transition="slide">
        <div class="delete" v-if="!options.autoClose" @click="close()"></div>
        <div class="content">
            {{{options.content}}}
        </div>
    </div>
    <div class="countdown" v-if="show && options.autoClose && options.countdownBar" :style="setTime" :class="barControl"></div>
</template>

<script>
    export default {
        data () {
            return {
                timers:[],
                barControl:''
            }
        },
        props:{
            options:{
                type:Object,
                default: () => {
                    return {}
                }
            },
            show:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            setStyle(){
                return {
                    color:this.options.textColor || '#fff',
                    background:this.options.backgroundColor || '#21e7b6'
                }
            },
            setTime() {
                return {
                    transition:`all ${(this.options.showTime / 1000 ) || 3}s linear`,
                    backgroundColor:this.options.barColor || '#03d6d2'
                }
            }
        },
        methods:{
            close () {
                this.show = false
                this.options = {}
            },
            countdown () {
                if(this.options.autoClose) {
                    if(this.options.countdownBar) {
                        setTimeout( () => {
                            this.barControl = 'count-leave'
                        },10)
                    }

                    const t = setTimeout( () => {
                        this.close()
                    },this.options.showTime || 3000)

                    this.timers.push(t)
                }
            }
        },
        watch:{
            options(){
                this.barControl = '';
                this.timers.forEach((timer) => {
                    window.clearTimeout(timer);
                })
                this.timers = []
                this.countdown()
            }
        }
    }
</script>

<style lang="less">
    .notification{
        width: 100%;
        line-height: 2;
        z-index: 3;
        position: fixed;
        top:0;
        left:0;
    }
    .slide-transition{
        transition:all 0.3s ease;
        transform:translate3d(0,0,0);
    }
    .slide-enter,.slide-leave{
        transform:translate3d(0,-100%,0);
    }
    .delete{
        background-color: rgba(51,51,51,0.2);
        cursor: pointer;
        display: inline-block;
        height: 24px;
        width: 24px;
        float: right;
        position: relative;
        vertical-align: top;
        &:before,&:after{
            background-color: #fff;
            content:'';
            display: block;
            height: 2px;
            left:50%;
            margin-left:-25%;
            margin-top: -1px;
            position: absolute;
            top:50%;
            width: 50%;
        }
        &:before{
            transform:rotate(45deg);
        }
        &:after{
            transform:rotate(-45deg);
        }
        &:hover{
            background-color: rgba(51,51,51,0.5);
        }
    }
    .countdown{
        width: 100%;
        height: 4px;
        background: #000;
        z-index: 3;
        position: fixed;
        top:0;
        left:0;
        transform:translate3d(0,0,0);
    }
    .count-leave{
        transform:translate3d(-100%,0,0);
    }
</style>
