function createSortedList() {
    let numbers = [];

    let operations = {
        add(el) {
            if (typeof(el) != 'number' || isNaN(el)) {
                return;
            }

            numbers.push(Number(el));
            numbers.sort(this._sort);
            this.size = numbers.length;
        },
        remove(idx) {
            if (idx < 0 || idx >= this.size) {
                return;
            }

            numbers.splice(idx, 1);
            numbers.sort(this._sort);
            this.size = numbers.length;
        },
        get(idx) {
            if (idx < 0 || idx >= this.size) {
                return;
            }

            return numbers[idx];
        },
        _sort(a, b) { return a-b; },
        size: 0,
    };

    return operations;
}

let list = createSortedList();

list.add(5);
list.add(6);
list.add(7); 

console.log(list.get(1)); 

list.remove(1); 

console.log(list.get(1));

console.log(list.size);