function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operation = input[2];
    let result = 0;
    let evenOrOdd = "";
    if(operation == "+") {
        result = num1 + num2;
    } else if(operation == "-") {
        result = num1 - num2;
    } else if(operation == "*") {
        result = num1 * num2;
    } else if(operation == "/") {
        result = num1 / num2;
    } else if(operation == "%") {
        result = num1 % num2;
    }

    if(result % 2 == 0) {
        evenOrOdd = "even";
    } else {
        evenOrOdd = "odd";
    }

    if(operation == "+" || operation == "-" || operation == "*"){
        console.log(`${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`);
    } else if(operation == "/"){
        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
    } else if(operation == "%"){
        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            console.log(`${num1} % ${num2} = ${result}`);
        }
    }   
}

operationsBetweenNumbers(["10","1","-"])