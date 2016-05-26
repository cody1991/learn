<template>
  <div>
    <button v-if="$route.path !== '/time-entries/log-time'" v-link="'/time-entries/log-time'" class="btn btn-primary">创建</button>
    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>

    <hr/>
    <router-view></router-view>
    <div class="time-entries">
      <p v-if="!timeEntries.length"><strong>还没有任何任务</strong></p>
      <div class="list-group">
        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="timeEntry.user.image" class="avatar img-circle img-responsive">
              <p class="text-center">
                {{timeEntry.user.name}}
              </p>
            </div>
            <div class="col-sm-3 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                <span>{{timeEntry.totalTime}}</span>
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                  {{timeEntry.date}}
              </p>
            </div>
            <div class="col-sm-6 comment-section">
              <p>{{timeEntry.comment}}</p>
            </div>
            <div class="col-sm-1">
              <button class="btn btn-xs btn-danger delete-button" @click="daleteTimeEntry(timeEntry)">X</button>
            </div>

          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      let existingEntry = {
        user: {
          name: 'cody',
          email: '476490767@qq.com',
          image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
        },
        comment: '我的一个备注',
        totalTime: 1.5,
        date: '2016-05-01'
      }
      return {
        timeEntries: [existingEntry]
      }
    },
    methods: {
      daleteTimeEntry (timeEntry) {
        let index = this.timeEntries.indexOf(timeEntry)
        if (window.confirm('确定要删除吗?')) {
          this.timeEntries.splice(index, 1)
          // 分发到父组件上 执行父组件 events 里面的 deleteTime
          this.$dispatch('deleteTime', timeEntry)
        }
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.timeEntries.push(timeEntry)
        // 继续向上派发
        return true
      }
    }
  }
</script>

<style>
  .avatar{
    margin:10px auto;
  }
  .user-details{
    margin:-10px 0;    

  }
  .time-block{
    padding:10px;
  }
  .comment-section{
    padding:20px;
  }
  .list-group-item-text{
    margin-top:10px;
  }
</style>
