(function() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        tooltip: {
            show: true
        },
        series: [{
            name: '等级积分',
            type: 'line',
            data: [0, 240, 960, 2160, 3840, 6000, 8640, 11760, 15360, 19440],
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.5)',
                        width: 5
                    },
                }
            },
            symbolSize: 0
        }],
        grid: {
            borderWidth: 0,
            x: 0,
            y: 0,
            x2: 0,
            y2: 0
        },
        xAxis: [{
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 15,
                    fontWeight: 'bold'
                },
                margin: -20
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['#ff5454', '#ff6161']
                }
            },
            boundaryGap: [0, 0]
        }],
        yAxis: [{
            type: 'value',
            show: false,
            boundaryGap: [0.1, 0],
        }]
    }

    myChart.setOption(option);
})();
