(function() {
    // var paras = document.getElementsByTagName('p');
    // for (var i = 0; i < paras.length; i++) {
    //     var para = paras.item(i);
    //     para.style.setProperty('color', 'white', null);
    // }

    // rewrite

    d3.selectAll('p').style('color', 'skyblue');


    d3.selectAll('p').style('color', function() {
        return 'hsl(' + Math.random() * 360 + ',100%,50%)';
    });

    // d3.selectAll('p').style('color', function(d, i) {
    //     return i % 2 ? '#fff' : '#eee';
    // });

    d3.selectAll('p')
        .data([4, 8, 15, 16, 23, 42])
        .style('font-size', function(d) {
            return d + 'px';
        });

    // d3.select('body')
    //     .selectAll('p')
    //     .data([4, 8, 15, 16, 23, 42])
    //     .enter()
    //     .append('p')
    //     .text(function(d) {
    //         return 'I\'m number ' + d + '!';
    //     });

    var p = d3.select('body')
        .selectAll('p')
        .data([4, 8, 15, 16, 23, 42])
        .text(function(d) {
            return d;
        });

    p.enter()
        .append('p')
        .text(function(d) {
            return d;
        });

    p.exit().remove();

    d3.select('body').transition().style('background-color', 'black');

})();