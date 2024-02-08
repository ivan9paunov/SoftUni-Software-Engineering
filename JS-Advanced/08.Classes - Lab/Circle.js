class Circle {
    _radius;

    constructor(r) {
        this.radius = r;
    }

    get radius() {
        return this._radius;
    }

    set radius(val) {
        this._radius = val;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(val) {
        this._radius = val / 2;
    }
    
    get area() {
        return Math.PI * (this._radius ** 2);
    }
}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);

c.diameter = 1.6;

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);