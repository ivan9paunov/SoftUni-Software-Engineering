function maxNumber(input) {
    let index = 0;
    let counter = input[index];
    index++;

    let maxNum = Number.MIN_SAFE_INTEGER;

    while(counter !== "Stop") {
        let current = Number(counter);
        if(maxNum < current) {
            maxNum = current;
        }
        
        counter = (input[index]);
        index++;
    }
    console.log(maxNum);
}

maxNumber(["-2","-1","Stop"]);
