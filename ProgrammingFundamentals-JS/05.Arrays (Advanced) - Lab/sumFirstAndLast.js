function sumFirstAndLast(arr) {
    let firstEl = first(arr);
    let lastEl = last(arr);
    let result = firstEl + lastEl;

    console.log(result);

    function first(arr) {
        let firstEl = Number(arr.shift());
        return firstEl;
    }

    function last(arr) {
        let lastEl = Number(arr.pop());
        return lastEl;
    }

}

// sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);