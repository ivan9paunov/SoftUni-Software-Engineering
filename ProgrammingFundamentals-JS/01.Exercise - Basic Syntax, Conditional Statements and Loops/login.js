function login(input) {
    let index = 0
    let username = input[index];
    index++;
    let password = "";

    for (let symbol = username.length -1; symbol >= 0; symbol--) {
        password += username[symbol];
    }

    let guess = input[index];
    let wrongAttempts = 0;

    while (guess != password) {
        wrongAttempts++;
        
        if (wrongAttempts == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        
        console.log("Incorrect password. Try again.");
        
        index++;
        guess = input[index];
    }

    console.log(`User ${username} logged in.`);
}

// login(["Acer","login","go","let me in","recA"]);
// login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);