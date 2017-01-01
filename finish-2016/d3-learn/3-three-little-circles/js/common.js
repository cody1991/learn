(function() {
    var svg = d3.select('svg');

    var circle = svg.selectAll('circle')
        .data([32, 57, 112, 293]);

    console.log(circle.exit().remove())

    var circleEnter = circle.enter()
        .append('circle');

    circle.style('fill', 'steelblue');
    circle.attr('r', 30);

    // circle.attr('cx', function() {
    //     return Math.random() * 720;
    // });


    // There’s a second optional argument to each function you can also use: the index of the element within its selection. The index is often useful for positioning elements sequentially. Again by convention, this is often referred to as i. For example:
    circle.attr('r', function(d) {
        return Math.sqrt(d);
    });

    circle.attr('cx', function(d, i) {
        return i * 100 + 30;
    });

    circle.attr('cy', 60);
})();