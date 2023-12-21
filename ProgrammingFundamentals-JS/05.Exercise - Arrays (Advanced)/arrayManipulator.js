function arrayManipulator(arr, commands) {
    for (let el of commands) {
        let tokens = el.split(' ');
        let command = tokens.shift();

        if (command == 'add') {
            let index = Number(tokens.shift());
            let num = Number(tokens.shift());

            arr.splice(index, 0, num);
        } else if (command == 'addMany') {
            let index = Number(tokens.shift());
            let numsToAdd = tokens.slice(0,).map(Number);

            for (let num of numsToAdd) {
                arr.splice(index, 0, num);
                index++;
            }
        } else if (command == 'contains') {
            let num = Number(tokens.shift());
            console.log(arr.indexOf(num));
        } else if (command == 'remove') {
            let index = Number(tokens.shift());
            arr.splice(index, 1);
        } else if (command == 'shift') {
            let positions = Number(tokens.shift());

            for (let i = 1; i <= positions; i++) {
                let num = arr.shift();
                arr.push(num);
            }
        } else if (command == 'sumPairs') {
            let pairedArr = [];

            for (let i = 0; i < arr.length; i += 2) {
                
                if (i + 1 < arr.length) {
                    pairedArr.push(arr[i] + arr[i + 1]);
                } else {
                    pairedArr.push(arr[i]);
                }
            }

            arr = pairedArr;
        } else if (command == 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
            return;
        }
    }
}

// arrayManipulator(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// );

// arrayManipulator(
//     [1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// );

// arrayManipulator(
//     [2, 2, 4, 2, 4],
//     ["add 1 4", "sumPairs", "print"]
// );

arrayManipulator(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);