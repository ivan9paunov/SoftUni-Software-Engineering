function addAndRemove(inputArr) {
    let numsArr = [];
    let current = 1;

    for (let command of inputArr) {
        if (command == 'add') {
            numsArr.push(current);
        } else if (command == 'remove') {
            numsArr.pop();    
        }

        current++;
    }

    if (numsArr.length > 0) {
        console.log(numsArr.join(' '));
    } else {
        console.log('Empty');
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);