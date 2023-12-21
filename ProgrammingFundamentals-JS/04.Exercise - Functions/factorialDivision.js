function factorialDivision(num1, num2) {
    let firstNum = factorial(num1);
    let secondNum = factorial(num2);
    let division = firstNum / secondNum;

    console.log(division.toFixed(2));

    function factorial(num) {
        let numFactorial = 1;
        for (let count = num; count >= 1; count--) {
            numFactorial *= count;
        }

        return numFactorial;
    }
}

// factorialDivision(5, 2);
factorialDivision(6, 2);