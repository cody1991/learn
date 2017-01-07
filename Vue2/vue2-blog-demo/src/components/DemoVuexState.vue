<template>
  <div class="demo">
    <h1>demo</h1>
    <p>{{state}}</p>
    <p>{{mapStateFollow}}</p>
    <p>{{mapStateFollowPending}}</p>
    <p>{{demoFollowStatus}}</p>
    <button @click="DEMO__VUEX_FOLLOW">正常模式</button>
    <button @click="demoFollowAjax" :disabled="mapStateFollowPending">ajax模式</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    data () {
      return {

      }
    },
    computed: {
      ...mapState({
        state: ({demo}) => demo,
        mapStateFollow: ({demo}) => demo.demoFollow,
        mapStateFollowPending: ({demo}) => demo.demoFollowPending
      }),
      ...mapGetters(['demoFollowStatus'])
    },
    methods: {
      ...mapMutations(['DEMO__VUEX_FOLLOW']),
      ...mapActions(['demoFollowAjax'])
    }
  }
</script>

<style lang="less"></style>
