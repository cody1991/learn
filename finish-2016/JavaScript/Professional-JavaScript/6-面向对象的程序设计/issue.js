function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}

function SubType() {

}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push('black');

console.log(instance1.colors);

var instance2 = new SubType();
console.log(instance2.colors);
