function minNumber(input){
    let index = 0;
    let counter = input[index];
    index++;

    let minNum = Number.MAX_SAFE_INTEGER;
    while(counter !== "Stop") {
        let current = Number(counter);
        if(minNum > current){
            minNum = current;
        }
        counter = input[index];
        index++;
    }
    console.log(minNum);
}

minNumber(["-1","-2","Stop"]);