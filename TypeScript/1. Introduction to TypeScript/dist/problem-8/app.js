"use strict";
function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let cat of arr) {
        const [catName, catAge] = cat.split(' ');
        const myCat = new Cat(catName, catAge);
        myCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
