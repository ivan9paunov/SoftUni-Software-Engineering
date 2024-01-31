function listProcessor(inputArr) {
    let words = [];

    for (let command of inputArr) {
        let [action, str] = command.split(' ');

        if (action == 'add') {
            words.push(str);

        } else if (action == 'remove') {
            if (words.includes(str)) {

                while (words.includes(str)) {
                    let idx = words.indexOf(str);
                    words.splice(idx, 1);
                }
            }

        } else if (action == 'print') {
            console.log(words.join(','));
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);