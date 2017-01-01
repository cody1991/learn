(function() {

    var width = 420,
        barHeight = 20;

    var x = d3.scale.linear()
        .range([0, width]);
    // .domain([0, d3.max(data)])

    var chart = d3.select('.chart')
        .attr('width', width)
        // .attr('height', barHeight * data.length);

    d3.tsv('data.tsv', type, function(err, data) {
        console.table(data);

        x.domain([0, d3.max(data, function(d) {
            return d.value;
        })]);
        console.log(x(2))

        console.log(data);

        chart.attr('height', barHeight * data.length);

        var bar = chart.selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr('transform', function(d, i) {

                return 'translate(0,' + i * barHeight + ')';
            });

        bar.append('rect')
            .attr('width', function(d) {
                return x(d.value);
            })
            .attr('height', barHeight - 1);

        bar.append('text')
            .attr('x', function(d) {
                return x(d.value) - 3;
            })
            .attr('y', barHeight / 2)
            .attr('dy', '0.35em')
            .text(function(d) {
                return d.value;
            });
    });

    function type(d) {
        d.value = +d.value;
        return d;
    }

})();