function deserializeString(input) {
    let message = [];

    let command = input.shift();

    while (command != 'end') {
        let [char, indexes] = command.split(':');
        let idx = indexes.split('/');

        for (let i of idx) {
            let charBox = [char];
            message[i] = charBox;
        }

        command = input.shift();
    }

    console.log(message.join(''));
}

deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);