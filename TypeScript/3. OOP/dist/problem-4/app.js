"use strict";
class Animal {
    eat() {
        console.log('eating...');
    }
}
class Dog extends Animal {
    bark() {
        console.log('barking...');
    }
}
class Cat extends Animal {
    meow() {
        console.log('meowing...');
    }
}
const myDog = new Dog();
myDog.eat();
myDog.bark();
const myCat = new Cat();
myCat.meow();
