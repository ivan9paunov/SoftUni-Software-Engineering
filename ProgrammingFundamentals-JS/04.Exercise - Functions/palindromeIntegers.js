function palindromeIntegers(arr) {
    for (let num of arr) {
        let isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);
    }
    
    function checkIfPalindrome(num) {
        let numAsStr = String(num);
        let numBackward = '';

        for (let i = numAsStr.length - 1; i >= 0; i--) {
            numBackward += numAsStr[i];
        }

        let isPalindrome = numAsStr == numBackward;
        return isPalindrome;
    }
}

// palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);