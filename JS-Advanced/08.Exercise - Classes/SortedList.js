class List {
    collection = [];
    size = 0;
    
    add(num) {
        if (typeof num == 'number') {
            this.collection.push(num);
            this.sort(this.collection);
            this.size++;
        }
    }

    remove(idx) {
        if (typeof idx == 'number' && (idx >= 0 && idx < this.collection.length)) {
            this.collection.splice(idx, 1);
            this.sort(this.collection);
            this.size--;
        }
    }

    get(idx) {
        if (idx >= 0 && idx < this.collection.length) {
            return this.collection[idx];
        }
    }

    sort(arr) {
        arr.sort((a, b) => a - b);
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1); 

console.log(list.get(1));

console.log(list.size);
