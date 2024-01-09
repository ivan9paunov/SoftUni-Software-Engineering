function aggregateElements(inputArr) {
    let result = inputArr.reduce((sum, val) => sum + val, 0);
    console.log(result);

    let inverse = 0;
    for(let i = 0 ; i < inputArr.length; i++){
        inverse += 1 / inputArr[i]; 
      }
    console.log(inverse);
    
    let concat = inputArr.join('');
    console.log(concat);
}

aggregateElements([1, 2, 3]);