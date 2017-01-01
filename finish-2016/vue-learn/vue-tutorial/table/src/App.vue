<template>
    <div class="container">
        <p>Last modified at : {{msg}}</p>
        <v-table :rows="rows" v-if="!loading"></v-table>
        <p v-show="loading" class='loading'>
            {{loadText}}
        </p>
    </div>
</template>

<script>

import arena from './api/arena'
import vTable from './components/Table'


export default {
    components: {
        vTable
    },
    data () {
        return {
            loading:false,
            loadText:'加载中...',
            msg:'',
            region:'CN',
            laddar:'3v3',
            rows:[]
        }
    },
    methods:{
        getLaddar (region,laddar){
            this.loading = true
            arena.getLaddar(region,laddar,(err,val) => {
                if(!err){
                    this.rows = val.rows
                    this.loading = false
                }else{
                    this.loadText = '加载失败'
                }
            })
        }
    },
    created () {
        arena.getDate((err,val) => {
            if(!err){
                this.msg = val[0].date
            }
        })

        this.getLaddar(this.region,this.laddar)
    }
}
</script>

<style lang="less">
    body {
        font-family: "Helvetica Neue","Helvetica","Arial","Microsoft Yahei";
    }
    .clearfix:before,.clearfix:after{content:" ";display:table}
    .clearfix:after{clear:both}
    .loading{
        font-size: 2em;
    }
</style>
