function multiplicationTable(input){
    let multiBy = Number(input[0]);
    for(i = 1; i <= 10; i++){
        console.log(`${i} * ${multiBy} = ${i * multiBy}`);
    }
}

multiplicationTable(["5"]);