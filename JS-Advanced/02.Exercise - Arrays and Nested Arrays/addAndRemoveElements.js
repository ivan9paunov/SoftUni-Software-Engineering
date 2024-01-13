function addAndRemoveElements(commands) {
    let counter = 1;
    let arr = [];

    for (let command of commands) {
        if (command == 'add') {
            arr.push(counter);
        } else if (command == 'remove') {
            let remover = arr.pop();
        }

        counter++;
    }
    
    if (arr.length > 0) {
        console.log(arr.join('\n'));
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(['add','add', 'remove', 'add','add']);