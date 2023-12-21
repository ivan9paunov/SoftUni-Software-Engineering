function аrrayManipulations(arr) {
    let arrOfNums = arr
        .shift()
        .split(' ')
        .map(Number);

    for (let el of arr) {
        let tokens = el.split(' ');
        let command = tokens.shift();

        if (command == 'Add') {
            let num = Number(tokens.shift());
            arrOfNums.push(num);
        } else if (command == 'Remove') {
            let removeNum = Number(tokens.shift());
            let filteredArray = arrOfNums.filter((num) => num != removeNum);
            arrOfNums = filteredArray;
        } else if (command == 'RemoveAt') {
            let index = Number(tokens.shift());
            arrOfNums.splice(index, 1);
        } else if (command == 'Insert') {
            let num = Number(tokens.shift());
            let index = Number(tokens.shift());
            arrOfNums.splice(index, 0, num);
        }
    }

    console.log(arrOfNums.join(' '));
}

// аrrayManipulations(
//     [
//     '4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',   
//     'Insert 8 3'
// ]);

аrrayManipulations(
    [
    '6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]);