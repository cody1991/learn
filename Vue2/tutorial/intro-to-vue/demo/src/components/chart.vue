<style lang="less">
  .chart {
    text-align: center;
    max-width: 400px;
    margin:30px auto;
    display: table;
    select {
      background-color: #444;
      color: #ccc;
      border: 0;
      width: 200px;
      margin: 0 0 25px;
      outline: 0;
      cursor: pointer;
      height: 35px;
    }
    svg {
      width:400px;
      text {
        fill: grey;
      }
      line {
        stroke: #555;
        stroke-width: 2px;
      }
    }
    .xaxis {
      transform: translate(20px, 370px)
    }
    .yaxis {
      transform: translate(20px, 0px) rotate(90deg)
    }
    .bar-color(40);
    @max: 40;
    @color: 300 / @max;
    .bar-color(@n, @i: 1) when (@i =< @n) {
      .bars:nth-child(@{i}) {
        rect {
          fill: hsl((@i - 10) * (@color * 1.25), (@i - 1) * @color, 40%)
        }
      }
      .bar-color(@n,(@i+1))
    }
  }
</style>
<template>
  <div class="chart">
    <select v-model="selected">
      <option v-for="option in options" :value="option.value">
        {{option.text}}
      </option>
    </select>
    <svg viewBox="0 0 400 400">
      <g class="xaxis">
        <line x1="0" y1="1" x2="350" y2="1"/>
        <g v-for="(select, index) in targetVal">
          <line y1="0" y2="7" v-bind="{'x1': index*10, 'x2': index*10}"/>
          <text v-if="index % 5 === 0" v-bind="{'x': index*10, 'y':20}">{{index}}</text>
        </g>
      </g>
      <g class="yaxis">
        <line x1="0" y1="1" :x2="getMax" y2="1"/> 
        <g v-for="n in getMaxRange">
          <line y1="0" y2="7" v-bind="{'x1': n*10, 'x2': n*10}"/>
          <text v-if="n % 5 === 0" v-bind="{'x':getMax - (n * 10) - 5, 'y': 20}">{{n}}</text>
        </g>
      </g>
      <g v-for="(select, index) in targetVal" class="bars">
        <rect v-bind="{'x': index*10 + 20, 'y': getMax - select * 10}" width="10" :height="select * 10"/>
      </g>
    </svg>
  </div>
</template>
<script>
  import range from 'lodash.range'
  export default {
    computed: {
      getMax () {
        return Math.max.apply(Math, this.selected) * 10
      },
      getMaxRange () {
        let maxi = Math.max.apply(Math, this.selected)
        return range(maxi)
      }
    },
    watch: {
      selected: function (newValue, oldValue) {
        // Create a dummy object that will get updated by GSAP
        let twenedData = {}

        // Update function that is invoked on each tween step
        // we use this to push the data

        let update = function () {
          let obj = Object.values(twenedData)
          obj.pop()
          this.targetVal = obj
        }

        // Create an object to hold the source data to be tweened and the
        // function pointer for update events

        let tweenSourceData = {
          onUpdate: update,
          onUpdateScope: this
        }

        for (let i = 0; i < oldValue.length; i++) {
          let key = i.toString()
          twenedData[key] = oldValue[i]
          tweenSourceData[key] = newValue[i]
        }

        // Tween over the our target dummy object, but only for the specific key

        window.TweenMax.to(twenedData, 1, tweenSourceData)
      }
    },
    data () {
      return {
        selected: [25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15],
        targetVal: [25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15],
        options: [{
          text: 'First Dataset',
          value: [25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15]
        }, {
          text: 'Second Dataset',
          value: [13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15, 25, 37, 15]
        }, {
          text: 'Third Dataset',
          value: [35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15, 25, 37, 15, 13, 25, 30, 11, 17]
        }]
      }
    }
  }
</script>
