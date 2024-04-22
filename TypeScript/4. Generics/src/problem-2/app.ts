class CompareElements<T> {
    input: T[];
    constructor(input: T[]) {
        this.input = input;
    }

    compare(comparator: T) {
        const occurances: number = this.input.filter(el => el == comparator).length;
        return occurances;
    }
};

let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('b'));

// let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
// console.log(c.compare(1));

