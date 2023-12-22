function tseamAccount(inputArr) {
    let games = inputArr.shift().split(' ');
    
    let commandLine = inputArr.shift();

    while (commandLine != 'Play!') {
        let tokens = commandLine.split(' ');
        let [action, game] = tokens;

        if (action == 'Install') {
            if (!games.includes(game)) {
                games.push(game);
            }

        } else if (action == 'Uninstall') {
            if (games.includes(game)) {
                let idx = games.indexOf(game);
                games.splice(idx, 1);
            }

        } else if (action == 'Update') {
            if (games.includes(game)) {
                let idx = games.indexOf(game);
                games.splice(idx, 1);
                games.push(game);
            }

        } else if (action == 'Expansion') {
            let tokens = game.split('-');
            let [name, expansion] = tokens;
            let expToAdd = `${name}:${expansion}`

            if (games.includes(name)) {
                let idx = games.indexOf(name);
                games.splice(idx + 1, 0, expToAdd);
            }
        }

        commandLine = inputArr.shift();
    }

    console.log(games.join(' '));
}

tseamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);