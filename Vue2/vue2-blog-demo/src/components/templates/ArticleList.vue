<template>
  <div class="article-list" :class="{'article-list-active':articleList}">
    <!-- <p>{{articleList}}</p> -->
    <ul>
      <li v-for="(item,index) in list"
        :style="calcDelay(index)"
        @click="articleListSwitch">
        <router-link :to="{name:item.name}">
          <p>
            {{item.title}}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data () {
      return {
        list: [{
          name: 'vue2-1',
          title: 'vue2-1练习'
        }, {
          name: 'vue2-2',
          title: 'vue2-2练习'
        }, {
          name: 'vue2-3',
          title: 'vue2-3练习'
        }]
      }
    },
    computed: {
      ...mapGetters(['articleList'])
    },
    methods: {
      calcDelay (index) {
        return {
          'transitionDelay': `.${index + 2}s`
        }
      },
      ...mapActions(['articleListSwitch'])
    }
  }
</script>

<style lang="less"></style>
