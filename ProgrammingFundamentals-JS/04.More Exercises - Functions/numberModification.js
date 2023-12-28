function numberModification(modifiedNumber) {
    while (avg(modifiedNumber) < 5) {
        modifiedNumber += '9';
    }

    console.log(modifiedNumber);

    
    function summing(number) {
        let stringify = number.toString();
        let sum = 0;

        for (let n = 0; n < stringify.length; n++) {
            sum += Number(stringify[n]);
        }
    
        return sum;
    }

    function avg(num) {
        return summing(num) / num.toString().length;
    }
    
}

numberModification(101);
// numberModification(5853);