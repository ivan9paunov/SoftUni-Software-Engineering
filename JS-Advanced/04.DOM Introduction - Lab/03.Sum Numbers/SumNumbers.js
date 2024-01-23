function calc() {
    const num1Ref = document.getElementById('num1');
    const num1Value = Number(num1Ref.value);

    const num2Ref = document.getElementById('num2');
    const num2Value = Number(num2Ref.value);
    
    const sumValue = num1Value + num2Value;

    const sumRef = document.getElementById('sum');
    sumRef.value = sumValue;
}
