(function() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        series: [{
            name: '等级积分',
            type: 'line',
            data: [0, 240, 960, 2160, 3840, 6000, 8640, 11760, 15360, 19440]
        }],
        xAxis: [{
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        }],
        yAxis: [{
            type: 'value'
        }]
    }

    myChart.setOption(option);
})();
