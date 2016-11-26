<script>
    export default{
        props:['text','messages'],
        methods:{
            sendData:function(e){
                if(e.keyCode === 13 && this.text.length){
                    this.messages.data.push({
                        text:this.text,
                        time:new Date().getTime(),
                        self:true
                    });
                    this.text = '';
                }
            }
        }
    }
</script>

<template>
    <div class="m-text">
        <textarea placeholder="按 enter 发送" v-model="text" @keyup="sendData"></textarea>
    </div>
</template>

<style lang="less">
    .m-text{
        height: 160px;
        border-top:solid 1px #ddd;
        textarea{
            padding:10px;
            height: 100%;
            width: 100%;
            border:none;
            outline:none;
            font-family: 'Micrsofot Yahei';
            resize:none;
        }
    }   
    
</style>
