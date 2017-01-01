(function() {
    // 两个全局命名空间 echarts，zrender

    // 初始化接口，返回ECharts实例，其中dom为图表所在节点，theme为可选的主题，内置主题（'macarons', 'infographic'）直接传入名称，自定义扩展主题可传入主题对象。如： 
    // var myCharts = echarts.init(document.getElementById('main'), 'macarons')；
    var myChart = echarts.init(document.getElementById('main'));


    var option = {
        // 气泡提示框，常用于展现更详细的数据
        tooltip: {
            show: true
        },

        // 图例，表述数据和图形的关联
        legend: {
            data: ['销量']
        },

        // axis 直角坐标系中的一个坐标轴，坐标轴可分为类目型、数值型或时间型
        // 直角坐标系中的横轴，通常并默认为类目型
        xAxis: [{
            type: 'category',
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        }],
        // 直角坐标系中的纵轴，通常并默认为数值型
        yAxis: [{
            type: 'value'
        }],

        // series 数据系列，一个图表可能包含多个系列，每一个系列可能包含多个数据
        series: [{
            'name': '销量',
            'type': 'bar',
            'data': [5, 20, 40, 10, 10, 20]
        }]

    };
    myChart.setOption(option);

    // grid 直角坐标系中除坐标轴外的绘图网格，用于定义直角系整体布局
    // dataRange 值域选择，常用于展现地域数据时选择值域范围
    // dataZoom 数据区域缩放，常用于展现大量数据时选择可视范围
    // roamController 缩放漫游组件，搭配地图使用
    // toolbox 辅助工具箱，辅助功能，如添加标线，框选缩放等
    // timeline 时间轴，常用于展现同一系列数据在时间维度上的多份数据


    // line 折线图， 堆积折线图， 区域图， 堆积区域图。
    // bar 柱形图（ 纵向）， 堆积柱形图， 条形图（ 横向）， 堆积条形图。
    // scatter 散点图， 气泡图。 散点图至少需要横纵两个数据， 更高维度数据加入时可以映射为颜色或大小， 当映射到大小时则为气泡图
    // k K线图， 蜡烛图。 常用于展现股票交易数据。
    // pie 饼图， 圆环图。 饼图支持两种（ 半径、 面积） 南丁格尔玫瑰图模式。
    // radar 雷达图， 填充雷达图。 高维度数据展现的常用图表。
    // chord 和弦图。 常用于展现关系数据， 外层为圆环图， 可体现数据占比关系， 内层为各个扇形间相互连接的弦， 可体现关系数据
    // force 力导布局图。 常用于展现复杂关系网络聚类布局。
    // map 地图。 内置世界地图、 中国及中国34个省市自治区地图数据、 可通过标准GeoJson扩展地图类型。 支持svg扩展类地图应用， 如室内地图、 运动场、 物件构造等。
    // heatmap 热力图。 用于展现密度分布信息， 支持与地图、 百度地图插件联合使用。
    // gauge 仪表盘。 用于展现关键指标数据， 常见于BI类系统。
    // funnel 漏斗图。 用于展现数据经过筛选、 过滤等流程处理后发生的数据变化， 常见于BI类系统。
    // evnetRiver 事件河流图。 常用于展示具有时间属性的多个事件， 以及事件随时间的演化。
    // treemap 矩形式树状结构图， 简称： 矩形树图。 用于展示树形数据结构， 优势是能最大限度展示节点的尺寸特征。
    // venn 韦恩图。 用于展示集合以及它们的交集。
    // tree 树图。 用于展示树形数据结构各节点的层级关系
    // wordCloud 词云。 词云是关键词的视觉化描述， 用于汇总用户生成的标签或一个网站的文字内容

    var myChart2 = echarts.init(document.getElementById('main-2'));

    var option2 = {
        series: [{
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }, {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }, {
            name: '最低气温',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }, {
            name: '最高气温',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [12.0, 12.2, 13.3, 14.5, 16.3, 18.2, 28.3, 33.4, 31.0, 24.5, 18.0, 16.2]
        }],
        xAxis: [{
            type: 'category',
            position: 'bottom',
            boundaryGap: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    type: 'solid',
                    width: 2
                }
            },
            axisTick: {
                show: true,
                length: 10,
                lineStyle: {
                    color: 'red',
                    type: 'solid',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                interval: 'auto',
                rotate: 45,
                margin: 8,
                formatter: '{value}月',
                textStyle: {
                    color: 'blue',
                    fontFamily: 'sans-serif',
                    fontSize: 15,
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dashed',
                    width: 1
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(144,238,144,0.3)', 'rgba(135,200,250,0.3)']
                }
            },
            data: [
                '1', '2', '3', '4', '5', {
                    value: '6',
                    textStyle: {
                        color: 'red',
                        fontSize: 30,
                        fontStyle: 'normal',
                        fontWeight: 'bold'
                    }
                },
                '7', '8', '9', '10', '11', '12'
            ]
        }, {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
        yAxis: [{
            type: 'value',
            position: 'left',
            boundaryGap: [0, 0.1],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'red',
                    type: 'dashed',
                    width: 2
                }
            },
            axisTick: {
                show: true,
                length: 10,
                lineStyle: {
                    color: 'green',
                    length: 10,
                    lineStyle: {
                        color: 'green',
                        type: 'solid',
                        width: 2
                    }
                }
            },
            axisLabel: {
                show: true,
                interval: 'auto',
                rotate: -45,
                margin: 18,
                formatter: '{value} ml',
                textStyle: {
                    color: '#1e90ff',
                    fontFamily: 'verdana',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: 'bold'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dotted',
                    width: 2
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(205,92,92,0.3)', 'rgba(255,215,0,0.3)']
                }
            }
        }, {
            type: 'value',
            splitNumber: 10,
            axisLabel: {
                formatter: function(value) {
                    return value + ' °C'
                }
            },
            splitLine: {
                show: false
            }
        }],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['蒸发量', '降水量', '最低气温', '最高气温']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
    }

    myChart2.setOption(option2);

})();
