abstract class Melon  {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    public elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get index(): number {
        return this.elementIndex = this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: Water\nSort: ${this.melonSort}"\nElement Index: ${this.index}`;
    }
}

class Firemelon extends Melon {
    public elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get index(): number {
        return this.elementIndex = this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: Fire\nSort: ${this.melonSort}"\nElement Index: ${this.index}`;
    }
}

class Earthmelon extends Melon {
    public elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get index(): number {
        return this.elementIndex = this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: Earth\nSort: ${this.melonSort}"\nElement Index: ${this.index}`;
    }
}

class Airmelon extends Melon {
    public elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get index(): number {
        return this.elementIndex = this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: Air\nSort: ${this.melonSort}"\nElement Index: ${this.index}`;
    }
}

class Melolemonmelon extends Watermelon {
    public elements: string[];

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elements = ['Water', 'Fire', 'Earth', 'Air']
    }

    morph() {
        let currentElement: string = this.elements.shift()!;
        this.elements.push(currentElement);
    }

    toString(): string {
        return `Element: ${this.elements[0]}\nSort: ${this.melonSort}"\nElement Index: ${this.index}`;
    }
}

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// let melolemonmelon = new Melolemonmelon(15.5, "XXL");
// console.log(melolemonmelon.toString());
// melolemonmelon.morph();
// melolemonmelon.morph();
// melolemonmelon.morph();
// console.log(melolemonmelon.toString());


