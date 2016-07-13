<template>
    <div class="list-container">
        <button class="more-btn">更多</button>
    </div>
</template>

<script>
    import {setArticles,setDatePointer} from '../vuex/actions'
    export default{
        vuex: {
            getters: {
                datePointer: state => state.datePointer,
                days: state => state.days
            },
            actions: {
                setArticles,
                setDatePointer
            }
        },
        created(){
            this.datePointerCalc()
        },
        methods:{
            datePointerCalc(plus){
                if(!this.datePointer.value){
                    this.setDatePointer(new Date())
                    // this.fetchList()
                }else{
                    if(plus){
                        let nextDay = new Date(this.datePointer.format)

                        this.setDatePointer(new Date(nextDay - 86400000))
                        // this.fetchList()
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    .more-btn{
        font-size: 1.5rem;
        padding:1rem 0;
        width: 100%;
        border:0;
        border:none;
        color:#fff;
        background-color: #252e39;
        margin:10px 0;
        border-radius:0.5rem;
        outline:none;
        cursor: pointer;
    }
</style>
