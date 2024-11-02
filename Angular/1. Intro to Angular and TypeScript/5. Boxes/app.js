var Box = /** @class */ (function () {
    function Box() {
        this.box = [];
    }
    Box.prototype.add = function (element) {
        this.box.unshift(element);
    };
    Box.prototype.remove = function () {
        this.box.shift();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.box.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
// let box = new Box<String>();
// box.add("Pesho");
// box.add("Gosho");
// console.log(box.count);
// box.remove(); 
// console.log(box.count); 
