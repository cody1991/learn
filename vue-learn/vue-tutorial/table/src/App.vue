<template>
    <div class="container">
        <p>Last modified at : {{msg}}</p>
        <v-table :rows="rows"></v-table>
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
            msg:'',
            region:'CN',
            laddar:'3v3',
            rows:[]
        }
    },
    methods:{
        getLaddar (region,laddar){
            arena.getLaddar(region,laddar,(err,val) => {
                if(!err){
                    this.rows = val.rows
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
</style>
