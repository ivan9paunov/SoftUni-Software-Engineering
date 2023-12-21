function password(input){
    let index = 0;
    let username = input[index];
    index++;

    let password = input[index];
    index++;

    let inputPassword = input[index];
    index++;

    while(inputPassword !== password){
        inputPassword = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov","1234","Pass","1324","1234"]);
