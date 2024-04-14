"use strict";
class Box {
    constructor(input) {
        this.input = input;
    }
    toString() {
        return `${this.input} is of type ${typeof this.input}`;
    }
}
;
let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
