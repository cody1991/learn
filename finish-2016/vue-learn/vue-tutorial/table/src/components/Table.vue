<template>
    <input v-model="query" type="text" placeholder="搜索资料及服务器，区分大小写">
    <select v-model="sclass">
        <option value="0" disabled selected>请选择职业</option>
        <option value="0">全部</option>
        <option v-for="(key,val) in classes" :value="key">{{val.name}}</option>
    </select>
    <hr/>
    <p>有下横线的可以点击排序</p>
    <table class="responsive-table">    
        <thead>
            <tr>
                <th class="canClick" @click="sort = {key:'ranking',val:-sort.val}">排名</th>
                <th class="canClick" @click="sort = {key:'rating',val:-sort.val}">分数</th>
                <th>资料</th>
                <td>服务器</td>  
                <td class="canClick" @click="sort={key:'weeklyRate',val:-sort.val}">本周战绩</td>
                <td class="canClick" @click="sort={key:'seasonRate',val:-sort.val}">赛季战绩</td>          
            </tr>
        </thead>
        <tbody>
            <tr v-for="player of players" :class="player.factionId ? 'horde' : 'alliance'">
                <th>{{player.ranking}}</th>
                <th>{{player.rating}}</th>
                <th>
                    {{player.name}}
                </th>
                <th>
                    {{player.realmName}}
                </th>
                <th>
                    <bar :win="player.weeklyWins" :loss="player.weeklyLosses" ></bar>
                </th>
                <th>
                    <bar :win="player.seasonWins" :loss="player.seasonLosses"></bar>
                </th>
            </tr>
        </tbody>
    </table>
    <div class="pagination">
        <a class="button" @click="changePage(-1)">上一页</a>
        <span>当前第 <input v-model="page" type="text" class="page"> 页 共 {{total}} 页</span>
        <a class="button" @click="changePage(1)">下一页</a>
    </div>
</template>

<script>
    import {classIdToIcon,classes} from '../assets/utils'
    import Bar from './Bar'

    export default{
        components:{
            Bar
        },
        data () {
            return {
                sclass:0,
                limit:20,
                page:1,
                query:'',
                total:0,
                classes:classes,
                sort:{
                    key:'ranking',
                    val:1
                }
            }
        },
        props:{
            rows:{
                type:Array,
                default: () => {
                    return []
                }
            }
        },
        computed:{
            players() {
                let arr = []
                this.rows = this.handleBefore(this.rows)
                arr = this.classFilter(this.rows)
                arr = this.queryFilter(arr)

                this.sortTable(arr)

                arr = this.paginate(arr)
                arr = this.handleAfter(arr)

                return arr
            },
            range(){
                if(this.rows[0]){
                    return [this.rows[this.rows.length-1].rating,this.rows[0].rating]
                }
                return [0,0]
            }
        },
        methods:{
            classFilter(arr){

                let n = 0
                this.class = parseInt(this.sclass)

                if(this.class === 0){
                    return arr
                }
                arr = arr.filter( (item) => {
                    n++
                    if(item.classId === this.class){
                        return item
                    }
                })

                console.info('filter class, ' + n)
                return arr
            },
            queryFilter (arr) {
                let n = 0
                arr = arr.filter((item) => {
                    n++
                    if(this.query === '' || item.name.indexOf(this.query) !== -1 || item.realmName.indexOf(this.query) !== -1){
                        return true
                    }
                })
                console.info('filter query,' + n)
                return arr
            },
            sortTable (arr) {
                let n = 0
                arr.sort((a,b) => {
                    n++
                    if(a[this.sort.key] > b[this.sort.key]){
                        return this.sort.val
                    }else{
                        if(a[this.sort.key] < b[this.sort.key]){
                            return -this.sort.val
                        }
                    }
                })
                console.log('sort, ' + n)
            },
            paginate (arr) {
                console.info('paginate')
                this.total = Math.ceil(arr.length / this.limit)

                let page = parseInt(this.page - 1)

                if(page < 0){
                    page = 0
                }

                arr = arr.slice(this.limit * page,this.limit * (page+1))

                return arr
            },
            handleBefore(arr){
                console.log('before handle')
                if(this.rows[0]){
                    arr.forEach((item) => {
                        if(item.weeklyWins === 0 && item.weeklyLosses === 0) {
                            item.weeklyRate = -1
                        } else {
                            item.weeklyRate = item.weeklyWins / (item.weeklyWins + item.weeklyLosses)
                        }
                        if(item.seasonWins === 0 && item.seasonLosses === 0){
                            item.seasonRate = -1
                        }else{
                            item.seasonRate = item.seasonWins / (item.seasonWins + item.seasonLosses)
                        }

                        item.classIcon = classIdToIcon(item.classId)
                    })
                }

                return arr
            },
            handleAfter(arr){
                let n = 0
                arr.forEach((item) => {
                    if(item.classIcon === undefined){
                        n++
                        item.classIcon = classIdToIcon(item.classId)
                    }
                })
                console.info('handle after, ' + n )
                console.log('************************')
                return arr
            },
            changePage(num){
                if(num===1){
                    if(this.page < this.total){
                        this.page++
                    }else{
                        window.alert('已经是最后一页了')
                    }
                }else{
                    if(this.page > 1){
                        this.page--
                    }else{
                        window.alert('已经是第一页了')
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    .pagination{
        text-align: center;
        .page{
            width: 4em;
            text-align: center;
        }
    }
    th{
        font-weight: normal;
    }
    th:first-child, td:first-child {
        padding-left: 1.5rem;
      }
    th:last-child, td:last-child {
        padding-right: 1.5rem;
      }
    .horde{
        background: rgba(255, 205, 210, .4);
    }
    .alliance {
        background: rgba(179, 229, 252, .4);
    }
    .class{
        display: inline-block;
        width: 1.6em;
        height: 1.6em;
        float: left;
        margin-right: 2px;
        background-size: auto 104px;
    }
    .canClick{
        text-decoration: underline;
        cursor: pointer;
    }
</style>
