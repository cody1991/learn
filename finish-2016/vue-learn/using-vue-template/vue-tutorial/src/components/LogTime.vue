<template>
    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-6">
                <label>名字</label>
                <input type="text" class="form-control" v-model="timeEntry.name" placeholder="Name">
            </div>
            <div class="col-sm-6">
                <label>邮箱</label>
                <input type="email" class="form-control" v-model="timeEntry.email" placeholder="Email">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-6">
                <label>日期</label>
                <input type="date" class="form-control" v-model="timeEntry.date" placeholder="Date">
            </div>
            <div class="col-sm-6">
                <label>时间</label>
                <input type="number" class="form-control" v-model="timeEntry.totalTime" placeholder="Hours">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label>头像图片地址</label>
                <input type="url" class="form-control" v-model="timeEntry.image" placeholder="Image" value="https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label>备注</label>
                <input type="text" class="form-control" v-model="timeEntry.comment" placeholder="Comment">
            </div>
        </div>
        <button class="btn btn-primary" @click="save()">保存</button>
        <button v-link="'/time-entries'" class="btn btn-danger">取消</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                timeEntry:{
                }
            }
        },
        methods:{
            save(){
                // let timeEntry = this.timeEntry;
                // this.$dispatch('timeUpdate',timeEntry);
                // this.timeEntry = {
                //     user:{
                        
                //     }
                // };
                this.$http.post('http://localhost:8888/create',{
                    comment:this.timeEntry.comment,
                    totalTime:this.timeEntry.totalTime,
                    date:this.timeEntry.date,
                    name:this.timeEntry.name,
                    email:this.timeEntry.email,
                    image:this.timeEntry.image
                }).then(function(ret){
                    console.log(ret);
                    let timeEntry = this.timeEntry;
                    console.log(timeEntry);
                    this.$dispatch('timeUpdate',timeEntry);
                    this.timeEntry = {
                    }
                })
            }
        }
    }
</script>
