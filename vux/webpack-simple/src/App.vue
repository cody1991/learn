<template>
    <divider>Horizontal flexbox</divider>
    <flexbox style="height:40px">
        <flexbox-item>
            <div class="flex-demo">
                1
            </div>
        </flexbox-item>
        <flexbox-item>
            <div class="flex-demo">
                2
            </div>
        </flexbox-item>
    </flexbox>
    <divider>Vertical flexbox</divider>
    <flexbox orient="vertical" :margin-left="0">
        <flexbox-item>
            <div class="flex-demo" :margin-left="0">
                1
            </div>
        </flexbox-item>
        <flexbox-item>
            <div class="flex-demo" :margin-left="0">
                2
            </div>
        </flexbox-item>
    </flexbox>
    <divider>嵌套布局</divider>
    <flexbox :margin-left="0" style="height:200px;backround-color:#fff" class="vux-1px-tb vux-1px-1 vux-1px-r">
        <flexbox-item class="vux-1px-r" style="height:200px;">
        1
        </flexbox-item>
        <flexbox-item>
            <flexbox orient="vertical" :margin-left="0">
                <flexbox-item class="vux-1px-b">2</flexbox-item>
                <flexbox-item style="height:100px;">
                    <flexbox :margin-left="0">
                        <flexbox-item class="vux-1px-r">3</flexbox-item>
                        <flexbox-item>4</flexbox-item>
                    </flexbox>
                </flexbox-item>
            </flexbox>
        </flexbox-item>
    </flexbox>
    <divider>Scroller</divider>
    <scroller height="100px" lock-x style="border:1px solid red" v-ref:scroller>
        <div><p v-for="i of 10" class="scroller-item">{{i}}</p></div>
    </scroller>
    <divider>Scroller</divider>
    <scroller lock-x scrollbar-y use-pullup use-pulldown height="200px" @pullup:loading="loadMore" @pulldown:loading="refresh" v-if:scroller></scroller>
</template>

<script>
// import Group from 'vux/dist/components/group';
// import Cell from 'vux/dist/components/cell';
// import Divider from 'vux/dist/components/divider';
// import Flexbox from 'vux/dist/components/flexbox';
// import FlexboxItem from 'vux/dist/components/flexbox-item';
import {Divider,Flexbox,FlexboxItem,Scroller} from 'vux'
export default {
  components:{
    Divider,
    Flexbox,
    FlexboxItem,
    Scroller
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
@import '~vux/dist/vux.css';
</style>

<style lang="less">
  .flex-demo{
    text-align: center;
    background-color: #20b907;
    color:#fff;
    margin-bottom: 8px;
    border-radius: 4px;
  }
</style>
