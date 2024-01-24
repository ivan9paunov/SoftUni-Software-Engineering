function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.getElementById('secondNumber').value;
    secondNumber = Number(secondNumber);

    let result = firstNumber - secondNumber;

    let resultRef = document.getElementById('result');
    resultRef.textContent = result;
}