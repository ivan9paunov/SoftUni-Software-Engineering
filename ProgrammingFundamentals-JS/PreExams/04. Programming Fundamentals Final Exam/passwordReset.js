function passwordReset(inputArr) {
    let password = inputArr.shift();

    let commandLine = inputArr.shift();

    while (commandLine != 'Done') {
        let tokens = commandLine.split(' ');
        let action = tokens.shift();
        
        if (action == 'TakeOdd') {
            let changedPassword = [];

            for (let char = 0; char < password.length; char++) {
                if (char % 2 != 0) {
                    changedPassword.push(password[char]);
                }
            }
            
            password = changedPassword.join('');
            console.log(password);

        } else if (action == 'Cut') {
            let startIdx = Number(tokens.shift());
            let length = Number(tokens.shift());
            let endIdx = startIdx + length;

            password = password.slice(0, startIdx) + password.slice(endIdx);
            console.log(password);
            
        } else if (action == 'Substitute') {
            let [substr, substitute] = tokens;

            if (password.includes(substr)) {
                while (password.includes(substr)) {
                    password = password.replace(substr, substitute);
                }
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }

        commandLine = inputArr.shift();
    }

    console.log(`Your password is: ${password}`);
}

passwordReset(
    [
        "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
        "TakeOdd",
        "Cut 15 3",
        "Substitute :: -",
        "Substitute | ^",
        "Done"
    ]
);
