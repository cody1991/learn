var subclassing = function() {


    class Shape {
        constructor(color) {
            this._color = color;
        }
        get color() {
            return this._color;
        }
        set color(c) {
            this._color = c;
        }
    }

    class Circle extends Shape {
        constructor(color, radius) {
            super(color);
            this._radius = radius;
            Circle.circlesMade++;
        }

        static draw(circle, canvas) {

        }

        static get circlesMade() {
            return !this._count ? 0 : this._count;
        }

        static set circlesMade(val) {
            this._count = val;
        }

        area() {
            return Math.pow(this.radius, 2) * Math.PI;
        }

        get radius() {
            return this._radius;
        }

        set radius(radius) {
            if (!Number.isInteger(radius)) {
                console.info('圆的半径必须为整数');
                return;
            }
            this._radius = radius;
        }
    }

    class ScalableCircle extends Circle {
        get radius() {
            return 4 * super.radius
        }

        set radius(v) {

        }
    }

    var proto = {
        value: 4,
        method() {
            return 14;
        }
    }

    var obj = Object.create(proto);
    console.log(obj);
    console.log(obj.value);
    console.log(obj.method());

    obj.value = 5;
    console.log(obj.value);
    console.log(proto.value);

    //     现在我们已经了解，通过类创建的对象，它们的原型链之间是如何连接的。回想一下，当我们创建一个类的时候，类的定义中有一个constructor方法，这个方法控制着所有静态方法，实际上我们正是依据这个方法创建了一个新的函数；然后我们又创建一个对象并将它赋给这个函数的prototype属性。为了使新创建的类继承所有的静态属性，我们需要让这个新的函数对象继承超类的函数对象；同样，为了使新创建的类继承所有实例方法，我们需要让新函数的prototype对象继承超类的prototype对象。

    // 看官您若要是感觉这长篇大论看得头疼，不妨来看一段简单的示例，看我们如何通过旧语法的力量将这一切连结起来，然后再进一步美化这段代码的结构。

    // 继续我们之前的示例，假设我们有一个类Shape，并且想要基于这个类生成一个子类：

};

export default subclassing;
