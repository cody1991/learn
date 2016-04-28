(function() {
    var width = 960,
        height = 500;

    var margin = {
        top: 20,
        right: 30,
        bottom: 30,
        left: 40
    };

    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], 0.1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left')
        .ticks(10, '%');

    var chart = d3.select('.chart')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    console.log(chart);



    d3.tsv('data.tsv', type, function(err, data) {

        console.table(data);

        x.domain(data.map(function(d) {
            return d.letter;
        }));

        y.domain([0, d3.max(data, function(d) {
            return d.frequency;
        })]);


        chart.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        chart.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .style('text-anchor', 'end')
            .text('Frequency');

        chart.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function(d) {
                return x(d.letter);
            })
            .attr('y', function(d) {
                return y(d.frequency);
            })
            .attr('height', function(d) {
                return height - y(d.frequency);
            })
            .attr('width', x.rangeBand());

        // var barWidth = width / data.length;

        // var bar = chart.selectAll('g')
        //     .data(data)
        //     .enter()
        //     .append('g')
        //     .attr('transform', function(d, i) {
        //         // console.log(d.letter);
        //         // console.log(x(d.letter));

        //         return 'translate(' + x(d.letter) + ',0)';
        //     });

        // bar.append('rect')
        //     .attr('y', function(d) {
        //         // console.log(d);
        //         return y(d.frequency);
        //     })
        //     .attr('height', function(d) {
        //         // console.log(d.frequency);
        //         // console.log(y(d.frequency));
        //         return height - y(d.frequency);
        //     })
        //     .attr('width', x.rangeBand());

        // bar.append('text')
        //     .attr('x', x.rangeBand() / 2)
        //     .attr('y', function(d) {
        //         return y(d.frequency) + 3;
        //     })
        //     .attr('dy', '0.75em')
        //     .text(function(d) {
        //         return d.frequency
        //     });
    });

    function type(d) {
        d.frequency = +d.frequency;
        return d;
    }
})();