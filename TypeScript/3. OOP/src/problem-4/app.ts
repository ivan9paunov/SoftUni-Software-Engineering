class Animal {
    public eat(): void {
        console.log('eating...');
    }
}

class Dog extends Animal {
    public bark(): void {
        console.log('barking...');
    }
}

class Cat extends Animal {
    public meow(): void {
        console.log('meowing...');
    }
}

const myDog = new Dog();
myDog.eat();
myDog.bark();

const myCat = new Cat();
myCat.meow();