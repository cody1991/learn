function destructuring() {
    let someArray = [1, 2, 3];

    let [first, second, third] = someArray;

    console.log('destructuring : ', first, second, third);

    let someArray2 = [1, [
        [2], 3
    ]];

    var [foo, [
        [bar], baz
    ]] = someArray2;

    console.log('destructuring2 : ', foo, bar, baz);
}
export default destructuring;
