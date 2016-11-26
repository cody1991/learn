function a() {
    console.log('A');
    return function() {
        console.log('B');
    }
}

var newFun = a();
newFun();
