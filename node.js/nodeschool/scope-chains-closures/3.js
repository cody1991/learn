function foo() {
    var bar;
    quux = 1;

    function zip() {
        var quux = 2;
        bar = true;
    }

    return zip;
}
