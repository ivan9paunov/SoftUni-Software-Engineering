class Box<T> {
    private box: T[] = [];

    public add(element: T) {
        this.box.unshift(element);
    }

    public remove() {
        this.box.shift();
    }

    get count(): number {
        return this.box.length;
    }
}

let box = new Box<Number>();
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