function solve() {
    const convertTo = document.getElementById('selectMenuTo');
    const convertBtn = document.querySelector('button');
    const resultRef = document.getElementById('result');
    
    // creating the two options
    convertTo.children[0].value = 'binary'; 
    convertTo.children[0].textContent = 'Binary';
    const hexOption = document.createElement('option');
    hexOption.value = 'hexadecimal';
    hexOption.textContent = 'Hexadecimal';
    convertTo.appendChild(hexOption);
    
    convertBtn.addEventListener('click', convert);

    function convert() {
        const decimalNum = Number(document.getElementById('input').value);

        if (convertTo.value == 'binary') {
            resultRef.value = decimalNum.toString(2);
        }

        if (convertTo.value == 'hexadecimal') {
            resultRef.value = decimalNum.toString(16).toUpperCase();
        }
    }
}