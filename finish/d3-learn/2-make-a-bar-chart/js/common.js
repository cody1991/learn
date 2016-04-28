(function() {
    var data = [4, 8, 15, 16, 23, 50];

    var body = d3.select('body'),
        container = body.select('.container'),
        chart = container.select('.chart');

    body.style('color', 'white');
    body.style('background-color', 'black');

    // The data join is a general pattern that can be used to create, update or destroy elements whenever data changes. It might feel odd, but the benefit of this approach is that you only have to learn and use a single pattern to manipulate the page. So whether you’re building a static chart or a dynamic one with fluid transitions and object constancy, your code remains roughly the same. Think of the initial selection as declaring the elements you want to exist

    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

    // One weakness of the code above is the magic number 10, which is used to scale the data value to the appropriate pixel width. This number depends on the domain of the data (the minimum and maximum value, 0 and 42 respectively), and the desired width of the chart (420), but of course these dependencies are only implicit in the value 10.

    // We can make these dependencies explicit and eliminate the magic number by using a linear scale. D3’s scales specify a mapping from data space (domain) to display space (range):

    chart.selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .style('width', function(d) {
            return x(d) + 'px';
        })
        .text(function(d) {
            return d;
        });
    // container.html('hello,world');
})();