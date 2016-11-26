<template>
    <div id="app">
        <div class="mask"></div>
        <main>
            <h1>Yummy Notie!</h1>
            <div class="btns">
                <a v-for="btn of btns" class="btn" @click="notice(btn.options)">
                    {{btn.content}}
                </a>
            </div>
        </main>
        <notification :options.sync="options" :show.sync="showNotification"></notification>
    </div>
</template>

<script>
import Notification from './components/Notification'

export default {
    components: {
        Notification
    },
    data () {
        return {
            showNotification:false,
            options: {},
            btns:[{
                content:'success',
                options:{
                    autoClose:false,
                    content:'Uhh...it tastes yummy!'
                }
            },{
                content:'warning',
                options:{
                    autoClose:false,
                    backgroundColor:'#fbff7c',
                    textColor:'#92253f',
                    content:'You can also customerize the background color and text color.'
                }
            },{
                content:'error',
                options:{
                    autoClose:true,
                    backgroundColor:'#fc5050',
                    content:'Yummy notie can be closed automatically.'
                }
            },{
                content:'info',
                options:{
                    autoClose:true,
                    showTime:5000,
                    backgroundColor:'#769fcd',
                    content:'There is an optional countdown bar for the auto close mode.',
                    countdownBar:true,
                    barColor:'#415f77'
                }
            },{
                content:'flexible',
                options:{
                    backgroundColor:'rgba(6,45,146,.6)',
                    content: '<P><span style="font-family: anana;font-size: 1.5rem">Yummy notie</span> is extremely flexible! You can use HTML to make any kind of notification.</P>',
                    textColor:'#03d6d2'
                }
            }]
        }
    },
    methods: {
        notice(options){
            this.showNotification = true
            this.options = options
        }
    }
}
</script>

<style lang="less">
    @font-face{
        font-family: 'anana';
        font-size: normal;
        font-weight: normal;
        src:url('./assets/anana.eot');
        src:url('./assets/anana.eot?') format('eot');
        src:url('./assets/anana.woff') format('woff');
        src:url('./assets/anana.ttf') format('truetype');
    }
    *{
        padding:0;
        margin: 0;
    }
    a,a:visited{
        color:#fff
    }
    .mask,body,html,#app{
        height: 100%;
        width: 100%;
    }
    #app{
        background: url('./assets/2.jpg') center center no-repeat;
        background-size:cover;
        position: relative;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .mask{
            position: absolute;
            left:0;
            top:0;
            background-color: rgba(30,39,68,0.5);
        }
        main{
            position: relative;
            z-index: 2;
            width: 50%;
            @media screen and(max-width:768px){
                width: 100%;
            }
            h1{
                font-family: 'anana';
                font-size: 5rem;
                opacity: 0.75;
                color:#21e7b6;
                text-align: center;
            }
            .btns{
                margin-top:3rem;
                width: 100%;
                margin:0 auto;
                text-align: center;
                .btn{
                    display:block;
                    border:2px solid #21e7b6;
                    border-radius: 5px;
                    color:#fff;
                    font-size:1.5rem;
                    height: 1.5rem;
                    padding:0.75rem 1.5rem;
                    cursor: pointer;
                    width: 50%;
                    margin:1rem auto;
                }
            }
        }
    }

</style>
